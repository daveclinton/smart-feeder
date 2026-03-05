"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { usePageLink } from "@/lib/usePageLink";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleClick } = usePageLink();

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Seep Baby logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-primary">Seep Baby</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition"
          >
            Home
          </Link>
          <div
            onClick={() => {
              handleClick("/", "offers");
            }}
            className="text-foreground hover:text-primary transition cursor-pointer"
          >
            Offers
          </div>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition"
          >
            About Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="relative p-2 hover:text-primary transition">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Download App
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col items-center gap-4 py-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/offers"
              className="text-foreground hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Offers
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="flex items-center gap-4 pt-4 border-t border-border mt-4">
              <button className="p-2 text-foreground hover:text-primary transition">
                <ShoppingBag className="w-6 h-6" />
              </button>
              <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold hover:opacity-90 transition">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
