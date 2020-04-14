window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  let pageHeader = null;
  const height = window.innerHeight;
  if (
    //0-200px
    document.body.scrollTop > height * 0.1 ||
    document.documentElement.scrollTop > height * 0.1
  ) {
    pageHeader = document.getElementById("pageHeader");
    pageHeader.style.backgroundImage =
      "linear-gradient(rgb(238,238,238), rgb(251,251,251))";
  } else {
    pageHeader = document.getElementById("pageHeader");
    pageHeader.style.backgroundImage = "";
  }
};
