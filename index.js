const EventEmiter = require('events');
const WebSocket = require('ws');

class Client extends EventEmiter {
  constructor() {
    super();
    if (!Client.instance) {
      this.init();
      Client.instance = this;
    }
    return Client.instance;
  }

  init() {
    const ws = new WebSocket('wss://ws.kupujemprodajem.com/wsfeed?get=combined');
    ws.on('open', () => this.emit('connected'));
    ws.on('message', (data) => {
      try {
        const { payload } = JSON.parse(data);
        payload.forEach((ad) => {
          this.emit('data', ad);
        });
      } catch (err) {
        this.emit('error', err);
      }
    });
    ws.on('close', () => this.emit('disconnected'));
  }
}

module.exports = Client;
