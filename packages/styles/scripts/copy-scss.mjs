import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'src');
const distScssDir = join(root, 'dist', 'scss');
const entries = ['index.scss', 'reset.scss', 'tokens.scss'];

await mkdir(distScssDir, { recursive: true });
await Promise.all(
  entries.map(entry => cp(join(srcDir, entry), join(distScssDir, entry))),
);
