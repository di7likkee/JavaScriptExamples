Element.prototype.sayHi = function() {
    alert( "Привет от " + this );
  }
  
  document.body.sayHi(); // Привет от [object HTMLBodyElement]