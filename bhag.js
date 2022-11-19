let s = document.getElementById("submit");
let d = document.getElementById("dd");
let sr = "0% 0% 0% 100%"
let sl = "0% 0% 0% 0%";
let b = true;
let final_b = false
function num() {
    let n = document.getElementById("input_box1").value;
    console.log();  
    final_b = true;
    if (typeof(+n) == 'number') {
        let sr = "0% 0% 0% 0%";
        s.style.margin= sr;
        s.style.background="linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)";
        b = true;
        d.style.margin="0% 0% 0% 0%";
        n.style.margin="0% 0% 0% 0%";
        
    }
}

    function change() {
        if (final_b==false) {
            if(b==true) {
                s.style.margin= sr;
                b=false;                
            }else{
                s.style.margin= sl ; b = true;
            }  
    }
}