let s = document.getElementById("submit");
let d = document.getElementById("dd");
let sr = "0% 0% 0% 100%"
let sl = "0% 0% 0% 0%";
let b = true;
let final_b = false

let coloru = '#85FFBD';
function num() {
    let n = document.getElementById("input_box1").value;
    console.log();  
    final_b = true;
    if (typeof(+n) == 'number') {
        let sr = "0% 0% 0% 0%";
        s.style.margin= sr;
        
        s.style.backgroundColor=`${coloru}`;
        s.style.backgroundImage='linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
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