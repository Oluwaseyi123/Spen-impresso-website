document.querySelector('.burger').addEventListener('click', revealMenu)

function revealMenu(){
    document.querySelector('nav').style.display='block'
    document.querySelector('.burger').style.display='none'
    console.log('I guess')
}