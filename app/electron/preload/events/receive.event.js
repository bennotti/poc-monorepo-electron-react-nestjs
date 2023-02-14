const constants = require('../../constants');

module.exports = function createReceiveEvent(ipcRenderer) {
    return (channel, func) => {
        if (constants.receiveAllowListArray.includes(channel)) {
          // Deliberately strip event as it includes `sender`
          ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    };
};