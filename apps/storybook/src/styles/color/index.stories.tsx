import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styles from './index.stories.module.css';
import '@deweyou-ui/styles';

const meta: Meta = {
  title: 'DeweyUI/Styles/Color',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const ColorSwatch = ({ name, variable }: { name: string; variable: string }) => {
  return (
    <div className={styles.colorItem}>
      <div 
        className={styles.colorSwatch} 
        style={{ 
          backgroundColor: `var(${variable})`,
          color: 'white'
        }}
      >
        {variable}
      </div>
      <div className={styles.colorInfo}>
        <div className={styles.colorName}>{name}</div>
        <div className={styles.colorValue}>{variable}</div>
      </div>
    </div>
  );
};

const ColorSection = ({ title, colors }: { title: string; colors: Array<{ name: string; variable: string }> }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.colorGrid}>
      {colors.map((color) => (
        <ColorSwatch key={color.name} name={color.name} variable={color.variable} />
      ))}
    </div>
  </div>
);

export const BaseColors: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <ColorSection 
        title="Black & White" 
        colors={[
          { name: 'Black', variable: '--do-color-black' },
          { name: 'White', variable: '--do-color-white' },
        ]}
      />

      <ColorSection 
        title="Red Colors" 
        colors={[
          { name: 'Red 50', variable: '--do-color-red-50' },
          { name: 'Red 100', variable: '--do-color-red-100' },
          { name: 'Red 200', variable: '--do-color-red-200' },
          { name: 'Red 300', variable: '--do-color-red-300' },
          { name: 'Red 400', variable: '--do-color-red-400' },
          { name: 'Red 500', variable: '--do-color-red-500' },
          { name: 'Red 600', variable: '--do-color-red-600' },
          { name: 'Red 700', variable: '--do-color-red-700' },
          { name: 'Red 800', variable: '--do-color-red-800' },
          { name: 'Red 900', variable: '--do-color-red-900' },
          { name: 'Red 950', variable: '--do-color-red-950' },
        ]}
      />
      
      <ColorSection 
        title="Orange Colors" 
        colors={[
          { name: 'Orange 50', variable: '--do-color-orange-50' },
          { name: 'Orange 100', variable: '--do-color-orange-100' },
          { name: 'Orange 200', variable: '--do-color-orange-200' },
          { name: 'Orange 300', variable: '--do-color-orange-300' },
          { name: 'Orange 400', variable: '--do-color-orange-400' },
          { name: 'Orange 500', variable: '--do-color-orange-500' },
          { name: 'Orange 600', variable: '--do-color-orange-600' },
          { name: 'Orange 700', variable: '--do-color-orange-700' },
          { name: 'Orange 800', variable: '--do-color-orange-800' },
          { name: 'Orange 900', variable: '--do-color-orange-900' },
          { name: 'Orange 950', variable: '--do-color-orange-950' },
        ]}
      />

      <ColorSection 
        title="Amber Colors" 
        colors={[
          { name: 'Amber 50', variable: '--do-color-amber-50' },
          { name: 'Amber 100', variable: '--do-color-amber-100' },
          { name: 'Amber 200', variable: '--do-color-amber-200' },
          { name: 'Amber 300', variable: '--do-color-amber-300' },
          { name: 'Amber 400', variable: '--do-color-amber-400' },
          { name: 'Amber 500', variable: '--do-color-amber-500' },
          { name: 'Amber 600', variable: '--do-color-amber-600' },
          { name: 'Amber 700', variable: '--do-color-amber-700' },
          { name: 'Amber 800', variable: '--do-color-amber-800' },
          { name: 'Amber 900', variable: '--do-color-amber-900' },
          { name: 'Amber 950', variable: '--do-color-amber-950' },
        ]}
      />

      <ColorSection 
        title="Yellow Colors" 
        colors={[
          { name: 'Yellow 50', variable: '--do-color-yellow-50' },
          { name: 'Yellow 100', variable: '--do-color-yellow-100' },
          { name: 'Yellow 200', variable: '--do-color-yellow-200' },
          { name: 'Yellow 300', variable: '--do-color-yellow-300' },
          { name: 'Yellow 400', variable: '--do-color-yellow-400' },
          { name: 'Yellow 500', variable: '--do-color-yellow-500' },
          { name: 'Yellow 600', variable: '--do-color-yellow-600' },
          { name: 'Yellow 700', variable: '--do-color-yellow-700' },
          { name: 'Yellow 800', variable: '--do-color-yellow-800' },
          { name: 'Yellow 900', variable: '--do-color-yellow-900' },
          { name: 'Yellow 950', variable: '--do-color-yellow-950' },
        ]}
      />

      <ColorSection 
        title="Green Colors" 
        colors={[
          { name: 'Green 50', variable: '--do-color-green-50' },
          { name: 'Green 100', variable: '--do-color-green-100' },
          { name: 'Green 200', variable: '--do-color-green-200' },
          { name: 'Green 300', variable: '--do-color-green-300' },
          { name: 'Green 400', variable: '--do-color-green-400' },
          { name: 'Green 500', variable: '--do-color-green-500' },
          { name: 'Green 600', variable: '--do-color-green-600' },
          { name: 'Green 700', variable: '--do-color-green-700' },
          { name: 'Green 800', variable: '--do-color-green-800' },
          { name: 'Green 900', variable: '--do-color-green-900' },
          { name: 'Green 950', variable: '--do-color-green-950' },
        ]}
      />

      <ColorSection 
        title="Blue Colors" 
        colors={[
          { name: 'Blue 50', variable: '--do-color-blue-50' },
          { name: 'Blue 100', variable: '--do-color-blue-100' },
          { name: 'Blue 200', variable: '--do-color-blue-200' },
          { name: 'Blue 300', variable: '--do-color-blue-300' },
          { name: 'Blue 400', variable: '--do-color-blue-400' },
          { name: 'Blue 500', variable: '--do-color-blue-500' },
          { name: 'Blue 600', variable: '--do-color-blue-600' },
          { name: 'Blue 700', variable: '--do-color-blue-700' },
          { name: 'Blue 800', variable: '--do-color-blue-800' },
          { name: 'Blue 900', variable: '--do-color-blue-900' },
          { name: 'Blue 950', variable: '--do-color-blue-950' },
        ]}
      />

      <ColorSection 
        title="Gray Colors" 
        colors={[
          { name: 'Gray 50', variable: '--do-color-gray-50' },
          { name: 'Gray 100', variable: '--do-color-gray-100' },
          { name: 'Gray 200', variable: '--do-color-gray-200' },
          { name: 'Gray 300', variable: '--do-color-gray-300' },
          { name: 'Gray 400', variable: '--do-color-gray-400' },
          { name: 'Gray 500', variable: '--do-color-gray-500' },
          { name: 'Gray 600', variable: '--do-color-gray-600' },
          { name: 'Gray 700', variable: '--do-color-gray-700' },
          { name: 'Gray 800', variable: '--do-color-gray-800' },
          { name: 'Gray 900', variable: '--do-color-gray-900' },
          { name: 'Gray 950', variable: '--do-color-gray-950' },
        ]}
      />

      {/* 添加缺失的颜色分类 */}
      <ColorSection 
        title="Lime Colors" 
        colors={[
          { name: 'Lime 50', variable: '--do-color-lime-50' },
          { name: 'Lime 100', variable: '--do-color-lime-100' },
          { name: 'Lime 200', variable: '--do-color-lime-200' },
          { name: 'Lime 300', variable: '--do-color-lime-300' },
          { name: 'Lime 400', variable: '--do-color-lime-400' },
          { name: 'Lime 500', variable: '--do-color-lime-500' },
          { name: 'Lime 600', variable: '--do-color-lime-600' },
          { name: 'Lime 700', variable: '--do-color-lime-700' },
          { name: 'Lime 800', variable: '--do-color-lime-800' },
          { name: 'Lime 900', variable: '--do-color-lime-900' },
          { name: 'Lime 950', variable: '--do-color-lime-950' },
        ]}
      />

      <ColorSection 
        title="Emerald Colors" 
        colors={[
          { name: 'Emerald 50', variable: '--do-color-emerald-50' },
          { name: 'Emerald 100', variable: '--do-color-emerald-100' },
          { name: 'Emerald 200', variable: '--do-color-emerald-200' },
          { name: 'Emerald 300', variable: '--do-color-emerald-300' },
          { name: 'Emerald 400', variable: '--do-color-emerald-400' },
          { name: 'Emerald 500', variable: '--do-color-emerald-500' },
          { name: 'Emerald 600', variable: '--do-color-emerald-600' },
          { name: 'Emerald 700', variable: '--do-color-emerald-700' },
          { name: 'Emerald 800', variable: '--do-color-emerald-800' },
          { name: 'Emerald 900', variable: '--do-color-emerald-900' },
          { name: 'Emerald 950', variable: '--do-color-emerald-950' },
        ]}
      />

      <ColorSection 
        title="Teal Colors" 
        colors={[
          { name: 'Teal 50', variable: '--do-color-teal-50' },
          { name: 'Teal 100', variable: '--do-color-teal-100' },
          { name: 'Teal 200', variable: '--do-color-teal-200' },
          { name: 'Teal 300', variable: '--do-color-teal-300' },
          { name: 'Teal 400', variable: '--do-color-teal-400' },
          { name: 'Teal 500', variable: '--do-color-teal-500' },
          { name: 'Teal 600', variable: '--do-color-teal-600' },
          { name: 'Teal 700', variable: '--do-color-teal-700' },
          { name: 'Teal 800', variable: '--do-color-teal-800' },
          { name: 'Teal 900', variable: '--do-color-teal-900' },
          { name: 'Teal 950', variable: '--do-color-teal-950' },
        ]}
      />

      <ColorSection 
        title="Cyan Colors" 
        colors={[
          { name: 'Cyan 50', variable: '--do-color-cyan-50' },
          { name: 'Cyan 100', variable: '--do-color-cyan-100' },
          { name: 'Cyan 200', variable: '--do-color-cyan-200' },
          { name: 'Cyan 300', variable: '--do-color-cyan-300' },
          { name: 'Cyan 400', variable: '--do-color-cyan-400' },
          { name: 'Cyan 500', variable: '--do-color-cyan-500' },
          { name: 'Cyan 600', variable: '--do-color-cyan-600' },
          { name: 'Cyan 700', variable: '--do-color-cyan-700' },
          { name: 'Cyan 800', variable: '--do-color-cyan-800' },
          { name: 'Cyan 900', variable: '--do-color-cyan-900' },
          { name: 'Cyan 950', variable: '--do-color-cyan-950' },
        ]}
      />

      <ColorSection 
        title="Sky Colors" 
        colors={[
          { name: 'Sky 50', variable: '--do-color-sky-50' },
          { name: 'Sky 100', variable: '--do-color-sky-100' },
          { name: 'Sky 200', variable: '--do-color-sky-200' },
          { name: 'Sky 300', variable: '--do-color-sky-300' },
          { name: 'Sky 400', variable: '--do-color-sky-400' },
          { name: 'Sky 500', variable: '--do-color-sky-500' },
          { name: 'Sky 600', variable: '--do-color-sky-600' },
          { name: 'Sky 700', variable: '--do-color-sky-700' },
          { name: 'Sky 800', variable: '--do-color-sky-800' },
          { name: 'Sky 900', variable: '--do-color-sky-900' },
          { name: 'Sky 950', variable: '--do-color-sky-950' },
        ]}
      />

      <ColorSection 
        title="Indigo Colors" 
        colors={[
          { name: 'Indigo 50', variable: '--do-color-indigo-50' },
          { name: 'Indigo 100', variable: '--do-color-indigo-100' },
          { name: 'Indigo 200', variable: '--do-color-indigo-200' },
          { name: 'Indigo 300', variable: '--do-color-indigo-300' },
          { name: 'Indigo 400', variable: '--do-color-indigo-400' },
          { name: 'Indigo 500', variable: '--do-color-indigo-500' },
          { name: 'Indigo 600', variable: '--do-color-indigo-600' },
          { name: 'Indigo 700', variable: '--do-color-indigo-700' },
          { name: 'Indigo 800', variable: '--do-color-indigo-800' },
          { name: 'Indigo 900', variable: '--do-color-indigo-900' },
          { name: 'Indigo 950', variable: '--do-color-indigo-950' },
        ]}
      />

      <ColorSection 
        title="Violet Colors" 
        colors={[
          { name: 'Violet 50', variable: '--do-color-violet-50' },
          { name: 'Violet 100', variable: '--do-color-violet-100' },
          { name: 'Violet 200', variable: '--do-color-violet-200' },
          { name: 'Violet 300', variable: '--do-color-violet-300' },
          { name: 'Violet 400', variable: '--do-color-violet-400' },
          { name: 'Violet 500', variable: '--do-color-violet-500' },
          { name: 'Violet 600', variable: '--do-color-violet-600' },
          { name: 'Violet 700', variable: '--do-color-violet-700' },
          { name: 'Violet 800', variable: '--do-color-violet-800' },
          { name: 'Violet 900', variable: '--do-color-violet-900' },
          { name: 'Violet 950', variable: '--do-color-violet-950' },
        ]}
      />

      <ColorSection 
        title="Purple Colors" 
        colors={[
          { name: 'Purple 50', variable: '--do-color-purple-50' },
          { name: 'Purple 100', variable: '--do-color-purple-100' },
          { name: 'Purple 200', variable: '--do-color-purple-200' },
          { name: 'Purple 300', variable: '--do-color-purple-300' },
          { name: 'Purple 400', variable: '--do-color-purple-400' },
          { name: 'Purple 500', variable: '--do-color-purple-500' },
          { name: 'Purple 600', variable: '--do-color-purple-600' },
          { name: 'Purple 700', variable: '--do-color-purple-700' },
          { name: 'Purple 800', variable: '--do-color-purple-800' },
          { name: 'Purple 900', variable: '--do-color-purple-900' },
          { name: 'Purple 950', variable: '--do-color-purple-950' },
        ]}
      />

      <ColorSection 
        title="Fuchsia Colors" 
        colors={[
          { name: 'Fuchsia 50', variable: '--do-color-fuchsia-50' },
          { name: 'Fuchsia 100', variable: '--do-color-fuchsia-100' },
          { name: 'Fuchsia 200', variable: '--do-color-fuchsia-200' },
          { name: 'Fuchsia 300', variable: '--do-color-fuchsia-300' },
          { name: 'Fuchsia 400', variable: '--do-color-fuchsia-400' },
          { name: 'Fuchsia 500', variable: '--do-color-fuchsia-500' },
          { name: 'Fuchsia 600', variable: '--do-color-fuchsia-600' },
          { name: 'Fuchsia 700', variable: '--do-color-fuchsia-700' },
          { name: 'Fuchsia 800', variable: '--do-color-fuchsia-800' },
          { name: 'Fuchsia 900', variable: '--do-color-fuchsia-900' },
          { name: 'Fuchsia 950', variable: '--do-color-fuchsia-950' },
        ]}
      />

      <ColorSection 
        title="Pink Colors" 
        colors={[
          { name: 'Pink 50', variable: '--do-color-pink-50' },
          { name: 'Pink 100', variable: '--do-color-pink-100' },
          { name: 'Pink 200', variable: '--do-color-pink-200' },
          { name: 'Pink 300', variable: '--do-color-pink-300' },
          { name: 'Pink 400', variable: '--do-color-pink-400' },
          { name: 'Pink 500', variable: '--do-color-pink-500' },
          { name: 'Pink 600', variable: '--do-color-pink-600' },
          { name: 'Pink 700', variable: '--do-color-pink-700' },
          { name: 'Pink 800', variable: '--do-color-pink-800' },
          { name: 'Pink 900', variable: '--do-color-pink-900' },
          { name: 'Pink 950', variable: '--do-color-pink-950' },
        ]}
      />

      <ColorSection 
        title="Rose Colors" 
        colors={[
          { name: 'Rose 50', variable: '--do-color-rose-50' },
          { name: 'Rose 100', variable: '--do-color-rose-100' },
          { name: 'Rose 200', variable: '--do-color-rose-200' },
          { name: 'Rose 300', variable: '--do-color-rose-300' },
          { name: 'Rose 400', variable: '--do-color-rose-400' },
          { name: 'Rose 500', variable: '--do-color-rose-500' },
          { name: 'Rose 600', variable: '--do-color-rose-600' },
          { name: 'Rose 700', variable: '--do-color-rose-700' },
          { name: 'Rose 800', variable: '--do-color-rose-800' },
          { name: 'Rose 900', variable: '--do-color-rose-900' },
          { name: 'Rose 950', variable: '--do-color-rose-950' },
        ]}
      />

      <ColorSection 
        title="Slate Colors" 
        colors={[
          { name: 'Slate 50', variable: '--do-color-slate-50' },
          { name: 'Slate 100', variable: '--do-color-slate-100' },
          { name: 'Slate 200', variable: '--do-color-slate-200' },
          { name: 'Slate 300', variable: '--do-color-slate-300' },
          { name: 'Slate 400', variable: '--do-color-slate-400' },
          { name: 'Slate 500', variable: '--do-color-slate-500' },
          { name: 'Slate 600', variable: '--do-color-slate-600' },
          { name: 'Slate 700', variable: '--do-color-slate-700' },
          { name: 'Slate 800', variable: '--do-color-slate-800' },
          { name: 'Slate 900', variable: '--do-color-slate-900' },
          { name: 'Slate 950', variable: '--do-color-slate-950' },
        ]}
      />

      <ColorSection 
        title="Zinc Colors" 
        colors={[
          { name: 'Zinc 50', variable: '--do-color-zinc-50' },
          { name: 'Zinc 100', variable: '--do-color-zinc-100' },
          { name: 'Zinc 200', variable: '--do-color-zinc-200' },
          { name: 'Zinc 300', variable: '--do-color-zinc-300' },
          { name: 'Zinc 400', variable: '--do-color-zinc-400' },
          { name: 'Zinc 500', variable: '--do-color-zinc-500' },
          { name: 'Zinc 600', variable: '--do-color-zinc-600' },
          { name: 'Zinc 700', variable: '--do-color-zinc-700' },
          { name: 'Zinc 800', variable: '--do-color-zinc-800' },
          { name: 'Zinc 900', variable: '--do-color-zinc-900' },
          { name: 'Zinc 950', variable: '--do-color-zinc-950' },
        ]}
      />

      <ColorSection 
        title="Neutral Colors" 
        colors={[
          { name: 'Neutral 50', variable: '--do-color-neutral-50' },
          { name: 'Neutral 100', variable: '--do-color-neutral-100' },
          { name: 'Neutral 200', variable: '--do-color-neutral-200' },
          { name: 'Neutral 300', variable: '--do-color-neutral-300' },
          { name: 'Neutral 400', variable: '--do-color-neutral-400' },
          { name: 'Neutral 500', variable: '--do-color-neutral-500' },
          { name: 'Neutral 600', variable: '--do-color-neutral-600' },
          { name: 'Neutral 700', variable: '--do-color-neutral-700' },
          { name: 'Neutral 800', variable: '--do-color-neutral-800' },
          { name: 'Neutral 900', variable: '--do-color-neutral-900' },
          { name: 'Neutral 950', variable: '--do-color-neutral-950' },
        ]}
      />

      <ColorSection 
        title="Stone Colors" 
        colors={[
          { name: 'Stone 50', variable: '--do-color-stone-50' },
          { name: 'Stone 100', variable: '--do-color-stone-100' },
          { name: 'Stone 200', variable: '--do-color-stone-200' },
          { name: 'Stone 300', variable: '--do-color-stone-300' },
          { name: 'Stone 400', variable: '--do-color-stone-400' },
          { name: 'Stone 500', variable: '--do-color-stone-500' },
          { name: 'Stone 600', variable: '--do-color-stone-600' },
          { name: 'Stone 700', variable: '--do-color-stone-700' },
          { name: 'Stone 800', variable: '--do-color-stone-800' },
          { name: 'Stone 900', variable: '--do-color-stone-900' },
          { name: 'Stone 950', variable: '--do-color-stone-950' },
        ]}
      />

      <ColorSection 
        title="Light Colors" 
        colors={[
          { name: 'Light 50', variable: '--do-color-light-50' },
          { name: 'Light 100', variable: '--do-color-light-100' },
          { name: 'Light 200', variable: '--do-color-light-200' },
          { name: 'Light 300', variable: '--do-color-light-300' },
          { name: 'Light 400', variable: '--do-color-light-400' },
          { name: 'Light 500', variable: '--do-color-light-500' },
          { name: 'Light 600', variable: '--do-color-light-600' },
          { name: 'Light 700', variable: '--do-color-light-700' },
          { name: 'Light 800', variable: '--do-color-light-800' },
          { name: 'Light 900', variable: '--do-color-light-900' },
          { name: 'Light 950', variable: '--do-color-light-950' },
        ]}
      />

      <ColorSection 
        title="Dark Colors" 
        colors={[
          { name: 'Dark 50', variable: '--do-color-dark-50' },
          { name: 'Dark 100', variable: '--do-color-dark-100' },
          { name: 'Dark 200', variable: '--do-color-dark-200' },
          { name: 'Dark 300', variable: '--do-color-dark-300' },
          { name: 'Dark 400', variable: '--do-color-dark-400' },
          { name: 'Dark 500', variable: '--do-color-dark-500' },
          { name: 'Dark 600', variable: '--do-color-dark-600' },
          { name: 'Dark 700', variable: '--do-color-dark-700' },
          { name: 'Dark 800', variable: '--do-color-dark-800' },
          { name: 'Dark 900', variable: '--do-color-dark-900' },
          { name: 'Dark 950', variable: '--do-color-dark-950' },
        ]}
      />
    </div>
  ),
};

const ThemeToggle = ({ theme, onToggle }: { theme: string; onToggle: () => void }) => (
  <div style={{ 
    position: 'sticky', 
    top: '16px', 
    zIndex: 1000, 
    display: 'flex', 
    justifyContent: 'flex-end',
    marginBottom: '24px'
  }}>
    <button 
      onClick={onToggle}
      style={{
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      {theme === 'light' ? '🌙 切换到暗色模式' : '☀️ 切换到亮色模式'}
    </button>
  </div>
);

const TextColorItem = ({ name, value }: { name: string; value: string }) => (
  <div className={styles.textColorItem}>
    <div className={styles.textColorName} style={{ color: value }}>
      {name}
    </div>
    <div className={styles.textColorValue}>{value}</div>
    <p style={{ color: value, margin: '8px 0 0 0' }}>
      这是一段使用 {name} 颜色的示例文本，用于展示文本在不同颜色下的显示效果。
    </p>
  </div>
);

export const TextColors: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
      <div 
        style={{ 
          padding: '24px',
          minHeight: '100vh',
          backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a',
          color: theme === 'light' ? '#000' : '#fff',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: theme === 'light' ? '#000' : '#fff' }}>
            Text Colors - {theme === 'light' ? '亮色模式' : '暗色模式'}
          </h2>
          <div className={styles.textColorGrid}>
            <TextColorItem name="Text Title" value="var(--do-text-title)" />
            <TextColorItem name="Text Caption" value="var(--do-text-caption)" />
            <TextColorItem name="Text Disable" value="var(--do-text-disable)" />
            <TextColorItem name="Text Placeholder" value="var(--do-text-placeholder)" />
            <TextColorItem name="Text Primary" value="var(--do-text-primary)" />
            <TextColorItem name="Text Secondary" value="var(--do-text-secondary)" />
            <TextColorItem name="Text Accent" value="var(--do-text-accent)" />
            <TextColorItem name="Text Error" value="var(--do-text-error)" />
            <TextColorItem name="Text Warning" value="var(--do-text-warning)" />
            <TextColorItem name="Text Success" value="var(--do-text-success)" />
            <TextColorItem name="Text Info" value="var(--do-text-info)" />
            <TextColorItem name="Text Muted" value="var(--do-text-muted)" />
          </div>
        </div>

        {/* 添加对比度测试区域 */}
        <div className={styles.section} style={{ marginTop: '48px' }}>
          <h3 className={styles.sectionTitle} style={{ color: theme === 'light' ? '#000' : '#fff' }}>
            对比度测试区域
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px',
            marginTop: '24px'
          }}>
            <div style={{ 
              padding: '24px', 
              borderRadius: '8px', 
              backgroundColor: theme === 'light' ? '#f5f5f5' : '#2d2d2d'
            }}>
              <h4 style={{ color: 'var(--do-text-title)', marginBottom: '16px' }}>标题文本</h4>
              <p style={{ color: 'var(--do-text-primary)' }}>这是一段主要文本内容，用于测试在背景色下的可读性。</p>
              <p style={{ color: 'var(--do-text-secondary)' }}>这是一段次要文本内容，通常用于辅助说明。</p>
              <p style={{ color: 'var(--do-text-caption)' }}>这是一段说明文本，用于提供额外的信息。</p>
            </div>
            
            <div style={{ 
              padding: '24px', 
              borderRadius: '8px', 
              backgroundColor: theme === 'light' ? '#e8f4fd' : '#1e3a5f'
            }}>
              <h4 style={{ color: 'var(--do-text-info)', marginBottom: '16px' }}>信息区域</h4>
              <p style={{ color: 'var(--do-text-info)' }}>这是一个信息提示区域，用于展示重要的通知或提示信息。</p>
              <p style={{ color: 'var(--do-text-muted)' }}>辅助性的补充说明文本。</p>
            </div>
            
            <div style={{ 
              padding: '24px', 
              borderRadius: '8px', 
              backgroundColor: theme === 'light' ? '#fef7f7' : '#4a1e1e'
            }}>
              <h4 style={{ color: 'var(--do-text-error)', marginBottom: '16px' }}>错误区域</h4>
              <p style={{ color: 'var(--do-text-error)' }}>这是一个错误提示区域，用于展示操作失败或异常情况。</p>
              <p style={{ color: 'var(--do-text-warning)' }}>警告信息：请注意操作风险。</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};