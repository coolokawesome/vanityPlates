//This loop generates the HTML to display every plate within its parent container 'sourceRow'.
//The if statement for the third plate was added temporarily as I'm having issues with formatting its text on mobile displays.

source = $('#sourceRow')

numberOfPlates = 13

for ( let i = 0; i < numberOfPlates; i++) {
    var itemDiv = $('<div>').attr('class', 'col-sm-6 col-md-6 col-lg-6 col-xl-3')
    var plateLabel = $('<label>').text([i + 1])
    itemDiv.append(plateLabel)
    var input = $('<input>').attr('value', (i + 1)).attr('id', 'plate' + (i + 1)).attr('type', 'radio').attr('name', 'plate')
    itemDiv.append(input)
    var image = $('<img>').attr('class', 'img-fluid').attr('src', "imgs/plate" + (i + 1) +".png")
    itemDiv.append(image)
    source.append(itemDiv)
    /* <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <label>1</label>
            <input value='1' id='plate1' type="radio" name="plate" checked>
            <img class="img-fluid" src="imgs/plate1.png">
            </div> */
            
}