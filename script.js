$( document ).ready(function() {

  $("#login_submit").click(function(){

    var email = $("#user_email").val();
    var pwd = $("#user_password").val();

    if(email == 'fresher' && pwd == 'fresher') {
      window.localStorage.setItem("USER_TYPE", "FRESHER");
      window.location = "fresher_home.html";

    } else if(email == 'senior' && pwd == 'senior') {
      window.localStorage.setItem("USER_TYPE", "SENIOR");
      window.location = "senior_home.html";

    } else if(email == 'admin' && pwd == 'admin') {
      window.localStorage.setItem("USER_TYPE", "ADMIN");
      window.location = "admin_home.html";
    }

  });

 $(".logout").click(function(){
    window.localStorage.clear();
    window.location = 'login.html';
 });

 $("#home_but").click(function(){
   var str = window.localStorage.getItem("USER_TYPE");
   var user_type = str.toLowerCase();
    window.location = user_type + '_home.html';
 });



});

function fillDropdown() {
	let dropdown = $('#user_age');
	dropdown.empty();
	dropdown.append('<option selected="true" disabled>Select here</option>');
	dropdown.prop('selectedIndex', 0);

	for (var i = 20; i < 50; i++) {
    dropdown.append($('<option></option>').attr('value', i).text(i));
	}

}
