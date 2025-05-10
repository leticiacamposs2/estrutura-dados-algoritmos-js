const select = document.getElementById('scriptSelect');
const consoleHint = document.getElementById('consoleHint');
const scriptDescription = document.getElementById('scriptDescription');
let currentScript = null;

const descriptions = {
    "10-letconst.js": "Demonstra a diferença entre var, let e const em JavaScript. Mostra como var permite redeclaração, enquanto let e const não permitem. Também exemplifica a imutabilidade de const para valores primitivos e a possibilidade de alterar propriedades de objetos declarados com const. Os resultados são exibidos no console.",
    "11-variableScope.js": "Demonstra o escopo de variáveis em JavaScript utilizando var, let e const. Mostra como variáveis declaradas em diferentes escopos (global, função e bloco) se comportam, além de exemplos de shadowing e reatribuição. Os resultados são exibidos no console.",
    "12-stringTemplates.js": "Demonstra o uso de templates literais em JavaScript. Mostra como criar strings multilinha e interpolar variáveis dentro de strings usando crase (`) em vez de aspas simples ou duplas. Os resultados são exibidos no console.",
};

select.addEventListener('change', function () {

    // Remove o script anterior, se houver
    if (currentScript) {
        document.body.removeChild(currentScript);
        currentScript = null;
    }

    if (this.value)
        consoleHint.style.display = "block";

    scriptDescription.innerHTML = descriptions[this.value] || "";

    if (this.value) {
        const script = document.createElement('script');
        script.src = this.value;
        script.defer = true;
        currentScript = script;
        document.body.appendChild(script);
    }
});