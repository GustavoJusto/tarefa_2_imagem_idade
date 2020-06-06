
function Checar()
{
  var idade = document.getElementById("idade").value;
  const imagem = document.querySelector("#imagem");
  if(idade >= 18)
  {
    imagem.setAttribute("src","./img2.jpg");  
  }
  else
  {
    imagem.setAttribute("src","./img1.jpg");
  }
}