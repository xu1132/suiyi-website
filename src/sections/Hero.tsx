import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowRight, Sparkles, Shield } from 'lucide-react';

const demoSteps = [
  { pinyin: 'n', chinese: '', english: '' },
  { pinyin: 'ni', chinese: '你', english: 'you' },
  { pinyin: 'ni h', chinese: '你好', english: 'hello' },
  { pinyin: 'ni hao', chinese: '你好', english: 'hello' },
  { pinyin: 'ni hao ', chinese: '你好 ', english: 'hello ' },
  { pinyin: 'ni hao s', chinese: '你好 世', english: 'hello w' },
  { pinyin: 'ni hao shi', chinese: '你好 世界', english: 'hello world' },
];

export function Hero() {
  const [step, setStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStep((s) => (s + 1) % demoSteps.length);
    }, 900);
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(cursorInterval);
    };
  }, []);

  const current = demoSteps[step];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="hero-glow -top-40 -right-40" />
      <div className="hero-glow -bottom-40 -left-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Sparkles className="mr-1 h-3 w-3" />
                拼音直出英文
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium">
                <Shield className="mr-1 h-3 w-3" />
                隐私优先
              </Badge>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                打拼音，<br />
                <span className="gradient-text">出英文</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                随译输入法是一款 Android 中文拼音输入法。输入拼音时，候选栏实时显示整句英文译文，随打随译，让中英切换不再割裂。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#download">
                  <Download className="mr-2 h-5 w-5" />
                  免费下载 APK
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#features">
                  了解功能
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                完全离线可用
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                腾讯云在线精译
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-500" />
                5 万本地词条兜底
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl shadow-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">随译输入法演示</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-muted/50 p-4">
                  <div className="text-xs text-muted-foreground mb-1">拼音</div>
                  <div className="text-lg font-medium tracking-wide">
                    {current.pinyin}
                    <span className={`inline-block w-0.5 h-5 align-middle ml-0.5 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-primary/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">中文候选</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">点击上屏中文</span>
                  </div>
                  <div className="text-base text-muted-foreground">{current.chinese || <span className="opacity-30">等待输入…</span>}</div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium">英文译文</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground">点击上屏英文</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{current.english || <span className="opacity-30">...</span>}</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-10 gap-1.5 select-none">
                {'QWERTYUIOP'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-8 sm:h-9 items-center justify-center rounded-md text-xs font-semibold border border-border bg-white shadow-sm ${
                      current.pinyin.endsWith(k.toLowerCase()) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
              <div className="mt-1.5 grid grid-cols-10 gap-1.5 px-3 select-none">
                {'ASDFGHJKL'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-8 sm:h-9 items-center justify-center rounded-md text-xs font-semibold border border-border bg-white shadow-sm ${
                      current.pinyin.endsWith(k.toLowerCase()) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
              <div className="mt-1.5 grid grid-cols-10 gap-1.5 px-6 select-none">
                {'ZXCVBNM'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-8 sm:h-9 items-center justify-center rounded-md text-xs font-semibold border border-border bg-white shadow-sm ${
                      current.pinyin.endsWith(k.toLowerCase()) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
