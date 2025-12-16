# DeweyUI Storybook

## 项目概述

DeweyUI Storybook 是一个用于展示和测试 DeweyUI 组件库的交互式文档平台。它提供了组件的实时演示、属性配置和使用示例，帮助开发者快速了解和使用 DeweyUI 组件。

## 项目结构

```
/Users/deweyou/Documents/codes/ui/apps/storybook/
├── .storybook/
│   ├── main.ts          # Storybook 主配置文件
│   └── preview.ts       # Storybook 预览配置文件
├── src/
│   ├── react/           # 对应 packages/react 的 Storybook 故事
│   │   ├── button/      # Button 组件故事文件夹（小写+横线命名）
│   │   │   └── index.stories.tsx  # Button 组件故事
│   ├── styles/          # 对应 packages/styles 的 Storybook 故事
│   │   ├── color/       # Color 组件故事文件夹（小写+横线命名）
│   │   │   ├── index.stories.module.css  # Color 组件样式
│   │   │   └── index.stories.tsx         # Color 组件故事
│   └── css-modules.d.ts          # CSS 模块类型定义
├── package.json         # 项目依赖配置
└── tsconfig.json        # TypeScript 配置
```

## 开发规范

### 目录结构规范

Storybook 项目的 `src` 目录结构需要与 `packages` 目录保持一致：

| Storybook 目录 | 对应 Packages 目录 | 用途 |
|----------------|--------------------|------|
| `src/react/` | `packages/react/` | 放置 React 组件库的 Storybook 故事 |
| `src/styles/` | `packages/styles/` | 放置样式库的 Storybook 故事 |

### 组件故事命名规范

- 组件故事文件名称：`index.stories.tsx`
- 样式文件名称：`index.stories.module.css`
- 每个组件的故事文件应该放在对应的包目录下的组件文件夹中

### 组件故事组织规范

- 每个组件应该有一个独立的故事文件，放置在对应包的组件文件夹中
- 组件故事文件夹使用小写 + 横线的命名规范（kebab-case）
- 故事文件应该包含组件的元数据配置
- 应该为组件的不同变体创建不同的故事
- 故事的标题应该遵循 `DeweyUI/[Component]` 格式

### 示例：创建 React 组件故事

```tsx
// src/react/button/index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@deweyou-ui/react';

const meta: Meta<typeof Button> = {
  title: 'DeweyUI/Button', // 遵循 DeweyUI/[Component] 格式
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
```

### 示例：创建 Styles 组件故事

```tsx
// src/styles/color/index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '@deweyou-ui/styles/index.css';
import styles from './index.stories.module.css';

// 颜色组件故事实现...

const meta: Meta<ColorPaletteProps> = {
  title: 'DeweyUI/Colors', // 遵循 DeweyUI/[Component] 格式
  component: ColorPalette,
  parameters: {
    layout: 'centered',
  },
};

// ...
```

## 安装和运行

### 安装依赖

```bash
# 在项目根目录
npm install

# 或在 storybook 目录
cd apps/storybook
npm install
```

### 运行 Storybook

```bash
# 或在 storybook 目录
cd apps/storybook
npm run storybook
```

Storybook 将会在 `http://localhost:6006` 启动。

## 开发指南

### 添加新组件故事

1. 确定组件所属的包（react 或 styles）
2. 在对应包目录下创建组件文件夹，使用小写 + 横线的命名规范
3. 在组件文件夹内创建故事文件 `index.stories.tsx`
4. 导入组件和 Storybook 类型
5. 定义组件的元数据和默认属性，标题遵循 `DeweyUI/[Component]` 格式
6. 创建不同的故事变体

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '@deweyou-ui/react';

const meta: Meta<typeof ComponentName> = {
  title: 'DeweyUI/ComponentName', // 遵循 DeweyUI/[Component] 格式
  component: ComponentName,
  args: {
    // 默认属性
  },
};

export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    // 变体属性
  },
};
```

### 配置 Storybook

Storybook 配置文件位于 `.storybook/` 目录下：

- `main.ts`：配置故事文件位置、添加插件和框架选项
- `preview.ts`：配置全局样式、参数和装饰器


