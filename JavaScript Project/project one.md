# javascript Project
## Background Colour changer
## HTML Code
```html code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Project one</title>
</head>
<body>
    <div class="button">
        <button class="btn" id="button_Gray">Gray</button>
        <button class="btn" id="button_Green">Green</button>
        <button class="btn" id="button_Blue">Blue</button>
        <button class="btn" id="button_Yellow">Yellow</button>
    </div>
</body>
<script src="Project-One.js"></script>
</html>
```
## js code
```js code
const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (button_event) {
  // console.log(button_event);
  button_event.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // if(e.target.id == "button_Gray"){
    //     body.style.backgroundColor = "gray"
    // }
    // else if(e.target.id == "button_Green"){
    //     body.style.backgroundColor = "green"
    // }
    // else if(e.target.id == "button_Blue"){
    //     body.style.backgroundColor = "blue"
    // }
    // else if(e.target.id == "button_Yellow"){
    //     body.style.backgroundColor = "yellow"
    // }

    switch (e.target.id) {
      case "button_Gray":
                body.style.backgroundColor = "gray";
                break;
            case "button_Green":
                body.style.backgroundColor = "green";
                break;
            case "button_Blue":
                body.style.backgroundColor = "blue";
                break;
            case "button_Yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
                // Optional: handle unexpected IDs
                console.warn("Unknown button ID:", e.target.id);
                break;
    }
  });
});
```
## css code
```css
body{
    background-color: black;
}
.button{
    margin: auto;
    padding: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#button_Gray{
    margin: 10px;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgba(192, 192, 192, 0.986);
}
#button_Green{
    margin: 10px;
    padding: 20px;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgb(131, 178, 131);
}
#button_Blue{
    margin: 10px;
    padding: 20px;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgb(129, 129, 197);
}
#button_Yellow{
    margin: 10px;
    padding: 20px;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgb(190, 190, 122);
}
#button_Gray:hover{
    background-color: gray;
    font-size: large;
}
#button_Green:hover{
    background-color: green;
    font-size: large;
}
#button_Blue:hover{
    background-color: blue;
    font-size: large;
}
#button_Yellow:hover{
    background-color: yellow;
    font-size: large;
}

```