window.applyToastrOptions = () => {
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

window.speak = (message) => {
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

window.doRequest = (apiUrl, successCallback) => {
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
