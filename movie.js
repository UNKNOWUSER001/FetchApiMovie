const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieselect = document.getElementById('movieTitle');

let price = +movieselect.getAttribute('data-value');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateselected();
  }
});

function updateselected() {
  const selectSeats = document.querySelectorAll('.row .seat.selected');
  const countseats = selectSeats.length;
  count.innerText = countseats;
  total.innerText = countseats * price;
}



//ชื่อหนัง ที่ดึงมา
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get('title');

  const movieTitleElement = document.getElementById('movieTitle');
  movieTitleElement.textContent = `ชื่อหนัง: ${movieTitle}`;
});
