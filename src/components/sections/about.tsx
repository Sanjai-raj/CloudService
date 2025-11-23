import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-muted aspect-video flex items-center justify-center">
                            {/* Placeholder for an image - using a colored block for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                            <span className="text-muted-foreground font-medium">Office Image Placeholder</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Rooted in Coimbatore, <br />
                            <span className="text-primary">Serving the World</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Located in the heart of Coimbatore's tech hub, we bring world-class cloud infrastructure to local and global businesses. Our strategic location allows us to provide cost-effective solutions without compromising on quality or performance.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>24/7 Local Support Team</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>State-of-the-art Data Center Partnerships</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>Tailored Solutions for Indian Enterprises</span>
                            </li>
                        </ul>
                        <Button variant="outline" asChild>
                            <Link href="/contact">Visit Our Office</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
