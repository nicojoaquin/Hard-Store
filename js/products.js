//Creador de productos. 
class Article {
    constructor (id, name, price, cat, stock, desc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cat = cat
    this.stock = stock
    this.desc = desc
  }
}

const msi = new Article ('msi', 'PC de escritorio: MSI', 155000, 'desktop', 3, `Procesador I5 de ultima generacion, con 16gb de RAM.`, );
const asus = new Article ('asus', 'PC de escritorio: Asus ROG', 200000, 'desktop', 2, "Procesador i7 de ultima generacion, con 32gb de RAM.");
const aorus = new Article ('aorus', 'PC de escritorio: Gigabyte Aorus', 270000, 'desktop', 2, "Procesador i9 de ultima generacion, con 32gb de RAM.");
const hp = new Article ('hp', 'Notebook HP Omen', 182500, 'notebooks', 4, "Agil y compacta para trabajar y jugar.");
const alienWare = new Article ('alienware', 'Notebook AlienWare', 330850, 'notebooks', 1, "Portatil echo para el gaming, con las ultimas tecnologias.");
const samsung = new Article ('samsung', 'Monitor Samsung', 22000, 'monitors', 3, "Monitor full HD y 60hz de refresco.");
const viewSonic = new Article ('viewsonic', 'Monitor ViewSonic 144HZ', 39000, 'monitors', 3, "Monitor full HD y 144hz de refresco.");
const hyperX = new Article ('hyperx', 'Headset HyperX', 11300, 'headsets', 5, "Sonido envolvente 7.1, y gran calidad de micrófono.");
const razer = new Article ('razer', 'Headset Razer', 15000, 'headsets', 6, "Sonido 7.1 junto a gran calidad de micrófono y construcción.");
const logitech = new Article ('logitech', 'Headset Logitech', 13000, 'headsets', 3, 'Sonido de gran calidad y micrófono excelente.' )

let articles = [msi, asus, aorus, hp, alienWare, samsung, viewSonic, hyperX, razer, logitech]; //Array de los productos creados.

export {
    Article, articles
}