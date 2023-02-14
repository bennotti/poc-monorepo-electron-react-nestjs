const {
  app,
  BrowserWindow,
  dialog,
  ipcMain, Tray, Menu
} = require('electron');
const path = require('path');
const os = require('os');
const Store = require('electron-store');
const { setupElectron } = require('./setup.js');


console.log(__dirname);
console.log(path.join(__dirname, 'preload.js'));

const store = new Store();

const isDevelopment = process.env.NODE_ENV !== 'production';
var iconpath = path.join(__dirname, 'public/icons/Web/icons8-fund-accounting-office-32.png');

function createWindow() {
  const settings = store.get('settings') ?? {
    execPath: app.getAppPath(),
    desktopPath: app.getPath('desktop'),
    computerName: os.hostname(),
  };

  const mainWin = new BrowserWindow({
    title: process.env.VITE_APP_TITLE ?? 'Poc Electron Remix',
    resizable: false,
    width: 1024,
    show: false,
    height: 700,
    minimizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: iconpath
  });
  if (!isDevelopment) {
    mainWin.removeMenu();
  }
  mainWin.loadURL(`file://${__dirname}/dist/index.html`);
  mainWin.once('ready-to-show', () => {
    mainWin.webContents.send('ready-to-show', settings);
    mainWin.show();
  });

  var appIcon = new Tray(iconpath);

  const dependencias = {
    settings,
    mainWin,
    ipcMain,
    dialog,
    store
  };

  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Abrir Poc Electron Remix', click: function () {
        mainWin.show();
      }
    },
    {
      label: 'Encerrar Poc Electron Remix', click: function () {
        try{
          if (dependencias && dependencias.db && dependencias.sqlite) {
            dependencias.sqlite.close(dependencias.db);
          }
        }catch(e){
          console.log(e);
        }
        app.isQuiting = true;
        app.quit();
        mainWin.destroy();
      }
    }
  ]);

  appIcon.setContextMenu(contextMenu);

  dependencias.update = (key, value) => {
    dependencias[key] = value;
  };

  dependencias.get = (key) => {
    return dependencias[key];
  };

  mainWin.on('close', function (e) {
    e.preventDefault();
    if(!app.isQuiting){
      e.preventDefault();
        mainWin.hide();
    }

    return false;
  });
  // mainWin.on('close', async e => {
  //   e.preventDefault();

  //   confirmClose(mainWin);
  // });
  mainWin.on('minimize',function(event){
    event.preventDefault();
    mainWin.hide();
  });
  mainWin.on('show', function () {
    // appIcon.setHighlightMode('always');
  });
}

const error = function(error) {
  // debugger;
  console.error(error);
  var msg = {
    /*type : "error",
    title : "Uncaught Exception",
    buttons:["ok", "close"],*/
    width : 400
  };

  switch (typeof error) {
    case "object":
        msg.title = "Uncaught Exception: " + error.code;
        msg.message = error.message;
        break;
    case "string":
        msg.message = error;
        break;
  }
  msg.detail = "Please check the console log for more details.";

  // ipc.send('electron-toaster-message', msg);
}

process.on('uncaughtException', error);

setupElectron(BrowserWindow, app, createWindow);