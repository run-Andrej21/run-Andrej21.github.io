
document.getElementById("FS_remove_id").addEventListener("click", function() {
  var FS = document.querySelector(".FS");
  var container =document.querySelector(".container")

  container.style.display = ""
  FS.style.display = "none";

  });
 
    document.getElementById("FS_form_id").addEventListener("submit", function(event) {
    event.preventDefault();
    var the_name = document.getElementById("test_text_id").value;
    setCookie("username", the_name, 30);
    console.log(the_name);
    });

    location.reload();
