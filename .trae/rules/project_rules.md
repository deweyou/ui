# 【必要步骤】核心执行原则

## 【必要步骤】 AGENTS.md 强制读取 SOP

**步骤 1：确定任务关联目录**
- 文件/目录修改任务：目标文件/目录所在位置
- 全局任务（如项目分析）：项目根目录
- 多目录任务：涉及的每个核心目录

**步骤 2：查找 AGENTS.md 文件**
1. 在任务关联目录直接查找
2. 如未找到，向上遍历父级目录直至项目根目录
3. 不查找无关目录

**步骤 3：优先级判断**
- 离任务关联目录越近的 AGENTS.md 权重越高
- 优先遵循最近的 AGENTS.md 内容
- 如有多个，综合考虑但以最近的为准

**步骤 4：执行任务**
- 必须在读取相关 AGENTS.md 后再执行任何任务
- 严格遵循 AGENTS.md 中定义的项目规范
- 如 AGENTS.md 与其他文档冲突，以 AGENTS.md 为准

# 关键示例

## 文件修改任务
**任务**：修改 `packages/react/src/components/Button.tsx`
**AGENTS.md 查找顺序**：
1. `packages/react/src/components/AGENTS.md`（最高）
2. `packages/react/src/AGENTS.md`
3. `packages/react/AGENTS.md`
4. `packages/AGENTS.md`
5. `AGENTS.md`（项目根目录，最低）

## 多目录任务
**任务**：在 `apps/storybook/` 中创建对应 `packages/styles/` 的故事
**AGENTS.md 查找顺序**：
1. `apps/storybook/AGENTS.md`（任务执行目录，最高）
2. `packages/styles/AGENTS.md`（相关包目录，次高）
3. 各自父级目录的 AGENTS.md

# 【必要步骤】注意事项
- 交流全程使用中文
- 如找不到 AGENTS.md，需在任务开始前告知用户
- 如 AGENTS.md 内容不完整或有歧义，请求用户澄清