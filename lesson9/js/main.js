// for jquery
$(function () {
  $('.lazy').lazyload({
    effect: 'fadeIn'
  });
});

// for js
function onScreen(el) {
  let coords = el.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
function showImg() {
  let imgs = document.getElementsByTagName('img');
  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    let dataSrc = img.getAttribute('data-src');
    if (!dataSrc) continue;
    if (onScreen(img)) {
      img['src'] = dataSrc;
      img.removeAttribute('data-src');
    }
  }
}

showImg();
window.onscroll = showImg;