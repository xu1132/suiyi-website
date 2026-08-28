import { Download, Settings, Smartphone } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Download,
    title: '下载安装 APK',
    description: '从 GitHub Releases 下载最新 APK，安装时允许「未知来源」应用安装。',
  },
  {
    step: '02',
    icon: Settings,
    title: '启用输入法',
    description: '进入系统设置 → 语言与输入法 → 启用「随译输入法」。',
  },
  {
    step: '03',
    icon: Smartphone,
    title: '切换并使用',
    description: '在任意输入框切换到随译输入法，打拼拼音即可看到实时英文译文。',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">三步开始使用</h2>
          <p className="text-lg text-muted-foreground">
            无需注册账号，无需配置翻译密钥，安装后即可体验随打随译。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
              )}
              <div className="relative z-10 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
