import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Client Name",
        role: "Profession",
        content: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
    {
        name: "Client Name",
        role: "Profession",
        content: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
    {
        name: "Client Name",
        role: "Profession",
        content: "Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Testimonial</h2>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Client Saying!
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-muted/30 p-8 rounded-xl border relative">
                            <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                            <p className="text-muted-foreground mb-6 relative z-10">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/20" />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
