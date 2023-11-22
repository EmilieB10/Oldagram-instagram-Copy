const likeImg = document.getElementById("like-img");

/*
 onclick function for making the heart
 red and back to default 
*/

likeImg.addEventListener("click", heartButtonClick);

function heartButtonClick() {
  if (likeImg.src.includes("images/icon-heart-red.png")) {
    likeImg.src = "images/icon-heart.png";
  } else {
    likeImg.src = "images/icon-heart-red.png";
  }
}
