
// Бургер меню
const menuNav = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu__list');
if(menuNav){
    // const menuBody = document.querySelector('.menu__list');
    
    menuNav.addEventListener("click", function(e)  {
        // document.body.classList.toggle('_lock')
        menuNav.classList.toggle('_active')
        menuBody.classList.toggle('_active')

        
    });
    
}

// Плавная прокрутка по навигации
const anchors =  document.querySelectorAll('a[href*="#"]')
for ( let anchor of anchors) {
    anchor.addEventListener("click", function(event){
event.preventDefault();
const blockID = anchor.getAttribute('href')

// скрывает навигацию при нажатии на ссылку
if(menuBody.classList.contains('_active')){
    menuNav.classList.remove('_active')
    menuBody.classList.remove('_active')
}
document.querySelector('' + blockID).scrollIntoView( {
    behavior: "smooth",
    block: "start"
})

    } )
}



// выпадающее меню 2 блока
const iconAbout = document.querySelector('.about-block__body__blocks')
const menuArrow = document.querySelector('.arrow');
if(menuArrow) {
    menuArrow.addEventListener("click", function(e) {
        menuArrow.classList.toggle('_active')
        iconAbout.classList.toggle('_active')
    });
}


// выпадающее меню 3 блока
const serviceBlock = document.querySelector('.services-block__body__cards_conteiner')
const menuArrowServ = document.querySelector('.arrowServices');
if(menuArrowServ) {
    menuArrowServ.addEventListener("click", function(e) {
        menuArrowServ.classList.toggle('_active')
        serviceBlock.classList.toggle('_active')
    });
}

// выпадающее меню 4 блока
const priceBlock = document.querySelector('.pricing-block__body__block-cards')
const menuArrowPrice = document.querySelector('.arrowPricing');
if(menuArrowPrice) {
    menuArrowPrice.addEventListener("click", function(e) {
        menuArrowPrice.classList.toggle('_active')
        priceBlock.classList.toggle('_active')
    });
}

// Выпадающее меню в карточках прайса
// выпадает только одно меню, первое. через querySelectorAll вообще не работает(
// const priceBlockCard = document.querySelector('.block-card__down')
// const menuArrowPriceCard = document.querySelector( ".arrowPricingCard" );
// if(menuArrowPriceCard) {
//     menuArrowPriceCard.addEventListener("click", function(e) {
//         menuArrowPriceCard.classList.toggle('_active');
//         priceBlockCard.classList.toggle('_active');
//     });
// }
// 






// 5й блок тим(команда)
const teamBlockCardPoint = document.querySelector('.team-block__body__block-points')
const teamBlockCard = document.querySelector('.team-block__body__block-cards')
const menuArrowTeam = document.querySelector( ".arrowTeam" );
if(menuArrowTeam) {
    menuArrowTeam.addEventListener("click", function(e) {
        menuArrowTeam.classList.toggle('_active')
        teamBlockCard.classList.toggle('_active')
        teamBlockCardPoint.classList.toggle('_active')
    });
}


//слайдер (подобие)
// .team-block__body__block-card:nth-of-type(2)



// 2я кнопка
// const teamBlockCardPoint = document.querySelector('.team-block__body__block-points')
// const CardOne = document.querySelector('.team-block__body__block-card')
// const CardTwo = document.querySelector('.team-block__body__block-card:nth-of-type(2)')
// const pointTwo = document.querySelector( ".currentSlideTwo" );
// if(pointTwo) {
//     pointTwo.addEventListener("click", function(e) {
//         pointTwo.classList.toggle('_active')
//         CardTwo.classList.toggle('_active')
//         CardOne.classList.toggle('_active')
//         // teamBlockCardPoint.classList.toggle('_active')
//     });
// }



// 6й блок блог

const BlogBlockCardButton = document.querySelector('.blog__block-button')
const BlogBlockCard = document.querySelector('.blog-block__body__block-content')
const menuArrowBlog = document.querySelector( ".arrowBlog" );
if(menuArrowBlog) {
    menuArrowBlog.addEventListener("click", function(e) {
        menuArrowBlog.classList.toggle('_active')
        BlogBlockCard.classList.toggle('_active')
        BlogBlockCardButton.classList.toggle('_active')
    });
}



// 7й блок контакты


const contBlockIcons = document.querySelector('.contact-block__body-block-icons')
const contBlockForm = document.querySelector('.contact-block__body-block-forms')
const menuArrowCont = document.querySelector( ".arrowContact" );
if(menuArrowCont) {
    menuArrowCont.addEventListener("click", function(e) {
        menuArrowCont.classList.toggle('_active')
        contBlockIcons.classList.toggle('_active')
        contBlockForm.classList.toggle('_active')
       
    });
}