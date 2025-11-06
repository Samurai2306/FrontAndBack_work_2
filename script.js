// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log('Сообщение:', message);
}

// Вызов функции сразу после определения
showMessage('Скрипт загружен и выполнен');

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    console.log('Цвет фона изменен на:', color);
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            console.log('Элемент показан');
        } else {
            element.classList.add('hidden');
            console.log('Элемент скрыт');
        }
    } else {
        console.error('Элемент не найден:', selector);
    }
}

// Функция для извлечения utm_term из URL и замены текста H1
function extractUtmTermAndReplaceH1() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    
    if (utmTerm) {
        const h1 = document.getElementById('mainTitle');
        if (h1) {
            h1.textContent = utmTerm;
            console.log('H1 заменен на значение utm_term:', utmTerm);
        }
    } else {
        console.log('Параметр utm_term не найден в URL');
    }
}

// Функция для вывода текущего времени
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    console.log('Текущее время:', timeString);
    alert('Текущее время: ' + timeString);
}

// Функция для сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
    console.log('Цвет фона сброшен');
}

// Выполнение функций после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    
    // Изменение цвета фона после загрузки DOM
    changeBackgroundColor('white');
    
    // Переключение видимости после загрузки DOM (опционально)
    // toggleVisibility('.toggle-element');
    
    // Извлечение utm_term из URL и замена H1
    extractUtmTermAndReplaceH1();
});

