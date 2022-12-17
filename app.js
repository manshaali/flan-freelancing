let bars = document.querySelector('.bars')
let mobNav = document.querySelector('.mob-nav')
let darkBackground = document.querySelector('.dark-background')
bars.addEventListener('click',function(){
mobNav.classList.toggle('mob-nav-show')
darkBackground.classList.toggle('hide')
})

darkBackground.addEventListener('click', function(){
    mobNav.classList.remove('mob-nav-show')
    darkBackground.classList.add('hide')
    
})