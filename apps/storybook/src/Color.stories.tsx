import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
// Styles are imported globally in preview.ts
import '@deweyou-ui/styles/index.css';
import styles from './Color.stories.module.css';


// 定义颜色类别和对应的颜色名称
const colorCategories = {
  'Red': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Orange': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Amber': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Yellow': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Lime': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Green': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Emerald': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Teal': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Cyan': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Sky': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Blue': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Indigo': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Violet': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Purple': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Fuchsia': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Pink': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Rose': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Slate': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Gray': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Zinc': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Neutral': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Stone': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Light': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  'Dark': [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};

// 特殊颜色
const specialColors = ['black', 'white'];

// 定义组件属性接口
interface ColorPaletteProps {
  color?: string; // 可选，指定要展示的颜色类别
  showSpecialColors?: boolean; // 可选，是否显示特殊颜色
  onlySpecialColors?: boolean; // 可选，是否只显示特殊颜色
}

// 创建一个颜色展示组件
const ColorPalette: React.FC<ColorPaletteProps> = ({ color, showSpecialColors = false, onlySpecialColors = false }) => {
  // 检查是否只显示特殊颜色
  const isSpecialColorSelected = color && color.toLowerCase() === 'special';
  const shouldShowOnlySpecialColors = isSpecialColorSelected || onlySpecialColors;
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Color Palette</h1>

      {/* 特殊颜色 */}
      {(showSpecialColors || shouldShowOnlySpecialColors) && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Special Colors</h2>
          <div className={styles.specialColorsGrid}>
            {specialColors.map((colorName) => {
              const cssVar = `--do-color-${colorName}`;
              return (
                <div key={colorName} className={styles.colorItem}>
                  <div
                    className={styles.colorSquare}
                    style={{ backgroundColor: `var(${cssVar})` }}
                  ></div>
                  <span className={styles.colorName}>{colorName}</span>
                  <span className={styles.colorVar}>{cssVar}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 颜色类别 */}
      {!shouldShowOnlySpecialColors && Object.entries(colorCategories).map(([category, shades]) => {
        // 如果指定了颜色类别，只展示该类别
        if (color && category.toLowerCase() !== color.toLowerCase()) {
          return null;
        }
        
        return (
          <div key={category} className={styles.section}>
            <h2 className={styles.sectionTitle}>{category}</h2>
            <div className={styles.colorsGrid}>
              {shades.map((shade) => {
                const colorName = `${category.toLowerCase()}-${shade}`;
                const cssVar = `--do-color-${colorName}`;
                return (
                  <div key={shade} className={styles.colorItem}>
                    <div
                      className={styles.colorSquare}
                      style={{ backgroundColor: `var(${cssVar})` }}
                    ></div>
                    <span className={styles.colorName}>{shade}</span>
                    <span className={styles.colorVar}>{cssVar}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const meta: Meta<ColorPaletteProps> = {
  title: 'DeweyUI/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<ColorPaletteProps>;

// 展示所有颜色
export const AllColors: Story = {
  args: {
    showSpecialColors: true
  }
};

// 只展示特殊颜色
export const SpecialColors: Story = {
  args: {
    color: 'special'
  }
};

// 为每个颜色类别创建子故事
export const Red: Story = {
  args: {
    color: 'Red'
  }
};

export const Orange: Story = {
  args: {
    color: 'Orange'
  }
};

export const Amber: Story = {
  args: {
    color: 'Amber'
  }
};

export const Yellow: Story = {
  args: {
    color: 'Yellow'
  }
};

export const Lime: Story = {
  args: {
    color: 'Lime'
  }
};

export const Green: Story = {
  args: {
    color: 'Green'
  }
};

export const Emerald: Story = {
  args: {
    color: 'Emerald'
  }
};

export const Teal: Story = {
  args: {
    color: 'Teal'
  }
};

export const Cyan: Story = {
  args: {
    color: 'Cyan'
  }
};

export const Sky: Story = {
  args: {
    color: 'Sky'
  }
};

export const Blue: Story = {
  args: {
    color: 'Blue'
  }
};

export const Indigo: Story = {
  args: {
    color: 'Indigo'
  }
};

export const Violet: Story = {
  args: {
    color: 'Violet'
  }
};

export const Purple: Story = {
  args: {
    color: 'Purple'
  }
};

export const Fuchsia: Story = {
  args: {
    color: 'Fuchsia'
  }
};

export const Pink: Story = {
  args: {
    color: 'Pink'
  }
};

export const Rose: Story = {
  args: {
    color: 'Rose'
  }
};

export const Slate: Story = {
  args: {
    color: 'Slate'
  }
};

export const Gray: Story = {
  args: {
    color: 'Gray'
  }
};

export const Zinc: Story = {
  args: {
    color: 'Zinc'
  }
};

export const Neutral: Story = {
  args: {
    color: 'Neutral'
  }
};

export const Stone: Story = {
  args: {
    color: 'Stone'
  }
};

export const Light: Story = {
  args: {
    color: 'Light'
  }
};

export const Dark: Story = {
  args: {
    color: 'Dark'
  }
};
