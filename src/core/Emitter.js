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
