/**
 * Centralized external product-URL resolution. Vite inlines `import.meta.env.VITE_*`
 * at build time — never `process.env` in this repo (see AGENTS.md / build config).
 * A missing or malformed value never breaks the app: it silently falls back to the
 * documented default, same convention as anclora-group's `getEnvUrl`.
 */
function isValidHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

function resolveEnvUrl(raw: string | undefined, fallback: string): string {
  const trimmed = raw?.trim()
  if (trimmed && isValidHttpUrl(trimmed)) return trimmed
  return fallback
}

/** Anclora Talent — editorial platform, currently paused (see data/products.ts). */
export function getTalentUrl(): string {
  return resolveEnvUrl(import.meta.env.VITE_ANCLORA_TALENT_URL, 'https://talent.anclora.com')
}
