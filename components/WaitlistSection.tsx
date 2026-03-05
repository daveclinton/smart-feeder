"use client";

import { FormEvent, useState } from "react";

export default function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/waitlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setError(data.error ?? "Could not join the waitlist. Please try again.");
        return;
      }

      setMessage(data.message ?? "You have joined the waitlist.");
      setName("");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
        <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
          Early Access
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Join The Seep Baby Waitlist
        </h2>
        <p className="text-muted-foreground mb-8">
          We are still developing the app. Join the waitlist and we will email you
          when access opens.
        </p>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold disabled:opacity-60"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {message ? <p className="text-sm text-emerald-700 mt-4">{message}</p> : null}
        {error ? <p className="text-sm text-destructive mt-4">{error}</p> : null}
      </div>
    </section>
  );
}
