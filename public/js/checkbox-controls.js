function selectOne(id, element) {
    let optionsList = $('#' + id)[0]
    let options = optionsList.children
    if(hasAnyChecked(options, element)) {

    }
}

function hasAnyChecked(options, elementChecked) {   
    $isChecked = false
    console.log(elementChecked)
    for (let i = 0; i < options.length; i++) {
        const element = options[i].childNodes[1]
        if(element.checked && element !== elementChecked){
            element.checked = false
        }
    }
}