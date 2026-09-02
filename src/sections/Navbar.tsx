import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X, Keyboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: '功能', href: '#features' },
  { label: '使用流程', href: '#how-it-works' },
  { label: '常见问题', href: '#faq' },
  { label: '下载', href: '#download' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 移动端菜单打开时锁定背景滚动，避免双滚动
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'pt-[env(safe-area-inset-top)]',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Keyboard className="h-5 w-5" />
            </div>
            <span>随译输入法</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild>
              <a href="downloads/suiyiime-latest.apk?v=1.2-f8fca72" download>
                <Download className="mr-2 h-4 w-4" />
                下载 APK
              </a>
            </Button>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="切换菜单"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out',
          mobileOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col px-4 pb-[env(safe-area-inset-bottom)] border-t border-border bg-background/95 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2 mb-4 w-full" size="lg" asChild>
            <a href="downloads/suiyiime-latest.apk?v=1.2-f8fca72" download onClick={() => setMobileOpen(false)}>
              <Download className="mr-2 h-4 w-4" />
              下载 APK
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
