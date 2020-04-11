const nasaForm = document.querySelector("#jsNASA");
const nasaInput = nasaForm.querySelector(".nasaInput");
const body = document.querySelector("body");
const imageBack = document.querySelector(".imageBack");
const img = imageBack.querySelector("#jsImg");
const cancleBtn = document.querySelector(".cancleBtn");
const saveBtn = document.querySelector(".saveBtn");

const KEY = "Frmg6938W56B4mgYbjdPA5gtRVjBZh5a7DQ8npZY";
const SHOW = "show";
let date;
let url;

const space = (date) => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      url = res.hdurl;
      if (res.hdurl) {
        img.style.backgroundImage = `url(${res.hdurl})`;
        img.style.backgroundRepeat = "no-repeat";
        img.style.backgroundSize = "contain";
      } else if (res.url) {
        const a = document.createElement("a");
        a.href = res.url;
        console.log(a.link);
        a.click();
      }
      saveBtn.addEventListener("click", handleSave);
      cancleBtn.addEventListener("click", handleCancle);
    });
};

const handleSave = (e) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "hi";
  a.click();
};

const handleCancle = () => {
  imageBack.classList.remove(SHOW);
};

const handleForm = (e) => {
  e.preventDefault();
  const value = nasaInput.value;
  date = value;
  console.log(date);
  space(date);
  imageBack.classList.add(SHOW);
};

nasaForm.addEventListener("input", handleForm);
