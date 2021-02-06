const goButton = document.querySelector('button');

goButton.addEventListener('click', async () => {
    const response = await fetch('http://localhost:8080/data');

    const { valami_id, payload } = await response.json();

    renderResults(payload);
});

function renderResults(results) {
    const resultArea = document.querySelector('#result');

    results
        .map(createDologElement)
        .forEach(result => resultArea.appendChild(result));
}

function createDologElement(text) {
    const el = document.createElement('span');
    el.setAttribute('class', 'styled-dolog');
    el.innerHTML = text;

    return el;
}