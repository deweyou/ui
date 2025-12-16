# @deweyou-ui/styles AGENTS 指南

## 包概述

@deweyou-ui/styles 是 DeweyUI 组件库的样式系统包，提供基于 SCSS 的样式定义、颜色令牌和重置样式。该包支持 CSS 和 SCSS 两种格式的导出，便于在不同项目中使用。

## 目录结构

```
/packages/styles
├── scripts/              # 构建脚本
├── src/                  # 源代码
│   ├── tokens/           # 颜色和样式令牌
│   ├── variables/        # 变量定义
│   ├── index.scss        # 主入口文件
│   └── reset.scss        # 重置样式
├── .stylelintrc.json     # Stylelint 配置
├── package.json          # 包配置
└── vite.config.ts        # Vite 构建配置
```

## 功能特性

- 提供完整的 CSS 重置样式
- 定义了一套完整的颜色令牌系统
- 支持 CSS 和 SCSS 两种格式导出
- 使用模块化设计，便于按需导入
- 与 DeweyUI 组件库无缝集成

## 导出内容

### CSS 格式

- `./index.css` - 主样式文件（包含重置样式和颜色令牌）
- `./reset.css` - 仅重置样式
- `./tokens.css` - 仅颜色令牌

### SCSS 格式

- `./index.scss` - 主样式文件
- `./reset.scss` - 仅重置样式
- `./token.scss` - 仅颜色令牌
- `./variables.scss` - 变量定义

## 使用方法

### 安装

```bash
pnpm add @deweyou-ui/styles
```

### 导入 CSS

```js
// 导入完整样式
import '@deweyou-ui/styles/index.css';

// 仅导入重置样式
import '@deweyou-ui/styles/reset.css';

// 仅导入颜色令牌
import '@deweyou-ui/styles/tokens.css';
```

### 导入 SCSS

```scss
// 导入完整样式
@use '@deweyou-ui/styles/index.scss';

// 仅导入重置样式
@use '@deweyou-ui/styles/reset.scss';

// 仅导入颜色令牌
@use '@deweyou-ui/styles/token.scss';

// 仅导入变量
@use '@deweyou-ui/styles/variables.scss';
```

## 开发规范

### 样式开发

- 禁止使用 Tailwind CSS
- 实现样式时使用 SCSS 语法
- 颜色和变量定义在 `tokens/` 和 `variables/` 目录中

### 命名规范

- 文件夹和文件名采用小写 + 横线（kebab-case）命名方式
- 样式类名使用 BEM 命名规范

### 构建流程

```bash
# 构建包
pnpm build

# 运行样式检查
pnpm lint
```

## 配置说明

- Stylelint 配置继承自 `@deweyou-ui/config`
- 构建使用 Vite 配置，支持 CSS 和 SCSS 输出