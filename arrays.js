var chocolateBars = ['snickers' , 'hundred geand' , 'kitkat' , 'skittles']


var addElementToBeginningOfArray = function(array,element) {
  var newArray = [element,...array];
    return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array,element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array,element) {
  var newArray = [...array,element];
  return newArray;
}

var destructivelyAddElementToEndOfArray = function(array,element) {
  array.push(element);
  return array;
}

