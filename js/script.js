$(document).ready(function(){
    $("i").click(function(){
        $(".fullList").show(1000);
    });
});



//close button appended to each list item
var nodeList = document.getElementsByClassName("listLI");
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

//create new list item when add button clicked
function newGift() {
	var li = document.createElement("li");
	li.className = "listLI";
	var giftNameTitle = document.getElementById("gname").value;
	var giftBudgetValue = document.getElementById("budget").value;

	var giftName = document.createTextNode(giftNameTitle);
	var giftBudget = document.createTextNode(" " + ":" + " " + giftBudgetValue);
		li.appendChild(giftName);
		li.appendChild(giftBudget);
			if (giftNameTitle === '') {
				alert("Are you adding a gift?");
			} else {
				document.getElementById("listUL").appendChild(li);
			}
	document.getElementById("gname").value = "";
	document.getElementById("budget").value = "";


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