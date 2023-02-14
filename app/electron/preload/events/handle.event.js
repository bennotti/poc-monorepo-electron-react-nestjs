const constants = require('../../constants');

module.exports = function createHandleEvent(ipcRenderer) {
    return async (channel, func) => {
      if (constants.handleAllowListArray.includes(channel)) {
        const result = await ipcRenderer.invoke(channel, data);
        return result;
      }
      return undefined;
    };
};
