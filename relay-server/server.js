import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Enable CORS for frontend flexibility
app.use(cors());

// Middleware to parse raw binary body (JPEG coming from ESP32)
app.use(express.raw({ type: 'image/jpeg', limit: '2mb' }));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Gu Gu Gu Relay Server is Running! 🐦');
});

// The endpoint where ESP32-CAM POSTs new frames
app.post('/upload', (req, res) => {
  if (!req.body || req.body.length === 0) {
    return res.status(400).send('No image data received');
  }

  // Broadcast the JPEG data to all connected WebSocket clients
  let clientCount = 0;
  wss.clients.forEach((client) => {
    if (client.readyState === 1 /* WebSocket.OPEN */) {
      client.send(req.body);
      clientCount++;
    }
  });

  // We respond quickly with a simple success to keep the ESP32 fast
  res.status(200).send(`Received and broadcast to ${clientCount} viewers`);
});

// Function to broadcast viewer count
function broadcastViewerCount() {
  const countMessage = JSON.stringify({ type: 'viewer_count', count: wss.clients.size });
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(countMessage);
    }
  });
}

// WebSocket connection logging
wss.on('connection', (ws) => {
  console.log(`[WS] New viewer connected. Total: ${wss.clients.size}`);
  broadcastViewerCount();
  
  ws.on('close', () => {
    console.log(`[WS] Viewer disconnected. Total: ${wss.clients.size}`);
    broadcastViewerCount();
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 Relay Server started on port ${PORT}`);
  console.log(`   HTTP Endpoint : http://localhost:${PORT}/upload`);
  console.log(`   WebSocket URL : ws://localhost:${PORT}`);
  console.log(`========================================`);
});
