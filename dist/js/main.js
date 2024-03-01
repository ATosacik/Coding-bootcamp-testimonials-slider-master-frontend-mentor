const personBoxes = document.querySelectorAll('.person-box');

const showCurrPersonBox = i => {
  for (const box of personBoxes) box.classList.add('hidden');
  personBoxes[i].classList.remove('hidden');
}

const changeCurrBoxIndex = delta => {
  currBoxIndex = (currBoxIndex + delta + personBoxes.length) % personBoxes.length;
  showCurrPersonBox(currBoxIndex);
}

let currBoxIndex = 0;

document.querySelectorAll('.prev-img-btn, .next-img-btn').forEach(btn => btn.addEventListener('click', () => changeCurrBoxIndex(btn.classList.contains('prev-img-btn') ? -1 : 1)));