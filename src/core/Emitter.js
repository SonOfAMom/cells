export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // (dispatch)
  // Notify listeners
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  // (on, listen)
  // Add new subscriber (listener)
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] ?? [];
    this.listeners[event].push(fn);

    // remove subscriber
    return () => {
      this.listeners[event] = this.listeners[event].filter((listener) => {
        return listener !== fn;
      });
    };
  }
}

// Tests
// const emitter = new Emitter();
// const unsubscribe = emitter.subscribe(
//     'hello-said',
//     (name) => console.log(`${name} said Hello.`)
// );
// setTimeout(() => emitter.emit('hello-said', 'John'), 3000);
// emitter.emit('non-existent-event');
// emitter.emit('hello-said', 'Max');
// unsubscribe();
// emitter.emit('hello-said', 'Mark');
