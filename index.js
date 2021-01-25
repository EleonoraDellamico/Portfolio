"use strict";
const menu = [
  {
    id: 1,
    title: "Landing page",
    category: "htmlCss",
    img: "./img/NY.jpg",
    desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 2,
    title: "Cinema",
    category: "htmlCss",
    img: "./img/Cinema.jpg",
    desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 3,
    title: "Marea Coders Web page Html&Css",
    category: "htmlCss",
    img: "./img/Sea.jpg",
    desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 4,
    title: "Memory Card JavaScript",
    category: "javascript",
    img: "./img/MemoryCard.jpg",
   desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 5,
    title: "Pokemon React",
    category: "react",
    img: "./img/Pokemon.jpg",
   desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 6,
    title: " Visiting Card JavaScript",
    category: "javascript",
    img: "./img/Superheros.jpg",
    desc: `bla bal bla bla bla bla bla `
  },
  {
    id: 7,
    title: "Rick&Morty React",
    category: "react",
    img: "./img/Rick-Morty.jpg",
    desc: "bla bla bla bla bla bla "
  },
  {
    id: 8,
    title: "from JavaScript to React",
    category: "react",
    img: "./img/ReactCard.jpg",
    desc: "bla bla bla bla bla"  
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
    <p class="item-text">${item.desc} </
p>
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