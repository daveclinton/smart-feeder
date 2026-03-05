"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  Apple,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Seep Baby Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-semibold text-xl text-white">Seep Baby</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Making baby feeding smarter, easier, and more connected for modern
            parents.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-white transition">
                Offers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/faqs" className="hover:text-white transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-white transition">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Social and Store Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"
            >
              <Play size={16} />
              Get it on Google Play
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"
            >
              <Apple size={16} />
              Download on App Store
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Seep Baby. All rights reserved.
      </div>
    </footer>
  );
}
