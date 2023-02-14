const mqtt = require('mqtt');
module.exports = function createPreloadMqttBridge() {
    return mqtt;
}