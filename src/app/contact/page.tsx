"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/Motion";
import { Mail, Phone, Send, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gymName: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to backend here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Contact Us
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Let&apos;s talk
                <br />
                <span className="text-accent">fragrance.</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Whether you&apos;re ready to partner or just exploring, we&apos;d love to hear from you. Response within 24 hours.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <SlideInLeft>
                <div className="bg-muted-bg rounded-2xl p-8 sm:p-10 border border-border">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="john@yourgym.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="gymName" className="block text-sm font-medium text-foreground mb-2">
                            Gym Name
                          </label>
                          <input
                            type="text"
                            id="gymName"
                            name="gymName"
                            value={formData.gymName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            placeholder="Iron Pump Fitness"
                          />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                            City, State
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            placeholder="Miami, FL"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                          placeholder="Tell us about your gym and what you're looking for..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 font-medium bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </SlideInLeft>

              {/* Contact Info */}
              <SlideInRight>
                <div className="space-y-8">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/perfume-1.jpg"
                      alt="Contact Scentio"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/70 text-sm mb-1">Based in</p>
                      <p className="text-white font-semibold">United States · Serving gyms nationwide</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-muted">hello@scentio.com</p>
                        <p className="text-sm text-accent">Response within 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Call Us</p>
                        <p className="text-muted">+1 (555) 123-4567</p>
                        <p className="text-sm text-accent">Mon-Fri 9am-6pm EST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted">Usually within 2-4 hours</p>
                        <p className="text-sm text-accent">Always under 24h</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-muted-bg rounded-xl border border-border">
                    <p className="text-sm text-muted">
                      <span className="font-medium text-foreground">Quick note:</span> We offer free site assessments for gyms with 500+ monthly visitors. No commitment required.
                    </p>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl">
            <FadeInUp>
              <div className="text-center mb-12">
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                  FAQ
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Common questions
                </h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="space-y-4">
                {[
                  {
                    q: "How much does it cost to install a Scentio machine?",
                    a: "Nothing. Installation, maintenance, and restocking are completely free for partner gyms. We operate on a revenue-sharing model.",
                  },
                  {
                    q: "What types of fragrances do you offer?",
                    a: "We partner with premium brands across all categories: woody, fresh, oriental, citrus, spicy, and aquatic. Selection rotates seasonally.",
                  },
                  {
                    q: "How does the revenue sharing work?",
                    a: "Gyms earn a percentage of every spray transaction. We provide monthly reports and direct deposits. Typical gyms see $500-$2,000/month in passive income.",
                  },
                  {
                    q: "What are the space and power requirements?",
                    a: "Our machines need just 2 sq ft of floor space and a standard electrical outlet. They're designed to fit seamlessly into any gym environment.",
                  },
                  {
                    q: "How do you handle maintenance and restocking?",
                    a: "Our team monitors usage remotely and schedules maintenance automatically. We typically restock every 2-4 weeks depending on traffic.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
