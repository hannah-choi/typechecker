const $output = document.querySelector('textarea.output')
const $textinput = document.querySelector(`input[type="text"]`)

const $typeSizeInput = document.querySelector(`input[name="typesize"]`)
const typeSizeNumber = document.querySelector('.typesize-number')

const $lineHeightInput = document.querySelector(`input[name="lineheight"]`)
const lineHeightNumber = document.querySelector('.lineheight-number')

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

$lineHeightInput.addEventListener('input', function () {
    $output.style.lineHeight = this.value;
    lineHeightNumber.innerHTML = this.value;
})