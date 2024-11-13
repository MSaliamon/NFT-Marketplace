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


const nftsLink = document.getElementById('nftsLink');
const collectionsLink = document.getElementById('collectionsLink');
const cardContainer = document.getElementById('cardContainer');

const originalOrder = Array.from(cardContainer.children);

nftsLink.addEventListener('click', (event) => {
    event.preventDefault();
    restoreOriginalOrder();
});

collectionsLink.addEventListener('click', (event) => {
    event.preventDefault();
    reverseCardOrder();
});


function restoreOriginalOrder() {
    cardContainer.innerHTML = ''; 
    originalOrder.forEach(card => cardContainer.appendChild(card));
}

function reverseCardOrder() {
    const cards = Array.from(cardContainer.children);
    cardContainer.innerHTML = '';
    cards.reverse().forEach(card => cardContainer.appendChild(card));
}
