const globalIntervalDelay = 1000 / 30;

const updateLinks = setInterval(() => {
  const as = document.querySelectorAll("a");

  for (let i = 0; i < as.length; i++) {
    a = as[i];
    if (Math.random() <= 0.1 || a == as[-1]) {
      console.log("Converted link:", a.href);
      a.href = "https://github.com/AbnormalNormality";
      clearInterval(updateLinks);
      break;
    }
  }
}, globalIntervalDelay);

const style = document.createElement("style");
style.innerHTML = `
    * {
      font-family: 'Comic Sans MS';
    }
  }
  `;
document.head.appendChild(style);
