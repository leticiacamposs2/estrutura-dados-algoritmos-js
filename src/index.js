const runners = [
    {
        src: "chapter-1/00-TestRunner.html",
        title: "Test Runner Capítulo 1"
    },
    {
        src: "chapter-2/00-TestRunner.html",
        title: "Test Runner Capítulo 2"
    }
];

const main = document.getElementById('runners-main');
runners.forEach(runner => {
    const section = document.createElement('section');
    section.className = 'runner-section';

    const h2 = document.createElement('h2');
    section.appendChild(h2);

    const iframe = document.createElement('iframe');
    iframe.src = runner.src;
    iframe.title = runner.title;

    section.appendChild(iframe);
    main.appendChild(section);
});