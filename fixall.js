const fs = require('fs');
const path = require('path');
const glob = require('fs');

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('\r\n')) {
    const fixed = content.replace(/\r\n/g, '\n');
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = dir + '/' + file;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && file !== 'node_modules' && file !== '.next') {
      walkDir(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fixFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('All done');
