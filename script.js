function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

let copyText = document.querySelector(".copy-text")
copyText.querySelector("button").addEventListener("click",function(){
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSlection().removeAllRanges();
	setTimeout(function(){
		copyText.classlist.remove("active");
	},2500);
});