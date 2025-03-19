const checkPicture = setInterval(() => {
  const img = document.querySelector(".MuiAvatar-img.css-1hy9t21");

  if (img) {
    img.src = "https://is.gd/wuvknF";
    clearInterval(checkPicture);
  }
}, 1000 / 60);
