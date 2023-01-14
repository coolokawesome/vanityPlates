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
    $('#plateTitle').text('').text('Ontario (white)')
})
plate2.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate2.png')
    //add custom text styling
    $('#plateText').css('color', 'white');
    $('#plateTitle').text('').text('Ontario (blue)')
})
plate3.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate3.png')
    //add custom text styling
    $('#plateText').css('color', 'rgb(43, 57, 71)');
    $('#plateTitle').text('').text('Quebec')
})
plate4.addEventListener('mouseup', e => {
    //change plate
    $('#plateImg').attr('src', '').attr('src', 'imgs/plate4.png')
    //add custom text styling
    $('#plateText').css('color', 'rgb(170, 16, 16)');
    $('#plateTitle').text('').text('Alberta')
})



//listener for text overlay
textBox = document.getElementById('textBox')

    textBox.addEventListener('keyup', e => {
    
        //get the text overlay element
        text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
        //strip of any whitespace
        text = $('#plateText');
    }) 

