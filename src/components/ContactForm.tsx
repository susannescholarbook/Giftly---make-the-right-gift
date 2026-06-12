import { useState, type FormEvent } from 'react';

const WEBHOOK_URL = 'https://scholarbooksusanne.app.n8n.cloud/webhook/giftly-kontakt';

type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const isConfigured = Boolean(WEBHOOK_URL);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus('unconfigured');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vorname: firstName,
          email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFirstName('');
        setEmail('');
        setMessage('');
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/30 px-6 py-20 md:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Kontakt
          </p>
          <h2 className="font-display text-3xl text-charcoal md:text-4xl">
            Schreibe mir eine E-Mail
          </h2>
          <p className="mt-3 text-charcoal/60">
            Hast du eine Frage oder einen Geschenktipp? Ich freue mich auf deine Nachricht.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel space-y-5 rounded-3xl p-6 md:p-8">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-charcoal/80">
              Vorname
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Anna"
              className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-mint focus:ring-2 focus:ring-mint/40"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal/80">
              E-Mail-Adresse
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anna@beispiel.de"
              className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-mint focus:ring-2 focus:ring-mint/40"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal/80">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Deine Nachricht …"
              className="w-full resize-y rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-mint focus:ring-2 focus:ring-mint/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-charcoal/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Wird gesendet …' : 'Senden'}
          </button>

          {status === 'success' && (
            <p className="rounded-2xl bg-mint/50 px-4 py-3 text-center text-sm text-charcoal">
              Danke! Deine Nachricht wurde gesendet.
            </p>
          )}

          {status === 'error' && (
            <p className="rounded-2xl bg-blush/60 px-4 py-3 text-center text-sm text-charcoal">
              Leider ist etwas schiefgelaufen. Bitte versuche es später erneut.
            </p>
          )}

          {status === 'unconfigured' && (
            <p className="rounded-2xl bg-butter/60 px-4 py-3 text-center text-sm text-charcoal/80">
              Das Formular ist noch nicht eingerichtet. Bitte die Webhook-URL hinterlegen.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
