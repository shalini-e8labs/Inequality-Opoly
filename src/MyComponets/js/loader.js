var image = document.querySelector('body > #root .wapper');
var isLoaded = image.complete && image.naturalHeight !== 0;
$('body > #root .wapper').show();
$('.main_loader_website').hide();