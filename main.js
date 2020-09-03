//get input form inputbox
let filterInput = document.getElementById("filterInput");

//add event listner
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //get value of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  //get names from UL
  let ul = document.getElementById("names");

  let li = ul.querySelectorAll("li.collection-item");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
