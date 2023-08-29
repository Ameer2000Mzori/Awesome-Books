const pages = {
  listPage: document.querySelector(".header"),
  addPage: document.querySelector(".input-wrap"),
  contactPage: document.querySelector(".header-title-contact"),
};

function setActivePage(activePage) {
  for (const pageName in pages) {
    if (pages.hasOwnProperty(pageName)) {
      const page = pages[pageName];
      if (page === activePage) {
        page.classList.add("active");
        page.classList.remove("deactive");
      } else {
        page.classList.remove("active");
        page.classList.add("deactive");
      }
    }
  }
}

window.addEventListener("load", () => {
  setActivePage(pages.listPage);
});

function list() {
  setActivePage(pages.listPage);
}

function addNew() {
  setActivePage(pages.addPage);
}

function contact() {
  setActivePage(pages.contactPage);
}
