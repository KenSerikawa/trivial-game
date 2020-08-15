function selectOne(id, element) {
    let optionsList = $('#' + id)[0]
    let options = optionsList.children
    hasAnyChecked(options, element)
    addBackground(element.parentElement)
}

function addBackground(option) {
    option.classList.add('bg-white')
    option.classList.add('text-dark')
    option.classList.add('rounded')
}

function removeBackground(option) {
    console.log(option)
    option.classList.remove('bg-white')
    option.classList.remove('text-dark')
    option.classList.remove('rounded')
}

function hasAnyChecked(options, elementChecked) {   
    for (let i = 0; i < options.length; i++) {
        const element = options[i].childNodes[3]
        if(element.checked && element !== elementChecked){
            element.checked = false
            removeBackground(element.parentElement)
        }
    }
}

function checkOne(id, element) {
    let checkbox = element.children[1]
    checkbox.checked = true
    selectOne(id, checkbox)
}