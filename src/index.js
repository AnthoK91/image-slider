import "./style.css";

let rightButton = document.querySelector(".arrow-right");
let leftButton = document.querySelector(".arrow-left");
const imagePlacement = document.querySelector(".image-placement");
const img = document.querySelector("#img");
const img2 = document.createElement("img");
img2.id = "img2";
img2.src = "./img/img2.jpg";
const img3 = document.createElement("img");
img3.id = "img3";
img3.src = "./img/img3.jpg";
const img4 = document.createElement("img");
img4.id = "img4";
img4.src = "./img/img4.jpg";
const img5 = document.createElement("img");
img5.id = "img5";
img5.src = "./img/img5.jpg";

const images = [img, img2, img3, img4, img5];
let counter = 0;

const updateImage = () => {
  imagePlacement.innerHTML = "";
  imagePlacement.appendChild(images[counter]);
};

rightButton.addEventListener("click", () => {
  counter = (counter + 1) % images.length;
  console.log(counter);

  updateImage();
});

leftButton.addEventListener("click", () => {
  counter = (counter - 1 + images.length) % images.length;

  updateImage();
});
