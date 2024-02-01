 
  var settings_overlay = document.querySelector(".settings_check");
  var visuals_overlay = document.querySelector(".visuals_check");
  var settings = document.getElementById("open_settings_id");
  var visuals = document.getElementById("open_visuals_id");

//Visuals
document.getElementById("open_visuals_id").addEventListener("click", function() {

  if (! visuals.classList.contains("opened")) {

    visuals_overlay.style.display = "block";
    settings.classList.remove("opened");
    settings_overlay.style.display = "none";
    visuals.classList.add("opened");

  } else {

    visuals.classList.remove("opened");
    visuals_overlay.style.display = "none";

  }
});

//Settings
document.getElementById("open_settings_id").addEventListener("click", function() {

    if (! settings.classList.contains("opened")) {

      settings_overlay.style.display = "block";
      visuals.classList.remove("opened");
      visuals_overlay.style.display = "none";
      settings.classList.add("opened");

    } else {

      settings.classList.remove("opened");
      settings_overlay.style.display = "none";

    }
});

//codefield

const CF_code = ["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"];
let CF_pos = 0;
let stopthisshit = false;
var codefield_overlay = document.querySelector(".codefield_text_check")
var codefield_id = document.getElementById("codefield_text_id")

document.addEventListener("keydown", function (down) {

  

if (down.code === CF_code[CF_pos]) {

  CF_pos++
  console.log(CF_pos)

} if (CF_pos === 4) {

  stopthisshit = ! stopthisshit
}

if (stopthisshit === true) {

    codefield_id.classList.remove("opened");
    codefield_overlay.style.display = "none";
    CF_pos = 0;

} else {

  codefield_id.classList.add("opened");
  codefield_overlay.style.display = "block"
  CF_pos = 0;
}

});