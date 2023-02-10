The most common example of a Hash Table in JavaScript is the Object data type, where you can pair the object's property value with a property key.

In the following example, the key Nathan is paired with the phone number value of "555-0182" and the key Jane is paired with the value "315-0322":

    let obj = {
    Nathan: "555-0182",
    Jane: "315-0322"
    }

JavaScript object is an example of Hash Table implementation

But JavaScript's Object type is a special kind of Hash Table implementation for two reasons:

    It has properties added by the Object class. Keys you input may conflict and overwrite default properties inherited from the class.
    The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.

For example, the Object prototype has the hasOwnProperty() method which allows you to check if a property is not inherited:

    const obj = {};
    obj.name = "Nathan";

    console.log(obj.hasOwnProperty("name")); // true

JavaScript object inherited method call example

JavaScript doesn't block an attempt to overwrite the hasOwnProperty() method, which may cause an error like this:

    const obj = {};
    obj.name = "Nathan";
    obj.hasOwnProperty = true;

    console.log(obj.hasOwnProperty("name")); 
    // Error: obj.hasOwnProperty is not a function

JavaScript object inherited property gets overwritten

To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called Map.



    OBJECT METHODS:

    Object.keys()
    Object.values()
    Object.entries()

    const population = {
    male: 4,
    female: 93,
    others: 10
    };

    let genders = Object.keys(population);

    console.log(genders); // ["male","female","others"]

    Object.entries() returns an array of arrays.


    Using javascript Constructors:
    function Coder(name, id) {
        this.name = name;
        this.id = id;
        }
    let myObj = new Coder('Developer’, 123);
    console.log(myObj.name); // Output: Fiesta
    console.log(myObj.id);         // Output: 123