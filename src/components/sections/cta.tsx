import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    Ready to Scale Your Infrastructure?
                </h2>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                    Join hundreds of businesses in Coimbatore who trust us with their critical data and applications. Get started today with a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <Link href="/services">View Pricing</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
