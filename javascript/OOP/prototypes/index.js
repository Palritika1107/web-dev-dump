//prototype is  an additional object to which we can attach objects and methods that can be shared across 
//all instances of the constructor function

//every object  has a prototype which inherits another prototype that is the "object" prototype
//whatever method we try to access the program first checks in the object's properties, then in that objects protoyype ,then in the
//inherited prototype of "Object" => this is known as prototype chaining

//if we just console log an empty array 
// we will see , the Array Object has 
//1) Array prototype 2)inherited Object Prototype (nested inside)
//if we search for "array fiter method js" => the mdn doc mentions "array.prototype.filter" ,because this method
//is present inside the  array prototype




