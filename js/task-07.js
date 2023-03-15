const sizeController = document.querySelector('#font-size-control')
const txtChange = document.querySelector('#text')

function setMeasure(measure) {
    txtChange.style.fontSize = `${measure.currentTarget.value}px`;
    // console.log(measure.currentTarget.value);
}
sizeController.addEventListener('input', setMeasure)
