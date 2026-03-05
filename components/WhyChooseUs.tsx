"use client";
import Image from "next/image";
import React from "react";

export default function WhyChooseUsSection() {
  const features = [
    {
      number: "01",
      title: "Guaranteed Accuracy",
      text: "Every feed is tracked with precision — ensuring consistency and peace of mind.",
    },
    {
      number: "02",
      title: "Smart Monitoring",
      text: "Stay updated with real-time bottle temperature, battery, and feeding data.",
    },
    {
      number: "03",
      title: "Reliable Support",
      text: "Get help anytime with Seep’s intelligent Baby AI support system.",
    },
    {
      number: "04",
      title: "Parent Satisfaction",
      text: "Trusted by thousands of parents who value safety, ease, and reliability.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
        {/* Left: Image grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          <div className="row-span-1 rounded-2xl overflow-hidden">
            <Image
              src="/mockups/feeding1.png"
              alt="Feeding session"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 rounded-2xl overflow-hidden">
            <Image
              src="/mockups/feeding2.png"
              alt="Smart bottle tracking"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 rounded-2xl overflow-hidden">
            <Image
              src="/mockups/feeding3.png"
              alt="Parental dashboard"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="row-span-1 rounded-2xl overflow-hidden">
            <Image
              src="/mockups/feeding4`.png"
              alt="Happy baby"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Text + features */}
        <div className="flex-1">
          <button className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Why Choose Seep
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Smart Care, Trust, and Comfort <br /> Every Feeding Moment.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Designed to make parenting simpler, safer, and more connected —
            ensuring your baby always gets the best care possible.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary font-bold text-lg w-8 h-8 flex items-center justify-center bg-primary/10 rounded-md">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Order Today
          </button>
        </div>
      </div>
    </section>
  );
}
