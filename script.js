//clean up the console!!
console.clear();

 plate1 = document.getElementById
 ('plate1');
 plate2 = document.getElementById
 ('plate2');
 plate3 = document.getElementById
 ('plate3');
 plate4 = document.getElementById
 ('plate4');

plate1.addEventListener('mouseup', e => {
    plateProperties('imgs/plate1.png', '#00407e', 'Ontario (white)')
})
plate2.addEventListener('mouseup', e => {
    plateProperties('imgs/plate2.png', 'white', 'Ontario (blue)')
})
plate3.addEventListener('mouseup', e => {
    plateProperties('imgs/plate3.png', 'rgb(43, 57, 71)', 'Quebec')
})
plate4.addEventListener('mouseup', e => {
    plateProperties('imgs/plate4.png', 'rgb(170, 16, 16)', 'Alberta')
})

//plate properties
function plateProperties(sourceImg, textColor, title) {
    //change plate
    $('#plateImg').attr('src', '').attr('src', sourceImg )
    //add custom text styling
    $('#plateText').css('color', textColor);
    $('#plateTitle').text('').text(title)
}

//listener for text overlay
textBox = document.getElementById('textBox')

    textBox.addEventListener('keyup', e => {
    
        //get the text overlay element
        text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
        //strip of any whitespace
        text = $('#plateText');
    }) 

