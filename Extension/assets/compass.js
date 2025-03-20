const compassImageLink =
  "https://64.media.tumblr.com/0a610b58eb88528543d0a9f9da7d42f4/tumblr_inline_ndo1ul7NaS1rnbe7i.gif";
// TODO: Use the b64 of the image or smt so it works at school (no tumblr)
const compassReplaceText = "Dr. Disco";
const compassIntervalDelay = 1000 / 30;

const checkPicture = setInterval(() => {
  document.querySelectorAll(".MuiAvatar-img.css-1hy9t21").forEach((img) => {
    img.src = compassImageLink;
    clearInterval(checkPicture);
  });
}, compassIntervalDelay);

const checkText = setInterval(() => {
  document.querySelectorAll(".MuiTypography-root.MuiTypography-headerMd.css-xqgikb").forEach((span) => {
    clearInterval(checkText);
    span.textContent = compassReplaceText;
  });
}, compassIntervalDelay);

const checkText2 = setInterval(() => {
  // document.querySelectorAll(".MuiTypography-root.MuiTypography-headerSm.css-n2thy1").forEach((span) => {
  document.querySelectorAll(".MuiTypography-root.MuiTypography-headerSm.css-n2thy1").forEach((span) => {
    clearInterval(checkText2);
    span.textContent = compassReplaceText;
  });
}, compassIntervalDelay);
