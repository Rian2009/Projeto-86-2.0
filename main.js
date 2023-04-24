var canvas = new fabric.canvas('myCanvas');
var musica = document.getElementById("meuAudio");

function tocar() {
musica.play();
} 

function newImage() {
    fabric.Image.fromURL('amigos.jpg', function(Img) {
    blockImageObject = Img;

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({ 
    top:0, 
    left:0 
    });
    canvas.add(blockImageObject); 
    });

}
    