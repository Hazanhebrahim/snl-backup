"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";

type FormState = {
  success: boolean;
  error: string | null;
};

const initialState: FormState = { success: false, error: null };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.success) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8">
        <p className="text-sm font-semibold text-emerald-800">
          Message received.
        </p>
        <p className="mt-2 text-sm text-emerald-700">
          Thank you for reaching out. A member of our team will be in contact
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.error ? (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-700">
            Full name <span aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Ada Okafor"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-700">
            Work email <span aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="ada@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Shell, TotalEnergies, NNPC…"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-700">
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Describe your operational challenge or service interest…"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-11 items-center justify-center rounded-md bg-cyan-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:opacity-60">
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
