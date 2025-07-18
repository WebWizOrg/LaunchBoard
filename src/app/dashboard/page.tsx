import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit, Eye, Trash2 } from 'lucide-react';
import Image from 'next/image';

const savedItems = [
    { type: 'Resume', title: 'Software Engineer Resume', lastEdited: '2 days ago', image: "https://placehold.co/400x565.png", aiHint: "resume cv" },
    { type: 'Portfolio', title: 'My Developer Portfolio', lastEdited: '5 days ago', image: "https://placehold.co/400x300.png", aiHint: "portfolio website" },
    { type: 'Resume', title: 'Product Manager Resume', lastEdited: '1 week ago', image: "https://placehold.co/400x565.png", aiHint: "resume document" },
];

export default function DashboardPage() {
    return (
        <AppShell>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-headline font-bold tracking-tight">Welcome Back!</h2>
                        <p className="text-muted-foreground">Here are your saved resumes and portfolios.</p>
                    </div>
                    <div className="flex gap-2">
                         <Button>
                            <PlusCircle className="mr-2 h-4 w-4" /> Create New Resume
                         </Button>
                         <Button variant="secondary">
                             <PlusCircle className="mr-2 h-4 w-4" /> Create New Portfolio
                         </Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {savedItems.map((item, index) => (
                        <Card key={index} className="glass-card overflow-hidden group">
                            <CardHeader className="p-0">
                                <div className="relative aspect-[4/3]">
                                    <Image src={item.image} alt={item.title} fill objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.aiHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <CardTitle className="absolute bottom-4 left-4 text-white font-headline text-2xl">{item.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                               <p className="text-sm text-muted-foreground">{item.type} - Last edited {item.lastEdited}</p>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                                <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AppShell>
    )
}
