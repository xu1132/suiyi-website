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
    answer: '不需要自己配置密钥，在线请求由后台代理完成。开启在线翻译会按规则消耗积分；关闭在线翻译后使用本地词典，不消耗积分。',
  },
  {
    question: '没有网络时还能用吗？',
    answer: '可以。中文拼音输入和本地词典不依赖网络；无网络或在线翻译失败时，英文译文会自动回退到本地词典。',
  },
  {
    question: '我的输入内容会上传到服务器吗？',
    answer: '离线模式下输入内容留在设备本地。开启在线翻译后，待翻译的整句文本会通过后台请求云端服务；在设置页关闭在线翻译即可不上传、不消耗积分。',
  },
  {
    question: 'APK 体积为什么约 52 MB？',
    answer: '主要体积来自 librime 原生库与 Rime 数据文件。这些本地引擎让中文拼音输入和离线词典不依赖云端服务。',
  },
  {
    question: '如何切换中英文模式？',
    answer: '键盘上设有「中/英」键，点击即可在中文拼音输入与纯英文输入之间切换；键型可在设置中选择 26 键或九键。',
  },
  {
    question: '如何避免误触英文翻译后直接上屏？',
    answer: '进入设置页，关闭「点击翻译上屏」即可。关闭后仍可查看英文译文，但点击英文翻译不会替换输入框中的内容。',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">常见问题</h2>
          <p className="text-lg text-muted-foreground">关于随译输入法的常见疑问。</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-4 sm:px-5 mb-3 shadow-sm">
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
