window.onload = function () {
  // Iterate tabs array
  let tabsCollection = document.getElementsByClassName("tabs");
  [...tabsCollection].forEach((tabs) => {
    // Build tab array
    let tabCollection = tabs.getElementsByClassName("tab");
    let tabArray = [...tabCollection];

    // Build tab content array
    let tabContentCollection = tabs.getElementsByClassName("tab-content");
    let tabContentArray = [...tabContentCollection];

    // Attach event listener
    tabs.onclick = (event) => {
      let target = event.target;
      if (target.classList.contains("tab")) {
        for (let i = 0; i < tabArray.length; i++) {
          if (tabArray[i] == target) {
            tabArray[i].classList.add("active");
            tabContentArray[i].classList.add("active");
          } else {
            tabArray[i].classList.remove("active");
            tabContentArray[i].classList.remove("active");
          }
        }
      }
    };
    
    // Make the first tab active
    tabArray[0].classList.add("active");
    tabContentArray[0].classList.add("active");
  });
};
