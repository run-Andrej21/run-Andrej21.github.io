

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

  let username = getCookie("username");

  if(username != "") {
    
    document.querySelector(".container").style.display = "block";
    document.getElementById("ms_user").textContent = ("Hello, " + username);
    document.getElementById("wallpaper_user_id").textContent = ("Hello, " + username);
  
  }else{
var aaa = true
    if(aaa === true)
    document.querySelector(".first_screen_check").style.display = "block";     
    
    document.getElementById("name_input_id").addEventListener("keypress", function(event){
  
      var what_name = document.getElementById("name_input_id").value;
    
      if(event.key === "Enter"){
      setCookie("username", what_name, 365);
      location.reload();
      }
      });
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

  var what_color = document.getElementById("text_color_input_id").value;
  setCookie("color_text", what_color, 365);

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

// borderlinecolor

document.getElementById("text_border_id").addEventListener("keypress", function(event){
  var what_color_border = document.getElementById("text_border_id").value;
  if(event.key === "Enter"){

    setCookie("border_color", what_color_border)
    document.querySelector(".task_bar").style.borderColor = what_color_border;
    document.querySelector(".the_settings").style.borderColor = what_color_border;
    document.querySelector(".the_visuals").style.borderColor = what_color_border;
    document.querySelector(".settings_shortcut").style.borderColor = what_color_border;
    document.querySelector(".visuals_the_background").style.borderColor = what_color_border;
    document.querySelector(".the_text").style.borderColor = what_color_border;
    document.querySelector(".shortcut_bar").style.borderColor = what_color_border;

  }
  
});

var what_color_border = getCookie("border_color");
document.querySelector(".task_bar").style.borderColor = what_color_border;
document.querySelector(".the_settings").style.borderColor = what_color_border;
document.querySelector(".the_visuals").style.borderColor = what_color_border;
document.querySelector(".settings_shortcut").style.borderColor = what_color_border;
document.querySelector(".visuals_the_background").style.borderColor = what_color_border;
document.querySelector(".the_text").style.borderColor = what_color_border;
document.querySelector(".shortcut_bar").style.borderColor = what_color_border;

//border radius

document.getElementById("text_border_radius_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){
  var what_border_radius = document.getElementById("text_border_radius_id").value +"px";
  setCookie("border_radius", what_border_radius, 365);
  document.querySelector(".task_bar").style.borderRadius = what_border_radius;
  document.querySelector(".the_settings").style.borderRadius = what_border_radius;
  document.querySelector(".the_visuals").style.borderRadius = what_border_radius;
  document.querySelector(".settings_shortcut").style.borderRadius = what_border_radius;
  document.querySelector(".visuals_the_background").style.borderRadius = what_border_radius;
  document.querySelector(".the_text").style.borderRadius = what_border_radius;
  document.querySelector(".shortcut_bar").style.borderRadius = what_border_radius;

}
})

var what_border_radius = getCookie("border_radius");
document.querySelector(".task_bar").style.borderRadius = what_border_radius;
document.querySelector(".the_settings").style.borderRadius = what_border_radius;
document.querySelector(".the_visuals").style.borderRadius = what_border_radius;
document.querySelector(".settings_shortcut").style.borderRadius = what_border_radius;
document.querySelector(".visuals_the_background").style.borderRadius = what_border_radius;
document.querySelector(".the_text").style.borderRadius = what_border_radius;
document.querySelector(".shortcut_bar").style.borderRadius = what_border_radius;

//font style

document.getElementById("text_font_style_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    var what_font_style = document.getElementById("text_font_style_id").value;
    setCookie("font_style", what_font_style, 365);
    var all = document.querySelectorAll("*");
    all.forEach(element => {
      element.style.fontFamily = '"' + what_font_style + '","Poppins",sans-serif';
    })
  }
})

var what_font_style = getCookie("font_style");
var all = document.querySelectorAll("*");
    all.forEach(element => {
      element.style.fontFamily = '"' + what_font_style + '","Poppins",sans-serif';
    })
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

document.getElementById("shortcut1_input_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    var shortcut1_stuff = document.getElementById("shortcut1_input_id").value;
    setCookie("shortcut_1_stuff", shortcut1_stuff, 365);
    document.querySelector(".shortcut1_input").style.boxShadow = "0px 0px 5px 5px green"

  }
})

//if button

document.getElementById("shortcut1_id").addEventListener("click", function(){

  let shortcut_1_cookie = getCookie("shortcut_1_stuff");
  window.location = shortcut_1_cookie;


})

//shortcut #2
  //from inout into a var

document.getElementById("shortcut2_input_id").addEventListener("keypress", function(shortcut2){

  if(shortcut2.key === "Enter"){

    var shortcut2_stuff = document.getElementById("shortcut2_input_id").value;
    setCookie("shortcut_2_stuff", shortcut2_stuff, 365);
    document.querySelector(".shortcut2_input").style.boxShadow = "0px 0px 5px 5px green";
  }
})

//if button

document.getElementById("shortcut2_id").addEventListener("click", function(){

  let shortcut_2_cookie = getCookie("shortcut_2_stuff");
  window.location = shortcut_2_cookie;

})
      
//shortcut #3
  //from inout into a var

document.getElementById("shortcut3_input_id").addEventListener("keypress", function(event){

  if (event.key === "Enter"){

    var shortcut3_stuff = document.getElementById("shortcut3_input_id").value;
    setCookie("shortcut_3_stuff", shortcut3_stuff, 365);
    document.querySelector(".shortcut3_input").style.boxShadow = "0px 0px 5px 5px green";

  }
})

//if button

document.getElementById("shortcut3_id").addEventListener("click", function(){

  let shortcut_3_cookie = getCookie("shortcut_3_stuff");
  window.location = shortcut_3_cookie;

});
      
//shortcut #4
  //from inout into a var

document.getElementById("shortcut4_input_id").addEventListener("keypress", function(event){

  if(event.key === "Enter"){

    var shortcut4_stuff = document.getElementById("shortcut4_input_id").value;
    setCookie("shortcut_4_stuff", shortcut4_stuff, 365);
    document.querySelector(".shortcut4_input").style.boxShadow = "0px 0px 5px 5px green";

  }
});

//if button

document.getElementById("shortcut4_id").addEventListener("click", function(){

  let shortcut_4_cookie = getCookie("shortcut_4_stuff");
  window.location = shortcut_4_cookie;

});

      //shortcut #5
  //from inout into a var

document.getElementById("shortcut5_input_id").addEventListener("keypress", function(shortcut5){

  if(shortcut5.key === "Enter"){

    var shortcut5_stuff = document.getElementById("shortcut5_input_id").value;
    setCookie("shortcut_5_stuff", shortcut5_stuff, 365);
    document.querySelector(".shortcut5_input").style.boxShadow = "0px 0px 5px 5px green";

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
  
    document.querySelector(".container").style.display = "none";
    document.querySelector(".first_screen_check").style.display = "block";
    event.target.value = "";
  
  }

  if(newValue === "ms"){
  
    document.querySelector(".container").style.display = "block";
    document.querySelector(".first_screen_check").style.display = "none";
    event.target.value = "";
  
  }

  if(newValue === "fulls"){

    var elem = document.documentElement;

    elem.requestFullscreen();
    event.target.value = "";

  }

  if(newValue === "delallcookie"){

    document.cookie = "username=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_5_stuff=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_4_stuff=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_3_stuff=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_2_stuff=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "shortcut_1_stuff=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "color=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "outline_color=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "color_box_shadow=; expires= 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "color_text=; expires= 1 jan 1999 00:00:00"
    document.cookie = "color_font_shadow=; expires=1  jan 1999 00:00:00"
    document.cookie = "border_color=; expires=1 jan 1999 00:00:00"
    
    location.reload()

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

// First screen



