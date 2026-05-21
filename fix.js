const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Contact.tsx', 'utf8');
content = content.replace(/\r\n/g, '\n');
content = content.replace(/\n{3,}/g, '\n\n');
fs.writeFileSync('src/components/sections/Contact.tsx', content, 'utf8');
console.log('Done');
