    
	/* admin's data*/
	var adminName = "norhan";
	var adminPassword = "1234";
	
	
    var inputVal = document.getElementById("username").value;
	var inputVall = document.getElementById("Password").value;
			
     
            
function logout(){
	var inputVal = document.getElementById("username").value;
	var inputVall = document.getElementById("Password").value;
			
			if ( (adminName.localeCompare(inputVal) === 0) && (adminPassword.localeCompare(inputVall))  ===0)
			{
				alert( "welcome admin " + inputVal);
			}
          
			else {
            alert( "welcome " + inputVal + "!") ;
			}
 
	const listItem = document.querySelector("#login");
	const newItem = document.createElement('button');
	/* link to logout page */
	newItem.innerHTML = '<a href="file:///C:/Users/Vip/Desktop/gym/login&%20logout/logout.html" style="color :black;";">logout</a>' ;
	listItem.parentNode.replaceChild(newItem, listItem);


}

function someFunction(){
	var inputVal = document.getElementById("username").value;
	var inputVall = document.getElementById("Password").value;
			
			if ( (adminName.localeCompare(inputVal) === 0) && (adminPassword.localeCompare(inputVall))  ===0)
			{
			/* link to admin's plans page */
             location.replace("file:///C:/Users/Vip/Desktop/gym/Admin's%20edit%20plans%20page%20&%203%20plans/admin's%20plans.html");
			}
          
			else {
             /* link to main plans page */
			  location.replace("file:///C:/Users/Vip/Desktop/gym/Plans%20main%20page%20&%203%20plans/Plans.html");
			}
}