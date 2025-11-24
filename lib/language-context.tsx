"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "km"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "header.contact": "Contact",

    // Hero
    "hero.founded": "Founded in 2019",
    "hero.title1": "Let's Empower Your",
    "hero.title2": "Digital Future",
    "hero.subtitle": "Leading IT Solutions Provider in Cambodia",
    "hero.description":
      "Providing comprehensive IT solutions for businesses of all sizes with cutting-edge technology and expert support",
    "hero.cta": "Get Started Today",
    "hero.stat1": "Years Experience",
    "hero.stat2": "Happy Clients",
    "hero.stat3": "Support",

    // About
    "about.title": "About Us",
    "about.why": "Why Choose Us",
    "about.description":
      "Vlaser Solution Cambodia Co., Ltd has been serving businesses nationwide since 2019. We combine innovation with reliability to deliver IT solutions that transform your digital landscape.",
    "about.point1": "Innovation and reliability at our core",
    "about.point2": "Comprehensive IT solutions for all sizes",
    "about.point3": "Expert team committed to your success",
    "about.years": "Years",
    "about.projects": "Projects",
    "about.satisfaction": "Satisfaction",
    "about.support": "Support",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive IT solutions tailored to your business needs",
    "services.consulting.title": "IT Consulting",
    "services.consulting.desc": "Expert guidance for your digital transformation",
    "services.network.title": "Network Setup",
    "services.network.desc": "Secure and scalable network infrastructure",
    "services.security.title": "Cyber Security",
    "services.security.desc": "Protect your business from digital threats",
    "services.webdev.title": "Web Development",
    "services.webdev.desc": "Modern, responsive web solutions",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle":
      "Showcasing our innovative IT solutions and successful projects delivered to clients across Cambodia",
    "portfolio.project1": "Network Infrastructure Setup",
    "portfolio.project2": "Security System Implementation",
    "portfolio.project3": "Cloud Migration Solution",
    "portfolio.project4": "IT Consultation Service",
    "portfolio.project5": "Data Center Management",
    "portfolio.project6": "Cybersecurity Solution",

    // Clients
    "clients.title": "Our Clients",
    "clients.subtitle": "Trusted by leading businesses across Cambodia",
  },
  km: {
    // Header
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីយើង",
    "nav.services": "សេវាកម្ម",
    "nav.portfolio": "ផលិតផល",
    "nav.contact": "ទំនាក់ទំនង",
    "header.contact": "ទំនាក់ទំនង",

    // Hero
    "hero.founded": "បង្កើតឡើងក្នុងឆ្នាំ ២០១៩",
    "hero.title1": "តោះចាប់ផ្តើមអភិវឌ្ឍ",
    "hero.title2": "អនាគតឌីជីថលរបស់អ្នក",
    "hero.subtitle": "អ្នកផ្តល់សេវាកម្ម IT លេខមួយក្នុងប្រទេសកម្ពុជា",
    "hero.description": "ផ្តល់នូវដំណោះស្រាយ IT ដ៏ទូលំទូលាយសម្រាប់អាជីវកម្មគ្រប់ទំហំ ជាមួយនឹងបច្ចេកវិទ្យាទំនើប និងការគាំទ្រពីអ្នកជំនាញ",
    "hero.cta": "ចាប់ផ្តើមថ្ងៃនេះ",
    "hero.stat1": "ឆ្នាំបទពិសោធន៍",
    "hero.stat2": "អតិថិជនពេញចិត្ត",
    "hero.stat3": "ការគាំទ្រ",

    // About
    "about.title": "អំពីយើង",
    "about.why": "ហេតុអ្វីជ្រើសរើសយើង",
    "about.description":
      "ក្រុមហ៊ុន វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក បានបម្រើសេវាអាជីវកម្មទូទាំងប្រទេសតាំងពីឆ្នាំ ២០១៩ ។ យើងបញ្ចូលគ្នានូវភាពច្នៃប្រឌិត និងភាពជឿទុកចិត្ត ដើម្បីផ្តល់នូវដំណោះស្រាយ IT ដែលផ្លាស់ប្តូរទេសភាពឌីជីថលរបស់អ្នក។",
    "about.point1": "ភាពច្នៃប្រឌិត និងភាពជឿទុកចិត្ត ជាស្នូលរបស់យើង",
    "about.point2": "ដំណោះស្រាយ IT ដ៏ទូលំទូលាយសម្រាប់គ្រប់ទំហំ",
    "about.point3": "ក្រុមអ្នកជំនាញ ប្តេជ្ញាចិត្តនឹងភាពជោគជ័យរបស់អ្នក",
    "about.years": "ឆ្នាំ",
    "about.projects": "គម្រោង",
    "about.satisfaction": "ពេញចិត្ត",
    "about.support": "ការគាំទ្រ",

    // Services
    "services.title": "សេវាកម្មរបស់យើង",
    "services.subtitle": "ដំណោះស្រាយ IT ដ៏ទូលំទូលាយ ត្រូវបានរចនាឡើងតាមតម្រូវការអាជីវកម្មរបស់អ្នក",
    "services.consulting.title": "ការប្រឹក្សា IT",
    "services.consulting.desc": "ការណែនាំពីអ្នកជំនាញសម្រាប់ការផ្លាស់ប្តូរឌីជីថលរបស់អ្នក",
    "services.network.title": "ការតម្លើង Network",
    "services.network.desc": "ហេដ្ឋារចនាសម្ព័ន្ធបណ្តាញដែលមានសុវត្ថិភាព និងអាចពង្រីកបាន",
    "services.security.title": "សុវត្ថិភាពតាមអ៊ីនធឺណិត",
    "services.security.desc": "ការពារអាជីវកម្មរបស់អ្នកពីការគំរាមកំហែងឌីជីថល",
    "services.webdev.title": "ការអភិវឌ្ឍគេហទំព័រ",
    "services.webdev.desc": "ដំណោះស្រាយគេហទំព័រទំនើប និងឆ្លើយតប",

    // Portfolio
    "portfolio.title": "ផលិតផលរបស់យើង",
    "portfolio.subtitle": "បង្ហាញពីដំណោះស្រាយ IT ច្នៃប្រឌិត និងគម្រោងជោគជ័យដែលបានផ្តល់ជូនដល់អតិថិជននៅទូទាំងប្រទេសកម្ពុជា",
    "portfolio.project1": "ការតម្លើងហេដ្ឋារចនាសម្ព័ន្ធបណ្តាញ",
    "portfolio.project2": "ការអនុវត្តប្រព័ន្ធសុវត្ថិភាព",
    "portfolio.project3": "ដំណោះស្រាយការផ្លាស់ទី Cloud",
    "portfolio.project4": "សេវាកម្មប្រឹក្សា IT",
    "portfolio.project5": "ការគ្រប់គ្រង Data Center",
    "portfolio.project6": "ដំណោះស្រាយសុវត្ថិភាពតាមអ៊ីនធឺណិត",

    // Clients
    "clients.title": "អតិថិជនរបស់យើង",
    "clients.subtitle": "ទទួលបានការជឿទុកចិត្តពីអាជីវកម្មឈានមុខនៅទូទាំងប្រទេសកម្ពុជា",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
