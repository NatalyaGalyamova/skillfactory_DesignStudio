const entities = [
  {
    title: 'Rostov-on-Don, Admiral',
    img: './images/png/photo.png',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
    title: 'Sochi Thieves',
    img: './images/png/img-slider-2.png',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
  },
  {
    title: 'Rostov-on-Don Patriotic',
    img: './images/png/img-slider-3.png',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'
  }
]

const title = document.querySelector('.info-block__btn')
const img = document.querySelector('.info-block__img')
const city = document.querySelector('#city')
const area = document.querySelector('#area')
const time = document.querySelector('#time')
const dots = document.querySelector('.info-block__dots')

const setEntity = (index) => {
  title.innerText = entities[index].title
  img.src = entities[index].img
  city.innerText = entities[index].city
  area.innerText = entities[index].area
  time.innerText = entities[index].time
}

const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')
let currentIndex = 0

leftArrow.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
rightArrow.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})
  

