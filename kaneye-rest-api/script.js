const kaneyeRest = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => getKaneye(data))
}

const getKaneye = speech => {
    const kaneyeSpeech = document.getElementById('kaneye-speech')
    kaneyeSpeech.innerText = speech.quote;
}