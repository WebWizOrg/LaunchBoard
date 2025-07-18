import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild variant="ghost">
                <Link href="/dashboard">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
