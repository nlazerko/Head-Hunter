const optionBtnOrder = document.querySelector('.option__btn_order');
const optionBtnPeriod = document.querySelector('.option__btn_period');
const optionListOrder = document.querySelector('.option__list_order');
const optionListPeriod = document.querySelector('.option__list_period');

optionBtnOrder.addEventListener('click', () => {
    optionListOrder.classList.toggle('option__list_active');
    optionListPeriod.classList.remove('option__list_active');
});

optionBtnPeriod.addEventListener('click', () => {
    optionListPeriod.classList.toggle('option__list_active');
    optionListOrder.classList.remove('option__list_active');
});

optionListOrder.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('option__item')) {
        optionBtnOrder.textContent = target.textContent;
        optionListOrder.classList.remove('option__list_active');
        for(const elem of optionListOrder.querySelectorAll('.option__item')) {
            if (elem === target) {
                elem.classList.add('option__item_active');
            } else{
                elem.classList.remove('option__item_active');
            }
        }
    }
});

optionListPeriod.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('option__item')) {
        optionBtnPeriod.textContent = target.textContent;
        optionListPeriod.classList.remove('option__list_active');
        for(const elem of optionListPeriod.querySelectorAll('.option__item')) {
            if (elem === target) {
                elem.classList.add('option__item_active');
            } else{
                elem.classList.remove('option__item_active');
            }
        }
    }
});

const topCityBtn = document.querySelector('.top__city');
const city = document.querySelector('.city');
const cityClose = document.querySelector('.city__close');
const cityRegionList = document.querySelector('.city__region-list');

topCityBtn.addEventListener('click', () => {
    city.classList.toggle('city_active');
});

cityRegionList.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('city__link')) {
        topCityBtn.textContent = target.textContent;
        city.classList.remove('city_active');
    }
});

//modal okno

const overlayVacancy = document.querySelector('.overlay_vacancy');