import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function PublicPortfolioPage({ params }: { params: { username: string } }) {
    const isExample = params.username === 'example-user';
    const userData = {
        name: isExample ? "Alex Doe" : "User Not Found",
        title: "Full-Stack Developer & UI/UX Enthusiast",
        bio: "I build beautiful and functional web applications. Passionate about open-source and creating delightful user experiences. Turning ideas into reality with code.",
        avatar: "https://placehold.co/100x100.png",
        socials: [
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
        ],
        projects: [
            { title: "Project Alpha", description: "A revolutionary new social media platform.", image: "https://placehold.co/600x400.png", aiHint: "abstract tech", href:"#"},
            { title: "Project Beta", description: "An e-commerce site for vintage clothing.", image: "https://placehold.co/600x400.png", aiHint: "fashion store", href:"#"},
            { title: "Project Gamma", description: "A mobile app for tracking personal fitness goals.", image: "https://placehold.co/600x400.png", aiHint: "fitness app", href:"#"},
        ]
    };

    if (!isExample) {
        return <div className="min-h-screen flex items-center justify-center">User not found</div>;
    }

    return (
        <div className="bg-background text-foreground min-h-screen">
            <header className="p-4 flex justify-between items-center container mx-auto">
                <Link href="/"><Logo /></Link>
                <p className="text-xs text-muted-foreground">Powered by LaunchBoard</p>
            </header>
            <main className="container mx-auto px-4 py-8 md:py-16">
                <section className="text-center mb-16">
                    <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent">
                        <AvatarImage src={userData.avatar} data-ai-hint="profile avatar" />
                        <AvatarFallback>{userData.name.slice(0,2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center justify-center gap-2">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold">{userData.name}</h1>
                        <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-xl text-muted-foreground mt-2">{userData.title}</p>
                    <p className="max-w-2xl mx-auto mt-4">{userData.bio}</p>
                    <div className="flex justify-center gap-4 mt-6">
                        {userData.socials.map((social, i) => (
                            <Button key={i} variant="outline" size="icon" asChild>
                                <Link href={social.href}><social.icon className="h-5 w-5"/></Link>
                            </Button>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <Button><Download className="mr-2 h-4 w-4" /> Download Resume</Button>
                        <Button variant="secondary"><Mail className="mr-2 h-4 w-4" /> Contact Me</Button>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-headline font-bold text-center mb-8">Featured Projects</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {userData.projects.map((project, i) => (
                             <Card key={i} className="glass-card overflow-hidden group">
                                <Link href={project.href} className="block">
                                    <div className="aspect-video relative">
                                        <Image src={project.image} alt={project.title} fill objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" data-ai-hint={project.aiHint} />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="font-headline text-2xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </CardContent>
                                </Link>
                             </Card>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
