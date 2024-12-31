const menuItems = {
    food: [
        { name: "Izgara Tavuk", price: "120 TL" },
        { name: "Köfte Tabağı", price: "140 TL" },
        { name: "Sebzeli Makarna", price: "100 TL" }
    ],
    drinks: [
        { name: "Türk Kahvesi", price: "30 TL" },
        { name: "Latte", price: "40 TL" },
        { name: "Çay", price: "20 TL" }
    ],
    desserts: [
        { name: "Cheesecake", price: "50 TL" },
        { name: "Tiramisu", price: "55 TL" },
        { name: "Dondurma", price: "35 TL" }
    ]
};

function showCategory(category) {
    const menuContent = document.getElementById('menu-content');
    menuContent.innerHTML = '';

    menuItems[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuContent.appendChild(menuItem);
    });
}
