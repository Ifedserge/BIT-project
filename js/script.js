// хедер
let header = document.querySelector('.js-header' );
 let headerH =  document.querySelector('.js-header' ).clientHeight;

 document.onscroll = function() {
let scroll = window.scrollY;

if ( scroll > headerH ) {
    header.classList.add('fixed');
    document.body.style.paddingTop = headerH + 'px'
}else{
    header.classList.remove('fixed');
    document.body.removeAttribute('style');
}
 }





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


const blockCardContainer = document.querySelector('.services-block__body__cards')
const blockCard = document.querySelector('.services-block__body__card:nth-child(4)')
const blockCard1 = document.querySelector('.services-block__body__card:nth-child(5)')
const blockCard2 = document.querySelector('.services-block__body__card:nth-child(6)')
const buttonServ = document.querySelector('.services__block-button');
if(buttonServ) {
    buttonServ.addEventListener("click", function(e) {
        buttonServ.classList.toggle('_active')
        blockCard.classList.toggle('_active')
        blockCard1.classList.toggle('_active')
        blockCard2.classList.toggle('_active')
        blockCardContainer.classList.toggle('_active')
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
const priceBlockDown = document.querySelector('.selector_cardOne')
const ArrowPrice = document.querySelector('.selector-arrowOne');
if(ArrowPrice) {
    ArrowPrice.addEventListener("click", function(e) {
        ArrowPrice.classList.toggle('_active')
        priceBlockDown.classList.toggle('_active')
    });
}
const priceBlockDownTwo = document.querySelector('.selector_cardTwo')
const ArrowPriceTwo = document.querySelector('.selector-arrowTwo');
if(ArrowPriceTwo) {
    ArrowPriceTwo.addEventListener("click", function(e) {
        ArrowPriceTwo.classList.toggle('_active')
        priceBlockDownTwo.classList.toggle('_active')
    });
}
const priceBlockDownThree = document.querySelector('.selector_cardThree')
const ArrowPriceThree = document.querySelector('.selector-arrowThree');
if(ArrowPriceThree) {
    ArrowPriceThree.addEventListener("click", function(e) {
        ArrowPriceThree.classList.toggle('_active')
        priceBlockDownThree.classList.toggle('_active')
    });
}




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





const peoples = [
    {
      name: 'John Doe',
      position: 'General Manager',
      photo: src='../img/man11.png',
    },
    {
        name: 'Alexa Biru',
        position: 'Office Director',
        photo: src='../img/man21.png',
    },
    {
        name: 'Ronobir Sing',
        position: 'Admin',
        photo: src='../img/man31.png',
    }
  ];
  
  
  const firstButton = document.getElementById('first-button');
  const secondButton = document.getElementById('second-button');
  const thirdButton = document.getElementById('third-button');
  
  const containersInfo = {
    firstNameInfoContainer: document.querySelector('#name'),
    lastNameInfoContainer: document.querySelector('#position'),
    imgContainer: document.querySelector('#photo')
  }
  
  function loadImages(index) {
    containersInfo.firstNameInfoContainer.innerHTML = peoples[index].name;
    containersInfo.lastNameInfoContainer.innerHTML = peoples[index].position;
    containersInfo.imgContainer.src = peoples[index].photo;
  }
  
  loadImages(0);
  
  firstButton.addEventListener('click', () => {
    loadImages(0);
  });
  
  secondButton.addEventListener('click', () => {
    loadImages(1);
  });
  
  thirdButton.addEventListener('click', () => {
    loadImages(2);
  });
  




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


function checkParams() {
    
    let fName = $('#firstName').val();
    let email = $('#mail').val();
    let phone = $('#phone').val();
    if(fName.length != 0 && email.length != 0 && phone.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}