"use client";
import Image from "next/image";
import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Connect Device",
      text: "Easily pair your smart bottle with the Seep Baby app via Bluetooth.",
    },
    {
      number: "2",
      title: "Feed & Track",
      text: "Monitor milk temperature, battery, and feeding progress in real time.",
    },
    {
      number: "3",
      title: "View Analytics",
      text: "Access daily insights and track your baby’s feeding habits effortlessly.",
    },
    {
      number: "4",
      title: "Stay Informed",
      text: "Receive smart notifications and AI suggestions for optimal feeding routines.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-amber-50 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <button className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
          How It Works
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Simple Steps to Get Started
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Follow a few quick and easy steps to connect, track, and enjoy
          seamless baby feeding insights.
        </p>
      </div>

      {/* Steps Layout */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6 max-w-6xl">
        {/* Left side steps */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          {steps.slice(0, 2).map((step, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="text-primary font-bold text-xl w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="flex-1 flex justify-center">
          <div className="w-[260px] md:w-[320px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/mockups/how-it-works-image.png" // replace with your uploaded image
              alt="How Seep Baby Works"
              width={320}
              height={640}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side steps */}
        <div className="flex flex-col gap-6 flex-1 w-full">
          {steps.slice(2).map((step, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="text-primary font-bold text-xl w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              </div>
            </div>
          ))}ﬁ
        </div>
      </div>
    </section>
  );
}
