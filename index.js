"use strict";
const list = [
  {
    id: 1,
    title: "Landing page",
    category: "htmlCss",
    img: "./img/NY.jpg",
    imgLink:"./img/Link.png",
    linkPage: `https://eleonoradellamico.github.io/LandingPage/`,
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/EleonoraDellamico/LandingPage"
  },
  {
    id: 2,
    title: "Cinema",
    category: "htmlCss",
    img: "./img/Cinema.jpg",
    imgLink:"./img/Link.png",
    linkPage:"https://eleonoradellamico.github.io/Cinema/",
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/EleonoraDellamico/Cinema"
    
  },
  {
    id: 3,
    title: "Marea Coders Html&Css",
    category: "htmlCss",
    img: "./img/Sea.jpg",
    imgLink:"./img/Link.png",
    linkPage: `https://martreyz.github.io/project-promo-k-module-1-team-7/ `,
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/martreyz/project-promo-k-module-1-team-7"
  },
  {
    id: 4,
    title: "Memory Card JavaScript",
    category: "javascript",
    img: "./img/MemoryCard.jpg",
    imgLink:"./img/Link.png",
    linkPage: "https://eleonoradellamico.github.io/LearnJavaScrip_MemoryGame/",
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/EleonoraDellamico/LearnJavaScrip_MemoryGame"
  },
  {
    id: 5,
    title: "Pokemon React",
    category: "react",
    img: "./img/Pokemon.jpg",
    imgLink:"./img/Link.png",
   linkPage: `https://eleonoradellamico.github.io/Pokemon__REACT/`,
   imgGit:"./img/gitIcon.png",
   linkGitHub:"https://github.com/EleonoraDellamico/Pokemon__REACT"
  },
  {
    id: 6,
    title: " Visiting Card JavaScript",
    category: "javascript",
    img: "./img/Superheros.jpg",
    imgLink:"./img/Link.png",
    linkPage: "http://beta.adalab.es/project-promo-K-module-02-team-05/",
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/EleonoraDellamico/project-promo-K-module-02-team-05"
  },
  {
    id: 7,
    title: "Rick&Morty React",
    category: "react",
    img: "./img/Rick-Morty.jpg",
    imgLink:"./img/Link.png",
    linkPage: "https://eleonoradellamico.github.io/Rick_Morty_React/#/",
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/EleonoraDellamico/Rick_Morty_React"
  },
  {
    id: 8,
    title: "from JavaScript to React",
    category: "react",
    img: "./img/ReactCard.jpg",
    imgLink:"./img/Link.png",
    linkPage: "https://martreyz.github.io/project-promo-k-module-3-team-4/#/",
    imgGit:"./img/gitIcon.png",
    linkGitHub:"https://github.com/martreyz/project-promo-k-module-3-team-4"
  }, 
];



// function toggleMenu() {
//    let element = document.querySelector(".menuppal");
//    element.classList.toggle("hidden");
// };

const sectionCenter= document.querySelector (".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


//LOAD ITEMS
window.addEventListener("DOMContentLoaded", function (){
  displayListItems(list);
});
function displayListItems(listItems){
  let displayList = listItems.map
(function(item){
    //console.log(item);

    return `<article class="menu-item">
	<img src=${item.img} class="photo" 
alt=${item.title} />
	<div class="item-info">
		<header>
			<h4>${item.title}</h4>
    </header>
    <a title="${item.title}"href="${item.linkPage}" target="_blank"><img class="linkIcon" src="${item.imgLink}" alt="link"/></a>
    <a title="${item.title}"href="${item.linkGitHub}" target="_blank"><img class="linkIcon" src="${item.imgGit}" alt="link"/></a>
	</div>
</article>`;
  });
  displayList = displayList.join("");
sectionCenter.innerHTML = displayList;
};


//FILTERES ITEMS
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    //use filter depending on category 
    const listCategory = list.filter(function (listItem){
      if(listItem.category === category){
        return listItem;
      }
    });
    if(category === "all"){
      displayListItems(list)
    }else{
      displayListItems(listCategory);
    }
  });
});