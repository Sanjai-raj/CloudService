import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="container relative z-10 mx-auto px-4 text-center">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Elevate Your Business with <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Premium Cloud Solutions
                    </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Secure, scalable, and high-performance cloud infrastructure based in Coimbatore.
                    Empowering your digital transformation journey.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Button size="lg" asChild>
                        <Link href="/services">Explore Services</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
