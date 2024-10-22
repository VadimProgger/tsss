const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function Start(){
    setScore(getScore())
}

function setScore(score){
    localStorage.setItem('score', score)
    $score.textContent = score
}
function getScore(){
    return Number(localStorage.getItem('score')) ?? 0
}

function addOne(){
    setScore(getScore()+1)
}

$circle.addEventListener('click', (event) =>{
    const rect = $circle.getBoundingClientRect()
    console.log('click')

    const offfsetX = event.clientX - rect.left - rect.width / 2
    const offfsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 30

    const tiltX = (offfsetY / rect.height) * DEG
    const tiltY = (offfsetX / rect.width) * -DEG

    $circle.style.setProperty('--tiltX', `${tiltX}deg`)
    $circle.style.setProperty('--tiltY', `${tiltY}deg`)

    setTimeout(() => {
        $circle.style.setProperty('--tiltX', 0)
        $circle.style.setProperty('--tiltY', 0)
    },300)

    const plusOne = document.createElement('div')
    plusOne.classList.add('plus-one')
    plusOne.textContent = '+1'


    $circle.parentElement.appendChild(plusOne)

    addOne()

    setTimeout(()=>{
        plusOne.remove()
    },2000)
})

Start()