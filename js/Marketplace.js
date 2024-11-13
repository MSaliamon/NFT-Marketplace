const InputText = document.querySelector("#search-input");
const SearchInfo = document.querySelectorAll(".search-text");
const cards = document.querySelectorAll(".section1-card");

const searchFunction = (text) => {
  if (text.trim() === "") {
    cards.forEach((card) => {
      card.style.display = "block";
    });
  } else {
    cards.forEach((card) => {
      card.style.display = "none";
    });
    SearchInfo.forEach((element) => {
      if (element.textContent.toLowerCase().startsWith(text.toLowerCase())) {
        element.closest(".section1-card").style.display = "block";
      }
    });
  }
};

InputText.addEventListener("input", (e) => {
  searchFunction(e.target.value);
});


// Отримуємо посилання на елементи
const nftsLink = document.getElementById('nftsLink');
const collectionsLink = document.getElementById('collectionsLink');
const cardContainer = document.getElementById('cardContainer');

// Зберігаємо початковий порядок карток
const originalOrder = Array.from(cardContainer.children);

// Клік на "NFTs" — повертаємо оригінальний порядок карток
nftsLink.addEventListener('click', (event) => {
    event.preventDefault();
    restoreOriginalOrder();
});

// Клік на "Collections" — змінюємо порядок карток на зворотній
collectionsLink.addEventListener('click', (event) => {
    event.preventDefault();
    reverseCardOrder();
});

// Функція для відновлення оригінального порядку
function restoreOriginalOrder() {
    cardContainer.innerHTML = ''; // Очищаємо контейнер
    originalOrder.forEach(card => cardContainer.appendChild(card)); // Додаємо картки в оригінальному порядку
}

// Функція для зворотного порядку карток
function reverseCardOrder() {
    const cards = Array.from(cardContainer.children); // Отримуємо всі картки як масив
    cardContainer.innerHTML = ''; // Очищаємо контейнер
    cards.reverse().forEach(card => cardContainer.appendChild(card)); // Додаємо картки у зворотному порядку
}
