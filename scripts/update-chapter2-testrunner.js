const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../src/chapter-2/00-TestRunner.html');
const chapter2Path = path.join(__dirname, '../src/chapter-2');

// 1. Lê todos os arquivos JS que começam com 10-, 11-, 12-, etc. e ignora 00-TestRunner.js
const files = fs.readdirSync(chapter2Path)
    .filter(f =>
        /^\d{2,}-.*\.js$/.test(f) &&
        f !== '00-TestRunner.js'
    )
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

// 2. Gera os <option>
const options = [
    `<option value="">Selecione...</option>`,
    ...files.map(f => `<option value="${f}">${f}</option>`)
].join('\n                ');

// 3. Lê o HTML atual
let html = fs.readFileSync(htmlPath, 'utf8');

// 4. Substitui o bloco de <option> dentro do <select id="scriptSelect">
html = html.replace(
    /(<select[^>]*id="scriptSelect"[^>]*>)[\s\S]*?(<\/select>)/,
    `$1\n                ${options}\n            $2`
);

// 5. Salva o HTML atualizado
fs.writeFileSync(htmlPath, html, 'utf8');
console.log('chapter-2/00-TestRunner.html atualizado com os novos scripts!');