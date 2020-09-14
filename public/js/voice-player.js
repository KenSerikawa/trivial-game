var questions = document.querySelectorAll('[id^=question_text_]')
function getQuestion(id) {
    return document.getElementById(id)
}
function readQuestion(question) {
    responsiveVoice.speak(question)
    return
}

document.ready(
    readQuestion(questions[0].innerText)
)