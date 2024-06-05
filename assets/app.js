const applyToastrOptions = () => {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

const speak = (message) => {
    VoiceRSS.speech({
        key: '52bfbd75e1c24955831329926a53c5ed',
        src: message,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const jokeClickListener = () => {
    toastr.info('Joke is coming...');
    const joke = "Hello World!";
    speak(joke);
}

document.addEventListener('DOMContentLoaded', () => {
    applyToastrOptions();
    const button = document.getElementById('joke-button');
    button.addEventListener('click', jokeClickListener);
});