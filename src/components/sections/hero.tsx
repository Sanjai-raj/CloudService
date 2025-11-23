"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Innovative Digital Solutions For <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Your Business</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
                    >
                        We help businesses scale with modern IT development, cloud services, and smart automation. Your trusted partner for digital transformation in Coimbatore.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" asChild>
                            <Link href="/services">Learn More</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-primary/5 hover:text-primary transition-all" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
