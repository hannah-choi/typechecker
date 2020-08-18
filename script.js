const $output = document.querySelector('textarea.output')
const $textinput = document.querySelector(`input[type="text"]`)

const $typeSizeInput = document.querySelector(`input[name="typesize"]`)
const typeSizeNumber = document.querySelector('.typesize-number')

const $lineHeightInput = document.querySelector(`input[name="lineheight"]`)
const lineHeightNumber = document.querySelector('.lineheight-number')


const $fontWeightInput = document.querySelector(`input[name="fontWeight"]`)
const fontWeightNumber = document.querySelector('.fontWeight-number')

const $typeSelectorCheckbox = document.querySelector(`input[name="italic"]`)

const $typefaceSelect = document.querySelector(`select[name="typeface"]`)

const originalText = $output.value;

$textinput.addEventListener('keyup', function () {

    if (this.value) {
        $output.value = this.value;
    } else {
        $output.value = originalText;
    }
})


$output.addEventListener('keyup', function () {
    $textinput.value = this.value;
})

$typeSizeInput.addEventListener('input', function () {
    let fontSize = this.value + "px";
    $output.style.fontSize = fontSize;
    typeSizeNumber.innerHTML = fontSize;

})

$fontWeightInput.addEventListener('input', function () {
    let fontWeight = this.value;
    $output.style.fontWeight = fontWeight;
    fontWeightNumber.innerHTML = fontWeight;

})


$lineHeightInput.addEventListener('input', function () {
    $output.style.lineHeight = this.value;
    lineHeightNumber.innerHTML = this.value;
})

$typeSelectorCheckbox.addEventListener('change', function () {
    this.checked ? $output.style.fontStyle = "italic" : $output.style.fontStyle = "normal"
})

$typefaceSelect.addEventListener('input', function () {
    $output.style.fontFamily = this.value;
})
