const yes = document.querySelector(".js-yes-btn");
const no = document.querySelector(".js-no-btn");
const q = document.querySelector(".question-container");
const r = document.querySelector(".result-container");

yes.onclick = () => {
  q.style.display = "none";
  r.style.display = "block";
};

no.onmouseover = () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * 200 + "px";
  no.style.top = Math.random() * 200 + "px";
};
