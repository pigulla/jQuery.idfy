jQuery.idfy
===========

A simple jQuery-plugin that generates random ids for all elements in the
current set that have no or an empty id attribute.

#### Usage

```javascript
// Generates ids for all elements with class "foo". If they already have a
// non-empty id, nothing happens.
$('.foo').idfy();

// Like above, but returns the set of ids (i.e., basically an array of strings)
// of each element instead of the element set itself. Empty ids are omitted.
$('.foo').ids();

// Like above, but returns the id of the first element only (or undefined if the
// set or the id attribute is empty).
$('.foo').id();
```


##### Note on `ids()`
Please note that this function does not really return an array of stings but a
jQuery object. If you want a true array, call jQuery's `toArray` method.
