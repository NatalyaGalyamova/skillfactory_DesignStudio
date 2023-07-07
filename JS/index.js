const entities = [
  {
    text: 'Первый кот',
    img: 'https://www.purinaone.ru/cat/sites/purinaone.ru/files/2019-03/kittens-cat3.jpg'
  },
  {
    text: 'Второй кот',
    img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg'
  },
  {
    text: 'Третий кот',
    img: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
]

const text = document.querySelector('.text')
const img = document.querySelector('.image')

const setEntity = (index) => {
  text.innerText = entities[index].text
  img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})
  

