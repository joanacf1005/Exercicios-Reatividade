const images = document.querySelectorAll('.image'); //vai buscar todos os elementos com classe image
const imgOverlay = document.getElementById('img-overlay'); //vai buscar o elemento com id = img-overlay
const imagemGrande = document.getElementById('imagemGrande'); //vai buscar o elemento com id = imagemGrande
const fechar = document.getElementById('fechar'); //vai buscar o elemento com id = fechar

// Abrir overlay com a imagem clicada
images.forEach(img => { //vai percorrer cada imagem 
  img.addEventListener('click', () => {//vai ouvir o evento clique na imagem
    imagemGrande.src = img.src;//copia a imagem pequena para a imagem grande
    imgOverlay.classList.add('ativo');//mostra o overlay como imagem
  });
});

// Fechar ao clicar no X
fechar.addEventListener('click', () => {
  imgOverlay.classList.remove('ativo'); //Quando clica no X, esconde o overlay
});

// Fechar ao clicar fora da imagem 
imgOverlay.addEventListener('click', (e) => {
  if (e.target === imgOverlay) {
    imgOverlay.classList.remove('ativo');
  }
});

