// Create a class called 'Task'
// Within your 'Task' class, create a constructor function and edit it to the following:
// Add parameter values of: 'title', 'description', 'date_created', 'date_due', 'tagname'
// Create private variables that are set to the same name as the parameter values above
// Have your private variables equal to the respective parameters they have been named after
// e.g. this.description = description

class Tasks {
    constructor(title, description, date_created, date_due, tagname){
        this._title = title,
        this._description = description,
        this._date_created = date_created,
        this._date_due = date_due,
        this._tagname = tagname
    };
};


// Create a class of 'Tags' which extends the 'Task' class created above
// Within your 'Tags' class, create a constructor function and edit it to the following:
// Have it call the extended class's constructor, along with all it's parameters
// Copy and paste the following code below into your 'Tags' class constructor

class Tags extends Tasks {
    constructor(title, description, date_created, date_due, tagname){
        super(title, description, date_created, date_due, tagname)
        this._tagname = tagname;
    };

    get tagName(){
        return this._tagname;
    };

    set tagName(x){
        this._tagname = x;
    };

    defaultTagName(){
        this._tagname = "general";
    };
}



// Within your 'Tags' class, add the following:
// Create a getter and setter accessor function of the variable code given above
// Create a 'defaultTagName' method
// Within this method, set the private tagname variable to equal to a string of 'general'


// Using the code below, declare a variable of 'todo' and have it equal to an instantiation of the 'Tags' Object
// Your 'todo' variable should now be equal to an object, which allows you to use concatenation on it.
// To avoid confusion, going forward we are going to refer to the 'todo' variable as an object

const todo = new Tags('Head to Gym', '', "2018-04-24", "2020-12-06", ['exercise', 'fitness', ' routines'], '');


// Using the 'todo' object declared above:
// Console.log the getter method
// Console.log the 'defaultTagName' method
// Console.log the getter method again. Write a comment below, of what was the value you received.
// Copy and paste the following code below

console.log(todo.tagName);
console.log(todo.defaultTagName());
console.log(todo.tagName); // updated the tagname variable to "general"
console.log(todo.tagName = ['work', 'school']);
console.log(todo.tagName); // variable was updated again to ['work', 'school']

// Once again console.log the getter method and write a comment below, of what was the value you received