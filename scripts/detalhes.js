let carroId = parseInt(findGetParameter("id"));
let carroIndex = carros.findIndex(x => x.id === carroId);
let carro = carros[carroIndex];

let title_string = carro.marca + " " + carro.modelo;
let year_kms_string = "Ano - " + carro.ano + " | " + carro.kms + "Kms";
let preco_string = "PREÇO: " + carro.preco.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";

document.getElementById("car-title").innerHTML = title_string;
document.getElementById("car-year-kms").innerHTML = year_kms_string;
document.getElementById("car-price").innerHTML = preco_string;

document.getElementById("mainImg").src = "img/" + carro.imagens[0];
document.getElementById("imgMini1").src = "img/" + carro.imagens[1];
document.getElementById("imgMini2").src = "img/" + carro.imagens[2];
document.getElementById("imgMini3").src = "img/" + carro.imagens[3];
document.getElementById("imgMini4").src = "img/" + carro.imagens[4];

document.getElementById("kms").innerHTML = carro.kms;
document.getElementById("mes_ano").innerHTML = carro.mes_ano;
document.getElementById("cilindrada").innerHTML = carro.cilindrada.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
document.getElementById("potencia").innerHTML = carro.potencia;
document.getElementById("vel_max").innerHTML = carro.vel_max;
document.getElementById("combustivel").innerHTML = carro.combustivel;
document.getElementById("capacidade").innerHTML = carro.capacidade;
document.getElementById("cor_ext").innerHTML = carro.cor_ext;
document.getElementById("cor_int").innerHTML = carro.cor_int;
document.getElementById("transmissao").innerHTML = carro.transmissao;
document.getElementById("portas").innerHTML = carro.portas;
document.getElementById("lugares").innerHTML = carro.lugares;

let temp;

document.querySelectorAll('.carousel-img').forEach(item => {
    item.addEventListener('click', event => {
        temp = document.getElementById("mainImg").src;
        document.getElementById("mainImg").src = item.src;
        item.src = temp;
    })
})