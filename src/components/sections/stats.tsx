"use client";

import { Users, CheckCircle, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        label: "Successful Projects Delivered",
        value: "50+",
        icon: CheckCircle,
    },
    {
        label: "Clients Across Industries",
        value: "20+",
        icon: Users,
    },
    {
        label: "Client Satisfaction Rate",
        value: "98%",
        icon: Award,
    },
    {
        label: "Years of Experience",
        value: "10+",
        icon: Clock,
    },
];

export function StatsSection() {
    return (
        <section className="py-12 bg-primary text-primary-foreground">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center space-y-2"
                        >
                            <stat.icon className="h-8 w-8 mb-2 opacity-80" />
                            <h3 className="text-4xl font-bold">{stat.value}</h3>
                            <p className="text-sm font-medium opacity-90">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
