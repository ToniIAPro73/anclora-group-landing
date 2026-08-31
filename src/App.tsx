import { LocaleProvider } from './i18n/LocaleContext'
import { NavigationProvider } from './context/Navigation'
import { useNavigation } from './context/useNavigation'
import { CookieConsentProvider } from './components/CookieConsentProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionNav from './components/SectionNav'
import Hero from './sections/Hero'
import Evidence from './sections/Evidence'
import Ecosystem from './sections/Ecosystem'
import Products from './sections/Products'
import Method from './sections/Method'
import Founder from './sections/Founder'
import Principles from './sections/Principles'
import Contact from './sections/Contact'
import LegalPage, { type LegalPageKey } from './pages/LegalPage'

const LEGAL_ROUTES: Record<string, LegalPageKey> = {
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/legal': 'legal',
  '/cookies': 'cookiesPage',
}

function AppRoutes() {
  const { path } = useNavigation()
  const legalKey = LEGAL_ROUTES[path]

  return (
    <>
      <Header />
      <main>
        {legalKey ? (
          <LegalPage pageKey={legalKey} />
        ) : (
          <>
            <Hero />
            <Evidence />
            <Ecosystem />
            <Products />
            <Method />
            <Founder />
            <Principles />
            <Contact />
          </>
        )}
      </main>
      {!legalKey && <SectionNav />}
      <Footer />
    </>
  )
}

function App() {
  return (
    <LocaleProvider>
      <NavigationProvider>
        <CookieConsentProvider>
          <AppRoutes />
        </CookieConsentProvider>
      </NavigationProvider>
    </LocaleProvider>
  )
}

export default App
