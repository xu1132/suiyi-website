import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Github, FileText, ShieldAlert } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">下载随译输入法</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              当前为早期测试版本，通过 GitHub Releases 分发 APK。安装前请允许「未知来源」应用安装。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="https://github.com/xu1132/SuiyiIme/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  下载最新 APK
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="https://github.com/xu1132/SuiyiIme" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  查看源码
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              当前版本约 14 MB，支持 Android 8.0+。
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">安全提示</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    仓库内置的签名密钥仅用于开发与测试，请勿直接用于应用商店发布。正式上架前请替换为私有密钥。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">开放源码</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    随译输入法基于 MIT 协议开源，离线词典使用 CC-CEDICT。欢迎提交 Issue 与 PR。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
