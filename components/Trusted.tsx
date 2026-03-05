"use client";
import React from "react";
import { Heart, Shield, Baby } from "lucide-react";

export default function TrustedSection() {
  const cards = [
    {
      icon: <Heart className="w-10 h-10 text-pink-400" />,
      title: "Loved by Parents",
      text: "Thousands of families trust Seep Baby for smart, stress-free feeding every day.",
      border: "border-pink-200/30",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      title: "Safe & Reliable",
      text: "Built with care, security, and accuracy to make every feed safe and predictable.",
      border: "border-blue-200/30",
    },
    {
      icon: <Baby className="w-10 h-10 text-teal-400" />,
      title: "AI for Baby Care",
      text: "Baby AI learns your baby’s patterns and helps you feed smarter with insights that grow with them.",
      border: "border-teal-200/30",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle blurred color blobs */}
      <div className="absolute -top-20 -left-10 w-80 h-80  bg-[#FFD700]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4B0082]/10  rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 max-w-2xl">
          Trusted by Thousands of Parents Across the World
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${card.border} bg-white/50 backdrop-blur-md shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-base max-w-xs">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
