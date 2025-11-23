import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const team = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        image: "bg-gray-200",
    },
    {
        name: "Jane Smith",
        role: "Lead Developer",
        image: "bg-gray-200",
    },
    {
        name: "Mike Johnson",
        role: "Cloud Architect",
        image: "bg-gray-200",
    },
    {
        name: "Sarah Williams",
        role: "Digital Marketer",
        image: "bg-gray-200",
    },
];

export function TeamSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Team</h2>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Meet our expert Team
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-background rounded-xl overflow-hidden shadow-sm border group">
                            <div className={`aspect-[4/5] ${member.image} relative flex items-center justify-center`}>
                                <span className="text-muted-foreground/50">Photo</span>
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                                    <Facebook className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                                    <Twitter className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                                    <Linkedin className="h-5 w-5 cursor-pointer hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
