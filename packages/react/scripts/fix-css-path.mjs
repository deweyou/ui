import process from 'node:process';
import { access, constants, mkdir, rename, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const source = join(distDir, 'button.css');
const targetDir = join(distDir, 'styles');
const target = join(targetDir, 'button.css');

try {
  await access(source, constants.F_OK);
}
catch (error) {
  if (error && 'code' in error && error.code === 'ENOENT') {
    process.exit(0);
  }
  throw error;
}

await mkdir(targetDir, { recursive: true });

try {
  await rm(target, { force: true });
}
catch (error) {
  if (!(error && 'code' in error && error.code === 'ENOENT')) {
    throw error;
  }
}

await rename(source, target);
