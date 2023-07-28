var state = 1;

function fight() {
  if (state == 1) {
    document.getElementById("img1").src =
      "https://media.tenor.com/zWC0NAJTZBUAAAAC/dio-vs-jotaro.gif";
  } else {
    document.getElementById("img1").src =
      "https://pic-bstarstatic.akamaized.net/ugc/f2f2d8f54834126b5ec07f57cc1cc83b.jpeg";
  }
  state *= -1;
}
