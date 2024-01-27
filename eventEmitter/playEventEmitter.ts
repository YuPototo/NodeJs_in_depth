// import EventEmitter from 'events'
import EventEmitter from './MyEventEmitter'

const eventEmitter = new EventEmitter()

// --- on ---
eventEmitter.on('goal', () => {
    console.log('GOAL!')
})

eventEmitter.on('goal', () => {
    console.log('Nice Goal!')
})

eventEmitter.emit('goal')
eventEmitter.emit('goal')

// --- removeListener ---
const giveYellowCard = () => {
    console.log('Yellow Card!')
}

eventEmitter.on('yellowCard', giveYellowCard)
eventEmitter.emit('yellowCard')
eventEmitter.removeListener('yellowCard', giveYellowCard)
eventEmitter.emit('yellowCard') // nothing happens

// --- once ---
eventEmitter.once('redCard', () => {
    console.log('Red Card!')
})

eventEmitter.emit('redCard')
eventEmitter.emit('redCard') // nothing happens
