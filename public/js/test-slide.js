function getAllQuestionBlocks() {
    return $("div[id^='block_']")
}

function getCurrentQuestion(id) {
    let currentBlock = "#" + id.toString()

    return $(currentBlock)
}

function getCurrentQuestionId(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index]
        if(element.classList.contains('d-block')) {
            return element.id
        }
    }
}

function isAnswerSelected(block) {
    let list = block[0].children[0].children[1].children
    for (let i = 0; i < list.length; i++) {
        var input = list[i].children[1];
        if(isChecked(input)) {
            return true
        }
    }
    alert('Must choose one answer')
    return false
}

function isChecked(input) {
    if(input.checked) {
        return true
    } 
    return false
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
    let currentId = getCurrentQuestionId(array)
    toggleBlocks(array)
    decrementQuestionNumberIndicator(extractInteger(currentId))
    let nextBlockId = decrement_last(currentId)
    let nextQuestion = document.getElementById(nextBlockId)
    nextQuestion.classList.remove('d-none')
    nextQuestion.classList.add('d-block')

    toggleButtons(nextBlockId, array.length)
}

function nextQuestion() {
    let array = getAllQuestionBlocks()
    let currentId = getCurrentQuestionId(array)
    
    if(isAnswerSelected(getCurrentQuestion(currentId))) {
        toggleBlocks(array)
        incrementQuestionNumberIndicator(extractInteger(currentId))
        let nextBlockId = increment_last(currentId)
        let nextQuestion = document.getElementById(nextBlockId)
        nextQuestion.classList.remove('d-none')
        nextQuestion.classList.add('d-block')
        
        toggleButtons(nextBlockId, array.length)
        let questionIntId = extractInteger(currentId)
        questionIntId++
        let question_id = 'question_text_' + questionIntId
        let question = getQuestion(question_id)
        console.log(questionIntId, question_id, question)
        readQuestion(question.innerText)
    }
}

function incrementQuestionNumberIndicator(id) {
    id++
    $('#question_number').html(id.toString())
}

function decrementQuestionNumberIndicator(id) {
    id--
    $('#question_number').html(id.toString())
}

function questionNotAnswered() {
    
}

function toggleBlocks(array) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index]
        if(element.classList.contains('d-block')) {
            element.classList.remove('d-block')
            element.classList.add('d-none')
        }
    }
}

function toggleButtons(id, n_questions=10) {
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