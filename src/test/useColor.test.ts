import { describe, expect, test } from '@jest/globals'
import { color, useColor } from '../hooks/useColor'

describe('useColor Hooks', () => {
    test('I want to get Slate 100', () => {
        const { Slate } = useColor()
        expect(Slate[100]).toBe(color.Slate[100])
    })
    test('I want to get Rose 800', () => {
        const { Rose } = useColor()
        expect(Rose[800]).toBe('#9f1239')
    })
})
