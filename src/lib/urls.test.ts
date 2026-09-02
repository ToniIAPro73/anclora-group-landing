import { afterEach, describe, expect, it, vi } from 'vitest'
import { getTalentUrl } from './urls'

describe('getTalentUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('falls back to the documented default when the env var is missing', () => {
    vi.stubEnv('VITE_ANCLORA_TALENT_URL', '')
    expect(getTalentUrl()).toBe('https://talent.anclora.com')
  })

  it('falls back to the default when the value is not a valid URL', () => {
    vi.stubEnv('VITE_ANCLORA_TALENT_URL', 'not-a-valid-url')
    expect(getTalentUrl()).toBe('https://talent.anclora.com')
  })

  it('falls back to the default when the value uses an unsafe scheme', () => {
    vi.stubEnv('VITE_ANCLORA_TALENT_URL', 'javascript:alert(1)')
    expect(getTalentUrl()).toBe('https://talent.anclora.com')
  })

  it('respects a valid http(s) override', () => {
    vi.stubEnv('VITE_ANCLORA_TALENT_URL', 'https://custom-talent.example.com/')
    expect(getTalentUrl()).toBe('https://custom-talent.example.com/')
  })

  it('trims surrounding whitespace before validating', () => {
    vi.stubEnv('VITE_ANCLORA_TALENT_URL', '  https://custom-talent.example.com/  ')
    expect(getTalentUrl()).toBe('https://custom-talent.example.com/')
  })
})
