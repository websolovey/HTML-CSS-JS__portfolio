"use strict";

//Создаем карточку портфолио

class AddPortfolioCard {
  constructor(src, alt, title, descr, category, href, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.category = category;
    this.href = href;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("section");
    element.classList.add("portfolio__card");
    element.innerHTML = `
      <img
        src=${this.src}
        alt=${this.alt}
        class="card-bg"
      />
      <div class="card__info">
        <h3 class="subtitle portfolio-card__title">${this.title}</h3>
        <p class="portfolio-card__description">
         ${this.descr}
        </p>
        <p class="portfolio-card__category">${this.category}</p>
      </div>
      <a
        href=${this.href}
        class="card-btn subtitle"
        target="_blank"
        >смотреть полностью</a
      >`;

    this.parent.append(element);
  }
}

// new AddPortfolioCard(
//     "assets/img/projects/buhone.jpg",
//     "buheone-site",
//     "сайт buhone",
//     ` Верстка сайта для компании предоставляющей бухгалтерские
//     услуги`,
//     "Вёрстка",
//     "https://websolovey.github.io/buhone/index.html",
//     ".portfolio__cards"
// ).render();