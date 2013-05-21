$(window).load(function() {
    
    var canvas = $('#screen')[0];
    if (!canvas || !canvas.getContext) return false;
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "img/sample.jpg";
    
    image.onload = function(e) {
        context.drawImage(image, 0, 0);
        context.translate(canvas.width * 0.5, canvas.height * 0.5);
        context.rotate(16 * Math.PI / 180);
        context.fillStyle = '#f2f2f2';
        context.font = "100pt 'Chewy', cursive";
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('SAMPLE', 0, 0);
        context.rotate(-16 * Math.PI / 180);
        context.translate(-canvas.width * 0.5, -canvas.height * 0.5);
    }
});