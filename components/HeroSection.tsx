"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-background scroll-mt-20 md:scroll-mt-0 pt-20 md:pt-0"
    >
      <div className="blur-bg top-[-70px] left-[10px]" />
      <div className="blur-bg-sm bottom-[-80px] right-[120px]" />
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-8">
        <div className="flex-1 text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Smarter Feeding Starts Here <br />
            with <span className="text-foreground">Seep Baby</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Meet Seep Baby your personal baby feeding assistant that tracks,
            learns, and adapts to your baby’s unique feeding habits, ensuring
            every feed is just right.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Get Seep Baby
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/mockups/hand-phone.png"
            alt="Seep Baby App mockup"
            width={800}
            height={1000}
            sizes="(max-width: 768px) 80vw, 40vw"
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
