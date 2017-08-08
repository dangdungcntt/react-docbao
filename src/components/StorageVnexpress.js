const allTabs = [
  {},
  {
    eventKey: 1,
    tabLabel: 'Tin mới nhất',
    linkFetchData: 'http://vnexpress.net/rss/tin-moi-nhat.rss'
  },
  {
    eventKey: 2,
    tabLabel: 'Thể thao',
    linkFetchData: 'http://vnexpress.net/rss/the-thao.rss'
  },
  {
    eventKey: 3,
    tabLabel: 'Giáo dục',
    linkFetchData: 'http://vnexpress.net/rss/giao-duc.rss'
  },
  {
    eventKey: 4,
    tabLabel: 'Giải trí',
    linkFetchData: 'http://vnexpress.net/rss/giai-tri.rss'
  },
  {
    eventKey: 5,
    tabLabel: 'Thời sự',
    linkFetchData: 'http://vnexpress.net/rss/thoi-su.rss'
  },
  {
    eventKey: 6,
    tabLabel: 'Thế giới',
    linkFetchData: 'http://vnexpress.net/rss/the-gioi.rss'
  },
  {
    eventKey: 7,
    tabLabel: 'Kinh doanh',
    linkFetchData: 'http://vnexpress.net/rss/kinh-doanh.rss'
  },
  {
    eventKey: 8,
    tabLabel: 'Startup',
    linkFetchData: 'http://vnexpress.net/rss/startup.rss'
  },
  {
    eventKey: 9,
    tabLabel: 'Pháp luật',
    linkFetchData: 'http://vnexpress.net/rss/phap-luat.rss'
  },
  {
    eventKey: 10,
    tabLabel: 'Sức khỏe',
    linkFetchData: 'http://vnexpress.net/rss/suc-khoe.rss'
  },
  {
    eventKey: 11,
    tabLabel: 'Gia đình',
    linkFetchData: 'http://vnexpress.net/rss/gia-dinh.rss'
  },
  {
    eventKey: 12,
    tabLabel: 'Du lịch',
    linkFetchData: 'http://vnexpress.net/rss/du-lich.rss'
  },
  {
    eventKey: 13,
    tabLabel: 'Khoa học',
    linkFetchData: 'http://vnexpress.net/rss/khoa-hoc.rss'
  },
  {
    eventKey: 14,
    tabLabel: 'Số hóa',
    linkFetchData: 'http://vnexpress.net/rss/so-hoa.rss'
  },
  {
    eventKey: 15,
    tabLabel: 'Xe',
    linkFetchData: 'http://vnexpress.net/rss/oto-xe-may.rss'
  },
  {
    eventKey: 16,
    tabLabel: 'Cộng đồng',
    linkFetchData: 'http://vnexpress.net/rss/cong-dong.rss'
  },
  {
    eventKey: 17,
    tabLabel: 'Tâm sự',
    linkFetchData: 'http://vnexpress.net/rss/tam-su.rss'
  },
  {
    eventKey: 18,
    tabLabel: 'Cười',
    linkFetchData: 'http://vnexpress.net/rss/cuoi.rss'
  }
];

const selectedTabs = [];

const addTabs = (listTabKey) => {
  listTabKey.forEach((key) => {
      selectedTabs.push(allTabs[key]);
    });
  return [...selectedTabs];
};

const getTabsUnSelected = () => {
  return allTabs.filter((tab) => {
    return !selectedTabs.includes(tab) && tab.eventKey;
  });
};

module.exports = {
  addTabs,
  getTabsUnSelected
}
