const sessions_info = [
  {
    id: 1,
    title: 'Standard RitmStyle',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 2,
    title: 'RitmStyle for couples',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 3,
    title: 'RitmStyle for pregnant',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 4,
    title: 'RitmStyle with full immersion underwater',
    img_URL: './IMG/sessions_img.png'
  },
  {
    id: 5,
    title: 'RitmStyle + colorful underwater photo shoot',
    img_URL: './IMG/sessions_img.png'
  }
]

const sessionsContainer = document.querySelector('.sessions_container');

sessions_info.forEach(el => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');

    titleElem.innerText = el.title;

    cardElem.style.backgroundImage = `url(9${el.img_URL})`

    cardElem.append(titleElem);
    sessionsContainer.append(cardElem);
});

const news_info = [
  {
    id: 1,
    title: 'Text 1',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  },
  {
    id: 2,
    title: 'Text 2',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  },
  {
    id: 3,
    title: 'Text 3',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  },
  {
    id: 4,
    title: 'Text 4',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  },
  {
    id: 5,
    title: 'Text 5',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  },
  {
    id: 6,
    title: 'Text 6',
    date: '13.02.2022',
    image_URL: './media/news_img.png'
  }
]

const newsContainer = document.querySelector('.news_container');

news_info.forEach(el => {
  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');
  const dateElem = document.createElement('span');

  titleElem.innerText = el.title;
  dateElem.innerText = el.date;

  cardElem.style.backgroundImage = `url('${el.image_URL}')`;

  cardElem.append(dateElem, titleElem);
  newsContainer.append(cardElem);
});