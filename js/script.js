
//close button appended to each list item
var nodeList = document.getElementsByTagName("li");
var i;
for (i=0; i < nodeList.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}

//hide the current list
var close = document.getElementsByClassName("close");
var i;
for (i=0; i < close.length; i++) {
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

//add check when item is clicked for done
var list = document.querySelector('ul');
list.addEventListener('click', function(clicked){
	if (clicked.target.tagName === 'li') {
		clicked.target.classList.toggle('checked');
	}
}, false);

//create new list item when add button clicked
function newGift() {
	var li = document.createElement("li");
	var inputValue = 
		document.getElementById("gname").value;
		var giftName = document.createTextNode(inputValue);
		li.appendChild(giftName);
			if (inputValue === '') {
				alert("Are you adding a gift?");
			} else {
				document.getElementById("listUL").appendChild(li);
			}
		document.getElementById("gname").value = "";

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i=0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}

}