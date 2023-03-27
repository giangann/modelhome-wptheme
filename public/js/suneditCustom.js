var browserWidth = window.innerWidth;
var isMobile = browserWidth <= 600;

var sunEditor = document.getElementById('sunedit-area');
var oImg = sunEditor.getElementsByTagName('img');
var oImgContainer = sunEditor.getElementsByClassName('se-image-container');

var coupleElementLength = 2;
var coupleId = 1;
var listCouple = {};
listCouple[coupleId] = [];

function getImageWidth(dataSize) {
  const dimensions = dataSize.split(',');
  const imgWidth = dimensions[0];

  // imgWidth will have type is <string>"n%"
  return imgWidth;
}

function extractNumberOfPercent(percent) {
  percent = percent.slice(0, percent.length - 1);
  return Number(percent);
}

// get image less than 50%
for (let i = 0; i < oImg.length; i++) {
  const dataSize = oImg[i].getAttribute('data-size');

  const imgWidth = extractNumberOfPercent(getImageWidth(dataSize));

  if (imgWidth < 50 && imgWidth > 0) {
    if (listCouple[coupleId].length >= coupleElementLength) {
      coupleId += 1;
      listCouple[coupleId] = [];
    }
    listCouple[coupleId].push(oImg[i]);
  }
}
// after this loop, listCouple have type:
// list couple:{
// 1:[<HTML element 1>,<HTML element 2>],
// 2:[<HTML element 1>,<HTML element 2>]
// }

// main algorithm to sync couple image have the same height
Object.entries(listCouple).forEach(([key, imageArr]) => {
  console.log(imageArr);

  if (imageArr[0].clientHeight > imageArr[1].clientHeight) {
    imageArr[0].style.height = imageArr[1].clientHeight + 'px';
  } else {
    imageArr[1].style.height = imageArr[0].clientHeight + 'px';
  }

  // console.log('height')
});

// console.log('list couple',listCouple)
// console.log('height',listCouple[1][1].clientHeight)
