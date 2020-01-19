function toggleMostrarHobbies() {
    var initialText = document.getElementById("initialTextHobbie");
    var moreText = document.getElementById("divHobbies");
    var formacao = document.getElementById("divThemeFormacao");
  
    if (initialText.style.display === "none") {
      initialText.style.display = "block";
      moreText.style.display = "none";
    } else {
      initialText.style.display = "none";
      moreText.style.display = "inline";
    }

    if (formacao.style.display === "none") {
        formacao.style.display = "block";
      } else {
        formacao.style.display = "none";
      }

  }

  function toggleMostrarFormacao() {
    var initialText = document.getElementById("initialTextFormacao");
    var moreText = document.getElementById("divFormacao");
    var hobbies = document.getElementById("divThemeHobbies");
  
    if (initialText.style.display === "none") {
      initialText.style.display = "block";
      moreText.style.display = "none";
    } else {
      initialText.style.display = "none";
      moreText.style.display = "inline";
    }

    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
      } else {
        hobbies.style.display = "none";
      }
  }

  function toggleImg(imgName){
    var imgTheme = document.getElementById(imgName).title;
    var img = document.getElementById("img"+imgTheme);

    if(imgName == "TV")   
        img.src="img/TV.jpg";
    if(imgName == "Game") 
        img.src="img/Game.jpg";
    if(imgName == "Fut") 
        img.src="img/Fut.jfif";
    if(imgName == "N1") 
        img.src="img/N1.jfif";
    if(imgName == "Alembranca") 
        img.src="img/Alembranca.jfif";
    if(imgName == "Romeu") 
        img.src="img/Romeu.jpg";
    if(imgName == "EPED") 
        img.src="img/EPED.jpg";
    if(imgName == "Cleverti") 
        img.src="img/Cleverti.jpg";

    if(img.style.display === "inline")
        img.style.display = "none";
    else
        img.style.display = "inline";
  }

  function showHobbies(){
    var hobbieBox = document.getElementById("divThemeHobbies");
    if (hobbieBox.style.display === "none") {
        hobbieBox.style.display = "block";
      } else {
        hobbieBox.style.display = "none";
      }
  }

  function showFormacao(){
    var formacaoBox = document.getElementById("divThemeFormacao");
    if (formacaoBox.style.display === "none") {
        formacaoBox.style.display = "block";
      } else {
        formacaoBox.style.display = "none";
      }
  }