var Dog = require('./Dog');

var Cat  = require('./Cat')

var dog = new Dog('Tom');
var Mouse = require('./Mouse');

var tom = new Cat();

dog.eat(tom);

var cat = new Cat();

var mouse = new Mouse();
try{
	cat.eat(dog);
}catch(error){
	console.log('Cat cannot  eat dog');
}


console.log(cat);
