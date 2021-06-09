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
    addInput = document.querySelector(".adding__input"),
    checkBox = document.querySelector("[type='checkbox']");

  ad.forEach((iteam) => {
    iteam.remove();
  });
  ganre.innerHTML = "драма";
  background.style.backgroundImage = 'url("img/bg.jpg")';
  movielist.innerHTML = "";
  movieDB.movies.sort();

  movieDB.movies.forEach((film, i) => {
    movielist.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`;
  });

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newFilm = addInput.value,
      favorite = checkBox.checked;

    if (favorite) {
      console.log("Добавляем любимый фильм");
    }

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      movieDB.movies.push(newFilm);
      movieDB.movies.sort();
      movielist.innerHTML = "";
      movieDB.movies.forEach((film, i) => {
        movielist.innerHTML += `<li class="promo__interactive-item">${
          i + 1
        } ${film} <div class="delete"></div></li>`;
      });
      console.log(movieDB.movies);
    }
  });

  movielist.childNodes.forEach((child) => {
    child.addEventListener("click", (event) => {
      if (event.target.className == "delete") {
        console.log(event.target.className);
        child.remove();
      }
    });
  });
});
