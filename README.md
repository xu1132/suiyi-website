# 随译输入法官网

随译输入法（Suiyi IME）官方展示站点，基于 React + Vite + Tailwind CSS + shadcn/ui 构建。

## 在线访问

- 官网：https://suiyiime.top
- 临时预览：CloudStudio 分享链接（仅用于开发预览）

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 部署

推送 `main` 分支后，仓库内置的自动部署工作流（`.github/workflows/deploy.yml`）会自动构建并将 `dist/` 目录发布到托管站点，绑定自定义域名 `suiyiime.top`。

## 更新 APK

每次发布新版本时：

1. 将新编译的 APK 复制到 `public/downloads/` 目录，按版本号命名（如 `suiyiime-v1.1.apk`）。
2. 更新 `src/sections/Download.tsx` 中的下载链接。
3. 执行 `npm run build` 后重新部署。

