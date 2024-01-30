
document.getElementById("FS_remove_id").addEventListener("click", function() {
  var FS = document.querySelector(".FS");
  var container =document.querySelector(".container")

  container.style.display = ""
  FS.style.display = "none";

  });
 
  document.getElementById("FS_form_id").addEventListener("submit", function(event) {
    event.preventDefault();
    var cname = document.getElementById("test_text_id").value;
    setCookie("username", cname, 365);
    console.log(cname);
    console.log(document.cookie)
    location.reload();
    });

  var elem = document.documentElement;

  function FullScreen() {

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }



   
