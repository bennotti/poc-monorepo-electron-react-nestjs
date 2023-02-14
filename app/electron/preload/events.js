const createSendEvent = require('./events/send.event.js');
const createReceiveEvent = require('./events/receive.event.js');
const createHandleEvent = require('./events/handle.event.js');

module.exports = function createPreloadEventsBridge(ipcRenderer) {
    return {
        handle: createHandleEvent(ipcRenderer),
        send: createSendEvent(ipcRenderer),
        receive: createReceiveEvent(ipcRenderer),
      };
}