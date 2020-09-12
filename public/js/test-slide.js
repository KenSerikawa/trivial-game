function getAllQuestionBlocks() {
    return $("div[id^='block_']")
}
function displayDynamically() {
    let array = getAllQuestionBlocks()
    array.each(function(index) {
        let element = array[index]
        if(index == 0 ) {
            element.classList.remove('d-none')
            element.classList.add('d-block')
            $('#previousQuestion').hide()
            $('#submit').hide()
        }
    })
}

function previousQuestion() {
    let array = getAllQuestionBlocks()

    for (let index = 0; index < array.length; index++) {
        let element = array[index]
        if(element.classList.contains('d-block')) {
            element.classList.remove('d-block')
            element.classList.add('d-none')
            var currentId = element.id
        }
    }

    let nextBlockId = decrement_last(currentId)
    let nextQuestion = document.getElementById(nextBlockId)
    nextQuestion.classList.remove('d-none')
    nextQuestion.classList.add('d-block')

    toggleButtons(nextBlockId, array.length)

}

function nextQuestion() {
    let array = getAllQuestionBlocks()
    for (let index = 0; index < array.length; index++) {
       let element = array[index]
       if(element.classList.contains('d-block')) {
           element.classList.remove('d-block')
           element.classList.add('d-none')
           var currentId = element.id
       }
    }
    let nextBlockId = increment_last(currentId)
    let nextQuestion = document.getElementById(nextBlockId)
    nextQuestion.classList.remove('d-none')
    nextQuestion.classList.add('d-block')

    toggleButtons(nextBlockId, array.length)
}

function toggleButtons(id, n_questions=10) {
    console.log(n_questions)
    let integer = extractInteger(id)
    let prev = document.getElementById('previousQuestion')
    let next = document.getElementById('nextQuestion')
    let submit = document.getElementById('submit')
    if(integer < 2) {
        prev.style.display = 'none'
    } else if(integer <= 2) {
        prev.style.display = ''
    } else if(integer > (n_questions - 1)) {
        next.style.display = 'none'
        submit.style.display = ''
    } 
}

function getNumberOfQuestions() {
    
}

function extractInteger(str) {
    return str.match(/(\d+)/)[0]
}

function increment_last(string) {
    return string.replace(/[0-9]+(?!.*[0-9])/, function(match) {
        return parseInt(match, 10)+1;
    });
}

function decrement_last(string) {
    return string.replace(/[0-9]+(?!.*[0-9])/, function(match) {
        return parseInt(match, 10)-1;
    });
}

$( document ).ready(displayDynamically)