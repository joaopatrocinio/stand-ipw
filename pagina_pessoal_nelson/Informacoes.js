function toggleMostrarInformacoes() {
    var initialText = document.getElementById("initialTextInformacao");
    var table = document.getElementById("divInfomacoes");
    var formacao = document.getElementById("divTemaInformacao");

    if (initialText.style.display === "none")
    {
      initialText.style.display = "block";
      table.style.display = "none";
    }
    else
    {
      initialText.style.display = "none";
      table.style.display = "inline";
    }

    if (formacao.style.display === "none")
    {
      formacao.style.display = "none";
    } else
     {
        formacao.style.display = "block";
      }

  }

function showInformacoes(){
    var temaInformacao = document.getElementById("divTemaInformacao");
    if (temaInformacao.style.display === "none") {
        temaInformacao.style.display = "block";
      } else {
        temaInformacao.style.display = "none";

      }
  }
