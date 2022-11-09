'use strict';

// document is the object referring to the HTMl file
// .querySelector is the method for determining the first element
// with the selector specified
// .textContent is a proper to get the content in the element
console.log(document.querySelector('.message').textContent);

// DOM: Stands for Document Object Model -
// a programming interface for web documents. It
// represents the page so that programs can change the document
// structure, style, and content. The DOM represents the document
// as nodes and objects; that way, programming languages can
// interact with the page

// We can change text, HTML attributes, and even CSS styles
// DOM is a connection point between HTML documents and JS codes
// DOM is automatically created by the browser as soon as the
// HTML page loads
// It is stored in a tree structure
// In the tree, each HTML element is an object

// Document is the entry point to the DOm
// First child element: Usually the HTML element, root element

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
