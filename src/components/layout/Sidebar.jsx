'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Shield,
  Settings,
  X
} from 'lucide-react';

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Defense Aspirants",
    href: "/aspirants", 
    icon: Users
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3
  },
  {
    title: "Verification",
    href: "/verification",
    icon: Shield,
    badge: "12"
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings
  }
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 transform bg-white border-r transition-transform duration-200 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 md:hidden">
            <span className="font-semibold">Menu</span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex-1 space-y-2 p-4">
            {sidebarNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.href} href={item.href} onClick={onClose}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-2 text-left",
                      isActive && "bg-blue-100 text-blue-900 hover:bg-blue-200"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.title}
                    {item.badge && (
                      <Badge 
                        variant="destructive" 
                        className="ml-auto text-xs px-1.5 py-0.5"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>
          
          <div className="border-t p-4">
            <div className="text-xs text-muted-foreground">
              <p className="font-medium"></p>
              <p>Army Recruitment & Youth Assessment Dashboard</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}