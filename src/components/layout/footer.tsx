import Link from "next/link";
import { Cloud, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Cloud className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">CloudCoimbatore</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Premium cloud solutions for businesses in Coimbatore and beyond. Reliable, secure, and scalable.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/services" className="hover:text-primary">Cloud Hosting</Link></li>
                            <li><Link href="/services" className="hover:text-primary">VPS Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Dedicated Servers</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Managed Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>123 Tech Park, Coimbatore, TN</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info@cloudcoimbatore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} CloudCoimbatore. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
