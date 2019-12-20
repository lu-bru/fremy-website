
//navbar general

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

function toggleNavbar() {

	navbar.classList.toggle('navbar-active');
	burger.classList.toggle('toggle-burger-icon');
	}
	
	burger.addEventListener('click', function() {
	toggleNavbar();
});


// navbar admin

const burgeradmin = document.querySelector('.burger-admin');
const navbaradmin = document.querySelector('.navbar-admin');

function toggleNavbarAdmin() {

	navbaradmin.classList.toggle('navbar-active');
	burgeradmin.classList.toggle('toggle-burger-icon');
	}

	burger.addEventListener('click', function() {
	toggleNavbarAdmin();
});


// add new product window & edit product window

const addproductbutton = document.querySelector('.add-admin-button');
const addproductcancelbutton = document.querySelector('#leave-add-overlay');
const overlaynuevoproducto = document.querySelector('.overlay-nuevo-producto');

function newProductOverlayOn() {
	overlaynuevoproducto.style.display = "block";
}

function newProductOverlayOff() {
	overlaynuevoproducto.style.display = "none";
}

if(addproductbutton){
	addproductbutton.addEventListener('click', function() {
	newProductOverlayOn();
})
};

if(addproductcancelbutton){
	addproductcancelbutton.addEventListener('click', function() {
	newProductOverlayOff();
})
};


// edit profile info

const editperfilbutton = document.querySelector('.edit-perfil-icon');
const perfilinput = document.querySelectorAll('.edit-input-hidden');
const currentperfilinfo = document.querySelectorAll('.perfil-current-data');

if(editperfilbutton){
	editperfilbutton.addEventListener('click', function() {
		showEditInput()
	});
};

function showEditInput(){

	let b;
	let c;
	for (b = 0 ; b < perfilinput.length; b++) {
	perfilinput[b].style.display = "block"; }

	for (c = 0 ; c < currentperfilinfo.length; c++) {
	currentperfilinfo[c].style.display = "none";
}

console.log(showEditInput)
}

// faq accordion

const acc = document.querySelectorAll('.accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } 
  });
};