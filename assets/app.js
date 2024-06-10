const applyToastrOptions = window.applyToastrOptions;
const speak = window.speak;
const doRequest = window.doRequest;

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

        speak(jokeQuestion + ' ' + jokeAnswer);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    applyToastrOptions();
    const button = document.getElementById("joke-button");
    button.addEventListener("click", jokeClickListener);
});
