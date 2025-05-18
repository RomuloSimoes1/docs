let drawing = document.getElementById('drawing')
let images = ['images/bart.jpeg', 'images/fish.jpeg']
let index = 0

function draw() {
    drawing.innerHTML = ''

    // let photo = document.createElement('img');
    // photo.setAttribute('src', images[index]);
    // photo.style.width = '200px'

    // drawing.appendChild(photo);

    // index = (index + 1) % images.length;
    images.forEach(function(imgUrl) {
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        drawing.appendChild(imgElement);  // Adiciona a imagem ao container
    });
}