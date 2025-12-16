import { promises as fs } from 'fs';
import path from 'path';

const srcDir = path.resolve(process.cwd(), 'src');
const outDir = path.resolve(process.cwd(), 'dist/scss');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyScss(fromDir, toDir) {
  const entries = await fs.readdir(fromDir, { withFileTypes: true });
  for (const entry of entries) {
    const fromPath = path.join(fromDir, entry.name);
    const toPath = path.join(toDir, entry.name);
    if (entry.isDirectory()) {
      await ensureDir(toPath);
      await copyScss(fromPath, toPath);
    } else if (entry.isFile() && entry.name.endsWith('.scss')) {
      await ensureDir(toDir);
      await fs.copyFile(fromPath, toPath);
    }
  }
}

async function main() {
  await ensureDir(outDir);
  await copyScss(srcDir, outDir);
  console.log('Copied SCSS sources to', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

