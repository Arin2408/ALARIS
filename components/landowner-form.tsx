"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function LandownerForm() {
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
        <h3 className="text-xl font-semibold text-card-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your submission. Our team will review your land details and contact you within 48 hours.
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

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Select name="state" required>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="gujarat">Gujarat</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
              <SelectItem value="telangana">Telangana</SelectItem>
              <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="district">District *</Label>
          <Input id="district" name="district" required placeholder="District name" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="land-area">Land Area (in acres) *</Label>
          <Input id="land-area" name="land-area" type="number" min="5" required placeholder="e.g., 10" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="land-type">Land Type *</Label>
          <Select name="land-type" required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elevated">Elevated / Hilltop</SelectItem>
              <SelectItem value="open">Open Plains</SelectItem>
              <SelectItem value="coastal">Coastal Area</SelectItem>
              <SelectItem value="agricultural">Agricultural</SelectItem>
              <SelectItem value="wasteland">Wasteland</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any other details about your land (e.g., elevation, nearby substation, road access, average wind conditions)"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit for Assessment"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our Privacy Policy and consent to be contacted regarding your enquiry.
      </p>
    </form>
  )
}
