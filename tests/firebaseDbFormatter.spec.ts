import { wellFormatedInput1, wellFormatedOutput1 } from './helpers/helpers'
import firebaseDbFormatter from '../src/index'

describe('Firebase Realtime Database Nested Formatter', () => {
    describe('When you pass a valid well formated JSON', () => {
        it('Should format it correctly', () => {
            expect(firebaseDbFormatter(wellFormatedInput1)).toStrictEqual(wellFormatedOutput1)
        })
    })
})
