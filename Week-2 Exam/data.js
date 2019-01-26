//To store the names and the corresponding comments.
var key="12345";
var comments=[];
function validate(form){
    var val="";
    // var name_comments = {};
    var c = document.getElementById("subject").value;
    var n = document.getElementById("nice_name").value;
    var pass = document.getElementById("secret").value;
   if(n==null || n==""){
        alert("Please enter your name");
    } else if(c==null || c==""){
        alert("Please enter the comments!");
    } else if(pass != key){
        alert("Please provide corrent key. Try again!")
    } else{
        comments.push(n, c);
		form.reset();
        var comm = "";
        for(var i = comments.length - 1; i > 0; i = i - 2)
			 {

				val = val   + "<h2>" +comments[i]+ "</h2>" + " " + comments[i - 1] +  "</br>"
			}
			document.getElementById("Top_comments").innerHTML = val;
        
    }
}
