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

function saveCategoryName(){
	var groupCategoryInput = document.getElementById("groupCategory");

	localStorage.setItem("groupCategoryName", groupCategoryInput.value);
	var groupBudgetInput = document.getElementById("groupBudget");
	localStorage.setItem("groupBudgetValue", groupBudgetInput.value);

	groupCategoryInput.value = "";
	groupBudgetInput.value = "";
}

function getCategoryName(){
	var groupCategoryHeader = localStorage.getItem("groupCategoryName");
	var groupBudgetHeader = localStorage.getItem("groupBudgetValue");
	
	var groupName = document.createElement("LI");
	var nameText = document.createTextNode(groupCategoryHeader);
		groupName.appendChild(nameText);
	
	var budget = document.createElement("LI"); 
	var number = document.createTextNode(groupBudgetHeader);
		budget.appendChild(number);      

	
	var link = document.createElement('a');
		link.setAttribute('href', "groups.html");
	var goToArrow = document.createElement("LI");
	var goToIcon = document.createElement("I");
	goToIcon.className = "fa fa-chevron-circle-right"
	goToArrow.appendChild(goToIcon);
	link.className = "groupsLink";
	link.appendChild(goToArrow);


	list = document.getElementById("groupNamesList");
	list.appendChild(groupName);
	// list.appendChild(budget);
	list.appendChild(link);

	
	var groupDiv = document.getElementById("groupNames");
	groupDiv.appendChild(list);

}

$(document).ready(function(){
    $("#addCategory").click(function(){
        $("#addMemberForm").hide();
    });
    $("#addMember").click(function(){
    	$("#addMemberForm").toggle();
    });
    $("#addCategory").click(function(){
    	$("i").removeClass("fa-minus-circle").addClass("fa-plus-circle");
    });
	$("i.fa-plus-circle, i.fa-minus-circle").click(function() {
	    var $this = $(this);
	    if ($this.hasClass("fa-plus-circle")) {
	         $this.removeClass("fa-plus-circle").addClass("fa-minus-circle");
	    }
	    else {
	         $this.removeClass("fa-minus-circle").addClass("fa-plus-circle");
	    }
	});
	$("#editMember").click(function(){
		$("#addGroupMemberForm").toggleClass("addGroupMemberList");
	});

	$("#addGift").click(function(){
		$("#addGroupMemberForm").addClass("addGroupMemberList");


	});
});

function loadGivenGroupNames() {
        var groupCategoryHeader = localStorage.getItem("groupCategoryName");
		var groupBudgetHeader = localStorage.getItem("groupBudgetValue");

		var groupName = document.createElement("LI");
		var nameText = document.createTextNode(groupCategoryHeader);
			groupName.appendChild(nameText);
	
		var budget = document.createElement("LI"); 
		var number = document.createTextNode(groupBudgetHeader);
			budget.appendChild(number);

		list = document.getElementById("groupGivenNamesList");
		list.appendChild(groupName);
		list.appendChild(budget);    
    };
window.onload = loadGivenGroupNames;

function saveGroupMemberName() {
	var groupMemberFirstName = document.getElementById("groupMemberFName");
	localStorage.setItem("memberFirstName", groupMemberFirstName.value);

	var groupMemberLastName = document.getElementById("groupMemberLName");
	localStorage.setItem("memberLastName", groupMemberLastName.value);

	groupMemberFirstName.value = "";
	groupMemberLastName.value = "";
}

function getGroupMemberName() {
	var firstName = localStorage.getItem("memberFirstName");
	var lastName = localStorage.getItem("memberLastName");

	var fullName = document.createElement("LI");
	var fullNameText = document.createTextNode(firstName + " " + lastName);
	fullName.appendChild(fullNameText);

	namesList = document.getElementById("memberNamesLinkList");
	namesList.appendChild(fullName);

}

function changeButton() {
	document.getElementById("editMember").innerHTML = "Cancel";
}

function changeButtonBack() {
	document.getElementById("editMember").innerHTML = "Edit Member";
}


