const initRegularTabs = () => {
  // Iterate tabs array
  let tabsElementCollection = document.getElementsByClassName("declarative-tabs");
  [...tabsElementCollection].forEach((tabsElement) => {
    // Build tabButton array
    let tabButtonElementCollection = tabsElement.getElementsByClassName("tab-button");
    let tabButtonElementArray = [...tabButtonElementCollection];

    // Build tab content array
    let tabContentElementCollection = tabsElement.getElementsByClassName("tab-content");
    let tabContentElementArray = [...tabContentElementCollection];

    // Attach event listener
    tabsElement.onclick = (event) => {
      let target = event.target;
      if (target.classList.contains("tab-button")) {
        for (let i = 0; i < tabButtonElementArray.length; i++) {
          if (tabButtonElementArray[i] == target) {
            tabButtonElementArray[i].classList.add("active");
            tabContentElementArray[i].classList.add("active");
          } else {
            tabButtonElementArray[i].classList.remove("active");
            tabContentElementArray[i].classList.remove("active");
          }
        }
      }
    };

    // Make the first tab active
    tabButtonElementArray[0].classList.add("active");
    tabContentElementArray[0].classList.add("active");
  });
};

const initDeclarativeTabs = () => {
  // Build tab groups
  let nodeList = document.querySelectorAll("[data-tab]");
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

  // Process each group
  groups.forEach((group) => {
    // Add declarative-tabs class to the parent element of each group
    let tabsElement = group[0].parentNode;
    tabsElement.classList.add("declarative-tabs");

    let tabButtonElementArray = [];
    group.forEach((tabContent) => {
      // Add tab-content class to each tabContent
      tabContent.classList.add("tab-content");

      // Create a new tabButton element for each tabContent
      let tabButtonElement = document.createElement('div');
      tabButtonElement.className = 'tab-button';
      tabButtonElement.textContent = tabContent.getAttribute('data-tab');

      // Remove data-tab attribute
      tabContent.removeAttribute('data-tab');

      // Add tabButton to the array
      tabButtonElementArray.push(tabButtonElement);
    });

    // Append the newly created tabButton elements to the parent node
    tabsElement.prepend(...tabButtonElementArray);
  });

  // Initialize the tabs
  initRegularTabs();
};
