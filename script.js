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
    plateProperties('imgs/plate1.png', '#00407e', 'Ontario (white)', false)
})
plate2.addEventListener('mouseup', e => {
    plateProperties('imgs/plate2.png', 'white', 'Ontario (blue)', false)
})
plate3.addEventListener('mouseup', e => {
    plateProperties('imgs/plate3.png', '#0555AE', 'NWT', true)
})
plate4.addEventListener('mouseup', e => {
    plateProperties('imgs/plate4.png', 'rgb(170, 16, 16)', 'Alberta', false)
})
plate5.addEventListener('mouseup', e => {
    plateProperties('imgs/plate5.png', '#00407e', 'Manitoba', false)
})
plate6.addEventListener('mouseup', e => {
    plateProperties('imgs/plate6.png', 'black', 'Nunavut', false)
})
plate7.addEventListener('mouseup', e => {
    plateProperties('imgs/plate7.png', 'black', 'P.E.I', false)
})
plate8.addEventListener('mouseup', e => {
    plateProperties('imgs/plate8.png', '#0a4e92', 'B.C.', false)
})
plate9.addEventListener('mouseup', e => {
    plateProperties('imgs/plate9.png', 'rgb(170, 30, 25)', 'New Brunswick', false)
})
plate10.addEventListener('mouseup', e => {
    plateProperties('imgs/plate10.png', '#155a9e', 'Nova Scotia', false)
})
plate11.addEventListener('mouseup', e => {
    plateProperties('imgs/plate11.png', 'black', 'Yukon', false)
})
plate12.addEventListener('mouseup', e => {
    plateProperties('imgs/plate12.png', 'black', 'Quebec', false)
})
plate13.addEventListener('mouseup', e => {
    plateProperties('imgs/plate13.png', '#316350', 'Saskachewan', false)
})
plate14.addEventListener('mouseup', e => {
    plateProperties('imgs/plate14.png', '#00407e', 'Nflnd', false)
})


//plate properties
function plateProperties(sourceImg, textColor, title, isNWT) {
    //change plate
    $('#plateImg').attr('src', '').attr('src', sourceImg )
    //add custom text styling
    $('#plateText').css('color', textColor);
    $('#plateTitle').text('').text(title);
    if (isNWT == true) {
        $('#plateText').css('transform', 'translate(-60%, -55%')
        .css('font-size', '10vw').css('rotate', '0.2deg')
    }
    else {
        $('#plateText').css('transform', 'translate(-50%, -50%')
        .css('font-size', '12vw').css('rotate', '0deg')
    }

}

//listener for text overlay
textBox = document.getElementById('textBox')

    textBox.addEventListener('keyup', e => {
    
        //get the text overlay element
        text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
        //strip of any whitespace
        text = $('#plateText');
    }) 

