import { useState, type FormEvent } from "react";
import { ArrowUp, Mail, Phone, Send } from "lucide-react";
import {
  profile,
  whatsappUrl,
  contactServiceOptions,
  socialLinks,
  type SocialNetwork,
} from "@/content/site";
import { SocialIcon, WhatsAppIcon, socialLabels } from "./icons";
import { SectionHeading } from "./primitives";
import { cta } from "./cta";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "pending") return;
    const form = event.currentTarget;
    setStatus("pending");
    try {
      if (import.meta.env.DEV) throw new Error("Use the deployed form");
      const data = new URLSearchParams();
      new FormData(form).forEach((value, key) =>
        data.append(key, String(value)),
      );
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  const field =
    "mt-2 w-full rounded-xl border border-input bg-navy-950 px-4 py-3 text-foreground focus-visible:outline-2 focus-visible:outline-electric";
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          id="contact-title"
          eyebrow="Get in touch"
          title={<>Let’s build your next chapter</>}
          intro="Tell me about your goals in digital marketing or medical billing."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">
              Start a conversation
            </h3>
            <p className="mt-4 text-muted-foreground">
              Discuss your project, ask a question, or explore how we can work
              together. Please do not include patient information in this form.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 break-all"
              >
                <Mail className="size-5 shrink-0 text-electric" />
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-3"
              >
                <Phone className="size-5 text-electric" />
                {profile.phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cta("primary")}
              >
                <WhatsAppIcon className="size-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <form
            name="contact"
            method="post"
            action="/__forms.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={submit}
            className="glass space-y-5 rounded-3xl p-8"
            aria-busy={status === "pending"}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Leave empty
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <label className="block text-sm font-medium">
              Full name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                className={field}
              />
            </label>
            <label className="block text-sm font-medium">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className={field}
              />
            </label>
            <label className="block text-sm font-medium">
              Service
              <select name="service" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select a service
                </option>
                {contactServiceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Your message
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                className={field}
              />
            </label>
            <button
              type="submit"
              disabled={status === "pending"}
              className={cta("primary", "disabled:opacity-60")}
            >
              {status === "pending" ? "Sending…" : "Send Message"}
              <Send />
            </button>
            <div aria-live="polite">
              {status === "success" && (
                <p>
                  Your message has been submitted. Thank you for getting in
                  touch.
                </p>
              )}
              {status === "error" && (
                <p role="alert">
                  Your message could not be sent. Please try again or contact me
                  by email or WhatsApp. Local previews do not send messages.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-5 px-4 sm:px-6">
          <div>
            <p className="font-display font-semibold">{profile.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Digital Marketing · Medical Billing
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {Object.entries(socialLinks)
              .filter(([, url]) => url)
              .map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLabels[network as SocialNetwork]}
                >
                  <SocialIcon
                    network={network as SocialNetwork}
                    className="size-5"
                  />
                </a>
              ))}
            <a href="#home" className={cta("ghost")}>
              <ArrowUp />
              Back to top
            </a>
          </div>
        </div>
      </footer>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-teal text-white shadow-lg focus-visible:outline-2 focus-visible:outline-electric"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
