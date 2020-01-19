function toggleMostrarInformacoes() {
    var initialText = document.getElementById("initialTextInformacao");
    var moreText = document.getElementById("divInfomacoes");
    var formacao = document.getElementById("divTemaInformacao");

    if (initialText.style.display === "none") {
      initialText.style.display = "block";
      moreText.style.display = "none";
    } else {
      initialText.style.display = "none";
      moreText.style.display = "inline";
    }

    if (formacao.style.display === "none") {
        formacao.style.display = "none";
      } else {
        formacao.style.display = "block";
      }

  }

function showInformacoes(){
    var hobbieBox = document.getElementById("divTemaInformacao");
    if (hobbieBox.style.display === "none") {
        hobbieBox.style.display = "block";
      } else {
        hobbieBox.style.display = "none";

      }
  }
