// Get all links with class "link-title"
const linkTitles = document.querySelectorAll('.link-title');

// Iterate through the links and set their inner text to the value of the "title" attribute
linkTitles.forEach(link => {
  link.innerText = link.getAttribute('title');
});
// JavaScript Document