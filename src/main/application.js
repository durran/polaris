const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/**
 * The activate event.
 */
const ACTIVATE = 'activate';

/**
 * The closed event.
 */
const CLOSED = 'closed';

/**
 * The darwin event.
 */
const DARWIN = 'darwin';

/**
 * The entry point for the application.
 */
const ENTRY_POINT = `file://${__dirname}/../renderer/index.html`;

/**
 * The ready event.
 */
const READY = 'ready';

/**
 * The window all closed event.
 */
const WINDOW_ALL_CLOSED = 'window-all-closed';

/**
 * The main polaris application.
 */
class Application {

  /**
   * Activate the main application window.
   */
  activateWindow() {
    if (this.mainWindow === null) {
      this.openWindow();
    }
  }

  /**
   * Open the main application window.
   */
  openWindow() {
    this.mainWindow = new BrowserWindow({});
    this.mainWindow.loadURL(ENTRY_POINT);
    this.mainWindow.on(CLOSED, this.removeWindow.bind(this));
  }

  /**
   * Quit the application.
   */
  quit() {
    if (process.platform !== DARWIN) {
      app.quit();
    }
  }

  /**
   * Remove the main appication window.
   */
  removeWindow() {
    this.mainWindow = null;
  }

  /**
   * Start the application.
   */
  start() {
    app.on(READY, this.openWindow.bind(this));
    app.on(WINDOW_ALL_CLOSED, this.quit.bind(this));
    app.on(ACTIVATE, this.activateWindow.bind(this));
  }
}

module.exports = Application;
