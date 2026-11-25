const resultEl = document.getElementById('result');

// Назначаем функции для математических операций
function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// Задаем логику работы: чтение и проверка значений, затем вывод результата
function calculate(operation) {
  const raw1 = document.getElementById('num1').value.trim();
  const raw2 = document.getElementById('num2').value.trim();

  // Проверка: должны быть ведены только числа
  const num1 = Number(raw1.replace(',', '.'));
  const num2 = Number(raw2.replace(',', '.'));

  if (raw1 === '' || raw2 === '' || isNaN(num1) || isNaN(num2)) {
    showResult('Введите корректные числа в оба поля!', true);
    return;
  }

  const value = operation(num1, num2);

  if (!isFinite(value)) {
    showResult('Делить на ноль нельзя!', true);
    return;
  }

  // Задаем 8 цифр после запятой, убираем нули в конце результата
  showResult(parseFloat(value.toFixed(8)), false);
}

// Вывод результата
function showResult(text, isError) {
  resultEl.textContent = text;
  resultEl.classList.toggle('error', isError);
}

// Обработчик событий для всех кнопок
document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    switch (button.dataset.op) {
      case 'sum':
        calculate(sum);
        break;
      case 'diff':
        calculate(diff);
        break;
      case 'mul':
        calculate(mul);
        break;
      case 'div':
        calculate(div);
        break;
    }
  });
});