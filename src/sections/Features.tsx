import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Languages,
  Globe,
  WifiOff,
  ToggleLeft,
  Palette,
  Database,
  Zap,
  Fingerprint,
} from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: '中文候选 + 英文译文',
    description: '输入拼音时，候选栏同步显示中文候选和整句英文译文；英文译文显示也可以在设置中关闭。',
  },
  {
    icon: Zap,
    title: '翻译上屏可控',
    description: '点击中文候选即可上屏；英文译文支持一键上屏，也可以关闭点击上屏，避免误触替换正在输入的内容。',
  },
  {
    icon: Globe,
    title: '可选在线精译',
    description: '开启后使用腾讯云机器翻译提升整句译文质量，并按规则消耗积分；关闭后使用本地词典，不消耗积分。',
  },
  {
    icon: WifiOff,
    title: '离线也能输入',
    description: '本地 Rime 拼音和词典无需联网即可完成中文输入；在线翻译不可用时，英文译文自动回退到本地词典。',
  },
  {
    icon: ToggleLeft,
    title: '26 键 / 九键',
    description: '按习惯选择完整 26 键或九宫格拼音输入；九键候选栏保留数字编码，输入路径清晰可见。',
  },
  {
    icon: Palette,
    title: '中 / EN 模式',
    description: '用键盘上的「中/英」键快速切换中文拼音与纯英文输入，中文、英文输入各有合适的节奏。',
  },
  {
    icon: Database,
    title: '本地 Rime 引擎',
    description: '基于 librime 与简体拼音方案，核心拼音输入、分词和词库都在本地完成，离线输入更稳定。',
  },
  {
    icon: Fingerprint,
    title: '隐私优先',
    description: '离线模式下输入内容留在设备本地；只有开启在线翻译时，待翻译整句才会请求云端服务。',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">把中文输入变成英文表达</h2>
          <p className="text-lg text-muted-foreground">
            中文输入照旧，英文表达多一个顺手的选择；在线、离线和翻译上屏行为都由你决定。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-border/60 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
