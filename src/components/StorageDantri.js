const allTabs = [
  {},
  {
    eventKey: 1,
    tabLabel: 'Trang chủ',
    linkFetchData: 'http://dantri.com.vn/trangchu.rss'
  },
  {
    eventKey: 2,
    tabLabel: 'Thể thao',
    linkFetchData: 'http://dantri.com.vn/the-thao.rss'
  },
  {
    eventKey: 3,
    tabLabel: 'Giáo dục - khuyến học',
    linkFetchData: 'http://dantri.com.vn/giao-duc-khuyen-hoc.rss'
  },
  {
    eventKey: 4,
    tabLabel: 'Giải trí',
    linkFetchData: 'http://dantri.com.vn/giai-tri.rss'
  },
  {
    eventKey: 5,
    tabLabel: 'Sức khỏe',
    linkFetchData: 'http://dantri.com.vn/suc-khoe.rss'
  },
  {
    eventKey: 6,
    tabLabel: 'Xã hội',
    linkFetchData: 'http://dantri.com.vn/xa-hoi.rss'
  },
  {
    eventKey: 7,
    tabLabel: 'Thế giới',
    linkFetchData: 'http://dantri.com.vn/the-gioi.rss'
  },
  {
    eventKey: 8,
    tabLabel: 'Kinh doanh',
    linkFetchData: 'http://dantri.com.vn/kinh-doanh.rss'
  },
  {
    eventKey: 9,
    tabLabel: 'Ô tô - xe máy',
    linkFetchData: 'http://dantri.com.vn/o-to-xe-may.rss'
  },
  {
    eventKey: 10,
    tabLabel: 'Sức mạnh số',
    linkFetchData: 'http://dantri.com.vn/suc-manh-so.rss'
  },
  {
    eventKey: 11,
    tabLabel: 'Tình yêu - giới tính',
    linkFetchData: 'http://dantri.com.vn/tinh-yeu-gioi-tinh.rss'
  },
  {
    eventKey: 12,
    tabLabel: 'Chuyện lạ',
    linkFetchData: 'http://dantri.com.vn/chuyen-la.rss'
  },
  {
    eventKey: 13,
    tabLabel: 'Việc làm',
    linkFetchData: 'http://dantri.com.vn/viec-lam.rss'
  },
  {
    eventKey: 14,
    tabLabel: 'Nhịp sống trẻ',
    linkFetchData: 'http://dantri.com.vn/nhip-song-tre.rss'
  },
  {
    eventKey: 15,
    tabLabel: 'Tấm lòng nhân ái',
    linkFetchData: 'http://dantri.com.vn/tam-long-nhan-ai.rss'
  },
  {
    eventKey: 16,
    tabLabel: 'Pháp luật',
    linkFetchData: 'http://dantri.com.vn/phap-luat.rss'
  },
  {
    eventKey: 17,
    tabLabel: 'Bạn đọc',
    linkFetchData: 'http://dantri.com.vn/ban-doc.rss'
  },
  {
    eventKey: 18,
    tabLabel: 'Diễn đàn',
    linkFetchData: 'http://dantri.com.vn/dien-dan.rss'
  },
  {
    eventKey: 19,
    tabLabel: 'Tuyển sinh',
    linkFetchData: 'http://dantri.com.vn/tuyen-sinh.rss'
  },
  {
    eventKey: 20,
    tabLabel: 'Blog',
    linkFetchData: 'http://dantri.com.vn/blog.rss'
  },
  {
    eventKey: 21,
    tabLabel: 'Văn hóa',
    linkFetchData: 'http://dantri.com.vn/van-hoa.rss'
  },
  {
    eventKey: 22,
    tabLabel: 'Du học',
    linkFetchData: 'http://dantri.com.vn/du-hoc.rss'
  },
  {
    eventKey: 23,
    tabLabel: 'Du lịch',
    linkFetchData: 'http://dantri.com.vn/du-lich.rss'
  },
  {
    eventKey: 24,
    tabLabel: 'Đời sống',
    linkFetchData: 'http://dantri.com.vn/doi-song.rss'
  },
  {
    eventKey: 25,
    tabLabel: 'Khoa học - Công nghệ',
    linkFetchData: 'http://dantri.com.vn/khoa-hoc-cong-nghe.rss'
  },
  {
    eventKey: 26,
    tabLabel: 'SEA GAMES 28',
    linkFetchData: 'http://dantri.com.vn/sea-games-28.rss'
  },
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
