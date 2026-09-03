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
              下载最新 Android APK，安装前请允许「未知来源」应用安装。安装完成后，在系统设置中启用随译输入法即可开始使用。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <a href="downloads/suiyiime-latest.apk?v=1.2-87b44a4b" download>
                  <Download className="mr-2 h-5 w-5" />
                  下载最新 APK
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              当前版本 v1.2，约 52 MB，支持 Android 8.0+。
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
                    请仅从本页下载 APK，并确认地址为 suiyiime.top，避免使用来路不明的安装包。Android 安装时可能需要临时允许浏览器或文件管理器安装未知来源应用；安装完成后建议关闭该权限。随译输入法支持离线输入，只有开启在线精译时，待翻译内容才会请求云端服务。
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
                    当前版本 v1.2，离线词典使用 CC-CEDICT。如遇问题可通过页面底部邮箱反馈。
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
