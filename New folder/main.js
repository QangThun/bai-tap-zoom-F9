// Lấy các tabs
const tabs = document.querySelectorAll(".tabs");

// Lặp qua nhiều tabs để `thêm active` vào tabItem đầu tiên
tabs.forEach((tab) => {
    const tabItems = tab.querySelectorAll(".tab-item");
    const contentItems = tab.querySelectorAll(".content");

    if (tabItems.length) {
        tabItems[0].classList.add("active");
    }

    if (contentItems.length) {
        contentItems[0].classList.add("active");
    }

    // Xử lý khi click chọn vào từng tab khi xử lý ở đây
    tabItems.forEach((tabItem, tabIndex) => {
        tabItem.onclick = function () {
            // click `disable`
            const disableTab = tabItem.classList.contains("disable");
            if (disableTab) return;

            // click `tab item`
            const activeTab = tab.querySelector(".tab-item.active");
            if (activeTab) activeTab.classList.remove("active");
            this.classList.add("active");

            // click `tab item` check `content` thay đổi
            const activeContent = tab.querySelector(".content.active");
            if (activeContent) activeContent.classList.remove("active");

            contentItems[tabIndex].classList.add("active");
        };
    });
});