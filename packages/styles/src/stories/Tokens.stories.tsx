import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const tokens = {
  light: {
    'color.background': '#ffffff',
    'color.surface': '#f8fafc',
    'color.border': '#e2e8f0',
    'color.text': '#0f172a',
    'color.muted': '#475569',
    'color.primary': '#2563eb',
    'color.primary.hover': '#1d4ed8',
    'color.primary.active': '#1e40af',
    'color.focus': '#f97316',
  },
  dark: {
    'color.background': '#0f172a',
    'color.surface': '#111827',
    'color.border': '#1f2937',
    'color.text': '#e2e8f0',
    'color.muted': '#94a3b8',
    'color.primary': '#60a5fa',
    'color.primary.hover': '#3b82f6',
    'color.primary.active': '#2563eb',
    'color.focus': '#f97316',
  },
} satisfies Record<string, Record<string, string>>;

const themes = Object.entries(tokens);

const meta: Meta = {
  title: 'Styles/Color Tokens',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj;

const swatchStyle: CSSProperties = {
  width: '100%',
  height: '48px',
  borderRadius: '8px',
};

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {themes.map(([themeName, themeTokens]) => (
        <section
          key={themeName}
          data-theme={themeName}
          style={{
            minWidth: '240px',
            flex: '1 1 280px',
            padding: '1.5rem',
            borderRadius: '1rem',
            background: 'var(--dy-color-surface)',
            color: 'var(--dy-color-text)',
            border: '1px solid var(--dy-color-border)',
          }}
        >
          <header style={{ marginBottom: '1rem' }}>
            <h2 style={{ textTransform: 'capitalize', marginBottom: '0.25rem' }}>
              {themeName}
              {' '}
              theme
            </h2>
            <code>@deweyou-ui/styles/tokens.css</code>
          </header>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {Object.entries(themeTokens)
              .filter(([token]) => token.startsWith('color.'))
              .map(([token, value]) => (
                <article
                  key={`${themeName}-${token}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '0.75rem',
                    alignItems: 'center',
                  }}
                >
                  <div style={{
                    ...swatchStyle,
                    background: value,
                    border: token.includes('background') ? '1px solid #e2e8f0' : 'none',
                  }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>{token}</div>
                    <code>{value}</code>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
