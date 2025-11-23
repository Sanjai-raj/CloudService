"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Web Analysis",
        category: "Web Design",
        image: "bg-blue-100", // Placeholder class
    },
    {
        title: "Cyber Security Core",
        category: "Cyber Security",
        image: "bg-green-100",
    },
    {
        title: "Upcoming Phone",
        category: "Mobile Info",
        image: "bg-purple-100",
    },
    {
        title: "Marketing Analysis",
        category: "Digital Marketing",
        image: "bg-orange-100",
    },
];

export function ProjectsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Project</h2>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Recently Completed Projects
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className={`aspect-square ${project.image} flex items-center justify-center relative overflow-hidden`}>
                                <span className="text-muted-foreground/50 font-medium z-10">Project Image</span>
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                                <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                                <Link href="#" className="inline-flex items-center text-sm font-semibold hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
