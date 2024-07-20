const EventEmitter = {
  events: {},
  dispatch(event: string, data: JSON) {
    if (!this.events[event]) return
    this.events[event].forEach((callback) => callback(data))
  },
  subscribe(event: string, callback: ({}: Object) => void) {
    if (!this.events[event]) this.events[event] = []
    this.events[event].push(callback)
  },
  unsubscribe(event: string) {
    if (!this.events[event]) return
    delete this.events[event]
  },
}

export { EventEmitter }
