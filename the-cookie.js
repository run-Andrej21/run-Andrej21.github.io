

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  
    document.addEventListener("DOMContentLoaded", function () {
      var container = document.querySelector(".container")
      let username = getCookie("username");
      if (username != "") {
        
        container.style.display = ""
        document.getElementById("textname").textContent = ("Hello, " + username);

      } else {
  
        var showFS = document.querySelector(".FS");

        showFS.style.display ="";     
          
      }});

   

    document.getElementById("del_name_id").addEventListener("click", function() {
      console.log("a")
      location.reload();

      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      

    });

//Time

    let time = document.getElementById("HowTFDoIMakeTime_id");

        setInterval(() =>{
            
            let d = new Date();
            time.innerText = d.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false});
            
        });
