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
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate1.png')
    //add custom text styling
    $('#plateText').css('color', '#00407e');
})
plate2.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate2.png')
    //add custom text styling
    $('#plateText').css('color', 'white');
})
plate3.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate3.png')
    //add custom text styling
    $('#plateText').css('color', 'rgb(43, 57, 71)');
})
plate4.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate4.png')
    //add custom text styling
    $('#plateText').css('color', 'rgb(170, 16, 16)');
})



//listener for text overlay
textBox = document.getElementById('textBox')

    textBox.addEventListener('keyup', e => {
    
        //get the text overlay element
        text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
        //strip of any whitespace
        text = $('#plateText');
    }) 

