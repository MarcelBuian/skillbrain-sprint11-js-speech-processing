const applyToastrOptions = () => {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: true,
        onclick: null,
        showDuration: "1000",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
};

const speak = (message) => {
    VoiceRSS.speech({
        key: "52bfbd75e1c24955831329926a53c5ed",
        src: message,
        hl: "en-us",
        v: "Nancy",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
};

const doRequest = (apiUrl, successCallback) => {
    const requestOptions = {};

    fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                const err = "Network response was not ok";
                throw new Error(err);
                toastr.error(err);
            }
            return response.json();
        })
        .then((data) => {
            successCallback(data);
        })
        .catch((error) => {
            console.error("Error:", error);
            toastr.error("Error: " + error);
        });
}

const jokeClickListener = () => {
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart&amount=2";

    doRequest(apiUrl, (data) => {
        const jokeQuestion = data.jokes[0].setup;
        const jokeAnswer = data.jokes[0].delivery;
        toastr["success"](jokeAnswer, jokeQuestion);
        document.getElementById('joke-question').innerText = jokeQuestion;
        document.getElementById('joke-answer').innerText = jokeAnswer;

        const jokeBtn = document.getElementById('joke-button');
        jokeBtn.classList.add('is-loading');
        setTimeout(() => {
            jokeBtn.classList.remove('is-loading');
        }, 5000);

        // speak(jokeQuestion + ' ' + jokeAnswer);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    applyToastrOptions();
    const button = document.getElementById("joke-button");
    button.addEventListener("click", jokeClickListener);
});
