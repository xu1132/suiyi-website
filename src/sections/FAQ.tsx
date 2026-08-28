import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '随译输入法支持哪些平台？',
    answer: '目前仅支持 Android 平台，最低系统要求为 Android 8.0（API 26）。iOS 版本暂无计划。',
  },
  {
    question: '在线翻译需要我自己配置密钥吗？',
    answer: '不需要。腾讯云机器翻译 API 密钥由开发者内置在 APK 中，用户安装后可直接使用在线精译功能。',
  },
  {
    question: '没有网络时还能用吗？',
    answer: '可以。当无网络或云端鉴权失败时，输入法会自动回退到本地词典翻译。本地词库包含约 5 万词条，其中约 3.8 万条带英文翻译。',
  },
  {
    question: '我的输入内容会上传到服务器吗？',
    answer: '在线翻译模式下，整句文本会请求腾讯云机器翻译服务。如果你在意隐私，可以在设置页关闭翻译显示，或保持离线使用本地词典。',
  },
  {
    question: 'APK 体积为什么有十几 MB？',
    answer: '主要体积来自 librime 原生库与 Rime 数据文件。这些本地引擎让输入法完全离线可用，无需依赖云端拼音转中文服务。',
  },
  {
    question: '如何切换中英文模式？',
    answer: '键盘上设有「中/EN」键，点击即可在中文拼音输入与纯英文输入之间切换。',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground">关于随译输入法的常见疑问。</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-5 mb-3 shadow-sm">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
