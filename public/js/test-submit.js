if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

function getTime() {
    return document.getElementById('time')
}
function addWiggling(element) {
    element.classList.add('wiggling')
}
function submitTest() {
    clearInterval(interval)
    removeSubmitButton()
    var time = getTime()
    addWiggling(time)

    let selected = readSelectedAnswers()
    let real = readRealAnswers()
    compare(selected, real)
}

function readSelectedAnswers() {
    let answers = []
    let array = document.querySelectorAll('[id^=block_]')
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        var list = element.children[0].children[1]
        answers.push(getSelected(list))
    }
    return answers
}

function compare(selected, real) {
    var counter = 0;
    var message

    if(selected.equals(real)) {
        counter = real.length
    } else {
        for (let i = 0; i < real.length; i++) {
            let correct_answer = real[i];
            let selected_answer = selected[i];
            if(correct_answer == selected_answer)
                counter++
        }
    }
    compareResults()
    displayResults(counter, real.length)
    offerNewGame()
}

function readRealAnswers() {
    let answers = []
    let array = document.querySelectorAll('[id^=answer_]')
    for (let i = 0; i < array.length; i++) {
        answers.push(array[i].value);
    }
    return answers
}

function getSelected(list) {
    for (let i = 0; i < list.children.length; i++) {
        const element = list.children[i];
        if(element.children[1].checked) {
            return element.children[0].innerText
        }
    }
}


function getSelectedElement(list) {
    for (let i = 0; i < list.children.length; i++) {
        const element = list.children[i];
        if(element.children[1].checked) {
            return element.children[0]
        }
    }
}
function displayResults(score, total) {
    let proportion = score.toString() + '/' + total.toString()
    $('#score').html(proportion)
    $('#scoreContainer').slideDown(200)
    $('#recordForm').slideDown(500)
    $('#form_right_answers').val(score)
    $('#form_total_questions').val(total)
}

function offerNewGame() {
    $('#tryAgainBlock').slideDown(1000)
}
