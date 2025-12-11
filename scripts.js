const shoppinglist =[]
const price=[]
var increment =0
function addprice(x,y){
    shoppinglist.push(x)
    price.push(y)
console.log(x,y)}


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
         event.preventDefault()
          event.stopPropagation()
          next() 
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
function next(){
    console.log("getjiggywithit")
    if(increment==0){
            console.log("getjiggywithit")
       increment+=1 
       var x = document.getElementById("checkout");
  if (x.style.display === "none") {
    x.style.display = "block";
    }
    else {
    x.style.display = "block";
  }
    var x = document.getElementById("shop");
  if (x.style.display === "block") {
    x.style.display = "none";
    }
    else {
    x.style.display = "none";
  }
 var x = document.getElementById("next");
  if (x.style.display === "block") {
    x.style.display = "none";
    }
    else {
    x.style.display = "none";
    }
}
    else{
var x = document.getElementById("checkout");
  if (x.style.display === "none") {
    x.style.display = "none";
    }
    else {
    x.style.display = "none";
  }
    var x = document.getElementById("shop");
  if (x.style.display === "block") {
    x.style.display = "none";
    }
    else {
    x.style.display = "none";
    }
  
    var x = document.getElementById("history");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    }
    else {
    x.style.display = "inline-block";
    }
    console.log(shoppinglist)
    makehistory()
    }}

function makehistory(){
    console.log("i loev you!!!!!!!!!!!!!!");
    const histlist = document.getElementById("history");
    histlist.innerhtml ="";
    i=0;
    for (let entry of shoppinglist){
    console.log(entry)
        const li = document.createElement("li")
        li.textContent = entry+":"+price[i];
        histlist.appendChild(li);
        i=+1
}
var sum =0
var c=0
for (let i = 0; i < price.length; i++ ) {
  sum += price[i];
  c+=1
}
    li = document.createElement("li")
    li.textContent = "total before tax"+":"+sum;
    histlist.appendChild(li);
    li = document.createElement("li")
    li.textContent = "tax"+":"+sum*0.2;
    histlist.appendChild(li);
    if (c<3){
    li = document.createElement("li")
    li.textContent = "total"+":"+sum*1.2;
    histlist.appendChild(li);}
    else{
    li = document.createElement("li")
    li.textContent = "big spender discount"+":"+sum*1.2*0.2;
    histlist.appendChild(li); 
     li = document.createElement("li")
    li.textContent = "total"+":"+sum*1.2*0.8;
    histlist.appendChild(li); 
    }
   }