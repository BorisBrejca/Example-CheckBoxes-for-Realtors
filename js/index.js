// PoliFill IE 11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
// PoliFill IE 11

// Показкать / Скрыть SideBar на мобилке 
iconFake = document.querySelector('#nav-icon1');
wrapperActive = document.querySelector('.aside__wrapper');

iconFake.onclick = function (){
    iconFake.classList.toggle('open');
    wrapperActive.classList.toggle('aside__wrapper--active')
}
// Показать / Cкрыть новые карточки

BtnShowMoreCards = document.querySelector('.block__showmore');
WrapperCardHidden = document.querySelectorAll('.wrapper__card-hidden');
WrapperCardTitle = document.querySelector('.block__title');

BtnShowMoreCards.addEventListener('click', function(){
    WrapperCardHidden.forEach((e) => {
        e.classList.toggle('wrapper__card-hidden');
    })
})

// Скрывать / Показывать виджеты в фильтрах
widgetCards = document.querySelectorAll('.aside__card');

widgetCards.forEach((widget) => {
    widget.addEventListener('click', function(e){
        if (e.target.classList.contains('aside__title')){
            widget.querySelector('.icon__up').classList.toggle('icon__up--hidden');
            widget.querySelector('.list__data-checkbox').classList.toggle('list__data-checkbox--hidden')

        }
    })
})


// При нажатии на кнопку "Любая" - сбрасываем элементы списка
locationAny = document.querySelector('#location_05');
locationChecBoxes = document.querySelectorAll('[data-cheboxes]');

locationAny.addEventListener('change', function(){
    if(locationAny.checked){
        locationChecBoxes.forEach(function(item){
            item.checked = false
        })

    }
})
// Сбрасываем кнопку "Любая" при выборе элементов из списка
locationChecBoxes.forEach(function(item){
        item.addEventListener('change', function(){
            if(item.checked){
                locationAny.checked = false
            }
    })
})
// Добавляем опции при клике на "Показать ещё"
const showMoreOption = document.querySelector('.show_more-checkbox')
const radioHidden = document.querySelectorAll('.radio--hidden')

// showMoreItems.addEventListener('click' , function(){
//     radioHidden.forEach(function(item){
//         item.classList.toggle('radio--hidden')
//     })
// })

// Доп ТЗ

showMoreOption.onclick = function (){
    if(showMoreOption.dataset.options == 'hidden'){
        radioHidden.forEach(function(item){
            item.classList.remove('radio--hidden')
            showMoreOption.dataset.options = 'visible'
            showMoreOption.innerText = 'Скрыть лишние блоки'
        })
    }else if(showMoreOption.dataset.options == 'visible'){
        radioHidden.forEach(function(item){
            item.classList.add('radio--hidden')
            showMoreOption.dataset.options = 'hidden'
            showMoreOption.innerText = 'Показать ещё'
        })
    }


    
}