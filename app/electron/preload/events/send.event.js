const constants = require('../../constants');

module.exports = function createSendEvent(ipcRenderer) {
    return (channel, data) => {
        if (constants.sendAllowListArray.includes(channel)) {
          ipcRenderer.send(channel, data);
        }
    };
};