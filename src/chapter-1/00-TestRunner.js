const select = document.getElementById('scriptSelect');
const consoleHint = document.getElementById('consoleHint');
const scriptDescription = document.getElementById('scriptDescription');
let currentScript = null;

const descriptions = {
    "01-HelloWorld.js": "Exibe uma janela de alerta com a mensagem: <strong>Hello, World!</strong> ao executar o script.",
    "02-Variables.js": "Demonstra a declaração e uso de variáveis em JavaScript, incluindo tipos primitivos (<strong>number</strong>, <strong>string</strong>, <strong>boolean</strong>, <strong>null</strong>, <strong>undefined</strong>) e o escopo de variáveis dentro e fora de funções. Os resultados são exibidos no console.",
    "03-Operators.js": "Apresenta exemplos de operadores em JavaScript: aritméticos, de atribuição, comparação, lógicos, bit a bit e o operador <code>typeof</code>. Também mostra o uso do operador <code>delete</code> em objetos. Os resultados são exibidos no console.",
    "04-TruthyFalsy.js": "Demonstra valores <strong>truthy</strong> e <strong>falsy</strong> em JavaScript, mostrando como diferentes tipos e objetos são avaliados em contextos booleanos. Inclui exemplos com tipos primitivos, objetos, strings, números e comparações. Os resultados são exibidos no console.",
    "05-EqualsOperators.js": "Mostra o uso dos operadores de igualdade (<code>===</code> e <code>!==</code>) e operadores ternários em JavaScript para comparar valores e executar diferentes blocos de código com base nessas comparações. Os resultados são exibidos no console.",
    "06-ConditionalStatements.js": "Demonstra o uso de estruturas condicionais em JavaScript, como <strong>if</strong>, <strong>else if</strong>, <strong>else</strong> e <strong>switch</strong>, para executar diferentes blocos de código de acordo com o valor de uma variável. Os resultados são exibidos no console.",
    "07-Loops.js": "Apresenta os principais tipos de laços de repetição em JavaScript: <strong>for</strong>, <strong>while</strong> e <strong>do...while</strong>, mostrando como percorrer e executar instruções repetidamente. Os resultados são exibidos no console.",
    "08-Functions.js": "Demonstra a criação e uso de funções em JavaScript, incluindo funções simples, passagem de parâmetros e retorno de valores. Mostra como reutilizar código e organizar instruções em blocos funcionais. Os resultados são exibidos no console.",
    "09-ObjectOrientedJS.js": "Apresenta conceitos de programação orientada a objetos em JavaScript, incluindo criação de objetos com notação literal e construtores, definição e atualização de propriedades, uso de protótipos e métodos associados a objetos. Os resultados são exibidos no console."
};

select.addEventListener('change', function () {

    // Remove o script anterior, se houver
    if (currentScript) {
        document.body.removeChild(currentScript);
        currentScript = null;
    }

    if (this.value && this.value !== "01-HelloWorld.js") {
        consoleHint.style.display = "block";
    } else {
        consoleHint.style.display = "none";
    }

    scriptDescription.innerHTML = descriptions[this.value] || "";

    if (this.value) {
        const script = document.createElement('script');
        script.src = this.value;
        script.defer = true;
        currentScript = script;
        document.body.appendChild(script);
    }
});