export interface MethodStep {
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
}

export interface EvidenceMetric {
  value: string
  label: string
  detail: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    ecosystem: string
    products: string
    method: string
    founder: string
    contact: string
    contactCta: string
  }
  sectionNav: {
    up: string
    down: string
  }
  hero: {
    eyebrow: string
    title: string
    tagline: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    microcopy: string
    instrumentCaption: string
  }
  ecosystem: {
    title: string
    text: string
    lines: Record<string, { name: string; description: string }>
  }
  evidence: {
    title: string
    metrics: EvidenceMetric[]
  }
  products: {
    title: string
    ctaView: string
    items: Record<string, { description: string; status: string }>
  }
  infrastructure: {
    text: string
  }
  method: {
    title: string
    intro: string
    metadata: string
    steps: MethodStep[]
  }
  founder: {
    title: string
    body: string
    portraitAlt: string
  }
  principles: {
    title: string
    items: Principle[]
  }
  contact: {
    title: string
    body: string
    email: string
    cta: string
    subject: string
  }
  footer: {
    claim: string
    copyright: string
    legalLinks: {
      privacy: string
      terms: string
      legal: string
      cookies: string
    }
  }
  cookies: {
    bannerText: string
    understood: string
    moreInfo: string
    modalTitle: string
    modalIntro: string
    closeLabel: string
    necessaryTitle: string
    necessaryDescription: string
    necessaryAlwaysOn: string
  }
  legal: {
    pendingNotice: string
    backHome: string
    privacy: { title: string; body: string }
    terms: { title: string; body: string }
    legal: { title: string; body: string }
    cookiesPage: { title: string; body: string }
  }
}
