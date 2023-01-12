console.clear();


//get text box
textBox = document.getElementById('textBox')

//get plate 


//get the checkbox
classic = $('#plateClassic')

//function for text overlay

textBox.addEventListener('keyup', e => {
    console.log(textBox.value)

    //change image of plate on left side

    //get the text overlay element
    text = $('#plateText').text('').text(textBox.value);

}) 