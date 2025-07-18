import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Palette, FileText, Briefcase, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    { icon: Bot, title: "AI Assistant", description: "Enhance your resume bullet points and descriptions with powerful AI suggestions." },
    { icon: Palette, title: "Modern Templates", description: "Choose from a variety of professionally designed templates to stand out." },
    { icon: FileText, title: "Resume Builder", description: "Easily create and customize your resume with our intuitive section-based editor." },
    { icon: Briefcase, title: "Portfolio Showcase", description: "Build a beautiful portfolio to showcase your projects, blogs, and certificates." },
    { icon: CheckCircle, title: "Content Verification", description: "Build trust with verified links to your GitHub repositories, blogs, and certificates." },
    { icon: Rocket, title: "Public Hosting", description: "Share your portfolio with a unique, professional-looking public URL." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(74,20,140,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="container px-4 md:px-6 z-10 relative">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200">
                    Craft Your Professional Story
                  </h1>
                  <p className="max-w-[700px] mx-auto text-gray-300 md:text-xl">
                    LaunchBoard helps you build stunning resumes and portfolios that get you noticed. Leverage AI, beautiful templates, and content verification to launch your career.
                  </p>
                </div>
                <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2">
                    <Button asChild size="lg" className="w-full sm:w-auto font-bold">
                      <Link href="/dashboard">
                        Get Started for Free
                        <Rocket className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <p className="text-xs text-gray-400">No credit card required.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-gray-200">Key Features</div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered writing assistance to beautiful, verifiable portfolios, LaunchBoard is your all-in-one career toolkit.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-accent/20 p-2 rounded-md">
                        <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-gray-200">Showcase</div>
                    <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">Your Work, Beautifully Presented</h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Create a public portfolio that's as professional as you are. Host it on a custom URL and share it with the world.
                    </p>
                    <Button asChild>
                        <Link href="/u/example-user">View Demo Portfolio</Link>
                    </Button>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="https://placehold.co/600x400.png"
                        width={600}
                        height={400}
                        alt="Portfolio Preview"
                        data-ai-hint="portfolio website"
                        className="overflow-hidden rounded-xl object-cover object-center"
                    />
                </div>
            </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/40">
        <p className="text-xs text-gray-400">&copy; 2024 LaunchBoard. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
