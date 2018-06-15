//define functions here
function getIt(){
  $("p").click(function(){
  // action goes here!!
  alert("Hey");
});
}
function frameIt(){
  $("img").load(function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
 
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}
$(document).ready(function(){


getIt();
frameIt();
pressIt();


});
