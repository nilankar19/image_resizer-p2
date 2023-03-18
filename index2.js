let resizedURL;

function resizeImage(width, height, type, url) {
  let img = new Image();
  img.src = url;
  img.onload = function() {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    let resizedURL = canvas.toDataURL(type);
    console.log(`Resized image URL: ${resizedURL}`);
    return resizedURL;
  };
}



function user_input_size() {
  width = document.getElementById("input_box1").value;
  height = document.getElementById("input_box2").value;
  exts-type = `${"image/" + document.getElementById("input_box2").value;}
  
  resizedURL = resizeImage(width, height, exts-type, url);
}

// let url = 'https://www.flaticon.com/free-icon/happy_743267?term=emoji&page=1&position=31&origin=search&related_id=743267';

// let resizedURL = resizeImage(500, 500, 'image/jpeg', url);


