var browserWidth = window.innerWidth;
var sunEditor = document.getElementById('sunedit-area');
var oImg = sunEditor.getElementsByTagName('img');
var isMobile = browserWidth <= 600;

oImg[0].style.height = '70vh';
oImg[0].style.width = '100%';
oImg[0].style.objectFit = 'cover';
// oImg[0].style.position = 'absolute';
// oImg[0].style.top = 0;

for (let i = 1; i < oImg.length; i++) {
  const dataSize = oImg[i].getAttribute('data-size');
  const isHasSizeConfig = /\d/.test(dataSize);

  oImg[i].style.objectFit = 'cover';
  if (!isHasSizeConfig) {
    oImg[i].style.height = isMobile ? '200px' : '500px';
    oImg[i].style.width = isMobile ? '48vw' : '25vw';
    oImg[i].style.marginLeft = isMobile ? 0 : '200px';
    oImg[i].style.marginRight = isMobile ? 0 : '200px';
  }
}

oImg[1].style.float = 'left';
oImg[2].style.float = 'right';
