const API_URL = 'https://libretranslate.com/translate';

function translateText() {
    const text = document.getElementById("text-input").value;
    const inputLang = document.getElementById("input-language").value;
    const outputLang = document.getElementById("output-language").value;

    if (!text.trim()) {
        document.getElementById("translated-text").value = "";
        return;
    }

    const params = {
        q: text,
        source: inputLang,
        target: outputLang,
        format: 'text'
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("translated-text").value = data.translatedText;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("text-input").addEventListener("input", translateText);

document.getElementById("switch-lang").addEventListener("click", () => {
    const inputLang = document.getElementById("input-language");
    const outputLang = document.getElementById("output-language");

    const temp = inputLang.value;
    inputLang.value = outputLang.value;
    outputLang.value = temp;

    translateText(); // Refresh translation after switching languages
});

document.getElementById("copy-input").addEventListener("click", () => {
    const inputText = document.getElementById("text-input");
    inputText.select();
    document.execCommand("copy");
    alert("Input text copied!");
});

document.getElementById("copy-output").addEventListener("click", () => {
    const outputText = document.getElementById("translated-text");
    outputText.select();
    document.execCommand("copy");
    alert("Translated text copied!");
});
