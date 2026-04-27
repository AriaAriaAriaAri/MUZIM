# MUZIM

MUZIM 官网设计稿 / 静态网页源码。

## 在线预览

打开 👉 **https://ariaariaariaari.github.io/MUZIM/**

> 由 GitHub Pages 自动部署，每次推送到 `main` 后约 1 分钟内自动更新。

## 目录结构

```
.
├── index.html        # 页面结构
├── styles.css        # 全部样式
├── script.js         # 交互脚本
└── screenshots/      # 设计稿参考截图
```

## 本地预览

任意一种方式即可：

```bash
# 方式 1：直接双击 index.html

# 方式 2：用 Python 起一个本地静态服务
python3 -m http.server 8000
# 然后浏览器打开 http://localhost:8000
```

## 更新流程

```bash
git add .
git commit -m "更新说明"
git push
```

推送完成后稍等一会，刷新预览链接即可看到最新版本（必要时强制刷新浏览器缓存）。
