import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, GripVertical, Save, Eye } from 'lucide-react';

export default function ResumeBuilderPage() {
    return (
        <AppShell>
            <div className="flex flex-col gap-8">
                <div className="flex justify-end gap-2">
                    <Button variant="outline"><Eye className="mr-2 h-4 w-4" /> Preview</Button>
                    <Button><Save className="mr-2 h-4 w-4" /> Save Resume</Button>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    {/* Basic Info Section */}
                    <Card className="glass-card">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="font-headline text-2xl">Basic Information</CardTitle>
                            <GripVertical className="cursor-grab text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle">Job Title</Label>
                                <Input id="jobTitle" placeholder="Software Engineer" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="summary">Summary</Label>
                                <Textarea id="summary" placeholder="A brief professional summary..." />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Experience Section */}
                    <Card className="glass-card">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="font-headline text-2xl">Work Experience</CardTitle>
                            <GripVertical className="cursor-grab text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="border p-4 rounded-md space-y-4 relative glass-card">
                                 <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive hover:text-destructive"><Trash2 className="h-4 w-4"/></Button>
                                 <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Job Title</Label>
                                        <Input placeholder="Senior Software Engineer" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Company</Label>
                                        <Input placeholder="Tech Corp Inc." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Start Date</Label>
                                        <Input type="month" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>End Date</Label>
                                        <Input type="month" />
                                    </div>
                                 </div>
                                 <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Textarea placeholder="Describe your responsibilities and achievements..."/>
                                 </div>
                            </div>
                            <Button variant="outline" className="w-full"><PlusCircle className="mr-2 h-4 w-4"/> Add Experience</Button>
                        </CardContent>
                    </Card>
                    
                    {/* Other sections would follow a similar pattern: Education, Skills, etc. */}
                </div>
            </div>
        </AppShell>
    );
}
