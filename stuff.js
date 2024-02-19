



function setCookie(cname, cvalue, exdays){

  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

function getCookie(cname){

  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++){

      let c = ca[i];

      while(c.charAt(0) == ' '){

        c = c.substring(1);

      }

      if(c.indexOf(name) == 0){

        return c.substring(name.length, c.length);

      }
    }

    return "";

}

document.addEventListener("DOMContentLoaded", function (){

  var container = document.querySelector(".container");
  let username = getCookie("username");

  if(username != "") {
    
    container.style.display = "";
    document.getElementById("textname").textContent = ("Hello, " + username);

  }else{

    var showFS = document.querySelector(".FS");
    showFS.style.display ="";     
      
  }
});

document.getElementById("del_name_id").addEventListener("click", function(){

  location.reload();
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
});

//Time

let time = document.getElementById("HowTFDoIMakeTime_id");

setInterval(() =>{
      
let d = new Date();
time.innerText = d.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false});
      
});

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

//Visuals popup

document.getElementById("open_visuals_id").addEventListener("click", function(){

  if (! visuals.classList.contains("opened")) {
    
    
    settings_overlay.style.display = "none";
    settings.classList.remove("opened");

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");

    visuals_overlay.style.display = "block";
    visuals.classList.add("opened");

  }else{

    visuals_overlay.style.display = "none";
    visuals.classList.remove("opened");

  }
});

//visuals stuff

document.getElementById("change_background_id").addEventListener("click", function(){

  var visuals_background_overlay = document.querySelector(".visuals_background_check")
  var visuals_the_background =document.getElementById("visuals_the_background_id")

  if(! visuals_the_background.classList.contains("opened")){
    
  }
});
//Settings popup

document.getElementById("open_settings_id").addEventListener("click", function(){

  if(! settings.classList.contains("opened")){

    visuals_overlay.style.display = "none";
    visuals.classList.remove("opened");

    settings_overlay.style.display = "block";
    settings.classList.add("opened");

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");

  }else{

    settings.classList.remove("opened");
    settings_overlay.style.display = "none";

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");

  }
});

//Taskbar end

//settings //Shortcut Settings

var settings_shortcut_overlay = document.querySelector(".settings_shortcut_check");
var settings_shortcut = document.getElementById("settings_shortcut_id");

document.getElementById("shortcut_button_id").addEventListener("click", function(){

  if(! settings_shortcut.classList.contains("opened")) {

    settings_shortcut_overlay.style.display = "block";
    settings_shortcut.classList.add("opened");

  }else{

    settings_shortcut_overlay.style.display = "none";
    settings_shortcut.classList.remove("opened");
  }
})

//shortcut #1
  //from inout into a var

document.getElementById("shortcut1_input").addEventListener("keypress", function(shortcut1){

  if(shortcut1.key === "Enter"){

    var shortcut1_stuff = document.getElementById("shortcut1_input").value;
    let cname = shortcut1_stuff;
    setCookie("shortcut_1_stuff", cname, 365);

  }
})

//if button

document.getElementById("shortcut1_id").addEventListener("click", function(){

  let shortcut_1_cookie = getCookie("shortcut_1_stuff");
  window.location = shortcut_1_cookie;

})

//shortcut #2
  //from inout into a var

document.getElementById("shortcut2_input").addEventListener("keypress", function(shortcut2){

  if(shortcut2.key === "Enter"){

    var shortcut2_stuff = document.getElementById("shortcut2_input").value;
    let cname = shortcut2_stuff;
    setCookie("shortcut_2_stuff", cname, 365);

  }
})

//if button

document.getElementById("shortcut2_id").addEventListener("click", function(){

  let shortcut_2_cookie = getCookie("shortcut_2_stuff");
  window.location = shortcut_2_cookie;

})
      
//shortcut #3
  //from inout into a var

document.getElementById("shortcut3_input").addEventListener("keypress", function(shortcut3){

  if (shortcut3.key === "Enter"){

    var shortcut3_stuff = document.getElementById("shortcut3_input").value;
    let cname = shortcut3_stuff;
    setCookie("shortcut_3_stuff", cname, 365);

  }
})

//if button

document.getElementById("shortcut3_id").addEventListener("click", function(){

  let shortcut_3_cookie = getCookie("shortcut_3_stuff");
  window.location = shortcut_3_cookie;

});
      
//shortcut #4
  //from inout into a var

document.getElementById("shortcut4_input").addEventListener("keypress", function(shortcut4){

  if(shortcut4.key === "Enter"){

    var shortcut4_stuff = document.getElementById("shortcut4_input").value;
    let cname = shortcut4_stuff;
    setCookie("shortcut_4_stuff", cname, 365);

  }
});

//if button

document.getElementById("shortcut4_id").addEventListener("click", function(){

  let shortcut_4_cookie = getCookie("shortcut_4_stuff");
  window.location = shortcut_4_cookie;

});

      //shortcut #5
  //from inout into a var

document.getElementById("shortcut5_input").addEventListener("keypress", function(shortcut5){

  if(shortcut5.key === "Enter"){

    var shortcut5_stuff = document.getElementById("shortcut5_input").value;
    let cname = shortcut5_stuff;
    setCookie("shortcut_5_stuff", cname, 365);

  }
});

//if button

document.getElementById("shortcut5_id").addEventListener("click", function(){

  let shortcut_5_cookie = getCookie("shortcut_5_stuff");
  window.location = shortcut_5_cookie;

});

//codefield

const CF_code = ["ControlLeft", "ControlLeft", "ShiftLeft", "ControlLeft"];
let CF_pos = 0;
let stopthisshit = false;
var codefield_overlay = document.querySelector(".codefield_text_check")
var codefield_id = document.getElementById("codefield_text_id")
var codefield2_overlay = document.querySelector(".codefield2_text_check")
var codefield2_id = document.getElementById("codefield2_text_id")
let CF_ok = false;

document.addEventListener("keydown", function (down){

  if(down.code === CF_code[CF_pos]){

    CF_pos++

  }else{

    CF_pos = 0;

  }

  if(CF_pos === 4){

    stopthisshit = !stopthisshit
    CF_ok = true;

  }

    if(CF_ok === true){

    if(stopthisshit === true){

      codefield_id.classList.add("opened");
      codefield_overlay.style.display = "block";

      codefield2_id.classList.add("opened");
      codefield2_overlay.style.display = "block";

      CF_pos = 0;
      CF_ok = false;

    }else{

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

function Text(event){
  const newValue = event.target.value;

  if(newValue === "21"){
      
    alert("sheeesh");
    event.target.value = "";

  }

  if(newValue === "ms"){

    var FS = document.querySelector(".FS");
    var container = document.querySelector(".container");
  
    container.style.display = "";
    FS.style.display = "none";
    event.target.value = "";
  
  }

  if(newValue === "fs"){

    var FS = document.querySelector(".FS");
    var container = document.querySelector(".container");
  
    container.style.display = "none";
    FS.style.display = "";
    event.target.value = "";
  
  }

  if(newValue === "fulls"){

    var elem = document.documentElement;

    elem.requestFullscreen();
    event.target.value = "";

  }

  if(newValue === "delallcookie"){

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_5_stuff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_4_stuff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_3_stuff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_2_stuff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_1_stuff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    event.target.value = "";

  }

}

textField1.addEventListener("keypress", Text);
textField2.addEventListener("keypress", Text);

});

document.getElementById("FS_remove_id").addEventListener("click", function(){

var FS = document.querySelector(".FS");
var container = document.querySelector(".container")

container.style.display = ""
FS.style.display = "none";

});

document.getElementById("FS_form_id").addEventListener("submit", function(event){
  
  var cname = document.getElementById("test_text_id").value;

  event.preventDefault();
  setCookie("username", cname, 365);
  location.reload();

  });

document.getElementById("FullS_id").addEventListener("click",function(){

  var elem = document.documentElement;

  if(elem.requestFullscreen){
    
    elem.requestFullscreen();

  }
})