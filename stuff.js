 //Taskbar start
 //settings
  var settings_overlay = document.querySelector(".settings_check");
  var settings = document.getElementById("open_settings_id");
//visuals
  var visuals_overlay = document.querySelector(".visuals_check");
  var visuals = document.getElementById("open_visuals_id");
//settings //shortcut
  var settings_shortcut_overlay = document.querySelector(".settings_shortcut_check");
  var settings_shortcut = document.getElementById("settings_shortcut_id");

  //Visuals
document.getElementById("open_visuals_id").addEventListener("click", function() {

  if (! visuals.classList.contains("opened")) {
    
    
    settings_overlay.style.display = "none"
    settings.classList.remove("opened");

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");

    visuals_overlay.style.display = "block";
    visuals.classList.add("opened");

  } else {

    visuals_overlay.style.display = "none";
    visuals.classList.remove("opened");

  }
});

  //Settings
document.getElementById("open_settings_id").addEventListener("click", function() {

    if (! settings.classList.contains("opened")) {

      visuals_overlay.style.display = "none";
      visuals.classList.remove("opened");

      settings_overlay.style.display = "block";
      settings.classList.add("opened");

      settings_shortcut_overlay.style.display = "none";
      settings_shortcut.classList.remove("opened");

    } else {

      settings.classList.remove("opened");
      settings_overlay.style.display = "none";

    }
});
//Taskbar end

//settings //Shortcut Settings

var settings_shortcut_overlay = document.querySelector(".settings_shortcut_check");
var settings_shortcut = document.getElementById("settings_shortcut_id");

document.getElementById("shortcut_button_id").addEventListener("click", function() {

  if(! settings_shortcut.classList.contains("opened")) {

    settings_shortcut_overlay.style.display = "block";
    settings_shortcut.classList.add("opened");

  } else {

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");
  }
})

//shortcut #1
    //from inout into a var

    document.getElementById("Shortcut1_input").addEventListener("keypress", function(shortcut1) {

      if (shortcut1.key === "Enter") {
  
        var shortcut1_stuff = document.getElementById("Shortcut1_input").value;
  
        console.log(shortcut1_stuff)

        let cname = shortcut1_stuff;

        setCookie("shortcut_1_stuff", cname, 365);

        let shortcut1_logo = document.querySelector("shortcut1");

        

      }})
  //if button

        document.getElementById("shortcut1_id").addEventListener("click", function() {

          let shortcut_1_cookie = getCookie("shortcut_1_stuff");

          window.location = shortcut_1_cookie
  
          }
        )


//codefield

const CF_code = ["ControlLeft", "ControlLeft", "ShiftLeft", "ControlLeft"];
let CF_pos = 0;
let stopthisshit = false;
var codefield_overlay = document.querySelector(".codefield_text_check")
var codefield_id = document.getElementById("codefield_text_id")
var codefield2_overlay = document.querySelector(".codefield2_text_check")
var codefield2_id = document.getElementById("codefield2_text_id")
let CF_ok = false;

document.addEventListener("keydown", function (down) {

if (down.code === CF_code[CF_pos]) {

  CF_pos++
  console.log(down)

} else {

  CF_pos = 0;

}

if (CF_pos === 4) {

  stopthisshit = !stopthisshit
  CF_ok = true;
  
}

if (CF_ok === true) {

if (stopthisshit === true) {

  codefield_id.classList.add("opened");
  codefield_overlay.style.display = "block"
  
  codefield2_id.classList.add("opened");
  codefield2_overlay.style.display = "block"

  CF_pos = 0;
  CF_ok = false;

} else {

  codefield_id.classList.remove("opened");
  codefield_overlay.style.display = "none";

  codefield2_id.classList.remove("opened");
  codefield2_overlay.style.display = "none";

  CF_pos = 0;
  CF_ok = false;

}
  }
});

//CF stuff

document.addEventListener('DOMContentLoaded', function () {

  const textField1 = document.getElementById("codefield_text_id");
  const textField2 = document.getElementById("codefield2_text_id");

  function Text(event) {
      const newValue = event.target.value;

      if (newValue === "21") {
          
          alert("sheeesh");

          event.target.value = "";

      }

      if (newValue === "ms") {

        var FS = document.querySelector(".FS");
        var container = document.querySelector(".container")
      
        container.style.display = ""
        FS.style.display = "none";

        event.target.value = "";
      
      }

      if (newValue === "fs") {

        var FS = document.querySelector(".FS");
        var container = document.querySelector(".container")
      
        container.style.display = "none"
        FS.style.display = "";

        event.target.value = "";
      
      }

      if (newValue === "fulls") {

        var elem = document.documentElement;
      
        elem.requestFullscreen();

      }

  }

  textField1.addEventListener("keypress", Text);
  textField2.addEventListener("keypress", Text);

});



