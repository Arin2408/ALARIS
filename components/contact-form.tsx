"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
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
        <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" required placeholder="your@email.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-type">Enquiry Type *</Label>
        <Select name="enquiry-type" required>
          <SelectTrigger>
            <SelectValue placeholder="Select enquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Enquiry</SelectItem>
            <SelectItem value="quote">Request a Quote</SelectItem>
            <SelectItem value="landowner">Landowner Partnership</SelectItem>
            <SelectItem value="career">Career Opportunities</SelectItem>
            <SelectItem value="media">Media / Press</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location / City</Label>
        <Input id="location" name="location" placeholder="Your city or location" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you? Please provide details about your enquiry."
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our Privacy Policy and consent to be contacted regarding your enquiry.
      </p>
    </form>
  )
}
