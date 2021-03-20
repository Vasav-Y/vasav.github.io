// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

  /*  var ram = document.getElementsByTagName('li');
    ram.addEventListener('dblclick', function(){
        var hen= this.parentElement;
        hen.style.color="green";
    })
    */


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("button");
  var txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var mylist = document.getElementsByTagName("li");
var j;
for (j = 0; j < mylist.length; j++) {
  var bob = document.createElement("button");
  var text = document.createTextNode("Imp.");
  bob.className = "imp";
  bob.appendChild(text);
  mylist[j].appendChild(bob);
}


// Click on a imp button to highlight the current list item
var imp = document.getElementsByClassName("imp");
var j;
for (j = 0; j < imp.length; j++) {
  imp[j].onclick = function() {
    var divi = this.parentElement;
    divi.style.backgroundColor="cyan";
    
  }
}
}

// Create a "imp" button and append it to each list item
var mylist = document.getElementsByTagName("li");
var j;
for (j = 0; j < mylist.length; j++) {
  var bob = document.createElement("button");
  var text = document.createTextNode("Imp.");
  bob.className = "imp";
  bob.appendChild(text);
  mylist[j].appendChild(bob);
}


// Click on a imp button to highlight the current list item
var imp = document.getElementsByClassName("imp");
var j;
for (j = 0; j < imp.length; j++) {
  imp[j].onclick = function() {
    var divi = this.parentElement;
    divi.style.backgroundColor="cyan";
    
  }
}

var paragraph = document.getElementById("myUL");
var edit_button = document.getElementById("editButton");
var done_button = document.getElementById("doneButton");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
} );

done_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
} )







