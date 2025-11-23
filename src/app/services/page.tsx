import { Server, Shield, Zap, Globe, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        title: "Cloud Hosting",
        description: "Reliable and fast web hosting for businesses of all sizes. Includes free SSL, daily backups, and 24/7 support.",
        icon: Globe,
        price: "From ₹199/mo",
    },
    {
        title: "VPS Hosting",
        description: "Full root access with dedicated resources. Perfect for high-traffic websites and custom applications.",
        icon: Server,
        price: "From ₹999/mo",
    },
    {
        title: "Dedicated Servers",
        description: "Bare metal servers for maximum performance and control. Hosted in our secure Coimbatore data center.",
        icon: Database,
        price: "From ₹4999/mo",
    },
    {
        title: "Managed Cloud",
        description: "Let our experts handle your infrastructure. We manage updates, security, and optimization.",
        icon: Cloud,
        price: "Custom Pricing",
    },
    {
        title: "Cyber Security",
        description: "Enterprise-grade protection against DDoS attacks, malware, and other cyber threats.",
        icon: Shield,
        price: "Custom Pricing",
    },
    {
        title: "CDN Services",
        description: "Accelerate your content delivery globally with our high-performance Content Delivery Network.",
        icon: Zap,
        price: "From ₹499/mo",
    },
];

export default function ServicesPage() {
    return (
        <div className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                        Our Services
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Comprehensive cloud solutions designed to help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                            <div className="mt-auto pt-4 border-t flex items-center justify-between">
                                <span className="font-semibold text-primary">{service.price}</span>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/contact">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We understand that every business is unique. Contact our team to discuss your specific requirements and get a tailored quote.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Contact Sales Team</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
