
document.getElementById("FS_remove_id").addEventListener("click", function() {
  var FS = document.querySelector(".FS");
  var container =document.querySelector(".container")

  container.style.display = ""
  FS.style.display = "none";

  });

  function getForm(event) {
    event.preventDefault();
    var form = document.getElementById("test_text_id").value;
    console.log(form)


  }