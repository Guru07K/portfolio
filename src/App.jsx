import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { scrollToSection } from './utils/scrollToSection'

// Page order = navbar order.
const SECTIONS = [
  { tab: 'Home', Component: Home },
  { tab: 'Experience', Component: Experience },
  { tab: 'Project', Component: Projects },
  { tab: 'Education', Component: Education },
  { tab: 'Skill', Component: Skills },
  { tab: 'About', Component: About },
  { tab: 'Contact', Component: Contact },
]

const TABS = SECTIONS.map(({ tab }) => tab)

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [theme, setTheme] = useState(getInitialTheme)
  const sectionRefs = useRef({})

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const lastTab = SECTIONS[SECTIONS.length - 1].tab

    // The active tab is the section that crosses a line 40% down the viewport.
    // Position-based, so it also works for tall sections such as the pinned
    // Projects showcase, where intersection thresholds are rarely crossed.
    const handleScroll = () => {
      const probe = window.innerHeight * 0.4
      let current = SECTIONS[0].tab
      for (const { tab } of SECTIONS) {
        const el = sectionRefs.current[tab]
        if (el && el.getBoundingClientRect().top <= probe) current = tab
      }
      const lastEl = sectionRefs.current[lastTab]
      if (lastEl && window.scrollY + window.innerHeight * 0.5 >= lastEl.offsetTop) current = lastTab
      setActiveTab(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  const handleNavigate = (tab) => {
    setActiveTab(tab)
    scrollToSection(sectionRefs.current[tab])
  }

  return (
    <>
      <Header
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="flex-1 w-full mx-auto box-border">
        {SECTIONS.map(({ tab, Component }) => (
          <div
            key={tab}
            id={tab.toLowerCase()}
            data-tab={tab}
            className="scroll-mt-[var(--header-height)]"
            ref={(el) => {
              sectionRefs.current[tab] = el
            }}
          >
            <Component onNavigate={handleNavigate} theme={theme} />
          </div>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
