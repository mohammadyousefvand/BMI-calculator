let $ = document

const weightInput = $.getElementById('weight')
const heightInput = $.getElementById('height')
const weightspanElem = $.querySelector('#weight-value')
const heightspanElem = $.querySelector('#height-value')
const resultEnglish = $.querySelector('.result-en')
const resultPersian = $.querySelector('.result-fa')
const resultNumber = $.querySelector('.result-number')
const emojyCover = $.querySelector('.emojy')
const loadingPage = $.querySelector('.loading')

// function

function BmiCalculatorHandler() {
    let weightValue = weightInput.value
    weightspanElem.innerHTML = weightValue + ' Kg'

    let heightValue = heightInput.value
    heightspanElem.innerHTML = heightValue + ' Cm'

    let meterTOCm = heightValue / 100
    let bMI = (weightValue / (meterTOCm ** 2)).toFixed(1)

    resultNumber.innerHTML = bMI

    if (bMI < 18.5) {
        resultEnglish.innerHTML = 'Underweight'
        resultPersian.innerHTML = 'کمبود وزن'
        resultNumber.style.color = '#f0b00e'
        resultPersian.style.color = '#f0b00e'
        emojyCover.setAttribute('src', 'images/ugly.png')
    } else if (bMI > 18.5 && bMI < 24.5) {
        resultEnglish.innerHTML = 'Normal weight'
        resultPersian.innerHTML = 'وزن نرمال'
        resultNumber.style.color = '#00a303'
        resultPersian.style.color = '#00a303'
        emojyCover.setAttribute('src', 'images/cool.png')
    } else if (bMI > 24.5 && bMI < 29.9) {
        resultEnglish.innerHTML = 'Overweight'
        resultPersian.innerHTML = 'اضافه وزن'
        resultNumber.style.color = '#f0780e'
        resultPersian.style.color = '#f0780e'
        emojyCover.setAttribute('src', 'images/angry.png')
    } else {
        resultEnglish.innerHTML = 'Obese'
        resultPersian.innerHTML = 'چاق'
        resultNumber.style.color = '#f03b0e'
        resultPersian.style.color = '#f03b0e'
        emojyCover.setAttribute('src', 'images/shocked.png')
    }

}

// Event

weightInput.addEventListener('input', BmiCalculatorHandler)
heightInput.addEventListener('input', BmiCalculatorHandler)
