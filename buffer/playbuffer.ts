import { Buffer } from 'node:buffer'

const buf1 = Buffer.alloc(10)

console.log(buf1)

const buf2 = Buffer.alloc(10, 1)
console.log(buf2)

const buf3 = Buffer.from('Hello World')
console.log(buf3)
console.log(buf3.toString())
