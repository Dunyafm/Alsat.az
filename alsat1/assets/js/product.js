// Пример JavaScript для добавления в список желаний
const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
const wishlist = [];

// Обработчик клика на кнопке "Добавить в список желаний"
addToWishlistButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productContainer = button.closest('.product');
    const productName = productContainer.querySelector('h3').textContent;

    // Проверяем, не добавлен ли товар уже в список желаний
    if (!wishlist.includes(productName)) {
      wishlist.push(productName);
      updateWishlistUI();
    }
  });
});

// Обновление интерфейса списка желаний
function updateWishlistUI() {
  const wishlistContainer = document.getElementById('wishlist-container');

  // Очищаем контейнер перед обновлением
  wishlistContainer.innerHTML = '';

  wishlist.forEach(productName => {
    const wishlistItem = document.createElement('div');
    wishlistItem.textContent = productName;
    wishlistContainer.appendChild(wishlistItem);
  });
}
