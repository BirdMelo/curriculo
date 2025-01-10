const header_buttons = document.querySelectorAll('header button')
const sectionList = document.querySelectorAll('main section')
export function buttons() {
    header_buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            switchButtonStyle(button.id)
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        switchButtonStyle('resume_btn')
    })
}
function switchButtonStyle(id) {
    const btn = document.getElementById(id)
    header_buttons.forEach(button => {
        if(button.id !== id){
            button.classList.remove('selectedButton')
        }
    })
    btn.classList.add('selectedButton')
    switchSectionHidden(btn.id)
}
function switchSectionHidden(id){
    const similarWord = id.split('_')[0]
    sectionList.forEach(section => {
        if (section.id.split('_')[0] === similarWord) {
            section.classList.add('showContent')
            section.classList.remove('hidden')
        } else {
            section.classList.remove('showContent')
            section.classList.add('hidden')
        }
    })
}