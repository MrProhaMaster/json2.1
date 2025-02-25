document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = listElement.querySelectorAll('.dropdown__item');

        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        items.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault(); // Отменяем переход по ссылке
                const link = item.querySelector('.dropdown__link');

                valueElement.textContent = link.textContent;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
});