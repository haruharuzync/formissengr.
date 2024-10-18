const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "just incase if you feel tired hingi kalang ng kiss sakin hshaha.";
    gif.src = "https://github.com/DzarelDeveloper/Img/blob/main/haisayang.gif?raw=true";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/yournumber?text=reply%20message%20whatever";
  }
});
