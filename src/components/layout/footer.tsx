import Link from "next/link";
import { Cloud, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Cloud className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-bold text-white">CloudCoimbatore</span>
                        </Link>
                        <p className="text-sm leading-relaxed opacity-90">
                            Your trusted partner for modern IT & digital solutions. We help businesses scale with cloud services, web development, and smart automation.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="h-10 w-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Short Link
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Contact Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Our Services</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Terms & Condition</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Our Services
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Web Design</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Cloud Hosting</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Digital Marketing</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span>›</span> Cyber Security</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <span>123 Tech Park, Saravanampatti,<br />Coimbatore, TN 641035</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>info@cloudcoimbatore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
                    <p>© {new Date().getFullYear()} <span className="text-white">CloudCoimbatore</span>. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">Designed by <span className="text-white">CloudCoimbatore Team</span></p>
                </div>
            </div>
        </footer>
    );
}
