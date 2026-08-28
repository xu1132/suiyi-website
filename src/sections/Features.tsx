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
    title: '拼音即英文',
    description: '候选栏三行布局：上行拼音、中行中文候选、下行整句英文译文，主打英文输出。',
  },
  {
    icon: Zap,
    title: '一键句译',
    description: '点击中文候选上屏中文；点击下方英文行直接上屏整句英文，高效完成中英切换。',
  },
  {
    icon: Globe,
    title: '在线精译',
    description: '整句译文走腾讯云机器翻译（TMT），准确度远高于本地词典，开发者内置密钥，用户零配置。',
  },
  {
    icon: WifiOff,
    title: '离线兜底',
    description: '无网络或鉴权失败时自动回退本地词典：动态规划分词 + CC-CEDICT 词库，无需联网也能用。',
  },
  {
    icon: ToggleLeft,
    title: '中 / EN 模式',
    description: '按「中/EN」键快速切换到纯英文输入模式，满足不同场景输入需求。',
  },
  {
    icon: Palette,
    title: '外观主题',
    description: '支持跟随系统、浅色、深色三种主题，设置页一键切换，视觉体验更舒适。',
  },
  {
    icon: Database,
    title: 'Rime 引擎',
    description: '基于 librime + luna_pinyin 简体方案，分词、组词、用户词库由引擎负责，输入体验成熟稳定。',
  },
  {
    icon: Fingerprint,
    title: '隐私优先',
    description: '词库与 Rime 数据均在本地，完全离线可用，敏感输入不上传，保护你的输入隐私。',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">为中英输入设计</h2>
          <p className="text-lg text-muted-foreground">
            从拼音到英文，从在线到离线，随译输入法在每个环节都做了针对性优化。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
