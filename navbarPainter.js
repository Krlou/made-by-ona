window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  let pageHeader = null;
  let pageHeaderLogo = null;
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    pageHeader = document.getElementById("pageHeader");
    pageHeader.style.backgroundImage = "";
  } else if (
    //0-200px
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    pageHeader = document.getElementById("pageHeader");
    pageHeader.style.backgroundImage =
      "linear-gradient(rgb(238,238,238), rgb(251,251,251))";
  } else {
    pageHeader = document.getElementById("pageHeader");
    pageHeader.style.backgroundImage = "";
  }
};
