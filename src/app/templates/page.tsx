import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Check } from 'lucide-react';
import Image from 'next/image';

const templates = [
    { id: 1, name: 'Minimalist', type: 'Resume', image: 'https://placehold.co/400x565.png', aiHint: "minimalist resume" },
    { id: 2, name: 'Modern', type: 'Portfolio', image: 'https://placehold.co/400x300.png', aiHint: "modern portfolio" },
    { id: 3, name: 'Creative', type: 'Resume', image: 'https://placehold.co/400x565.png', aiHint: "creative resume" },
    { id: 4, name: 'Corporate', type: 'Resume', image: 'https://placehold.co/400x565.png', aiHint: "corporate resume" },
    { id: 5, name: 'Tech', type: 'Portfolio', image: 'https://placehold.co/400x300.png', aiHint: "tech portfolio" },
    { id: 6, name: 'Bold', type: 'Resume', image: 'https://placehold.co/400x565.png', aiHint: "bold resume" },
];

export default function TemplatesPage() {
    return (
        <AppShell>
            <div className="space-y-6">
                 <div>
                    <h2 className="text-3xl font-headline font-bold tracking-tight">Choose a Template</h2>
                    <p className="text-muted-foreground">Select a template to start building your resume or portfolio.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {templates.map(template => (
                        <Card key={template.id} className="glass-card overflow-hidden group relative">
                            <Image src={template.image} alt={template.name} width={400} height={565} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={template.aiHint} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-4">
                               <h3 className="text-xl font-headline text-white font-semibold">{template.name}</h3>
                               <p className="text-sm text-gray-300">{template.type}</p>
                            </div>
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="sm"><Eye className="mr-1 h-4 w-4"/> Preview</Button>
                                <Button size="sm" variant="secondary"><Check className="mr-1 h-4 w-4"/> Apply</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </AppShell>
    );
}
