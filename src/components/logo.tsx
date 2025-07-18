import { Rocket } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-xl font-bold font-headline ${className}`}>
      <Rocket className="text-accent h-6 w-6" />
      <span>LaunchBoard</span>
    </div>
  );
}
