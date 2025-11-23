import { Server, Shield, Zap, Globe } from "lucide-react";

const services = [
    {
        title: "Cloud Hosting",
        description: "High-performance web hosting with 99.9% uptime guarantee.",
        icon: Globe,
    },
    {
        title: "VPS Solutions",
        description: "Scalable virtual private servers for growing businesses.",
        icon: Server,
    },
    {
        title: "Cyber Security",
        description: "Advanced threat protection and DDoS mitigation.",
        icon: Shield,
    },
    {
        title: "Fast Delivery",
        description: "Instant provisioning and lightning-fast network speeds.",
        icon: Zap,
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Our Core Services
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We provide a comprehensive suite of cloud solutions tailored to meet the needs of modern enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
