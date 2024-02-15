
document.getElementById("FS_remove_id").addEventListener("click", function() {

  var FS = document.querySelector(".FS");
  var container = document.querySelector(".container")

  container.style.display = ""
  FS.style.display = "none";

  });

  document.getElementById("FS_form_id").addEventListener("submit", function(event) {
    
    var cname = document.getElementById("test_text_id").value;

    event.preventDefault();
    setCookie("username", cname, 365);
    location.reload();

    });

  document.getElementById("FullS_id").addEventListener("click",function() {

    var elem = document.documentElement;

    if (elem.requestFullscreen) {
      
      elem.requestFullscreen();

    }
  })



   
