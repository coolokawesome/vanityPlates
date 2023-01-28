

//This loop generates the HTML to display every plate within its parent HTML container 'sourceRow'.

source = $('#sourceRow')

numberOfPlatesCanada = 13
for ( let i = 0; i < numberOfPlatesCanada; i++) {
    var itemDiv = $('<div>').attr('class', 'col-6 col-sm-6 col-md-12 col-lg-6 col-xl-6 col-xxl-3')
    var plateLabel = $('<label>').text([i + 1])
    itemDiv.append(plateLabel)
    var input = $('<input>').attr('value', (i + 1)).attr('id', 'plate' + (i + 1)).attr('type', 'radio').attr('name', 'plate')
    itemDiv.append(input)
    var image = $('<img>').attr('class', 'img-fluid').attr('src', "imgs/plate" + (i + 1) +".png")
    itemDiv.append(image)
    source.append(itemDiv)
}