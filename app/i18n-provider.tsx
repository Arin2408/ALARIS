"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import en from "./locales/en.json"
import de from "./locales/de.json"

type Lang = "en" | "de"
const STORAGE_KEY = "alaris_lang"
const translations = { en, de } as const

const I18nContext = createContext({
  lang: "en" as Lang,
  setLang: (l: Lang) => {},
  t: (key: string, fallback?: string) => fallback ?? key,
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
      if (saved === "en" || saved === "de") setLang(saved)
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = lang
  }, [lang])

  const t = (path: string, fallback = "") => {
    const parts = path.split(".")
    // @ts-ignore
    let cur: any = translations[lang] ?? {}
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
      else {
        cur = undefined
        break
      }
    }
    return cur ?? fallback ?? path
  }

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider")
  return ctx
}
