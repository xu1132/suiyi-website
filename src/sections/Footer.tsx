import { Mail, Keyboard } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Keyboard className="h-5 w-5" />
              </div>
              <span>随译输入法</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              一款支持 26 键与九键的 Android 中文拼音输入法。中文候选、英文译文、在线与离线模式，按需选择。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">链接</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">功能特性</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">使用流程</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">常见问题</a></li>
              <li><a href="#download" className="hover:text-foreground transition-colors">下载</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:1132115999@qq.com" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  1132115999@qq.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} 随译输入法. All rights reserved.</p>
          <p>离线词典 CC-CEDICT</p>
        </div>
      </div>
    </footer>
  );
}
