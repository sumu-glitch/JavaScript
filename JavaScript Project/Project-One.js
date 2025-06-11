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
