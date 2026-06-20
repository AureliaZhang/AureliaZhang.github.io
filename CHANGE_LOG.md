# CHANGE_LOG · Aurelia Lab Website

> 真实改动网站代码的逐条记录。每条含：①改了什么 ②为什么 ③影响文件 ④潜在问题 ⑤验证方式。
> 仅记录对 `index.html` / `quotes.js` 等站点文件的实际修改；纯分析/截图不计入。

---

## 2026-06-02 · 全站体检 + SVG GitHub 图标修复

### [BUGFIX] GitHub 图标 SVG path 非法弧线 flag
- **①改了什么**：`index.html` 约 line 2941，GitHub 图标 `<path d="…">` 结尾弧线参数
  `A8.013 8.013 0016 8` → `A8.013 8.013 0 0 0 16 8`
- **②为什么**：`0016` 被浏览器误解析为 x-axis-rotation=16，剩下 `8` 成了非法 large-arc-flag。
  后果：每次加载控制台报错 `<path> attribute d: Expected arc flag ('0' or '1')`，
  且图标闭合弧线被丢弃、octocat 图形不完整。
- **③影响文件**：`index.html`（仅此一行）
- **④潜在问题**：无。还原为 GitHub 官方图标标准写法（rx=8.013 ry=8.013 旋转=0 large-arc=0 sweep=0 终点=16,8），纯几何修正，不触碰布局/样式/逻辑。
- **⑤验证**：chromium 真实渲染，修复前后对照 ——
  - 修复前：`arcFlagErrors` 命中 1 条，按钮图标残缺
  - 修复后：`arcFlagErrors` 清零，octocat 图标完整渲染（截图 `/tmp/svg-post-btn.png`）

### [备注] 控制台 3 条 `ERR_CONNECTION_CLOSED` —— 非网站缺陷
- 来源经定位为 3 个 Google Fonts 请求（`fonts.googleapis.com/css2?...`）。
- 系**测试沙箱无法连出外网**所致；正常网络/部署环境下会正常加载，页面所有文字在截图中均正常显示（fallback 字体生效）。**不作改动**。

### [内容] Fubao 项目占位文案 —— 加「待更新」注释（按宝宝要求保留占位）
- **①改了什么**：`index.html` 约 line 3001，在 Fubao 生态村项目那段 `<p>` 文案上方加 HTML 注释：
  `<!-- TODO 待更新：此处文案为占位，首句系从 Synesthetic 项目复制残留（与 Fubao 生态村主题无关），整理好后替换为真实项目简介。 -->`
- **②为什么**：该段首句 `Product designer specialized in building SaaS product.` 与 Fubao 生态村主题无关，系从 project-01（Synesthetic）的简介复制残留。宝宝表示项目尚未整理好、先保留占位，但要求在代码里留注释以免日后遗忘。
- **③影响文件**：`index.html`（仅新增一行注释，未改动可见文案）
- **④潜在问题**：无。纯注释，不影响渲染。
- **⑤验证**：注释为不可见元素，不影响页面；待宝宝整理好项目后按注释提示替换。

### [美化] 白底占位图 → 暗色调（消除深色主题里的扎眼白盒子）
- **①改了什么**：把项目区里 7 处「白底」占位统一改成深色，融入星空深色背景：
  1. `.tech-drawing-container` CSS（line 1302）`background:#fff` → `#101520`（仅 Conduit 一处用此类）
  2. Conduit `full-card` 内联 `background:#fff`（line 3028）移除
  3. Conduit 占位图（line 3030）`1600x600/FFF/000` → `1600x600/101520/00F0FF`（青字呼应主色）
  4. Population Bubble Chart 容器内联 `background:#fff`（line 3050 区）移除、并去掉与兄弟卡不一致的 `object-fit:contain`
  5. Population Bubble Chart 占位图 `600x400/EEE/333` → `600x400/4a4a4a/FFF`（与同组 Dense City/Sprawl/Industrial 的 333/444/555 灰阶一致）
  6. Territorial Map A–D 四个容器内联 `background:#fff`（line 3107–3113 区）移除
  7. Territorial Map A–D 四张占位图 `600x400/FFF/000` → `600x400/101520/FFF`（与 project-01 Map Analysis 1–4 的 `101520` 约定一致）
- **②为什么**：这些白底是作者早期手写的内联/CSS 白色，在深蓝黑主题里显示为刺眼白盒子（图床图片在本地沙箱加载失败时尤其明显，露出纯白容器底）。宝宝确认「改成暗色调占位」。
- **③影响文件**：`index.html`（1 处 CSS + 6 处内联/URL；`.tech-drawing-container` 经确认全站仅 Conduit 使用，改 CSS 不波及他处）
- **④潜在问题**：无破坏性。占位图本身仍是 placehold.co（外链），仅配色改为深色；真实图片就位后可随时替换。`.loading-dot` 那处 `#ffffff`（加载动画发光点）系刻意星点光效，**保留不动**。
- **⑤验证**：chromium 真实渲染三块（Conduit / Bubble / Territorial）+ computed-style 程序化检测 ——
  - 三块 `whiteCount: 0`（无任何纯白底元素残留）
  - 截图复核：Conduit 青字深底、Bubble 四卡统一深灰、Territorial 四张深色 Map 卡，均与星空背景无缝（截图 `/tmp/dark-conduit.png`、`/tmp/dark-bubble.png`、`/tmp/dark-territorial.png`）

### [内容] GitHub「View Code」按钮链接 —— 指向个人主页
- **①改了什么**：`index.html` line 2938，`href` 占位 `https://github.com/your-repo` → `https://github.com/AureliaZhang`，并在上方加 TODO 注释（说明暂指向主页、将来有独立项目仓库再换具体地址）。
- **②为什么**：原 `your-repo` 是死链占位。宝宝确认先指向个人主页（访客可看到名下所有公开项目），待某项目有独立仓库后再换成 `github.com/AureliaZhang/项目名`。
- **③影响文件**：`index.html`（该行 + 一行 TODO 注释）
- **④潜在问题**：按钮文案为「View Code on GitHub」，目前落到主页而非具体仓库，属临时方案（已留 TODO）。另：沙箱无法连出 github.com，账号拼写未能自动核验，已请宝宝目视确认。
- **⑤验证**：grep 确认全站不再有 `your-repo`，唯一 github 链接指向 `https://github.com/AureliaZhang`。

---

