"use strict";
const menu = [
  {
    id: 1,
    title: "Landing page",
    category: "htmlCss",
    img: "./img/NY.jpg",
    a: `http://beta.adalab.es/modulo-1-evaluacion-final-EleonoraDellamico/ `
  },
  {
    id: 2,
    title: "Cinema",
    category: "htmlCss",
    img: "./img/Cinema.jpg",
    
  },
  {
    id: 3,
    title: "Marea Coders Web Html&Css",
    category: "htmlCss",
    img: "./img/Sea.jpg",
    a: `https://github.com/martreyz/project-promo-k-module-1-team-7 `
  },
  {
    id: 4,
    title: "Memory Card JavaScript",
    category: "javascript",
    img: "./img/MemoryCard.jpg",
    a: "https://eleonoradellamico.github.io/LearnJavaScrip_MemoryGame/"
  },
  {
    id: 5,
    title: "Pokemon React",
    category: "react",
    img: "./img/Pokemon.jpg",
   a: `http://beta.adalab.es/modulo-3-evaluacion-intermedia-EleonoraDellamico/`
  },
  {
    id: 6,
    title: " Visiting Card JavaScript",
    category: "javascript",
    img: "./img/Superheros.jpg",
    a: "https://github.com/martreyz/project-promo-k-module-3-team-4" 
  },
  {
    id: 7,
    title: "Rick&Morty React",
    category: "react",
    img: "./img/Rick-Morty.jpg",
    a: "http://beta.adalab.es/modulo-3-evaluacion-final-EleonoraDellamico/#/"
  },
  {
    id: 8,
    title: "from JavaScript to React",
    category: "react",
    img: "./img/ReactCard.jpg",
    a: "http://beta.adalab.es/project-promo-K-module-02-team-05/"  
  }, 
];
console.log("eli");


function myFunction () {
   let element = document.querySelector(".menuppal");
   element.classList.toggle("hidden");
};

const sectionCenter= document.querySelector (".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


//LOAD ITEMS
window.addEventListener("DOMContentLoaded", function (){
  displayMenuItems(menu);
});
function displayMenuItems(menuItems){
  let displayMenu = menuItems.map
(function(item){
    //console.log(item);

    return `<article class="menu-item">
	<img src=${item.img} class="photo" 
alt=${item.title} />
	<div class="item-info">
		<header>
			<h4>${item.title}</h4>
    </header>
    
<a href="${item.a}" target="_blank"> See the project</a>
	</div>
</article>`;
  });
  displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;
};


//FILTERES ITEMS
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    //use filter depending on category 
    const menuCategory = menu.filter(function (menuItem){
      if(menuItem.category === category){
        return menuItem;
      }
    });
    if(category === "all"){
      displayMenuItems(menu)
    }else{
      displayMenuItems(menuCategory);
    }
  });
});