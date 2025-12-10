import React from "react";
import {
  Eye,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-linear-to-br from-teal-500 to-cyan-600 p-2 rounded-xl">
                <Eye className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                VisionCare
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Providing comprehensive eye care services with state-of-the-art
              technology and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="hover:text-teal-400 transition-colors"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/book-appointment"
                  className="hover:text-teal-400 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                Eye Examinations
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                LASIK Surgery
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                Cataract Surgery
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                Glaucoma Treatment
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                Pediatric Eye Care
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-teal-400 shrink-0" />
                <span className="text-sm">
                  123 Eye Care Street, Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-400" />
                <span className="text-sm">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-400" />
                <span className="text-sm">info@visioncare.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} VisionCare Center. All rights
            reserved. | HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
