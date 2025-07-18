import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Save, Eye, Github, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioBuilderPage() {
    return (
        <AppShell>
            <div className="flex flex-col gap-8">
                <div className="flex justify-end gap-2">
                    <Button variant="outline"><Eye className="mr-2 h-4 w-4" /> Preview</Button>
                    <Button><Save className="mr-2 h-4 w-4" /> Save Portfolio</Button>
                </div>

                 <Card className="glass-card">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">About Me</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Your Bio</Label>
                            <Textarea placeholder="Tell everyone a bit about yourself, your passions, and what you do." />
                        </div>
                        {/* Social Links inputs would go here */}
                    </CardContent>
                 </Card>

                 <Card className="glass-card">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border p-4 rounded-md space-y-4 relative glass-card">
                             <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:text-destructive"><Trash2 className="h-4 w-4"/></Button>
                            <div className="space-y-2">
                                <Label>Project Image</Label>
                                <div className="h-40 w-full rounded-md border-dashed border-2 border-border flex items-center justify-center bg-secondary/50">
                                    <p className="text-muted-foreground">Click to upload</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Project Title</Label>
                                <Input placeholder="My Awesome Project" />
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Textarea placeholder="A short description of your project..." />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Live URL</Label>
                                    <div className="flex items-center">
                                        <span className="p-2 bg-secondary rounded-l-md"><LinkIcon className="h-5 w-5"/></span>
                                        <Input placeholder="https://myproject.com" className="rounded-l-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>GitHub Repo</Label>
                                    <div className="flex items-center">
                                        <span className="p-2 bg-secondary rounded-l-md"><Github className="h-5 w-5"/></span>
                                        <Input placeholder="https://github.com/user/repo" className="rounded-l-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full"><PlusCircle className="mr-2 h-4 w-4"/> Add Project</Button>
                    </CardContent>
                 </Card>
            </div>
        </AppShell>
    );
}
