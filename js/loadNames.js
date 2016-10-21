function loadGivenMemberName() {
	var firstName = localStorage.getItem("memberFirstName");
	var lastName = localStorage.getItem("memberLastName");
	var allotment = localStorage.getItem("memberBudget");

	// console.log(allotment);

	// var fullNameText = document.createTextNode(firstName + " " + lastName);

	var memberName = document.getElementById("name");

	memberName.innerHTML = (firstName + " " + lastName);
};

window.onload = loadGivenMemberName;