<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Grand Luxury</title>
    <style>
        body {
            background-color: #0b3d0b; /* темно-зеленый фон */
            color: #d4f1c5; /* светло-зеленый текст */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        header {
            padding: 20px;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 0 0 8px #6aff6a;
        }
        p {
            font-size: 1.3rem;
            margin-bottom: 30px;
        }
        .btn {
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            font-size: 1.2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 0 5px 15px rgba(72, 187, 72, 0.6);
            transition: background-color 0.3s ease;
            display: inline-block;
            margin-bottom: 20px;
        }
        .btn:hover {
            background-color: #2e7d32;
        }
        .cat-gamer {
            width: 250px;
            margin-top: 20px;
            user-select: none;
        }
        footer {
            margin-top: auto;
            padding: 20px;
            font-size: 0.9rem;
            color: #a0d6a0;
        }
    </style>
</head>
<body>
    <header>
        <h1 id="title">GRAND LUXURY</h1>
        <p id="description">Подпишись на мой телеграм канал, там я много чего выкладываю</p>
        <a href="https://t.me/Elvin2025P" target="_blank" class="btn">Перейти в Telegram канал</a>
        <br />
        <button class="btn" id="greetBtn">Нажми меня</button>
    </header>

    <img 
        src="https://i.imgur.com/JC9B13O.png" 
        alt="Кот в геймерском кресле" 
        class="cat-gamer" 
        title="Кот в геймерском кресле"
    />

    <footer>
        © 2025 Grand Luxury. Все права защищены.
    </footer>

    <script>
        const greetBtn = document.getElementById('greetBtn');
        const title = document.getElementById('title');
        const description = document.getElementById('description');

        greetBtn.addEventListener('click', () => {
            alert('Добро пожаловать на Grand Luxury!');
            title.textContent = 'Спасибо за визит!';
            description.textContent = 'Подписывайся и следи за обновлениями!';
        });
    </script>
</body>
</html>
// Переключение темы
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Советы (рандомные)
const quotes = [
  "Всегда стремись к лучшему!",
  "Креативность — ключ к успеху.",
  "Не бойся экспериментировать.",
  "Терпение и труд всё перетрут.",
  "Настоящий luxury — это комфорт и стиль."
];

function showRandomQuote() {
  const quoteElem = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElem.textContent = quotes[randomIndex];
}

showRandomQuote();

// Обработка формы
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // отменить отправку по умолчанию

  alert(`Спасибо, ${form.name.value}! Ваше сообщение отправлено.`);

  form.reset();
});
