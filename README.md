# Li Zhang · Academic homepage

个人学术主页，采用独立的蓝灰配色、圆角个人侧栏、简洁分区和带配图的论文卡片。内容组织参考 Rui Jiao 的学术主页，视觉细节独立设计。使用原生 HTML、CSS 和少量 JavaScript，无构建步骤或第三方依赖。

网站：https://lizhang30.github.io/

## 修改内容

- `index.html`：姓名、简介、联系方式、动态、论文与经历。
- `assets/css/style.css`：版式、字体、颜色和手机适配。
- `assets/js/main.js`：研究标签高亮、清除选择和导航状态。
- `images/profile.jpg`：个人头像。
- `images/publications/`：真实论文配图，来源和许可见其中的 `ATTRIBUTIONS.md`。
- `assets/favicon.svg`：浏览器标签图标。

论文按精选顺序手动维护。每项包含真实概览图、标题、作者、发表场所、年份和 Paper / Code 链接。修改研究标签时，确保按钮的 `data-topic` 和论文的 `data-topics` 相匹配。关闭 JavaScript 时仍能阅读全部论文和访问链接。Google Scholar 完整列表链接保留在论文标题旁。

## 本地预览

双击打开 `index.html`，而不是打开整个文件夹地址；或在仓库目录运行：

```sh
python3 -m http.server 8000
```

然后访问 http://localhost:8000 。

## GitHub Pages

在仓库 **Settings → Pages** 中选择 **Deploy from a branch → master → / (root)**。根目录的 `.nojekyll` 使 GitHub Pages 直接发布静态文件。推送后即可更新网站，无需安装 Ruby、Jekyll 或 npm 包。

原来的 `/about/`、`/about.html` 链接会跳转到新版简介。其余演示博客、示例论文、虚构履历及模板资源已移除。

## 内容来源

个人简介和头像保留自原仓库；学术链接由本人提供或来自本人公开资料。设计参考 Rui Jiao 的学术主页：https://jiaor17.github.io/ 。

保留原模板的 MIT 许可及版权声明，见 `LICENSE`。论文图的版权与站点代码许可分别处理，见 `images/publications/ATTRIBUTIONS.md`。
