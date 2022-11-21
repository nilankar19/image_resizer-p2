let src;
let output_img;
let canvas = document.getElementById('canvas');
let img;
let width; 
let height;
let size_s,size_ss, symbol = ['kb','Mb'];


let ii = document.getElementById("dummy");
var ctx = canvas.getContext('2d');
ctx.drawImage(ii,0,0);


let img_size;
let input = document.getElementById('input');
input.onchange = function(e) {
  img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
  console.log(img.src);
  img_size = +Math.round(input.files[0].size/1024);
  if(img_size>1024){ img_size = +Math.round(img_size/1024); size_s = symbol[1];}else{size_s=symbol[0];}

};

function user_input_size() {
width =  document.getElementById("input_box1").value;
height = document.getElementById("input_box2").value;
draw();
canva_img_uri(canvas);
}



function draw() {
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  // ctx.drawImage(this, 0,0);
  // console.log(this);
  ctx.drawImage(img,0,0,width, height)//for resize
  document.getElementById("output").setAttribute('src',`${img.src}`)

  
  document.getElementById("imginfo2").innerHTML= ` width = ${img.width}\n <br> height = ${img.height}<br>  uri = ${img.src} <br> size = ${img_size} ${size_s}</span>`;
 
}
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}

function  canva_img_uri(canvas){
  //get canva img with user define length and width
  src = canvas.toDataURL("image/png",1.0); 
  document.getElementById("download").setAttribute('href',`${src}`);

  //image size of canvas
  canvas.toBlob(function(blob){
    // alert(blob.size);
  output_img = Math.round(((blob.size)/1024));
  console.log(output_img);
  if(output_img>1024){ output_img = output_img/1024; size_ss = symbol[1];}else{size_ss=symbol[0];}
  document.getElementById("imginfo1").innerHTML=`<span style="font-size: 1.8vh;"> width = ${canvas.width}\n <br> height = ${canvas.height}<br>  uri = ${img.src} <br> size = ${output_img} ${size_ss} </span>` ;

});
}

function td_size(w,h) {
  width = w;
  height= h;
  draw();
  canva_img_uri(canvas);
  document.getElementById("input_box1").value=`${w}`;
  document.getElementById("input_box2").value=`${h}`;
  }
  
  //tabel hover
  function td_box_hover(k) {
    let t_id_arr =['td_0','td_a','td_b','td_c','td_d','td_e','td_f','td_g','td_h','td_i','td_j','td_k','td_l'];
    let coloru = '#85FFBD';
   
   let tdd =  document.getElementById(`${t_id_arr[k]}`);
   tdd.style.backgroundColor=`${coloru}`;
   tdd.style.backgroundImage='linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
   
  }
