import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-background aspect-[4/3] flex items-center justify-center border">
                            {/* Placeholder for an image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                            <div className="text-center z-10 p-6">
                                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                                <p className="font-medium text-muted-foreground">Years Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About Us</h2>
                        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Your Trusted Partner for Modern IT & Digital Solutions
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            CloudCoimbatore is a forward-thinking IT solutions company dedicated to helping businesses grow through modern technology, intelligent automation, and scalable digital solutions.
                        </p>
                        <p className="text-muted-foreground">
                            We specialize in software development, web applications, cloud solutions, and digital transformation services tailored to your unique business needs. Our skilled team focuses on delivering high-quality, reliable solutions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {["24/7 Support", "Professional Staff", "Fair Prices", "High Quality"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">Read More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
