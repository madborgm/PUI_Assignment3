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