
(function () {
    var btn = document.getElementById("btn");
    var listItem = document.getElementById("listBox");
    var addInput = function () {
      var input = document.createElement("input");
  
      input.type = "text";
      input.name = "line1";
      input.class= "form-control"; 
      
  
      listItem.appendChild(input);
    };
    btn.addEventListener("click",function () {
        addInput();
      }.bind(this)
    );
  })();
  