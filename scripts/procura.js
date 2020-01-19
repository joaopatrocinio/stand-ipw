var results = carros.filter(function(carro) {
    let query = findGetParameter("query").toString().toLowerCase();
    carro.nomeCompleto = carro.marca + " " + carro.modelo;
    carro.nomeCompleto = carro.nomeCompleto.toLowerCase();
    return carro.nomeCompleto.indexOf(query) > -1;
});

var x = results.length;
if (x <= 0)
{
    document.getElementById("results").innerHTML = "Não foram encontradas viaturas para a pesquisa inserida.";
}
else
for (i = 0; i < x; i++)
{
    let parent = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let button = document.createElement("input");
    let img = document.createElement("img");
    
    parent.classList.add("parent");
    parent.id = results[i].id;
    div1.classList.add("div1");
    div2.classList.add("div2");
    h4.classList.add("AlinhasEsquerda");
    h4.classList.add("Espacamento");
    h4.innerHTML = results[i].marca + " " + results[i].modelo;
    p.innerHTML = results[i].preco.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";
    button.type = "button";
    button.value = "Detalhes";
    button.addEventListener('click', function (event) {
        var id = event.target.parentNode.parentNode.id;
        window.location.href = "detalhes.html?id=" + id;
    });
    img.src = "img/" + results[i].imagens[0];
    img.classList.add("Imagens");
    
    div1.appendChild(img);
    div2.appendChild(h4);
    div2.appendChild(p);
    div2.appendChild(button);
    
    parent.appendChild(div1);
    parent.appendChild(div2);
    
    document.getElementById("results").appendChild(parent);
}
