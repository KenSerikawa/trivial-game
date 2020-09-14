function getAllBlocks() {
    return document.querySelectorAll('[id^=block_]')
}

function getAllAnswers() {
    return document.querySelectorAll('[id^=answer_]')
}

var question_blocks = getAllBlocks()
var answers = getAllAnswers()

function compareResults() {
    for (let i = 0; i < question_blocks.length; i++) {
        const element = question_blocks[i];
        let list = element.children[0].children[1]
        let selected = getSelectedElement(list)
        if(answers[i].value == selected.innerHTML.trim()) {
            selected.parentElement.classList.remove('bg-white')
            selected.parentElement.classList.add('bg-success')
            selected.parentElement.classList.remove('text-dark')
            selected.parentElement.classList.add('text-white')
        } else {
            selected.parentElement.classList.remove('bg-white')
            selected.parentElement.classList.add('bg-danger')
            selected.parentElement.classList.remove('text-dark')
            selected.parentElement.classList.add('text-white')
            paintCorrectAnswer(list, answers[i].value)
        }
    }
}

function paintCorrectAnswer(list, answer) {
    for (let i = 0; i < list.children.length; i++) {
        const element = list.children[i];
        console.log(element, element.children[0], answer)
        if(element.children[0].innerText == answer.trim()) {
            element.classList.remove('text-dark')
            element.classList.add('bg-success')
            element.classList.add('text-white')
            return
        }

    }

}