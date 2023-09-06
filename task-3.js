const EventEmitter = require('events');

class EventLogger extends EventEmitter {
  constructor() {
    super();
    this.events = [];
  }

  logEvent(title, description) {
    const timestamp = new Date();

    const event = {
      title,
      description,
      timestamp,
    };

    this.events.push(event);
    this.emit('eventLogged', event);
  }

  displayEvents() {
    console.log('| event index | event title | event timestamp |');
    this.events.forEach((event, index) => {
      console.log(`| ${index + 1}. | ${event.title} | ${event.timestamp}|`);
    });
  }
}


const eventLogger = new EventLogger();

eventLogger.on('eventLogged', (event) => {
  console.log(`Event logged: ${event.title} - ${event.timestamp}`);
});


eventLogger.logEvent('Event 1', 'Practice DSA');
eventLogger.logEvent('Event 2', 'Study PHY 503');
eventLogger.logEvent('Event 3', 'Study music theory');


eventLogger.displayEvents();
