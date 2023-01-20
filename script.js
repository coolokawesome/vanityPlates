//clean up the console!!


plate1.addEventListener('mouseup', e => {
    plateProperties('imgs/plate1.png', '#00407e', 'Ontario (white)')
})
plate2.addEventListener('mouseup', e => {
    plateProperties('imgs/plate2.png', 'white', 'Ontario (blue)')
})
plate3.addEventListener('mouseup', e => {
    plateProperties('imgs/plate3.png', 'rgb(170, 16, 16)', 'Alberta')
})
plate4.addEventListener('mouseup', e => {
    plateProperties('imgs/plate4.png', '#00407e', 'Manitoba')
})
plate5.addEventListener('mouseup', e => {
    plateProperties('imgs/plate5.png', 'black', 'Nunavut')
})
plate6.addEventListener('mouseup', e => {
    plateProperties('imgs/plate6.png', 'black', 'Prince Edward Island')
})
plate7.addEventListener('mouseup', e => {
    plateProperties('imgs/plate7.png', '#0a4e92', 'British Columbia')
})
plate8.addEventListener('mouseup', e => {
    plateProperties('imgs/plate8.png', 'rgb(170, 30, 25)', 'New Brunswick')
})
plate9.addEventListener('mouseup', e => {
    plateProperties('imgs/plate9.png', '#155a9e', 'Nova Scotia')
})
plate10.addEventListener('mouseup', e => {
    plateProperties('imgs/plate10.png', 'black', 'Yukon')
})
plate11.addEventListener('mouseup', e => {
    plateProperties('imgs/plate11.png', 'black', 'Quebec')
})
plate12.addEventListener('mouseup', e => {
    plateProperties('imgs/plate12.png', '#316350', 'Saskachewan')
})
plate13.addEventListener('mouseup', e => {
    plateProperties('imgs/plate13.png', '#00407e', 'Newfoundland & Labrador')
})


//plate properties
function plateProperties(sourceImg, textColor, title) {
    //change plate
    $('#plateImg').attr('src', '').attr('src', sourceImg )
    //add custom text styling
    $('#plateText').css('color', textColor);
    $('#plateTitle').text('').text(title);
}

//listener for text overlay
textBox = document.getElementById('textBox')

    textBox.addEventListener('keyup', e => {
    
        //get the text overlay element
        text = $('#plateText').text('').text((textBox.value).replace(/\s+/g, ''));
        //strip of any whitespace
        text = $('#plateText');
    }) 

