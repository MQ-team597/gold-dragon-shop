// Функция для вычисления суммы
function calculatePrice() {
  let goldAmount = document.getElementById("goldAmount").value;
  if (goldAmount < 500) {
    document.getElementById("error-message").innerText = "Минимум 500 голды для покупки!";
    document.getElementById("error-message").style.display = "block";
    return;
  } else {
    let price = goldAmount / 2.5; // 1 рубль = 2.5 голды
    document.getElementById("price").innerText = `Сумма к оплате: ${price.toFixed(2)} ₽`;
    document.getElementById("price").style.display = "block";
    document.getElementById("error-message").style.display = "none";

    // Отображаем сумму в инструкции по оплате
    document.getElementById("paymentAmount").innerText = `Сумма к оплате: ${price.toFixed(2)} ₽`;

    // Переход на страницу с инструкцией
    document.querySelector(".page.active").classList.remove("active");
    document.getElementById("paymentPage").classList.add("active");
  }
}

// Функция для проверки оплаты
function checkPayment() {
  let cardNumber = document.getElementById("cardNumber").value;
  document.getElementById("paymentError").style.display = "none"; // скрываем ошибку на всякий случай

  // Случайная задержка от 3 до 5 секунд
  const delay = Math.floor(Math.random() * 2000) + 3000; // от 3000 до 5000 мс

  // Через задержку проверяем карту
  setTimeout(() => {
    if (cardNumber !== "1111222233334444") {
      document.getElementById("paymentError").style.display = "block";
    }
  }, delay);
}
