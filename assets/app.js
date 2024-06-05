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
        v: "Linda",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
};

const jokeClickListener = () => {
    // toastr.info("Joke is coming...");
    const joke = "Hello World!";
    // speak(joke);

    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart&amount=2";
    const requestOptions = {};

    fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            const jokeQuestion = data.jokes[0].setup;
            // console.log(jokeQuestion);
            const jokeAnswer = data.jokes[0].delivery;
            // console.log(jokeAnswer);
            toastr["success"](jokeAnswer, jokeQuestion);
            // document.getElementById
        })
        .catch((error) => {
            console.error("Error:", error);
            toastr.error("Error: " + error);
        });
};

document.addEventListener("DOMContentLoaded", () => {
    applyToastrOptions();
    const button = document.getElementById("joke-button");
    button.addEventListener("click", jokeClickListener);
});
