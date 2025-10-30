"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Lanora Electroplaters
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Specialists in precision electroplating and surface finishing for
              automotive, aerospace, and industrial components.
            </p>
            <div className="mt-4 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-accent" />
              <p>123 Industrial Way, Suite 100, City, State ZIP</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+1-555-123-4567" className="hover:text-white transition">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:info@lanoraelectroplaters.com" className="hover:text-white transition">
                info@lanoraelectroplaters.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-accent transition">
                  Our Facilities
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-accent transition">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Certifications */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              ISO 9001:2015 Certified for Quality Surface Finishing
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Lanora Electroplaters. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
