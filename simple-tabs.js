const initSimpleTabs = () => {
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

const initSimpleTabsDeclarative = () => {
  // Build tab groups
  let nodeList = document.querySelectorAll("[class$=-tab]")
  let groups = [];
  if (nodeList.length > 0) {
      let group = [nodeList[0]];
      let firstNode = nodeList[0];
      for (let i = 1; i < nodeList.length; i++) {
          if (firstNode.parentNode == nodeList[i].parentNode) {
              group.push(nodeList[i]);
          } else {
              groups.push(group);
              group = [nodeList[i]];
              firstNode = nodeList[i];
          }
      }
      groups.push(group);
  }

  // Add tab elements to tabs elements and CSS properties
  groups.forEach((group) => {
    let tabsElement = group[0].parentNode;
    tabsElement.classList.add("tabs");

    let tabArray = [];
    group.forEach((tabContent) => {
      tabContent.classList.add("tab-content");

      let tab = document.createElement('div');
      tabContent.classList.forEach((className) => {
        let name = className.match(/(.*)-tab$/);
        if (name) {
          tab.textContent = name[1];
          tabContent.classList.remove(name[0]);
        }
      });
      tab.className = 'tab';

      tabArray.push(tab);
    });

    tabsElement.prepend(...tabArray);
  });

  // Initialize the tabs
  initSimpleTabs();
};
