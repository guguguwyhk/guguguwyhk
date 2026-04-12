/**
 * Google Apps Script Backend for Gu Gu Gu Voting System
 * 
 * INSTRUCTIONS FOR IDEEA TEAM (USER):
 * 1. Open Google Sheets.
 * 2. Click "Extensions" -> "Apps Script".
 * 3. Delete any code there, and paste all the code from this file.
 * 4. Hit "Save" (the floppy disk icon).
 * 5. Click "Deploy" in the top right corner -> "New deployment".
 * 6. Select type: "Web app".
 * 7. Set "Execute as" to "Me (your email)".
 * 8. Set "Who has access" to "Anyone" (THIS IS CRITICAL for web voting!).
 * 9. Click Deploy, Authorize access if prompted.
 * 10. Copy the "Web app URL" and paste it into \`home.js\` inside \`scriptUrl\` variable!
 */

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const action = e.parameter.action;
    
    // --- READ ACTION: Get results ---
    if (action === 'get') {
      const data = sheet.getDataRange().getValues();
      const counts = {};
      let lastVote = null;
      
      // Column index: A=0 (timestamp), B=1 (bird), C=2 (user)
      if (data.length > 1) {
        const lastRow = data[data.length - 1];
        lastVote = {
          id: data.length, // Simple unique ID based on row count
          bird: lastRow[1],
          user: lastRow[2] || "Guest"
        };
      }

      for (let i = 1; i < data.length; i++) {
        const bird = data[i][1];
        if (bird) counts[bird] = (counts[bird] || 0) + 1;
      }
      
      return ContentService.createTextOutput(JSON.stringify({
        "status": "success",
        "results": counts,
        "lastVote": lastVote
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // --- WRITE ACTION: Record a vote ---
    const bird = e.parameter.bird;
    const user = e.parameter.user || "Guest";
    const timestamp = new Date();
    
    if (bird) {
      sheet.appendRow([timestamp, bird, user]);
      return ContentService.createTextOutput(JSON.stringify({
        "status": "success",
        "message": "Vote recorded for " + bird
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": "No bird/action provided"}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
