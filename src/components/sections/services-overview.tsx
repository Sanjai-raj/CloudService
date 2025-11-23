"use client";

import { Code, Layout, Smartphone, Shield, BarChart, Terminal } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Web Design",
        description: "Creating stunning, user-centric designs that captivate your audience and enhance brand identity.",
        icon: Layout,
    },
    {
        title: "Web Development",
        description: "Robust and scalable web applications built with cutting-edge technologies for optimal performance.",
        icon: Code,
    },
    {
        title: "UI/UX Design",
        description: "Intuitive and engaging user experiences that drive conversion and customer satisfaction.",
        icon: Smartphone,
    },
    {
        title: "Web Security",
        description: "Comprehensive security solutions to protect your digital assets from evolving cyber threats.",
        icon: Shield,
    },
    {
        title: "Digital Marketing",
        description: "Data-driven marketing strategies to boost your online visibility and reach your target audience.",
        icon: BarChart,
    },
    {
        title: "Programming",
        description: "Custom software solutions tailored to streamline your business processes and efficiency.",
        icon: Terminal,
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Services</h2>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Services Built Specifically For Your Business
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-lg hover:shadow-primary/10 transition-all group hover:-translate-y-1 hover:border-primary/50"
                        >
                            <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                            <Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                                Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
