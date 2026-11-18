"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, Check, CheckCircle2, Copy, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState<{ name: string; email: string } | null>(null);

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return undefined;
      case "message":
        if (!value.trim()) return "Please enter your message.";
        if (value.trim().length < 10) return "Message must be at least 10 characters.";
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field]);
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmittedInfo({ name: formData.name, email: formData.email });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message. Please reach out via email directly."
      );
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
            Let&apos;s build thoughtful digital experiences.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Whether you have an internship or junior frontend opportunity, a project to collaborate on, or just want to chat about web design and matcha—my inbox is always open.
          </p>

          <div className="mt-8 space-y-4 text-[var(--muted)]">
            <div className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 sm:p-4">
              <div className="flex min-w-0 items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
                <a
                  href={`mailto:${profile.email}`}
                  className="min-w-0 truncate text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
                >
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-2.5 py-1 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 px-2">
              <Phone className="h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="text-sm transition hover:text-[var(--foreground)]"
              >
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 px-2">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--accent-strong)]" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                Message sent successfully!
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                Thank you for reaching out, {submittedInfo?.name || "friend"}! I&apos;ve received your inquiry and will reply to{" "}
                <span className="font-medium text-[var(--foreground)]">{submittedInfo?.email}</span> as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-110"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {status === "error" && (
                <div className="mb-5 flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-rose-200">Unable to send message</p>
                    <p className="mt-1 text-xs text-rose-300">{errorMessage}</p>
                    <a
                      href={`mailto:${profile.email}?subject=Portfolio Inquiry from ${encodeURIComponent(
                        formData.name
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="mt-2 inline-block text-xs font-semibold text-rose-200 underline underline-offset-4"
                    >
                      Click here to email directly via your mail client &rarr;
                    </a>
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-[var(--foreground)]">
                  <span className="mb-2 block font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    disabled={status === "loading"}
                    className={`w-full rounded-2xl border bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none transition ${
                      errors.name
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-[var(--border)] focus:border-[var(--accent)]/60"
                    }`}
                  />
                  {errors.name && (
                    <span className="mt-1.5 block text-xs text-rose-400">{errors.name}</span>
                  )}
                </label>

                <label className="block text-sm text-[var(--foreground)]">
                  <span className="mb-2 block font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    disabled={status === "loading"}
                    className={`w-full rounded-2xl border bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none transition ${
                      errors.email
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-[var(--border)] focus:border-[var(--accent)]/60"
                    }`}
                  />
                  {errors.email && (
                    <span className="mt-1.5 block text-xs text-rose-400">{errors.email}</span>
                  )}
                </label>
              </div>

              <label className="mt-5 block text-sm text-[var(--foreground)]">
                <span className="mb-2 block font-medium">Project details</span>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell me about your idea, opportunity, timeline, or question..."
                  aria-invalid={!!errors.message}
                  disabled={status === "loading"}
                  className={`w-full rounded-2xl border bg-[var(--card-strong)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none transition ${
                    errors.message
                      ? "border-rose-500 focus:border-rose-500"
                      : "border-[var(--border)] focus:border-[var(--accent)]/60"
                  }`}
                />
                {errors.message && (
                  <span className="mt-1.5 block text-xs text-rose-400">{errors.message}</span>
                )}
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-110 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send inquiry
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-[var(--border)] bg-[var(--card-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]"
                >
                  Email directly
                </a>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
