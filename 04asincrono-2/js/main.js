
const imgList = document.querySelectorAll('img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

const closeBtnHandler = () => lightbox.classList.remove('active');

const imgListHandler = index => {
  lightbox.classList.add('active');
  lightboxImg.src = imgList[index].src;
};

imgList.forEach((eachImg, index) => {
  imgList[index].addEventListener('click', () => {
    imgListHandler(index);
  });
});

closeBtn.addEventListener('click', closeBtnHandler);