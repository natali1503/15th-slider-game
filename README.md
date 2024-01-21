# Игра в "Пятнашки" с изображениями

[Демо](https://natali1503.github.io/15th-slider-game/)

Этот проект представляет собой интерактивную веб-версию классической головоломки "Пятнашки", в которой игрок должен упорядочить числа от 1 до 15, перемещая плитки по полю. Уникальность этой реализации заключается в использовании изображеня вместо чисел.

## Особенности

- **Игоровое поле:** Игоровое поле можно разбить на 9, 16 или 25 квадратов на выбор игрока в зависимости от сложности.
- **Изображения:** Для игры предоставлено стандартное изображение, так же можно выбрать собсвтенное изображение через стартовую форму.
- **Разнообразение** Изображение разбивается на выбранное число квадратов и перемешивается в рандомном порядке.
- **Интерактивность:** Игроки могут перемещать плитки, чтобы упорядочить изображения и завершить головоломку, через специальные кнопки в интерфейсе либо с помощью кнопок на клавиатуре
- **Адаптивность:** Игра адаптивна для различных размеров экранов, обеспечивая удобный игровой процесс на мобильных устройствах и настольных компьютерах.

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/natali1503/15th-slider-game.git
   ```

2. Перейдите в каталог проекта:

   ```bash
   cd 15-puzzle-game
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите приложение:

   ```bash
   npm start
   ```

## Использование

1. Откройте игру в вашем веб-браузере.
2. Перемещайте плитки, чтобы упорядочить изображения.
3. Достигните победы, упорядочив все изображения.

## Технологии

- **React:** Используется для создания компонентной структуры приложения.
  - Управление состоянием игры реализовано с помощью useReducer.
  - Маршрутизация приложения через createHashRouter.
- **CSS:** Простые стили для обеспечения удобного пользовательского интерфейса.
