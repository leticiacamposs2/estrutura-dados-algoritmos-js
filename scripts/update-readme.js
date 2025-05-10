const fs = require('fs');
const path = require('path');

// Corrija a raiz para ser a raiz do projeto (um nível acima da pasta scripts)
const ROOT = path.resolve(__dirname, '..');
const README = path.join(ROOT, 'README.md');

const IGNORE = [
    'node_modules', '.git', '.DS_Store', 'package-lock.json', 'scripts'
];

function tree(dir, prefix = '') {
    const items = fs.readdirSync(dir).filter(item => !IGNORE.includes(item));
    let output = '';
    items.forEach((item, idx) => {
        const fullPath = path.join(dir, item);
        const isDir = fs.statSync(fullPath).isDirectory();
        const isLast = idx === items.length - 1;
        output += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;
        if (isDir) {
            output += tree(fullPath, prefix + (isLast ? '    ' : '│   '));
        }
    });
    return output;
}

function updateReadme() {
    const readmeContent = fs.readFileSync(README, 'utf8');
    const start = readmeContent.indexOf('```\nestrutura-dados-algoritmos-js');
    const end = readmeContent.indexOf('```', start + 3);

    if (start === -1 || end === -1) {
        console.error('Estrutura de projeto não encontrada no README.');
        process.exit(1);
    }

    const before = readmeContent.slice(0, start);
    const after = readmeContent.slice(end + 3);

    const treeStr = '```\nestrutura-dados-algoritmos-js\n' +
        tree(ROOT)
            .split('\n')
            .filter(line => line.trim() !== '')
            .join('\n') +
        '\n```';

    const newReadme = before + treeStr + after;
    fs.writeFileSync(README, newReadme, 'utf8');
    console.log('README.md atualizado com a nova estrutura de pastas!');
}

updateReadme();