// components/contact-form.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { useTranslation } from "@/app/i18n-provider" 

export function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {t("contact1.form.sent.title")}
        </h3>
        <p className="text-muted-foreground">
          {t("contact1.form.sent.body")}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label={t("contact1.form.ariaLabel")}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact1.form.name.label")}</Label>
          <Input id="name" name="name" required placeholder={t("contact1.form.name.placeholder")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("contact1.form.phone.label")}</Label>
          <Input id="phone" name="phone" type="tel" required placeholder={t("contact1.form.phone.placeholder")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("contact1.form.email.label")}</Label>
        <Input id="email" name="email" type="email" required placeholder={t("contact1.form.email.placeholder")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-type">{t("contact1.form.enquiry.label")}</Label>
        <Select name="enquiry-type" required>
          <SelectTrigger>
            <SelectValue placeholder={t("contact1.form.enquiry.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{t("contact1.form.enquiry.options.general")}</SelectItem>
            <SelectItem value="quote">{t("contact1.form.enquiry.options.quote")}</SelectItem>
            <SelectItem value="landowner">{t("contact1.form.enquiry.options.landowner")}</SelectItem>
            <SelectItem value="career">{t("contact1.form.enquiry.options.career")}</SelectItem>
            <SelectItem value="media">{t("contact1.form.enquiry.options.media")}</SelectItem>
            <SelectItem value="other">{t("contact1.form.enquiry.options.other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">{t("contact1.form.location.label")}</Label>
        <Input id="location" name="location" placeholder={t("contact1.form.location.placeholder")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("contact1.form.message.label")}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("contact1.form.message.placeholder")}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("contact1.form.button.sending") : t("contact1.form.button.send")}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {t("contact1.form.privacy")}
      </p>
    </form>
  )
}
