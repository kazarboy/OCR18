jQuery(document).ready(function ($) {

    var image = document.getElementById('photo');

    // Take the original size from image with naturalHeight - Width
    var originalHeight = image.naturalHeight;
    var originalWidth = image.naturalWidth;

    // Show original size in console to make sure is correct (optional):
    console.log('IMG width: ' + originalWidth + ', heigth: ' + originalHeight)

    $('#photo').imgAreaSelect({
        handles: true,
        imageHeight: 0,
        imageWidth: 0,
        onSelectChange: getCoordinates
    });



    function preview(img, selection) {
        if (!selection.width || !selection.height)
            return;

        // With this two lines i take the proportion between the original size and
        // the resized img
        var porcX = img.naturalWidth / img.width;
        var porcY = img.naturalHeight / img.height;

        // Send the corrected coordinates to some inputs:
        // Math.round to get integer number
        // (selection.x1 * porcX) to correct the coordinate to real size
        $('input#x1').val(Math.round(selection.x1 * porcX));
        $('input#y1').val(Math.round(selection.y1 * porcY));
        $('input#x2').val(Math.round(selection.x2 * porcX));
        $('input#y2').val(Math.round(selection.y2 * porcY));
        $('input#w').val(Math.round(selection.width * porcX));
        $('input#h').val(Math.round(selection.height * porcY));

        $('#preview').css({
            width: Math.round(selection.width * porcX) + "px",
            height: Math.round(selection.height * porcY) + "px",
            //marginLeft: -Math.round(scaleX * selection.x1),
            //marginTop: -Math.round(scaleY * selection.y1)
        });
    }

    function getCoordinates(img, selection) {

        if (!selection.width || !selection.height) {
            return;
        }

        // With this two lines i take the proportion between the original size and
        // the resized img
        var porcX = img.naturalWidth / img.width;
        var porcY = img.naturalHeight / img.height;
        console.log('x1:' + selection.x1);
        console.log('y1:' + selection.y1);
        console.log('w:' + img.width);
        console.log('h:' + img.height);
        console.log('selection width' + selection.width * porcX);
        console.log('selection height' + selection.height * porcY);
        console.log('actual width'+Math.round(selection.width * porcX));
        console.log('actual height'+Math.round(selection.height * porcY));
        // Send the corrected coordinates to some inputs:
        // Math.round to get integer number
        // (selection.x1 * porcX) to correct the coordinate to real size
        $('input#x1').val(Math.round(selection.x1 * porcX));
        $('input#y1').val(Math.round(selection.y1 * porcY));
        $('input#x2').val(Math.round(selection.x2 * porcX));
        $('input#y2').val(Math.round(selection.y2 * porcY));
        $('input#w').val(Math.round(selection.width * porcX));
        $('input#h').val(Math.round(selection.height * porcY));
    }
});