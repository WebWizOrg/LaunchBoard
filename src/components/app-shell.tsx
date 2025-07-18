"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from './logo';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { FileText, Briefcase, Palette, Bot, Settings, LayoutDashboard } from 'lucide-react';
import React from 'react';

const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/resume-builder', label: 'Resume Builder', icon: FileText },
    { href: '/portfolio-builder', label: 'Portfolio Builder', icon: Briefcase },
    { href: '/templates', label: 'Templates', icon: Palette },
    { href: '/ai-assistant', label: 'AI Assistant', icon: Bot },
];

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const currentPage = menuItems.find(item => pathname.startsWith(item.href));

    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <Sidebar>
                    <SidebarHeader>
                        <Logo />
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                 <SidebarMenuItem key={item.href}>
                                    <Link href={item.href} passHref legacyBehavior>
                                        <SidebarMenuButton isActive={pathname.startsWith(item.href)}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </SidebarMenuButton>
                                    </Link>
                                 </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                             <SidebarMenuItem>
                                <Link href="#" passHref legacyBehavior>
                                    <SidebarMenuButton>
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </Link>
                             </SidebarMenuItem>
                             <SidebarMenuItem>
                                <div className="p-2">
                                    <div className="p-2 flex items-center gap-3 rounded-md bg-secondary">
                                        <Avatar>
                                            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="profile avatar" alt="@user" />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold">User Name</span>
                                            <span className="text-xs text-muted-foreground">user@email.com</span>
                                        </div>
                                    </div>
                                </div>
                             </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <header className="p-4 border-b flex items-center gap-4 sticky top-0 bg-background/95 backdrop-blur z-10">
                        <SidebarTrigger className="md:hidden"/>
                        <h1 className="text-xl font-semibold font-headline">
                            {currentPage?.label || 'LaunchBoard'}
                        </h1>
                    </header>
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background/90">
                        {children}
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
