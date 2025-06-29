- In JavaScript, bind() is a method available on all function instances (Function.prototype.bind()). It is used to create a new function that, when called, has its this keyword set to a specified value. This is particularly useful when dealing with contexts, especially when passing functions as callbacks or event handlers where the default this binding might not be the desired object

```
    const person = {
      name: 'Alice',
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };

    const unboundGreet = person.greet;
    unboundGreet(); // Output: Hello, my name is undefined (or an error in strict mode)

    const boundGreet = person.greet.bind(person);
    boundGreet(); // Output: Hello, my name is Alice

```