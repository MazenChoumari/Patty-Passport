"use client";

import { useState } from "react";
import type { Activities } from "@/data/countries";

export function ActivitiesSection({ activities }: { activities: Activities }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Activities &amp; mini-learning
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy/10 bg-sun-light p-5">
            <p className="font-heading text-sm font-semibold text-sun-dark">Learn to say hello</p>
            <p className="mt-2 font-heading text-xl font-bold text-navy">
              {activities.greetingPractice.phrase}
            </p>
            <p className="mt-1 text-sm text-navy-light">{activities.greetingPractice.meaning}</p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-sky-light p-5 sm:col-span-1">
            <p className="font-heading text-sm font-semibold text-sky-dark">Quick quiz</p>
            <p className="mt-2 text-sm font-medium text-navy">{activities.quiz.question}</p>
            <div className="mt-3 flex flex-col gap-1.5">
              {activities.quiz.options.map((opt, i) => {
                const isCorrect = i === activities.quiz.answerIndex;
                const isSelected = selected === i;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelected(i)}
                    className={`rounded-lg border px-3 py-1.5 text-left text-sm transition-colors ${
                      isSelected
                        ? isCorrect
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-passport-red bg-passport-red-light text-passport-red-dark"
                        : "border-navy/10 bg-white text-navy hover:border-sky-dark"
                    }`}
                  >
                    {opt}
                    {isSelected && (isCorrect ? " ✓" : " ✕")}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-passport-red-light p-5">
            <p className="font-heading text-sm font-semibold text-passport-red-dark">
              Kids activity
            </p>
            <p className="mt-2 text-sm text-navy">{activities.kidsActivity}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
