"use client";
import Image from "next/image";
import React from "react";
import GooglePlay from "./icons/google-play";
import AppleStore from "./icons/apple-store";

export default function AppPromoSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-50 via-white to-amber-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
        <div className="flex-1">
          <Image
            src="/mockups/app-promo.png"
            alt="Seep mobile app and smart device"
            width={500}
            height={500}
            className="rounded-2xl w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feed Smarter with Our Mobile App and Device
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto md:mx-0">
            Pair your Seep smart bottle with the mobile app to track every feed,
            monitor milk levels, and stay connected with your baby’s health data
            — anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              <GooglePlay className="text-xl" />
              <span>Get it on Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              <AppleStore className="text-xl" />
              <span>Download on the App Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
