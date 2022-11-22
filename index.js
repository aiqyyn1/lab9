var src1 = '/Users/ajdyn/Desktop/lab9/img-1.png';
var src2 = '/Users/ajdyn/Desktop/lab9/img-2.png';
var src3 = '/Users/ajdyn/Desktop/lab9/img-3.png';
var src4 = '/Users/ajdyn/Desktop/lab9/img-4.png';
var src5 = '/Users/ajdyn/Desktop/lab9/img-5.png';
var src6 = '/Users/ajdyn/Desktop/lab9/img-6.png';
var src7 = '/Users/ajdyn/Desktop/lab9/img-7.png';
var src8 = '/Users/ajdyn/Desktop/lab9/img-8.png';

let srcArray = [];
srcArray[0] = src1;
srcArray[1] = src2;
srcArray[2] = src3;
srcArray[3] = src4;
srcArray[4] = src5;
srcArray[5] = src6;
srcArray[6] = src7;
srcArray[7] = src8;
srcArray[8] = src1;
srcArray[9] = src2;
srcArray[10] = src3;
srcArray[11] = src4;
srcArray[12] = src5;
srcArray[13] = src6;
srcArray[14] = src7;
srcArray[15] = src8;
srcArray[16] = src1;
srcArray[17] = src1;
srcArray[18] = src2;
srcArray[19] = src2;
srcArray[20] = src3;
srcArray[21] = src3;
srcArray[22] = src5;
srcArray[23] = src5;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var array = [];
var array1 = [];
var vyb = 0;

for (let i = 0; i < array1.length; i++) {
  var a = array1[0].split(' ');
  var b = array1[1].split(' ');
  $(b[0]).css('display', 'block');
  $(b[1]).css('display', 'block');
  $(a[0]).css('display', 'block');
  $(a[1]).css('display', 'block');
}
function rom() {
  var a = array1[0].split(' ');
  var b = array1[1].split(' ');
  $(a[0]).css('transform', 'rotateY(0deg)');
  $(a[0]).css('transition', '1s');
  $(b[0]).css('transform', 'rotateY(0deg)');
  $(b[0]).css('transition', '1s');

  $(a[1]).css('transform', 'rotateY(180deg)');
  $(a[1]).css('transition', '1s');
  $(b[1]).css('transform', 'rotateY(-180deg)');
  $(b[1]).css('transition', '1s');
}

array.length = 0;
array1.length = 0;
vyb = 0;
document.getElementById('time').innerHTML = '00:00';
shuffle(srcArray);
$('.ramka').css('display', 'flex');
$('.start').css('display', 'none');
$('.back').css('transform', 'rotateY(180deg');
$('.a1').css('display', 'flex');
$('.result').css('display', 'none');

var mgn = new Date().getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = now - mgn;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (minutes < 10 && seconds < 10) {
    document.getElementById('time').innerHTML = '0' + minutes + ':0' + seconds;
  } else if (minutes < 10 && seconds > 10) {
    document.getElementById('time').innerHTML = '0' + minutes + ':' + seconds;
  } else {
    document.getElementById('time').innerHTML = minutes + ':' + seconds;
  }
}, 1000);

for (var i = 0; i < 20; i++) {
  var a = 'card' + (i + 1);
  document.getElementById(a).src = srcArray[i];
}
var t = 0;

var count = 0;
var array2 = [];
function rotate(fr, bc, cardno) {
  array[vyb] = $(cardno).attr('src');
  array1[vyb] = fr + ' ' + bc;
  array2[vyb] = cardno;

  $(bc).css('transform', 'rotateY(0deg)');
  $(bc).css('transition', '1s');
  $(fr).css('transform', 'rotateY(180deg)');
  $(fr).css('transition', '1s');

  if (array[0] == array[1] && array2[0] != array2[1]) {
    setTimeout(deleteEl, 800);
    count++;
    if (count == 4) {
      setTimeout(stop, 800);
    }
  } else if (vyb == 1 && array[0] != array[1]) {
    setTimeout(rom, 800);
  }
  if (vyb == 1) {
    vyb = 0;
    array[0] = '';
    array[1] = '';
    array2[0] = '';
    array2[1] = '';
  } else {
    vyb++;
  }
}

function deleteEl() {
  var a = array1[0].split(' ');
  var b = array1[1].split(' ');
  $(b[0]).css('display', 'none');
  $(b[1]).css('display', 'none');
  $(a[0]).css('display', 'none');
  $(a[1]).css('display', 'none');
}
function stop() {
  $('.ramka').css('display', 'none');
  $('.xyz').css('display', 'none');

  $('.result').css('display', 'block');
  document.getElementById('res').innerHTML = 'You Win, Congrats';
}
