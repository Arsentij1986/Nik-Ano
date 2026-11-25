const resultEl = document.getElementById('result');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const warningEl = document.getElementById('warning');

let count = 0;

// Логика: цвет фона результата + блокировка кнопок + надпись
function update() {
  resultEl.textContent = count;

  // Цвет фона окошка результата
  if (count > 0) {
    resultEl.style.backgroundColor = 'yellow';
    resultEl.style.color = '#333';
  } else if (count < 0) {
    resultEl.style.backgroundColor = 'green';
    resultEl.style.color = '#fff';
  } else {
    resultEl.style.backgroundColor = 'red';
    resultEl.style.color = '#fff';
  }

  // Блокировка кнопок на границах ±10
  plusBtn.disabled = count === 10;
  minusBtn.disabled = count === -10;

  // Предупреждение при экстремальном значении
  if (count === 10 || count === -10) {
    warningEl.textContent = 'Вы достигли экстремального значения';
  } else {
    warningEl.textContent = '';
  }
}

// Слушатели событий
plusBtn.addEventListener('click', () => {
  if (count < 10) {
    count++;
    update();
  }
});

minusBtn.addEventListener('click', () => {
  if (count > -10) {
    count--;
    update();
  }
});

// Стартовое состояние (ноль → красный фон, обе кнопки активны)
update();