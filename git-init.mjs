import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

const dir = 'c:\\Users\\TOMERLAC\\OneDrive - AMDOCS\\Desktop\\Dad';

async function main() {
  console.log('Initializing Git repository...');
  await git.init({ fs, dir, defaultBranch: 'main' });
  console.log('Initialized repository.');

  // Read all files recursively (ignoring node_modules, dist, .git, etc.)
  function getFiles(currentDir, fileList = []) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      if (['node_modules', 'dist', '.git', '.astro'].includes(file)) continue;
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getFiles(filePath, fileList);
      } else {
        const relPath = path.relative(dir, filePath).replace(/\\/g, '/');
        fileList.push(relPath);
      }
    }
    return fileList;
  }

  const allFiles = getFiles(dir);
  console.log(`Adding ${allFiles.length} files...`);
  for (const filepath of allFiles) {
    await git.add({ fs, dir, filepath });
  }

  console.log('Committing...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Tomer Lach',
      email: 'tomerlach@gmail.com',
    },
    message: 'Initial commit: Yakov Lach personal website',
  });
  console.log('Committed successfully! SHA:', sha);

  // Set remote origin
  console.log('Setting remote origin...');
  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url: 'https://github.com/lachtomer/Yacovlakh.git',
    force: true,
  });
  console.log('Remote origin set to https://github.com/lachtomer/Yacovlakh.git');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
