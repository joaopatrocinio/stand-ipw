var x = carros.length;
for (i = 0; i < x; i++)
{
    let parent = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    //let button = document.createElement("input");
    let div_button = document.createElement("div");
    let img = document.createElement("img");
    
    parent.classList.add("parent");
    parent.id = carros[i].id;
    div1.classList.add("div1");
    div2.classList.add("div2");
    h4.classList.add("AlinhasEsquerda");
    h4.innerHTML = carros[i].marca + " " + carros[i].modelo;
    p.innerHTML = carros[i].preco.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "€";
    div_button.innerHTML = "Detalhes";
    div_button.classList.add("divBtnEmail");
    /*button.type = "button";
    button.value = "Detalhes";*/
    div_button.addEventListener('click', function (event) {
        var id = event.target.parentNode.parentNode.id;
        window.location.href = "detalhes.html?id=" + id;
    });
    img.src = "img/" + carros[i].imagens[0];
    img.classList.add("Imagens");
    
    div1.appendChild(img);
    div2.appendChild(h4);
    div2.appendChild(p);
    div2.appendChild(div_button);
    
    parent.appendChild(div1);
    parent.appendChild(div2);
    
    document.getElementById("results").appendChild(parent);
}
