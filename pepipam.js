const menú = document.querySelector('.menú');
const menu = document.querySelector('.menu-navegacion');
// console.log(menú);
// console.log(menu);
menú.addEventListener('click', () => {
    menu.classList.toggle("spread")
})
window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != menú) {
        menu.classList.toggle("spread")
    }
})

const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const menú1 = document.querySelector('.menú');
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
})
contenedorLight.addEventListener('click', (e) => {
   if (e.target !== imagenesLight) {
       contenedorLight.classList.toggle('show');
       imagenesLight.classList.toggle('showImage');
       menú1.style.opacity = '1';
   } 
})
const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    menú1.style.opacity = '0';
}
