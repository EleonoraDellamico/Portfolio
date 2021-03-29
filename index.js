'use strict';
const list = [
	{
		id: 1,
		title: 'Landing page',
		category: 'htmlCss',
		img: './img/Landing.png',
		imgLink: './img/Link.png',
		linkPage: `https://eleonoradellamico.github.io/LandingPage/`,
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/EleonoraDellamico/LandingPage'
	},
	{
		id: 2,
		title: 'Netflix',
		category: 'htmlCss',
		img: './img/Netflix.jpg',
		imgLink: './img/Link.png',
		linkPage: 'https://eleonoradellamico.github.io/Cinema/',
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/EleonoraDellamico/Cinema'
	},
	{
		id: 3,
		title: 'Landing Page Html&Css',
		category: 'htmlCss',
		img: './img/mareaCoders.png',
		imgLink: './img/Link.png',
		linkPage: `https://martreyz.github.io/project-promo-k-module-1-team-7/ `,
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/martreyz/project-promo-k-module-1-team-7'
	},
	{
		id: 5,
		title: 'Spotify',
		category: 'react',
		img: './img/Music.png',
		imgLink: './img/Link.png',
		linkPage: `https://eleonoradellamico.github.io/Spotify__React/`,
		imgGit: './img/gitIcon.png',
		linkGitHub:
			'https://github.com/EleonoraDellamico/Pokemon__REACThttps://github.com/EleonoraDellamico/Spotify__React'
	},
	{
		id: 6,
		title: ' Business Card JavaScript',
		category: 'javascript',
		img: './img/awesone-profile.png',
		imgLink: './img/Link.png',
		linkPage: 'http://beta.adalab.es/project-promo-K-module-02-team-05/',
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/EleonoraDellamico/project-promo-K-module-02-team-05'
	},
	{
		id: 7,
		title: 'Rick&Morty React',
		category: 'react',
		img: './img/Rick_Morty.png',
		imgLink: './img/Link.png',
		linkPage: 'https://eleonoradellamico.github.io/Rick_Morty_React/#/',
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/EleonoraDellamico/Rick_Morty_React'
	},
	{
		id: 8,
		title: 'React',
		category: 'react',
		img: './img/Quote.png',
		imgLink: './img/Link.png',
		linkPage: 'https://eleonoradellamico.github.io/randomQuote_REACT/',
		imgGit: './img/gitIcon.png',
		linkGitHub: 'https://github.com/EleonoraDellamico/randomQuote_REACT'
	}
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

//LOAD ITEMS
window.addEventListener('DOMContentLoaded', function() {
	displayListItems(list);
});
function displayListItems(listItems) {
	let displayList = listItems.map(function(item) {
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
	displayList = displayList.join('');
	sectionCenter.innerHTML = displayList;
}

//FILTERES ITEMS
filterBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		console.log(e.currentTarget.dataset.id);
		const category = e.currentTarget.dataset.id;
		//use filter depending on category
		const listCategory = list.filter(function(listItem) {
			if (listItem.category === category) {
				return listItem;
			}
		});
		if (category === 'all') {
			displayListItems(list);
		} else {
			displayListItems(listCategory);
		}
	});
});
