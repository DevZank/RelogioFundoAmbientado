const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const backgroundImg = document.getElementById("backgroundImg");
const relogioNum1 = document.getElementById("relogio-num1");
const relogioNum2 = document.getElementById("relogio-num2");
const relogioNum3 = document.getElementById("relogio-num3");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hours = dateToday.getHours();
  let minutes = dateToday.getMinutes();
  let seconds = dateToday.getSeconds();

  if (hours < 10) hours = "0" + hours;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  horas.textContent = hours;
  minutos.textContent = minutes;
  segundos.textContent = seconds;

  if (hours == 1) {
    backgroundImg.setAttribute("src", "assets/h01.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 2) {
    backgroundImg.setAttribute("src", "assets/h02.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 3) {
    backgroundImg.setAttribute("src", "assets/h03.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 4) {
    backgroundImg.setAttribute("src", "assets/h04.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 5) {
    backgroundImg.setAttribute("src", "assets/h05.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 6) {
    backgroundImg.setAttribute("src", "assets/h06.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 7) {
    backgroundImg.setAttribute("src", "assets/h07.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 8) {
    backgroundImg.setAttribute("src", "assets/h08.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 9) {
    backgroundImg.setAttribute("src", "assets/h09.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 10) {
    backgroundImg.setAttribute("src", "assets/h10.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 11) {
    backgroundImg.setAttribute("src", "assets/h11.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 12) {
    backgroundImg.setAttribute("src", "assets/h12.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 13) {
    backgroundImg.setAttribute("src", "assets/h13.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 14) {
    backgroundImg.setAttribute("src", "assets/h14.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 15) {
    backgroundImg.setAttribute("src", "assets/h15.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 16) {
    backgroundImg.setAttribute("src", "assets/h16.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 17) {
    backgroundImg.setAttribute("src", "assets/h17.jpg");
    relogioNum1.classList.add("relogio-preto");
    relogioNum2.classList.add("relogio-preto");
    relogioNum3.classList.add("relogio-preto");
  } else if (hours == 18) {
    backgroundImg.setAttribute("src", "assets/h18.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 19) {
    backgroundImg.setAttribute("src", "assets/h19.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 20) {
    backgroundImg.setAttribute("src", "assets/h20.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 21) {
    backgroundImg.setAttribute("src", "assets/h21.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 22) {
    backgroundImg.setAttribute("src", "assets/h22.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 23) {
    backgroundImg.setAttribute("src", "assets/h23.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  } else if (hours == 0) {
    backgroundImg.setAttribute("src", "assets/h00.jpg");
    relogioNum1.classList.add("relogio-branco");
    relogioNum2.classList.add("relogio-branco");
    relogioNum3.classList.add("relogio-branco");
  }
});
