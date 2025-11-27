"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Languages } from "lucide-react"

type Language = "en" | "km"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isChanging: boolean
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
    "about.why": "Why Choose Vlaser Solution",
    "about.description":
      "Vlaser Solution Cambodia Co., Ltd has been serving businesses nationwide since 2019. We combine innovation with reliability to deliver IT solutions that transform your digital landscape.",
    "about.point1": "Innovation and reliability at our core",
    "about.point2": "Comprehensive IT solutions for all sizes",
    "about.point3": "Expert team committed to your success",
    "about.why.point1": "Experienced team of IT professionals",
    "about.why.point2": "Proven track record of successful projects",
    "about.why.point3": "Commitment to client satisfaction",
    "about.why.point4": "Competitive pricing",
    "about.why.point5": "Continuous innovation and technology updates",
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
    "services.wifi.title": "Wifi Connections",
    "services.wifi.desc": "High-speed wireless network installation and management",
    "services.cctv.title": "CCTV Systems",
    "services.cctv.desc": "Professional surveillance solutions for security monitoring",

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

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "We'd love to hear from you",
    "contact.info.title": "Contact Information",
    "contact.address.label": "Address",
    "contact.address.value": "No.8Eo, St14 Borey Piphum Tmey, Steung Meanchey, Phnom Penh",
    "contact.phone.label": "Phone Numbers",
    "contact.email.label": "Email",

    // Footer
    "footer.tagline": "Delivering cutting-edge IT solutions since 2019",
    "footer.quicklinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "Vlaser Solution Cambodia. All rights reserved.",
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
    "about.why": "ហេតុអ្វីជ្រើសរើស វីឡាសឺសូលូសិន",
    "about.description":
      "ក្រុមហ៊ុន វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក បានបម្រើសេវាអាជីវកម្មទូទាំងប្រទេសតាំងពីឆ្នាំ ២០១៩ ។ យើងបញ្ចូលគ្នានូវភាពច្នៃប្រឌិត និងភាពជឿទុកចិត្ត ដើម្បីផ្តល់នូវដំណោះស្រាយ IT ដែលផ្លាស់ប្តូរទេសភាពឌីជីថលរបស់អ្នក។",
    "about.point1": "ភាពច្នៃប្រឌិត និងភាពជឿទុកចិត្ត ជាស្នូលរបស់យើង",
    "about.point2": "ដំណោះស្រាយ IT ដ៏ទូលំទូលាយសម្រាប់គ្រប់ទំហំ",
    "about.point3": "ក្រុមអ្នកជំនាញ ប្តេជ្ញាចិត្តនឹងភាពជោគជ័យរបស់អ្នក",
    "about.why.point1": "ក្រុមការងារអ្នកជំនាញ IT ដែលមានបទពិសោធន៍",
    "about.why.point2": "កំណត់ត្រាជោគជ័យនៃគម្រោងដែលបានបញ្ចប់",
    "about.why.point3": "ការប្តេជ្ញាចិត្តចំពោះការពេញចិត្តរបស់អតិថិជន",
    "about.why.point4": "តម្លៃប្រកួតប្រជែង",
    "about.why.point5": "ការច្នៃប្រឌិត និងបច្ចុប្បន្នភាពបច្ចេកវិទ្យាជាបន្តបន្ទាប់",
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
    "services.wifi.title": "ការតភ្ជាប់ Wifi",
    "services.wifi.desc": "ការដំឡើង និងគ្រប់គ្រងបណ្តាញឥតលួស ល្បឿនលឿន",
    "services.cctv.title": "ប្រព័ន្ធ CCTV",
    "services.cctv.desc": "ដំណោះស្រាយម៉ាកាទិកឯកទេស សម្រាប់ការត្រួតពិនិត្យសុវត្ថិភាព",

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

    // Contact
    "contact.title": "ទាក់ទងមកយើង",
    "contact.subtitle": "យើងចង់ស្តាប់ពីអ្នក",
    "contact.info.title": "ព័ត៌មានទំនាក់ទំនង",
    "contact.address.label": "អាសយដ្ឋាន",
    "contact.address.value": "លេខ៨អ៊ី ផ្លូវ១៤ បុរីពិភពថ្មី ស្ទឹងមានជ័យ រាជធានីភ្នំពេញ",
    "contact.phone.label": "លេខទូរស័ព្ទ",
    "contact.email.label": "អ៊ីមែល",

    // Footer
    "footer.tagline": "ផ្តល់ដំណោះស្រាយ IT ទំនើបតាំងពីឆ្នាំ ២០១៩",
    "footer.quicklinks": "តំណភ្ជាប់រហ័ស",
    "footer.contact": "ទំនាក់ទំនង",
    "footer.copyright": "វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isChanging, setIsChanging] = useState(false)

  const handleSetLanguage = (lang: Language) => {
    setIsChanging(true)
    setTimeout(() => {
      setLanguage(lang)
      setTimeout(() => {
        setIsChanging(false)
      }, 300)
    }, 400)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isChanging }}>
      {isChanging && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-rose-50/95 via-amber-50/95 to-pink-50/95 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-blob-slow" />
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-primary/30 animate-ping" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-32 h-32 rounded-full border-2 border-accent/20"
                  style={{ animation: "languageRipple 2s ease-out infinite" }}
                />
              </div>
              <div className="relative glass-ultra rounded-full p-6 animate-bounce-in-scale">
                <Languages className="w-12 h-12 text-primary animate-spin" style={{ animationDuration: "3s" }} />
              </div>
            </div>
            <div className="text-center space-y-2 animate-fade-in-up">
              <h3 className="text-2xl font-bold gradient-text">
                {language === "en" ? "Switching Language..." : "កំពុងប្តូរភាសា..."}
              </h3>
              <p className="text-primary/70 text-sm">{language === "en" ? "Please wait" : "សូមរង់ចាំ"}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </div>
      )}
      <div className={`transition-all duration-300 ${isChanging ? "scale-95 opacity-50" : "scale-100 opacity-100"}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
