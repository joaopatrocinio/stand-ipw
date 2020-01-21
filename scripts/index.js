var captions = document.querySelectorAll("figcaption").forEach(function (caption) {
    caption.addEventListener('click', function (event) {
        window.location.href = "procura.html?query=" + caption.innerHTML;
    });
});

var images = document.querySelectorAll(".marca>img").forEach(function (image) {
    image.addEventListener('click', function (event) {
        window.location.href = "procura.html?query=" + image.nextElementSibling.innerHTML;
    });
});

var images_destaques = document.querySelectorAll(".carro-destaque>img").forEach(function (image) {
    var link = image.nextElementSibling.href;
    image.addEventListener('click', function (event) {
        window.location.href = link;
    });
});
