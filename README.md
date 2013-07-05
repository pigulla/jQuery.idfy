jQuery.idfy
===========

A simple jQuery plugin to generate random ids for DOM elements.

#### Usage

```javascript
// Generates ids for all elements with class "foo". If they already have an id, nothing happens.
$('.foo').idfy(); 

// Like above, but returns the set of ids of each element instead of the element set itself.
$('.foo').ids();

// Like above, but returns the id of the first element only (or undefined if the set is empty).
$('.foo').id();
```
