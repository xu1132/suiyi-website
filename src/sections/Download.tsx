import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, ShieldAlert } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="download" className="py-16 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-5 lg:space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">下载随译输入法</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              当前为早期测试版本，点击下方按钮直接下载 APK 安装包。安装前请允许「未知来源」应用安装。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <a href="downloads/suiyiime-latest.apk" download>
                  <Download className="mr-2 h-5 w-5" />
                  下载最新 APK
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              当前版本 v1.0，约 14 MB，支持 Android 8.0+。
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-border/60">
              <CardContent className="p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">安全提示</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    当前为测试版，签名密钥仅用于开发与测试，请勿用于应用商店发布。正式上架前会替换为正式签名。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="p-4 sm:p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">版本信息</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    当前版本 v1.0，离线词典使用 CC-CEDICT。如遇问题可通过页面底部邮箱反馈。
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
