// LocalStorage wrapper
export const store = {
  getUserName() {
    return localStorage.getItem('gugugu_username') || null;
  },
  setUserName(name) {
    if (name) {
      localStorage.setItem('gugugu_username', name);
    } else {
      localStorage.removeItem('gugugu_username');
    }
  },
  getTheme() {
    return localStorage.getItem('gugugu_theme') || 'light';
  },
  setTheme(theme) {
    localStorage.setItem('gugugu_theme', theme);
    document.body.className = `theme-${theme}`;
  },
  getLanguage() {
    return localStorage.getItem('gugugu_lang') || 'zh';
  },
  setLanguage(lang) {
    localStorage.setItem('gugugu_lang', lang);
  }
};
