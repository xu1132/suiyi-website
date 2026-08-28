#!/bin/bash
# 随译输入法官网静态服务器
# 通过 Cloudflare 命名隧道暴露到 https://suiyiime.top
set -e

BASE="/Users/mac/Desktop/other-code/suiyi-website"
PORT=8080
PYTHON="/usr/bin/python3"

cd "$BASE"

# 确保使用生产构建产物
if [ ! -f "$BASE/dist/index.html" ]; then
  echo "❌ dist/index.html 不存在,请先构建"
  exit 1
fi

# 端口占用时先清理
lsof -ti :$PORT 2>/dev/null | xargs kill 2>/dev/null || true

echo "▶ 启动官网静态服务器 http://localhost:$PORT ..."
exec "$PYTHON" -m http.server "$PORT" --directory "$BASE/dist"
