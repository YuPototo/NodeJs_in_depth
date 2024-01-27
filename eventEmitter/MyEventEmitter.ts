// Implement a simple event emitter

type Listeners = { [key: string]: Function[] }

interface MyEventEmitterInterface {
    listeners: Listeners
    on: (event: string, callback: Function) => void
    emit: (event: string, ...args: any[]) => void
    once: (event: string, callback: Function) => void
    removeListener: (event: string, callback: Function) => void
}

export default class MyEventEmitter implements MyEventEmitterInterface {
    listeners: Listeners = {}

    on(event: string, callback: Function) {
        if (this.listeners[event]) {
            this.listeners[event].push(callback)
        } else {
            this.listeners[event] = [callback]
        }
    }

    emit(event: string, ...args: any[]) {
        if (this.listeners[event]) {
            this.listeners[event].forEach((callback) => {
                callback(...args)
            })
        }
    }

    removeListener(event: string, callback: Function) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(
                (cb) => cb !== callback
            )
        }
    }

    once(event: string, callback: Function) {
        const newCallback = (...args: any[]) => {
            callback(...args)
            this.removeListener(event, newCallback)
        }
        this.on(event, newCallback)
    }
}
