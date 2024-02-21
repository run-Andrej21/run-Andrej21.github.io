

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
    document.getElementById("wallpaper_user_id").textContent = ("Hello, " + username);
  
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

  if(! visuals.classList.contains("opened")){
    
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

// visuals / background
document.getElementById("change_background_id").addEventListener("click", function(){

  var visuals_background_overlay = document.querySelector(".visuals_background_check")
  var visuals_the_background = document.getElementById("change_background_id")

  if(! visuals_the_background.classList.contains("opened")){
    
    document.querySelector(".the_text_check").style.display = "none";
    document.getElementById("visuals_text_button_id").classList.remove("opened");

    visuals_background_overlay.style.display = "block";
    visuals_the_background.classList.add("opened");
 
  }else{

    visuals_background_overlay.style.display = "none";
    visuals_the_background.classList.remove("opened");

  }
});


document.getElementById("wallpaper_copy_id").addEventListener("click", function(){

  var copy_that = document.getElementById("copy_that_id");
  navigator.clipboard.writeText("bg_default.jpg");
  
  copy_that.style.display = "block"
  setTimeout(function(){
  document.getElementById("copy_that_id").style.display = "none";}, 2000);

  })
//visuals / text

document.getElementById("visuals_text_button_id").addEventListener("click", function(){

  if(! document.getElementById("visuals_text_button_id").classList.contains("opened")){
  
    document.querySelector(".visuals_background_check").style.display = "none";
    document.getElementById("change_background_id").classList.remove("opened");

    document.querySelector(".the_text_check").style.display = "block";
    document.getElementById("visuals_text_button_id").classList.add("opened");

  }else{

    document.querySelector(".the_text_check").style.display = "none";
    document.getElementById("visuals_text_button_id").classList.remove("opened");

  }
})

//color
document.getElementById("text_color_input_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

  var what_color_cookie = document.getElementById("text_color_input_id").value;
  setCookie("color_text", what_color_cookie, 365);
  what_color = getCookie("color");

  document.getElementById("wallpaper_copy_id").style.color = what_color;
  document.querySelector(".visuals_the_background").style.color = what_color;
  document.getElementById("del_name_id").style.color = what_color;
  document.getElementById("shortcut_button_id").style.color = what_color;
  document.getElementById("change_background_id").style.color = what_color;
  document.getElementById("visuals_text_button_id").style.color = what_color;
  document.querySelector(".visuals_the_background button").style.color = what_color;
  document.getElementById("copy_that_id").style.color = what_color;
  document.querySelector(".settings_shortcut_text_box").style.color = what_color;

  }
});

  what_color = getCookie("color_text");

  document.getElementById("wallpaper_copy_id").style.color = what_color;
  document.querySelector(".visuals_the_background").style.color = what_color;
  document.getElementById("del_name_id").style.color = what_color;
  document.getElementById("shortcut_button_id").style.color = what_color;
  document.getElementById("change_background_id").style.color = what_color;
  document.getElementById("visuals_text_button_id").style.color = what_color;
  document.querySelector(".visuals_the_background button").style.color = what_color;
  document.getElementById("copy_that_id").style.color = what_color;
  document.querySelector(".settings_shortcut_text_box").style.color = what_color;

document.getElementById("text_outline_inout_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    what_color_outline = "2px " + document.getElementById("text_outline_inout_id").value
    setCookie("outline_color", what_color_outline, 365)

    document.querySelector(".messagesandtime").style.webkitTextStroke = what_color_outline;
    
  }
});

  what_color_outline = getCookie("outline_color");
  document.querySelector(".messagesandtime").style.webkitTextStroke = what_color_outline;

//boxshadow

document.getElementById("text_box_shadow_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

  var what_color_box_shadow = "0px 0px 10px 5px " + document.getElementById("text_box_shadow_id").value; 
  setCookie("color_box_shadow", what_color_box_shadow, 356);
  document.querySelector(".task_bar").style.boxShadow = what_color_box_shadow;
  document.querySelector(".the_settings").style.boxShadow = what_color_box_shadow;
  document.querySelector(".settings_shortcut").style.boxShadow = what_color_box_shadow;
  document.querySelector(".settings_shortcut input").style.boxShadow = what_color_box_shadow;
  document.querySelector(".the_visuals").style.boxShadow = what_color_box_shadow;
  document.querySelector(".visuals_the_background").style.boxShadow = what_color_box_shadow;
  document.querySelector(".the_text").style.boxShadow = what_color_box_shadow;
  document.querySelector(".shortcut_bar").style.boxShadow = what_color_box_shadow;
  document.querySelector(".codefield_text").style.boxShadow = what_color_box_shadow;
   
  }
});

what_color_box_shadow = getCookie("color_box_shadow");

document.querySelector(".task_bar").style.boxShadow = what_color_box_shadow;
document.querySelector(".the_settings").style.boxShadow = what_color_box_shadow;
document.querySelector(".settings_shortcut").style.boxShadow = what_color_box_shadow;
document.querySelector(".settings_shortcut input").style.boxShadow = what_color_box_shadow;
document.querySelector(".the_visuals").style.boxShadow = what_color_box_shadow;
document.querySelector(".visuals_the_background").style.boxShadow = what_color_box_shadow;
document.querySelector(".the_text").style.boxShadow = what_color_box_shadow;
document.querySelector(".shortcut_bar").style.boxShadow = what_color_box_shadow;
document.querySelector(".codefield_text").style.boxShadow = what_color_box_shadow;

//shadow 
document.getElementById("text_font_shadow_id").addEventListener("keypress", function(){

  var what_font_shadow = "0px 0px 30px " + document.getElementById("text_font_shadow_id").value

  setCookie("color_font_shadow", what_font_shadow, 365);

  document.querySelector(".messagesandtime").style.textShadow = what_font_shadow;
});

var what_font_shadow = getCookie("color_font_shadow")

document.querySelector(".messagesandtime").style.textShadow = what_font_shadow;


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

  if(! settings_shortcut.classList.contains("opened")){

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

document.getElementById("test_tes").addEventListener("click", function(){
 var a = true
  while(a === true){
    window.open("https://www.twitch.tv/")
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
let CF_ok = false;

document.addEventListener("keydown", function (down){

  if(down.code === CF_code[CF_pos]){

    CF_pos++

  }else{

    CF_pos = 0;

  }

  if(CF_pos === 4){

    stopthisshit = !stopthisshit;
    CF_ok = true;

  }

    if(CF_ok === true){

    if(stopthisshit === true){

      codefield_id.classList.add("opened");
      codefield_overlay.style.display = "block";

      CF_pos = 0;
      CF_ok = false;

    }else{

      codefield_id.classList.remove("opened");
      codefield_overlay.style.display = "none";

      CF_pos = 0;
      CF_ok = false;

    }
  }
});

//CF stuff

if(document.getElementById("codefield_text_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){
    
    console.log("a")
    const newValue = event.target.value;

  if(newValue === "21"){
    
    alert("sheeesh");
    event.target.value = "";

  }
  
  if(newValue === "fs"){

    var FS = document.querySelector(".FS");
    var container = document.querySelector(".container");
  
    container.style.display = "none";
    FS.style.display = "";
    event.target.value = "";
  
  }

  if(newValue === "ms"){

    var FS = document.querySelector(".FS");
    var container = document.querySelector(".container");
  
    container.style.display = "";
    FS.style.display = "none";
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
    document.cookie = "color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "outline_color=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "color_box_shadow=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    event.target.value = "";

  };

  if(newValue === "master_ju"){

    document.getElementById("master_ju_id").style.display = "block";
    document.getElementById("container_id").style.display = "none";
    event.target.value = ""
  }

document.getElementById("master_ju_id").addEventListener("click", function(){
  
  document.getElementById("master_ju_id").style.display = "none";
  document.getElementById("container_id").style.display = "";

  })}
}));


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
  
});