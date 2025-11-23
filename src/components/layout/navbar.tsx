"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">CloudCoimbatore</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                        Services
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                    <Button>Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t p-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/services" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Services
                        </Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                        <Button className="w-full">Get Started</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
