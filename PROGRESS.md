# Aurelia Lab Website - 开发进度

## 2026-06-02 - 全站可视化体检 + 占位图暗色化

### 🩺 全站体检（19 屏真实渲染复核）
- 用 Playwright + chromium 逐屏截图全站，结构健康：所有区块 `opacity:1`、无横向溢出、无裁切、深色诗意主题统一、导航 / Workspace 功能正常、About 大肖像比例良好。
- 产出「① 明确 bug（直接修）/ ② 美化建议（先确认方向再动）」两类清单，已向宝宝汇报。

### ✅ 本轮已应用（均经宝宝确认方向）
1. **明确 bug — GitHub 图标 SVG 弧线 flag**：`A8.013 8.013 0016 8` → `A8.013 8.013 0 0 0 16 8`，控制台报错清零、octocat 完整渲染（详见 CHANGE_LOG）。
2. **美化 — 白底占位图 → 暗色调**：项目区 7 处白底（1 处 CSS `.tech-drawing-container` + 6 处内联 / 图床 URL）统一改深色，融入星空背景。chromium + computed-style 双重验证三块 `whiteCount:0`。
3. **内容 — Fubao 占位文案**：按宝宝要求保留占位，在代码里加 `<!-- TODO 待更新 -->` 注释（首句系从 Synesthetic 复制残留），以免日后遗忘。

### ⏳ 待宝宝确认
- **GitHub「View Code」按钮**（line 2938 仍为占位 `your-repo`）：宝宝给的 `github.com/AureliaZhang` 是个人主页而非项目仓库，待确认指向后再改。

### 📌 顺带观察（暂未改，记录备查）
- 加载遮罩在 `window.load` + 800ms 才隐藏；若外链资源（字体 / 图床）慢，遮罩会停留偏久。正常网络下无碍；将来如需更稳，可加「兜底超时强制隐藏」。

---

## 2026-06-02 - Bug 修复（轮播图报错 + favicon）

### 🐛 本次修复

#### 1. 修复 showSlide 运行时报错（轮播图）
- **问题**：页面已无轮播图 HTML（`.carousel-slide`/`.carousel-dot` 元素早被移除），但 JS 仍在运行。`totalSlides = 0`，页面加载后 `startCarousel` 的定时器每 5 秒触发 `nextSlide`，计算 `(currentSlide + 1) % 0 = NaN`，再访问 `slides[NaN].style` 抛出 `TypeError: Cannot read properties of undefined (reading 'style')` —— 控制台每 5 秒刷一次错。
- **已用 node 复现确认**。
- **修复**：
  - `startCarousel()` 加守卫 `if (totalSlides === 0) return;`（根治：无元素时根本不启动定时器）
  - `showSlide(index)` 加守卫 `if (!slides.length || !slides[index]) return;`（防御越界；将来加回轮播图 HTML 仍可正常工作）

#### 2. 添加 favicon（消除 404）
- **问题**：`<head>` 无任何 favicon 链接，浏览器自动请求 `/favicon.ico` 得到 404。
- **修复**：在 `<head>` 加入内联 SVG data-URI favicon —— 金色四角星 ✦（`#DAAE58`，呼应 constellation + gold accent 主题）。零外部文件、零额外请求。

#### 3. 关于"SVG path 错误"—— 更正（此前误判，现已修复）
- ⚠️ **更正此前记录**：曾写"当前代码不存在 SVG path 错误"，这是**误判**。原因：jsdom 不渲染 SVG 几何，捕获不到该错误；换成 **chromium 真实渲染后确认错误一直存在**。
- **真实问题**：GitHub 图标 path（约 line 2941）结尾弧线 `A8.013 8.013 0016 8` —— `0016` 被浏览器误解析为 x-axis-rotation=16，剩下的 `8` 成了非法 large-arc-flag。后果：每次加载报错 `<path> attribute d: Expected arc flag ('0' or '1')`，且图标闭合弧线断裂、octocat 不完整。
- **本轮已修复**：`A8.013 8.013 0016 8` → `A8.013 8.013 0 0 0 16 8`（GitHub 官方图标标准写法）。chromium 复核：arc-flag 报错清零，图标完整渲染。

### 📁 文件修改
- `index.html`
  - `<head>`：新增 favicon `<link>`
  - `showSlide()`、`startCarousel()`：各加一处空集合/越界守卫

### ✅ 验证
- 6 个内联 `<script>` 块 + `quotes.js` 语法校验全部通过
- node 模拟：修复后 `startCarousel` 不再启动空定时器、`showSlide(NaN)` 安全返回，无 TypeError

### 🔍 全站自动化体检（静态分析 + jsdom 动态加载）

**方法**：① 提取全部内联 JS + `quotes.js` 做语法校验；② 静态分析 DOM 引用（id / class / 事件 handler / 锚点 / 本地资源 / 重复 id / touch 事件）；③ 用 jsdom 真实加载页面、执行所有脚本，捕获运行时错误与 console（canvas / matchMedia / IntersectionObserver / scrollIntoView 做了 mock）。

**健康项 ✅**：
- 语法：6 个内联 `<script>` 块 + `quotes.js` 全部通过
- DOM 引用：77 个 id 无重复；所有 `getElementById` / `querySelector('#..')` / 锚点 `href="#.."` 引用均有效
- 事件 handler：内联 handler 引用的函数均有定义（`add` / `stringify` / `replace` 实为 `.classList.add` / `JSON.stringify` / `String.replace` 内置方法，误报）
- 本地资源：引用的 6 个本地文件全部存在（`${item.link}`、`%23noise` 为模板占位 / data-URI 内部，误报）
- daily quote：正常，今日（06-02）情话正确写入 `#hero-quote-text`
- 动态加载：**零运行时错误**（`localStorage opaque origin` 一条是 jsdom 的 `file://` 限制，改用正常 origin 后消失，非网站问题）
- carousel / favicon：本轮修复经动态测试确认生效

**此前误判已更正**：SVG path 错误**确实存在**（GitHub 图标弧线 flag 非法），仅因 jsdom 不渲染 SVG 几何而漏检；chromium 真实渲染确认后，本轮已修复（见上节第 3 条）。

**发现的真实待办**：
- ~~Twinora 移动端不可拖动~~ → **本轮已修复**（见下）

### 🔧 修复：Twinora 移动端拖动（Pointer Events 重构）

**问题**：拖动仅绑定 `mousedown` / `mousemove` / `mouseup`，触屏设备无法拖动 Twinora。

**方案**：改用 Pointer Events，一套代码统一鼠标 / 触摸 / 触控笔。

**改动**（`index.html`）：
1. `mousedown` → `pointerdown`，并加 `pet.setPointerCapture(e.pointerId)`（拖动中指针移出元素仍持续接收事件）
2. `mousemove` → `pointermove`（拖动主体逻辑零改动，`clientX/clientY` 通用）
3. `mouseup` → `pointerup`
4. CSS `#floating-pet` 加 `touch-action: none`（触摸拖动时页面不滚动 / 缩放）
5. 顺手清理 3 条调试 `console.log`（`mousedown triggered` / `drag started` / `drag ended`）

**验证**（jsdom 模拟 pointerdown→move→up 序列）：
- `is-dragging` class 正确切换（false → true → false）
- 位置正确更新（left/top 写入、bottom 置 auto）、星尘拖尾特效正常触发
- 零运行时错误；6 内联块 + `quotes.js` 语法通过
- ⚠️ jsdom 仅验证事件逻辑，真实触屏手感建议在手机上实测一次

### 🎨 首屏 + About 布局修复（真实浏览器渲染复核）

**本轮起新增能力**：装好 Playwright + chromium + 系统依赖，已能**真实渲染页面、截图、量像素**，做到「改前看问题、改后复看」的可视化自检（不再只靠静态分析 / jsdom 猜测）。

**修复 1 — Recent Projects 卡片内容被截断**
- **问题**：卡片高度被 bento 网格 `aspect-ratio` 固定，内容比容器高 31px（实测 scrollH 386 > clientH 355），底部 "View All" 被截。
- **修复**（纯间距压缩，不删内容）：item 间距 `12→8px`、容器 `margin-top 8→2px`、每个 item 上下 `padding 10→8px`、View All `margin-top 16→10px`，合计约 −32px。
- **复核**：`overflowPx: 0`，3 个项目 + View All 全部完整显示，无截断、无滚动条。

**修复 2 — About 头像图片过小**
- **问题**：`.about-grid` 列宽 `0.85fr 1.15fr`，图:文宽度比仅 0.74，肖像被挤窄，视觉重心偏右，排版失衡。
- **修复**：列宽改为 `1fr 1fr`（等宽）。图片宽 440→518px（+18%），图:文比 0.74→1.0；4/5 竖构图下图片 518×648，成为有分量的视觉主体。
- **复核**：左图右文 50/50 平衡，符合「图片应占较大位置」的诉求。
- **附带说明**：放大后 about 区内容总高 969px > 视口 900px。因 `.snap-section` 是 `min-height:100vh`（非固定高），区块自动长高、**不裁切**；溢出的约 69px 仅为最底部「FOCUS & TOOLS 标签行 + 落款」，标题 / 整图 / bio 首屏内均完整可见。保留大图优先，故不缩图迁就一屏。

**截图存档**：`/tmp/shot-home.png`、`/tmp/shot-recent.png`、`/tmp/shot-aboutgrid.png`、`/tmp/shot-aboutfull.png`

### 📁 文件修改（本轮布局）
- `index.html`
  - `.about-grid`：`grid-template-columns` `0.85fr 1.15fr` → `1fr 1fr`
  - Recent Projects（`.top-right-card` 内联）：item 间距 / 容器 margin-top / item padding / View All margin-top 压缩约 32px


---

## 2026-05-31 - Twinora 拖动功能与仙女粉尘特效

### ✅ 完成功能

#### 1. Twinora 拖动功能修复
- **问题诊断**：
  - JavaScript 语法错误：Unicode 引号（字符码 8220/8221）导致解析失败
  - Markdown 代码块标记 ````html` 误插入 HTML 文件
  - `draggable="false"` 属性干扰鼠标事件

- **解决方案**：
  - 全文件替换 Unicode 引号为 ASCII 引号（字符码 34）
  - 删除 Markdown 标记
  - 移除 `draggable` 属性，改用 CSS `-webkit-user-drag: none`
  - 添加 `e.stopPropagation()` 防止事件冒泡
  - 添加调试日志便于排查

#### 2. 仙女粉尘拖尾特效优化
- **视觉效果**：
  - 粒子大小：4px
  - 透明度：60%
  - 颜色：统一淡金黄色（3 种色调变化）
    - `rgba(235, 200, 130, 0.6)` - 淡金色
    - `rgba(245, 215, 150, 0.6)` - 很淡的金色
    - `rgba(230, 195, 120, 0.6)` - 柔和金色
  - 发光效果：双层 box-shadow

- **动画效果**：
  - 持续时间：1.2s
  - 下落距离：30px
  - 旋转：0deg → 180deg
  - 缩放：1 → 0.1

- **生成逻辑**：
  - 生成间隔：30ms
  - 每次生成：2-3 个粒子
  - 散布范围：±30px（从 Twinora 中心散发）
  - 效果：每秒约 60-100 个粒子

#### 3. 横向滚动条功能
- 为 About Me 区域的 keywords 卡片添加横向滚动
- 自定义滚动条样式（金色主题）
- 支持鼠标拖动滚动

### 📁 文件修改

- `index.html`
  - 修复 JavaScript 语法错误
  - 优化 Twinora 拖动逻辑
  - 实现仙女粉尘特效
  - 添加横向滚动功能

### 🎨 设计特点

- **Twinora 交互**：
  - 可拖动到屏幕任意位置
  - 鼠标悬停显示随机消息
  - 点击有缩放旋转动画
  - 拖动时产生金色粉尘拖尾

- **仙女粉尘**：
  - 密集、柔和的金色粒子
  - 从 Twinora 身上散落
  - 旋转飘落效果
  - 符合 prefers-reduced-motion 无障碍标准

### 🐛 已知问题

- `showSlide` 函数报错（轮播图功能，不影响 Twinora）
- SVG path 属性错误（设计系统相关，不影响主要功能）
- favicon.ico 404（需要添加网站图标）

### 📝 待办事项

- [ ] 修复轮播图 `showSlide` 错误
- [ ] 添加 favicon.ico
- [ ] 修复 SVG path 错误
- [ ] 测试不同浏览器兼容性
- [ ] 性能优化（粒子生成可能影响低端设备）

---

## 技术栈

- 纯 HTML/CSS/JavaScript（无框架）
- 自定义拖动逻辑
- CSS 动画与 keyframes
- 粒子系统实现

## 浏览器兼容性

- Chrome/Edge: ✅ 完全支持
- Firefox: ✅ 完全支持
- Safari: ✅ 完全支持（需测试）
- 移动端: 🔄 待测试（触摸事件支持）

---

*最后更新：2026-06-02*
