import { AppShell } from '@/components/app-shell';
import { AiAssistantForm } from './ai-assistant-form';

export default function AiAssistantPage() {
    return (
        <AppShell>
            <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold tracking-tight">AI Assistant</h2>
                <p className="text-muted-foreground">Leverage the power of AI to perfect your resume and portfolio content.</p>
            </div>
            <div className="mt-8">
                <AiAssistantForm />
            </div>
        </AppShell>
    );
}
