// Кастомний курсор
const follower = document.createElement('div');
follower.id = 'cursor-follower';
document.body.appendChild(follower);

document.addEventListener('mousemove', (e) => {
    follower.style.opacity = '1';
    document.body.classList.add('custom-cursor-active');
    follower.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Паралакс для фонових картинок
document.addEventListener('mousemove', (e) => {
    const images = document.querySelectorAll('.image-bg');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    images.forEach(img => {
        img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
});

// Інтерактивні елементи
const interactiveElements = document.querySelectorAll('a, button, .category-item, .user-icons .icon-btn');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = (follower.style.transform || '') + ' scale(2.5)';
        follower.style.background = 'rgba(224, 190, 162, 0.3)';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.transform = (follower.style.transform || '').replace(' scale(2.5)', '');
        follower.style.background = 'rgba(224, 190, 162, 0.1)';
    });
});

// Підписка
const subBtn = document.querySelector('.subscribe-button');
if (subBtn) {
    subBtn.addEventListener('click', () => {
        subBtn.innerHTML = 'ДЯКУЄМО ЗА ПІДПИСКУ! ✨';
        subBtn.style.background = '#252525';
    });
}