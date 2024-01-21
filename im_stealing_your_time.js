let time = document.getElementById("HowTFDoIMakeTime");

        setInterval(() =>{
            
            let d = new Date();
            time.innerText = d.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false});
            
        });

