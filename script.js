//clean up the console!!
console.clear();


//select and create custom plate
function plateFunction (plateImg, plateID) {
    radioValue = null;
let plate = $('#plateContainer')
plate.append($('<img>')
    .attr('class', "plate_img img-fluid")
    .attr('src', 'plate' + radioValue + ''))
}


//listener for text overlay
textBox = document.getElementById('textBox')

textBox.addEventListener('keyup', e => {
    
    //get the text overlay element
    text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
    //strip of any whitespace
    text = $('#plateText');
}) 