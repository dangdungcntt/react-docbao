export default (allTabs) => {
  const selectedTabs = [];
  return {
    addTabs: (listTabKey) => {
      listTabKey.forEach((key) => {
        selectedTabs.push(allTabs[key]);
      });
      return [...selectedTabs];
    },
    getTabsUnSelected: () => {
      return allTabs.filter((tab) => {
        return !selectedTabs.includes(tab) && tab.eventKey;
      });
    }
  }
}
