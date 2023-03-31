// Define variables
let src;
let output_img;
let canvas = document.getElementById('canvas');
let img;
let width;
let height;
let size_s, size_ss, symbol = ['kb', 'Mb'];
let img_size_kb;
// Get canvas context
var ctx = canvas.getContext('2d');

// Draw initial image on canvas
let ii = document.getElementById("dummy");
ctx.drawImage(ii, 0, 0);

// Set onchange listener for file input
let input = document.getElementById('input');
input.onchange = function(e) {
  // Load image from file and set src attribute
  img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);

  // Get size of image file
  let img_size_bytes = input.files[0].size;
  img_size_kb = Math.round(img_size_bytes / 1024);
  if (img_size_kb > 1024) {
    img_size_kb = Math.round(img_size_kb / 1024);
    size_s = symbol[1];
  } else {
    size_s = symbol[0];
  }
};

// Function to handle user input of image size
function user_input_size() {
  width = document.getElementById("input_box1").value;
  height = document.getElementById("input_box2").value;
  draw();
  canva_img_uri(canvas);
}

// Function to draw image on canvas
function draw() {
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height); // Draw image with user-defined dimensions
  document.getElementById("output").setAttribute('src', `${img.src}`);

  // Display image info (width, height, URI, size) to user
  document.getElementById("imginfo2").innerHTML = `<span style="font-size: 1.6vh;"> width = ${img.width}\n <br> height = ${img.height}<br>  uri = ${img.src} <br> size = ${img_size_kb} ${size_s}</span>`;
}

// Function to handle image load failure
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}

// Function to get canvas image URI and display image info to user
function canva_img_uri(canvas) {
  // Get canvas image with user-defined length and width
  src = canvas.toDataURL("image/jpeg", 1.0);
  document.getElementById("download").setAttribute('href', `${src}`);

  // Get size of canvas image
  canvas.toBlob(function(blob) {
    output_img = Math.round((blob.size) / 1024);
    if (output_img > 1024) {
      output_img = Math.round(output_img / 1024);
      size_ss = symbol[1];
    } else {
      size_ss = symbol[0];
    }
    // Display canvas image info (width, height, URI, size) to user
    document.getElementById("imginfo1").innerHTML = `<span style="font-size: 1.6vh;"> width = ${canvas.width}\n <br> height = ${canvas.height}<br>  uri = ${img.src} <br> size = ${output_img} ${size_ss} </span>`;
  });
}

//call fun from tabel
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
