const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    text: "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    img: "./images/women1.png"
  },
  {
    id: 2,
    name: "Victoria June",
    job: "Data Developer",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./images/women2.png"
  },
  {
    id: 3,
    name: "Mike Alhambra",
    job: "Frontend Developer",
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    img: "./images/men1.png"
  }
];

let profileImg = document.querySelector(".profile-image");
let userName = document.querySelector(".name");
let job = document.querySelector(".job");
let info = document.querySelector(".desc");
const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");
const surpriseButton = document.querySelector(".surprise-me");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showReview(currentItem);
});

function showReview(person) {
  const item = reviews[person];
  profileImg.src = item.img;
  userName.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextButton.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

backButton.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});

surpriseButton.addEventListener("click", function () {
  let currentItem = getRandomNumber();
  showReview(currentItem);
  console.log(currentItem);
});

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
