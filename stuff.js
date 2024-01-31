 
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




