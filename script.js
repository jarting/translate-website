function translateText() {
    const text = document.getElementById("text-input").value;
    const lang = document.getElementById("language-select").value;

    fetch(`https://api.mymemory.translated.net/get?q=${encodeURI(text)}&langpair=id|${lang}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.responseData.translatedText;
            document.getElementById("translated-text").innerText = translatedText;
        })
        .catch(error => console.error('Error:', error));
}
