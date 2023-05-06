const cinema = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const cont = document.querySelector(".container__block"); //получаем контейнер, куда будем добавлять новую разметку

const createDirector = (obj) => {
  const block = document.createElement("div"); //создаем элемент разметки и кладем его в переменную "block"
  block.className = "container__cinema"; //создаем класс для нового элемента разметки
  const p = document.createElement("p"); //создаем элемент разметки и кладем его в переменную "p"
  p.className = "container__cinema-p"; //создаем класс для нового элемента разметки
  p.textContent = obj.name; //вставляем значение конкретного элемента массива между тегами p в разметке
  const block2 = document.createElement("div"); //создаем элемент разметки и кладем его в переменную "block2"
  block2.className = "container__cinema-f"; //создаем класс для нового элемента разметки
  const p2 = document.createElement("p"); //создаем элемент разметки и кладем его в переменную "p2"
  p2.className = "container__cinema-p2"; //создаем класс для нового элемента разметки
  p2.textContent = obj.career; //вставляем значение конкретного элемента массива между тегами p в разметке
  const a = document.createElement("a"); //создаем элемент разметки и кладем его в переменную "a"
  a.className = "container__cinema-a"; //создаем класс для нового элемента разметки
  a.href = obj.films; //вставляем значение ссылки из конкретного элемента массива
  a.textContent = "фильмография"; //вставляем текст, на который вешается ссылка

  //удочеряем разметку в элемент block2
  block2.append(p2);
  block2.append(a);

  //удочеряем разметку в элемент block
  block.append(p);
  block.append(block2);
  return block;
};

cinema.forEach((director) => {
  //для каждого элемента массива вызываем функцию createDirector
  const directorElement = createDirector(director);
  cont.append(directorElement); //добавляем разметку в контейнер
});

const best = document.querySelector(".container__best"); //получаем контейнер, куда будем добавлять новую разметку для лучших фильмов

const topFilmsList = cinema.map((director) => {
  //получаем новый массив с лучшими фильмами с пробелами между элементами
  return " " + director.top_rated_film;
});

const filmElement = document.createElement("p"); //создаем новую разметку для лучших фильмов
filmElement.className = "container__best-films"; //создаем класс для нового элемента разметки
filmElement.textContent = topFilmsList; //вставляем значение конкретного элемента массива между тегами p в разметке

best.append(filmElement); //добавляем разметку в контейнер
