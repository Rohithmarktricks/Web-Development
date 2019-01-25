//To store the names and the corresponding comments.
var val=""
var comments=[];
var key="12345";
function validate(form){
    var name_comments = {};
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
        name_comments[key] = n;
        name_comments[val] = c;
        comments.push(name_comments);
        var comm = "";
        for(var i=comments.length-1; i>=0; i--){
            // comm += comments[i][val]+ "\n";
            // comm += comments[i][key]+"\n";
            document.getElementById("this_comment").innerHTML = comments[i][val];
            document.getElementById("this_username").innerHTML = comments[i][key];

        }
        // document.getElementById("comments_existing").innerHTML = comm;
        document.getElementById("comments_form").reset();
        
    }
}
