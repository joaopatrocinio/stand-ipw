let carros = [
    { 
        "id": 1, 
        "marca": "Audi", 
        "modelo": "A3 Sportback 1.6 TDI Advance", 
        "ano": 2016,
        "kms": 26000, 
        "preco": 28900,
        "imagens": ["imgAudi1.jpg", "imgAudi2.jpg", "imgAudi3.jpg", "imgAudi4.jpg", "imgAudi5.jpg"],
        "mes_ano": "07/2016",
        "cilindrada": 1598,
        "potencia": 110,
        "vel_max": 280,
        "combustivel": "Diesel",
        "capacidade": 50,
        "cor_ext": "Preto",
        "cor_int": "Preto",
        "transmissao": "Manual",
        "portas": 5,
        "lugares": 5
    },
    { 
        "id": 2, 
        "marca": "Mercedes-Benz", 
        "modelo": "AMG GT", 
        "ano": 2018, 
        "kms": 900, 
        "preco": 162500,
        "imagens": ["imgMercedes2.jpg", "imgMercedes.jpg", "imgMercedes3.jpg", "imgMercedes4.jpg", "imgMercedes5.jpg"],
        "mes_ano": "10/2018",
        "cilindrada": 3982,
        "potencia": 469,
        "vel_max": 300,
        "combustivel": "Gasolina",
        "capacidade": 75,
        "cor_ext": "Cinza",
        "cor_int": "Preto",
        "transmissao": "Automatica",
        "portas": 3,
        "lugares": 2
    },
    { 
        "id": 3, 
        "marca": "Nissan", 
        "modelo": "Micra Tekna", 
        "ano": 2017, 
        "kms": 114000, 
        "preco": 16900,
        "imagens": ["Nissan_Micra_tekna.jpg", "imgMicra1.jpg", "imgMicra2.jpg", "imgMicra3.jpg", "imgMicra4.jpg"],
        "mes_ano": "04/2017",
        "cilindrada": 999,
        "potencia": 100,
        "vel_max": 184,
        "combustivel": "Gasolina",
        "capacidade": 41,
        "cor_ext": "Branco",
        "cor_int": "Preto",
        "transmissao": "Manual",
        "portas": 5,
        "lugares": 4
    },
    { 
        "id": 4, 
        "marca": "Opel", 
        "modelo": "Astra 1.3 CDTi Selection S/S", 
        "ano": 2014, 
        "kms": 82000, 
        "preco": 11900,
        "imagens": ["imgAstra2.jpg", "imgAstra1.jpg", "imgAstra3.jpg", "imgAstra4.jpg", "imgAstra5.jpg"],
        "mes_ano": "10/2014",
        "cilindrada": 1248,
        "potencia": 95,
        "vel_max": 180,
        "combustivel": "Diesel",
        "capacidade": 52,
        "cor_ext": "Preto",
        "cor_int": "Preto",
        "transmissao": "Manual",
        "portas": 5,
        "lugares": 5
    }
];

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}