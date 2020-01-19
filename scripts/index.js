var captions = document.querySelectorAll("figcaption").forEach(function (caption) {
    caption.addEventListener('click', function (event) {
        window.location.href = "procura.html?query=" + caption.innerHTML;
    });
});