document.addEventListener("DOMContentLoaded", function () {
  const linkWithTitle = document.querySelector(".link-with-title");

  if (linkWithTitle) {
    const href = linkWithTitle.getAttribute("href");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xhr.responseText, "text/html");
        const title = doc.querySelector("title").textContent;

        // Create a text node for "♫ OUT NOW ♫"
        const outNowText = document.createTextNode('♫ OUT NOW ♫');

        // Create a div for the title and set its text content
        const titleDiv = document.createElement('div');
        titleDiv.textContent = title;

        // Clear the existing content in the link
        linkWithTitle.innerHTML = '';

        // Append the "♫ OUT NOW ♫" text and the new title div to the link
        linkWithTitle.appendChild(outNowText);
        linkWithTitle.appendChild(titleDiv);
      }
    };

    xhr.open("GET", href, true);
    xhr.send();
  }
});
