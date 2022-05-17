window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(depoimentos)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2
        //verificar se a secao passou da linha
        // topo da secao
    const sectionTop = section.offsetTop
        // a altura da secao
    const sectionHeight = section.offsetHeight
        // o topo da secao shegou o ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
        // informacoes dos dados e da logica
        // console.log('O topo da secao chegou ou passou da linha?', sectionTopReachOrPassedTargetline)
        // verificar se a base esta abaixo da linha alvo
        // a secao termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
        // o final da secao passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
        // console.log('O fundo da secao passou da linha?', sectionEndPassedTargetLine)
        // limites da secao
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    console.log(section)

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
        console.log(menuElement)
    }

}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home image, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#depoimentos,
#empresas,
#contact
`);