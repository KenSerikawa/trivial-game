function selectOne(id, element) {
    let optionsList = $('#' + id)[0]
    let options = optionsList.children
    hasAnyChecked(options, element)
}

function hasAnyChecked(options, elementChecked) {   
    for (let i = 0; i < options.length; i++) {
        const element = options[i].childNodes[3]
        if(element.checked && element !== elementChecked){
            element.checked = false
        }
    }
}

function checkOne(id, element) {
    let checkbox = element.children[1]
    checkbox.checked = true
    selectOne(id, checkbox)
}