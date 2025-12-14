# DeweyUI AGENTS 指南

## 项目概述

DeweyUI 是一个基于 React 19 的现代化 UI 组件库，采用 TypeScript 开发，支持 SCSS 样式系统。项目使用 pnpm 工作区管理，包含核心组件库、样式系统和示例应用。

## 项目结构

```
/ui
├── .trae/              # Trae IDE 配置
│   └── rules/          # 项目规则配置
├── apps/               # 应用示例
│   ├── doc/            # Next.js 文档网站
│   └── storybook/      # Storybook 组件展示
├── packages/           # 核心包
│   ├── config/         # ESLint 和 Stylelint 配置
│   ├── react/          # React 组件库
│   └── styles/         # 样式包（SCSS 和 CSS 令牌）
├── package.json        # 项目根配置
└── pnpm-workspace.yaml # 工作区配置
```

## 开发环境要求

- **Node.js 版本**：22.21.1
- **pnpm 版本**：10.12.4

## 开发流程

### 安装依赖

```bash
pnpm setup
```

### 构建项目

```bash
pnpm build
```

### 运行 Storybook

```bash
cd apps/storybook
pnpm dev
```

### 运行文档网站

```bash
cd apps/doc
pnpm dev
```

### 代码检查

```bash
pnpm lint
```

## 开发规范

### 配置抽象

- monorepo 中所有 packages 的 tsconfig、eslint 和 stylelint 配置实现都抽象封装在 `/packages/config` 中
- 子包通过继承该配置进行使用，避免重复定义

### 依赖管理

- 所有开发依赖（devDependencies）的版本号约束在项目根目录 `package.json` 中
- 子包的 `package.json` 中使用 `"*"` 引用依赖版本，确保版本统一

### 样式开发

- 禁止使用 Tailwind CSS
- 实现样式时使用 `module.css` 或 `modules.less` 格式

### 命名规范

- 文件夹和文件名（包括组件文件）均采用小写 + 横线（kebab-case）的命名方式
- 禁止使用小驼峰、大驼峰或下划线的命名方式

### 模块导出

- 使用 `export` 而非 `export default` 进行模块导出
- 每个文件夹必须包含 `index.ts` 文件，统一导出该文件夹下的所有模块
