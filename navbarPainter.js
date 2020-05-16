window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  let pageHeader = null;
  const height = window.innerHeight;
  const width = window.innerWidth;
  if (
    //>200px
    document.body.scrollTop > height * 0.1 ||
    document.documentElement.scrollTop > height * 0.1
  ) {
    pageHeader = document.getElementById("pageHeader");
    logo = document.getElementsByClassName("page-header__logo");
    pageHeader.style.backgroundImage =
      "linear-gradient(rgb(238,238,238), rgb(251,251,251))";
    //
    logo[0].style.margin = "16px";
    logo[0].style.padding = "8px";
  } else {
    pageHeader = document.getElementById("pageHeader");
    logo = document.getElementsByClassName("page-header__logo");
    pageHeader.style.backgroundImage = "";
    //
    if (width > 640) {
      logo[0].style.margin = "32px";
      logo[0].style.padding = "16px";
    } else {
      logo[0].style.margin = "16px";
      logo[0].style.padding = "8px";
    }
  }
};
