"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Wand2, Copy } from 'lucide-react';
import { getAiEnhancedBulletPoint } from './actions';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  bulletPoint: z.string().min(10, {
    message: "Bullet point must be at least 10 characters.",
  }),
});

export function AiAssistantForm() {
    const [rewrittenPoint, setRewrittenPoint] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bulletPoint: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setRewrittenPoint("");
        const result = await getAiEnhancedBulletPoint(values.bulletPoint);
        setIsLoading(false);
        if (result.error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error,
            });
        } else if (result.rewrittenBulletPoint) {
            setRewrittenPoint(result.rewrittenBulletPoint);
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(rewrittenPoint);
        toast({
            title: "Copied!",
            description: "The rewritten bullet point has been copied to your clipboard.",
        });
    }

    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <Wand2 className="text-accent" />
                        Rewrite a Bullet Point
                    </CardTitle>
                    <CardDescription>Enter a bullet point from your resume and our AI will help you improve it.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="bulletPoint"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Bullet Point</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="e.g., Made a website that increased sales."
                                                rows={5}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Rewriting..." : "Enhance with AI"}
                                <Bot className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <Card className="glass-card">
                <CardHeader>
                     <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                        <Bot className="text-accent"/>
                        AI-Enhanced Version
                    </CardTitle>
                    <CardDescription>Here is the improved version of your bullet point.</CardDescription>
                </CardHeader>
                <CardContent className="min-h-[150px]">
                    {isLoading ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    ) : rewrittenPoint ? (
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed">{rewrittenPoint}</p>
                            <Button variant="outline" size="sm" onClick={copyToClipboard}>
                                <Copy className="mr-2 h-4 w-4" /> Copy
                            </Button>
                        </div>
                    ) : (
                        <p className="text-muted-foreground">The result will appear here.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
