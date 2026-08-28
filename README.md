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

本仓库使用 GitHub Actions 自动部署到 GitHub Pages，并绑定自定义域名 `suiyiime.top`。

每次推送到 `main` 分支后，Actions 会自动构建并将 `dist/` 目录部署到 `gh-pages` 分支。

## 自定义域名配置

1. 在 GitHub 仓库 **Settings → Pages → Custom domain** 中填写 `suiyiime.top`。
2. 在 Cloudflare DNS 中为 `suiyiime.top` 添加 4 条 A 记录指向 GitHub Pages：
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. 等待 DNS 生效，GitHub 会自动签发 SSL 证书。

## 许可证

MIT
