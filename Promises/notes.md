# Promisses

### Syntax for Creating a Promise:
```promiss
new Promise((resolve, reject) => {
  // Asynchronous operation goes here....

});
```

### using veriables
```using veriables
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here

  if (/* operation is successful */) {
    resolve("Operation completed successfully!"); // Resolve the promise with a value
  } else {
    reject("Operation failed!"); // Reject the promise with an error
  }
});
```
### Consuming a Promise:
```Consuming a Promise:
Promises are consumed using the .then(), .catch(), and .finally() methods.
.then(onFulfilled, onRejected):
onFulfilled: A function called when the promise is successfully resolved. It receives the resolved value as an argument.
onRejected: (Optional) A function called when the promise is rejected. It receives the rejection reason (error) as an argument.
.catch(onRejected):
A shorthand for .then(null, onRejected). It's used to handle errors specifically.
.finally(onFinally):
A function called when the promise settles (either resolves or rejects). It does not receive any arguments and is typically used for cleanup operations.
```
```
  .then((value) => {
    console.log(value); // Logs "Operation completed successfully!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs "Operation failed!" if rejected
  })
  .finally(() => {
    console.log("Promise settled."); // Always logs after resolution or rejection
  });
  ```