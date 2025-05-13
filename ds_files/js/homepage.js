
   function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function copy() {
  /* Get the text field */
  var copyText = document.getElementById("output2");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");

  /* Alert the copied text */
  alert("Copied: " + copyText.value);
}

// Opens a pop-up with twitter sharing dialog
function twitter() {
var url = "http://ke1.nl/en/";
var text1 = document.getElementById("output2");
var text = text1.value;


window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}

