"use strict";

// assign menu button
// assign close button
// assign menu container to hide/show

// eventlistener to  menu button
// on click, add class container
// eventlistener to close button
// on click, remove class from container

// assign to be clicked on/manipulated
const navMenuButton = document.querySelector('.jsNavMenu')
const closeMenuButton = document.querySelector('.jsCloseMenu')
const menuContainer = document.querySelector('.jsSideMenu')
const wrapper = document.querySelector('.jsWrapper')

// define functions for callback
const openMenu = _ => {
  menuContainer.classList.toggle('side-menu-show')
  wrapper.classList.toggle('wrapper-right')
}
const closeMenu = _ => {
  menuContainer.classList.remove('side-menu-show')
  wrapper.classList.remove('wrapper-right')
}

// adding event listeners to buttons and testing whether console.log appears in browser
navMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)

//Toggle function for category pages
$("#toggleFilter").on('click', function(){
  $(".filter--select-option").toggleClass('toggled')
})