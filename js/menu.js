const items = [
    { id: 1, title: "خانه", href: "index.html" },
    { id: 3, title: "درباره ما", href: "about.html" },
    { id: 4, title: "تماس", href: "contact.html" }
  ];
  
  const menu = document.getElementById("menu");
  
  menu.innerHTML = items
    .map(item => `
      <li>
        <a  href="${item.href}" data-id="${item.id}">${item.title}</a>
      </li>
    `)
    .join("");