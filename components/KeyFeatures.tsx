"use client";
import React from "react";
import Image from "next/image";

export default function KeyFeaturesSection() {
  const features = [
    {
      title: "Baby AI Chat",
      text: "Interact with Baby AI — your smart feeding companion that helps you plan and understand your baby's needs.",
      image: "/mockups/ai-chat.png",
      imageFirst: false,
    },
    {
      title: "Smart Bottle Insights",
      text: "Track milk temperature, bottle battery, and feeding progress in real time with seamless Bluetooth connectivity.",
      image: "/mockups/feeding-status.png",
      imageFirst: true,
    },
    {
      title: "Feeding Analytics",
      text: "Visualize daily goals, track patterns, and gain AI-powered insights to make every feeding session effortless.",
      image: "/mockups/home-stats.png",
      imageFirst: false,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-50 via-white to-amber-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 px-6">
        <button className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
          Key Featured
        </button>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Smart Feeding Made Simple
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover the features that make baby feeding easier, safer, and
          smarter — all powered by Seep Baby technology.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
          >
            {feature.imageFirst ? (
              <>
                {/* Image first for middle card */}
                <div className="relative w-64 h-auto mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={256}
                    height={256}
                    className="rounded-xl object-contain fade-bottom"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.text}</p>
              </>
            ) : (
              <>
                {/* Title first for first and last card */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {feature.text}
                </p>
                <div className="relative w-64 h-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={256}
                    height={256}
                    className="rounded-xl object-contain fade-bottom"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent rounded-b-xl" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
