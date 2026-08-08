const ua = process.env.npm_config_user_agent || '';

// If the user agent string doesn't mention pnpm, abort with instructions.
if (!ua.includes('pnpm')) {
  console.error('\n\u26A0\uFE0F This repository uses pnpm as the package manager.');
  console.error('Please install pnpm or enable Corepack before running installs.');
  console.error('\nInstall pnpm globally:');
  console.error('  npm install -g pnpm');
  console.error('\nOr enable via Corepack (recommended if Node >=16.14 / 18+):');
  console.error('  corepack enable');
  console.error('  corepack prepare pnpm@latest --activate');
  console.error('\nAfter installing, re-run your install command. Aborting install.\n');
  process.exit(1);
}

process.exit(0);
