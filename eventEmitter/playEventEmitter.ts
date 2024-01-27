// import EventEmitter from 'events'
import EventEmitter from './MyEventEmitter'

const eventEmitter = new EventEmitter()

// --- on ---
// eventEmitter.on('goal', () => {
//     console.log('GOAL!')
// })

// eventEmitter.on('goal', () => {
//     console.log('Nice Goal!')
// })

// eventEmitter.emit('goal')
// eventEmitter.emit('goal')

// --- once ---
eventEmitter.once('yellowCard', () => {
    console.log('Yellow Card!')
})

eventEmitter.emit('yellowCard')
eventEmitter.emit('yellowCard')
