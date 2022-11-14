// -------------------------------------- FAQ -------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//----------------------------------- DROPDOWN ------------------------------------------------------  
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

/*Result of selected dropdown*/
function selectFilter() {
  var x = document.getElementById("department").value;
  document.getElementById("result").innerHTML = "You selected: " + x;
}


// ----------------------------------- MODAL (EDIT) ------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ----------------------------------- MODAL (DELETE) ------------------------------------------------------

function confirmDialog() {
  confirm("Are you sure you want to delete this section?");
}

// ----------------------------------- MARK SELECTED ELEMENT --------------------------------------------------

function editProject()
{   
  const collection = document.getElementsByClassName("dashboard-projectItems-border");
  for (let i = 0; i < collection.length; i++) {
    collection[i].setAttribute("class", "dashboard-projectItems-border-selected");
  }
}

// ------------------------------------- REMOVE ON CLICK ------------------------------------------------------
const removeProject = document.getElementById('removeProject');

removeProject.addEventListener('click', function handleClick(event) {
  removeProject.remove();
});

// ----------------------------------- CHANGE PROFILE PICTURE ------------------------------------------------
let newPict = document.getElementById('newPict');
let oldPict = document.getElementById('oldPict');

newPict.addEventListener('click',_=>oldPict.click());

oldPict.addEventListener("change",_=> {
    let file = oldPict.files[0];
    let reader = new FileReader();
    reader.onload = function (){
        newPict.src = reader.result;
    }
    reader.readAsDataURL(file);
});

// -----------------------------------  DISABLED/ENABLE INPUT ----------------------------------------------
function enableInput() {
  const collection = document.getElementsByClassName("inputText");
  for (let i = 0; i < collection.length; i++) {
    collection[i].disabled = false;
  }

  document.getElementById("btnBottom").style = "block";
  document.getElementById("uploadAvatar").style = "block";
}

function disableInput() {
  const collection = document.getElementsByClassName("inputText");
  for (let i = 0; i < collection.length; i++) {
    collection[i].disabled = true;
  }

  document.getElementById("btnBottom").style.display = "none";
  document.getElementById("uploadAvatar").style.display = "none";
}

//---------------------------------- TOTAL LEAVE -----------------------------------------------------------
function totalLeave() {
  let a = document.getElementById("lastYear");
  let b = document.getElementById("annual");
  let c = document.getElementById("replacement");
  let d = document.getElementById("birthday");

  document.getElementById("ttlLeave").value = "a + b + c + d";
}

