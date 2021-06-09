"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ad = document.querySelectorAll(".promo__adv img"),
    ganre = document.querySelector(".promo__genre"),
    background = document.querySelector(".promo__bg"),
    movielist = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = document.querySelector("[type='checkbox']");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newFilm = addInput.value,
      favorite = checkBox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);

      createMovieLIst(movieDB.movies, movielist);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((iteam) => {
      iteam.remove();
    });
  };

  const makeChanges = () => {
    ganre.innerHTML = "драма";
    background.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArray = (arr) => {
    arr.sort();
  };

  function createMovieLIst(films, parent) {
    parent.innerHTML = "";
    sortArray(films);

    films.forEach((film, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`;
    });

    parent.childNodes.forEach((child, i) => {
      child.addEventListener("click", (event) => {
        if (event.target.className == "delete") {
          child.remove();
          movieDB.movies.splice(i, 1); //изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
        }
        createMovieLIst(films, parent);
      });
    });
  }

  deleteAdv(ad);
  makeChanges();
  createMovieLIst(movieDB.movies, movielist);
});
