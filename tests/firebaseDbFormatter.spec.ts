import { wellFormatedInput1, wellFormatedOutput1, wellFormatedInput2, wellFormatedOutput2 } from './helpers/helpers'
import firebaseDbFormatter from '../src/index'

describe('Firebase Realtime Database Nested Formatter', () => {
    describe('When you pass a valid well formated simple JSON', () => {
        it('Should format it correctly', () => {
            expect(firebaseDbFormatter(wellFormatedInput1)).toStrictEqual(wellFormatedOutput1)
        })
    })

    describe('When you pass a valid well formated array JSON', () => {
        it('Should format it correctly', () => {
            expect(firebaseDbFormatter(wellFormatedInput2)).toStrictEqual(wellFormatedOutput2)
        })
    })
})
