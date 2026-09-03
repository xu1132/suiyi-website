import { useEffect, useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ArrowRight, Sparkles, Shield } from 'lucide-react';

/**
 * 打字演示时间线：按真实打字节奏逐步敲入
 * 每个字符：letter 要敲的字母，delay 敲入前的等待（ms）
 * chinese/english 非空时表示「候选上屏」里程碑（拼音输入足够时展示）
 *
 * 演示流程："ni hao shi jie" → 你好世界 hello world
 * 每个拼音音节敲完时中文候选逐字上屏，空格后英文译文出现
 */
const timeline = [
  // ---- ni ----
  { letter: 'n', delay: 700, chinese: '', english: '' },
  { letter: 'i', delay: 240, chinese: '你', english: '' },
  { letter: ' ', delay: 480, chinese: '你', english: '' },
  // ---- hao ----
  { letter: 'h', delay: 300, chinese: '你', english: '' },
  { letter: 'a', delay: 160, chinese: '你', english: '' },
  { letter: 'o', delay: 220, chinese: '你好', english: '' },
  { letter: ' ', delay: 520, chinese: '你好', english: '' },
  // ---- shi ----
  { letter: 's', delay: 340, chinese: '你好', english: '' },
  { letter: 'h', delay: 150, chinese: '你好', english: '' },
  { letter: 'i', delay: 210, chinese: '你好世', english: '' },
  { letter: ' ', delay: 500, chinese: '你好世', english: '' },
  // ---- jie ----
  { letter: 'j', delay: 320, chinese: '你好世', english: '' },
  { letter: 'i', delay: 170, chinese: '你好世', english: '' },
  { letter: 'e', delay: 240, chinese: '你好世界', english: 'hello world' },
];

/** 随机微抖动，让节奏更接近真人（±15%） */
function jitter(base: number) {
  return Math.round(base * (0.85 + Math.random() * 0.3));
}

export function Hero() {
  const [keyIndex, setKeyIndex] = useState(0);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [showCursor, setShowCursor] = useState(true);
  const [cycle, setCycle] = useState(0); // 每轮演示结束时 +1，用于触发重播

  const pressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 拼音 = 已敲入字母拼接；中文/英文候选取当前帧里程碑
  const pinyin = timeline.slice(0, keyIndex).map((s) => s.letter).join('');
  const current = timeline[Math.min(keyIndex, timeline.length - 1)];

  // 按键按下效果：按下 130ms 后弹起
  useEffect(() => {
    if (pressedKey) {
      if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
      pressTimerRef.current = setTimeout(() => setPressedKey(null), 130);
      return () => {
        if (pressTimerRef.current) clearTimeout(pressTimerRef.current);
      };
    }
  }, [pressedKey]);

  // 打字主循环：逐字符敲入，敲完停顿 1.6s 后重播
  useEffect(() => {
    if (keyIndex >= timeline.length) {
      const t = setTimeout(() => {
        setKeyIndex(0);
        setCycle((c) => c + 1);
      }, 1600);
      return () => clearTimeout(t);
    }

    const step = timeline[keyIndex];
    const t = setTimeout(() => {
      setPressedKey(step.letter === ' ' ? 'space' : step.letter);
      setKeyIndex((i) => i + 1);
    }, jitter(step.delay));

    return () => clearTimeout(t);
  }, [keyIndex, cycle]);

  // 光标闪烁
  useEffect(() => {
    const t = setInterval(() => setShowCursor((v) => !v), 480);
    return () => clearInterval(t);
  }, []);

  // 判断某个键是否处于「按下」状态：正在敲的字母，或空格键按下
  const isPressed = useCallback(
    (k: string) => {
      const lower = k.toLowerCase();
      if (pressedKey === 'space') return lower === ' ';
      if (pressedKey && pressedKey !== 'space') return lower === pressedKey;
      return false;
    },
    [pressedKey]
  );

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-28">
      <div className="hero-glow -top-40 -right-40" />
      <div className="hero-glow -bottom-40 -left-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-7 lg:space-y-8">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Sparkles className="mr-1 h-3 w-3" />
                中英随打随译
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium">
                <Shield className="mr-1 h-3 w-3" />
                26 键 · 九键
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                打拼音，<br />
                <span className="gradient-text">出英文</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                随译输入法是一款 Android 中文拼音输入法。输入拼音时，候选栏同时展示中文候选与英文译文，支持 26 键、九键、离线词典和可选在线精译。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <a href="downloads/suiyiime-latest.apk?v=1.2-1d5978e" download>
                  <Download className="mr-2 h-5 w-5" />
                  免费下载 APK
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
                <a href="#features">
                  了解功能
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                完全离线可用
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                在线精译可选
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-500" />
                本地词典兜底
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl shadow-2xl p-5 sm:p-8">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">随译输入法演示</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl border border-border bg-muted/50 p-3 sm:p-4">
                  <div className="text-xs text-muted-foreground mb-1">拼音</div>
                  <div className="text-lg font-medium tracking-wide min-h-[1.75rem]">
                    {pinyin}
                    <span
                      className={`inline-block w-0.5 h-5 align-middle ml-0.5 bg-primary transition-opacity duration-100 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-primary/5 p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">中文候选</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">点击上屏中文</span>
                  </div>
                  <div className="text-base text-muted-foreground min-h-[1.5rem]">
                    {current.chinese || <span className="opacity-30">等待输入…</span>}
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-primary font-medium">英文译文</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground">可选上屏英文</span>
                  </div>
                  <div className="text-2xl font-bold text-primary min-h-[2rem]">
                    {current.english || <span className="opacity-30">...</span>}
                  </div>
                </div>
              </div>

              {/* 演示键盘：小屏压缩，避免溢出 */}
              <div className="mt-5 sm:mt-6 grid grid-cols-10 gap-1 sm:gap-1.5 select-none">
                {'QWERTYUIOP'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-7 sm:h-9 items-center justify-center rounded-md text-[11px] sm:text-xs font-semibold border border-border bg-white shadow-sm ${
                      isPressed(k) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
              <div className="mt-1 sm:mt-1.5 grid grid-cols-10 gap-1 sm:gap-1.5 px-1 sm:px-3 select-none">
                {'ASDFGHJKL'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-7 sm:h-9 items-center justify-center rounded-md text-[11px] sm:text-xs font-semibold border border-border bg-white shadow-sm ${
                      isPressed(k) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
              <div className="mt-1 sm:mt-1.5 grid grid-cols-10 gap-1 sm:gap-1.5 px-4 sm:px-6 select-none">
                {'ZXCVBNM'.split('').map((k) => (
                  <div
                    key={k}
                    className={`demo-key flex h-7 sm:h-9 items-center justify-center rounded-md text-[11px] sm:text-xs font-semibold border border-border bg-white shadow-sm ${
                      isPressed(k) ? 'active' : ''
                    }`}
                  >
                    {k}
                  </div>
                ))}
              </div>
              {/* 空格键（按下时同样高亮） */}
              <div
                className={`demo-key mt-1 sm:mt-1.5 flex h-7 sm:h-9 items-center justify-center rounded-md text-[11px] sm:text-xs font-semibold border border-border bg-white shadow-sm ${
                  isPressed(' ') ? 'active' : ''
                }`}
              >
                空格
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
