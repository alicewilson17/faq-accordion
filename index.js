const accordions = document.querySelectorAll('.accordion')
console.log(accordions)
const arrayFromCollection = [...accordions]
console.log(arrayFromCollection)

accordions.forEach(accordion => {
    const question = accordion.querySelector('.accordion-question')
    question.addEventListener('click', e => {
        const accordionBtn = question.querySelector('button')
        accordion.classList.toggle('active')
        if(accordionBtn.textContent === "+") {
            accordionBtn.textContent = "-"
        }
        else {
            accordionBtn.textContent = "+"
        }
    })
})