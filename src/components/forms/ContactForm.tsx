"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const FIELDS: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  span?: boolean;
}[] = [
  { name: "lastName", label: "Nom", type: "text", required: true },
  { name: "firstName", label: "Prénom", type: "text", required: true },
  { name: "company", label: "Entreprise", type: "text" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Téléphone", type: "tel" },
  { name: "subject", label: "Sujet", type: "text", required: true },
];

const inputClasses =
  "w-full border-b border-navy/20 bg-transparent py-3 font-body text-sm text-navy placeholder:text-navy-corporate/35 focus:border-gold focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-gold/40 bg-offwhite p-10">
        <CheckCircle2 className="h-8 w-8 text-gold" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-semibold text-navy">
          Message envoyé
        </h3>
        <p className="font-body text-sm leading-relaxed text-navy-corporate/70">
          Merci pour votre message. Notre équipe reviendra vers vous dans les
          meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block font-label text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-corporate/70"
            >
              {field.label}
              {field.required && <span className="text-gold"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              className={inputClasses}
            />
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-label text-[11px] font-semibold uppercase tracking-[0.15em] text-navy-corporate/70"
        >
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 border border-gold bg-gold px-8 py-4 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-all hover:bg-transparent hover:text-gold"
      >
        Envoyer le message
      </button>
    </form>
  );
}
