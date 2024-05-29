  //Time

  let time = document.getElementById("HowTFDoIMakeTime_id");

  setInterval(() =>{
        
  let d = new Date();
  time.innerText = d.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false});
        
  var element = document.getElementById(("HowTFDoIMakeTime_id"));
  
  if(true == true){
    if(element.innerText >= "00:00:00" && element.innerText <= "11:59:59"){
  
    document.cookie = "what_time=; expires=1 jan 1999 00:00:00";
    setCookie("what_time", "Good Morning, ", 365);
    let username = getCookie("username");
    let what_time = getCookie("what_time");

    document.getElementById("ms_user").textContent = (what_time + " " + username);
    document.getElementById("wallpaper_user_id").textContent = (what_time + " " + username);
    document.getElementById("first_text2_id").textContent = (what_time + " Sir. Shall we?")

  }
  
  if(element.innerText >= "12:00:00" && element.innerText <= "17:59:59"){
  
    document.cookie = "what_time=; expires=1 jan 1999 00:00:00";
    setCookie("what_time", "Good Afternoon, ", 365);
    let username = getCookie("username");
    let what_time = getCookie("what_time");

    document.getElementById("ms_user").textContent = (what_time + " " + username);
    document.getElementById("wallpaper_user_id").textContent = (what_time + " " + username);
    document.getElementById("first_text2_id").textContent = (what_time + " Sir. Shall we?")

  }
  
  if(element.innerText >= "18:00:00" && element.innerText <= "23:59:59"){
  
    document.cookie = "what_time=; expires=1 jan 1999 00:00:00";
    setCookie("what_time", "Good Evening, ", 365)

    let username = getCookie("username");
    let what_time = getCookie("what_time");

    document.getElementById("ms_user").textContent = (what_time + " " + username);
    document.getElementById("wallpaper_user_id").textContent = (what_time + " " + username);
    document.getElementById("first_text2_id").textContent = (what_time + " Sir. Shall we?")

  }
  }
  });