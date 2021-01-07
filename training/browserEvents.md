## An event listener begins with on. Here are a few commonly used ones:

- onload  // When the page loads.
- onclick  // When a user clicks something.
- onmouseover  // When a user hovers their mouse over something.
- onfocus  // When a user puts the cursor on a form field.

### Basic Event Listeners: onclick
````
elementToGrab().onclick = function() {
   // Code that should run 
};
````
Let’s say we created a function named respondToLoginAttempt that throws a notification when the login element is clicked. The code snippet would look like this:
````
document.querySelector('#login').onclick = respondToLoginAttempt;
````
In plain English, this is saying, “When the login element is clicked, run the function called respondToLoginAttempt.”

### Another Method: addEventListener

Similar to onclick, this method tells elements to wait for something to happen in the browser and then execute a specific function when it does.

The general format looks like this: elementToGrab().addEventListener(event, callback);. Notice how this method takes two parameters:

- The name of the browser event being listened for.
- The callback function to be executed once that event occurs.

In this simple example, a clicked button will print a message to the console:
```
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);
```

### The Event Object
When attaching functions as event listeners, you might want that function to use the element that was clicked. Maybe you want to grab the text that was clicked to store or update it.

When defining the function, you can add a parameter, typically called ```e```. This parameter, known as the event object, is passed into the function when it’s triggered. It contains helpful details about the event that triggered the function, including which element triggered the function: e.target.

````
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}
````
Knowledge Check
![](https://i.imgur.com/WXcjM4Y.png)