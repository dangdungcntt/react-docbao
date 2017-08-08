const allTabs = [
  {},
  {
    eventKey: 1,
    tabLabel: 'Trang chủ',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/trangchu24h.rss'
  },
  {
    eventKey: 2,
    tabLabel: 'Tin tức trong ngày',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/tintuctrongngay.rss'
  },
  {
    eventKey: 3,
    tabLabel: 'Bóng đá',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/bongda.rss'
  },
  {
    eventKey: 4,
    tabLabel: 'An ninh - Hình sự',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/anninhhinhsu.rss'
  },
  {
    eventKey: 5,
    tabLabel: 'Thời trang',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/thoitrang.rss'
  },
  {
    eventKey: 6,
    tabLabel: 'Tài chính - Bất động sản',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/taichinhbatdongsan.rss'
  },
  {
    eventKey: 7,
    tabLabel: 'Ẩm thực',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/amthuc.rss'
  },
  {
    eventKey: 8,
    tabLabel: 'Làm đẹp',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/lamdep.rss'
  },
  {
    eventKey: 9,
    tabLabel: 'Phim',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/phim.rss'
  },
  {
    eventKey: 10,
    tabLabel: 'Giáo dục - Du học',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/giaoducduhoc.rss'
  },
  {
    eventKey: 11,
    tabLabel: 'Bạn trẻ - Cuộc sống',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/bantrecuocsong.rss'
  },
  {
    eventKey: 12,
    tabLabel: 'Ca nhạc - MTV',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/canhacmtv.rss'
  },
  {
    eventKey: 13,
    tabLabel: 'Thể thao',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/thethao.rss'
  },
  {
    eventKey: 14,
    tabLabel: 'Phi thường - Kì quặc',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/phithuongkyquac.rss'
  },
  {
    eventKey: 15,
    tabLabel: 'Công nghệ thông tin',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/congnghethongtin.rss'
  },
  {
    eventKey: 16,
    tabLabel: 'Ô tô - Xe máy',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/otoxemay.rss'
  },
  {
    eventKey: 17,
    tabLabel: 'Thị trường - Tiêu dùng',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/thitruongtieudung.rss'
  },
  {
    eventKey: 18,
    tabLabel: 'Du lịch',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/dulich.rss'
  },
  {
    eventKey: 19,
    tabLabel: 'Tuyển sinh',
    linkFetchData: 'http://dantri.com.vn/tuyen-sinh.rss'
  },
  {
    eventKey: 20,
    tabLabel: 'Sức khỏe - Đời sống',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/suckhoedoisong.rss'
  },
  {
    eventKey: 21,
    tabLabel: 'Cười 24h',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/cuoi24h.rss'
  },
  {
    eventKey: 22,
    tabLabel: 'Thế giới',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/tintucquocte.rss'
  },
  {
    eventKey: 23,
    tabLabel: 'Đời sống showbiz',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/doisongshowbiz.rss'
  },
  {
    eventKey: 24,
    tabLabel: 'Giải trí',
    linkFetchData: 'http://www.24h.com.vn/upload/rss/giaitri.rss'
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
