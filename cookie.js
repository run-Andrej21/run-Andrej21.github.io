document.addEventListener("DOMContentLoaded", function (){

  document.cookie = "what_time=; expires= 1 jan 1900 00:00:00"

  if(username != "") {
    
    document.querySelector(".first_screen_check").style.display = "none"; 
    document.querySelector(".container").style.display = "block";
  
  }else{

    //stopt den First Sreen
    var StopFirstScreen = true

    if(StopFirstScreen === true){
    
      document.querySelector(".first_screen_check").style.display = "block";  

      // show act 1
      let id = setInterval(frame, 5);
      let alpha = 0;
  
      document.getElementById("start_id").style.display = "block";
      document.getElementById("first_text2_id").style.display = "block";
      function frame(){
        if(alpha > 1){
          clearInterval(id);
        }else{
          alpha += 0.005;
          document.querySelector(".first_text2").style.color = "rgba(255, 255, 255, " + alpha + ")";
          document.getElementById("start_id").style.color = "rgba(255, 255, 255, " + alpha + ")";
        }
      }

      document.getElementById("start_id").addEventListener("click", function(){
      document.querySelector(".first_screen_check").requestFullscreen();
      document.querySelector(".first_screen").style.display = "block";

      // act 3
      let id3 = setInterval(frame3, 5);
          let alpha3 = 0;
  
          function frame3(){
          if(alpha3 > 1){
            clearInterval(id3);

            document.getElementById("name_input_id").addEventListener("keypress", function(event){

              if(event.key == "Enter"){

                var name = document.getElementById("name_input_id").value;
                setCookie("username", name, 365);
                location.reload();
              }
            })

          }else{
            alpha3 += 0.005;
            document.querySelector(".first_screen").style.backgroundColor = "rgba(27, 73, 255, " + alpha3 + ")";

          }
            }

    // not show act 1 
      let id1 = setInterval(frame1, 5);
      let alpha1 = 1;
  
      function frame1(){
        if(alpha1 < 0){
          clearInterval(id1);
          document.getElementById("start_id").style.display = "none";
          document.getElementById("first_text2_id").style.display = "none";

          //show act 2
          document.getElementById("name_input_id").style.display = "block";
          document.getElementById("first_text1_id").style.display = "block";

          let id2 = setInterval(frame2, 5);
          let alpha2 = 0;
  
          function frame2(){
          if(alpha2 > 1){
            clearInterval(id2);

          }else{
            alpha2 += 0.005;
            document.querySelector(".first_text1").style.color = "rgba(255, 255, 255, " + alpha2 + ")";
            document.getElementById("name_input_id").style.color = "rgba(255, 255, 255, " + alpha2 + ")";
          }
            }

          //act 2 end 
          
        }else{
          alpha1 -= 0.005;
          document.querySelector(".first_text2").style.color = "rgba(255, 255, 255, " + alpha1 + ")";
          document.getElementById("start_id").style.color = "rgba(255, 255, 255, " + alpha1 + ")";
        }
      }

      // act 1 end
    });
      }
      
}});
