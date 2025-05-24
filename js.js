let drawing = document.getElementById('drawing')
let img = ['img/bart.jpeg', 'img/fish.jpeg']
let index = 0

function draw() {
    drawing.innerHTML = ''

    // let photo = document.createElement('img');
    // photo.setAttribute('src', img[index]);
    // photo.style.width = '200px'

    // drawing.appendChild(photo);

    // index = (index + 1) % img.length;
    img.forEach(function(imgUrl) {
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        drawing.appendChild(imgElement);  // Adiciona a imagem ao container
    });
}
