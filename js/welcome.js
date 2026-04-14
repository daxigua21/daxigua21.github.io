function showWelcome() {
    // 根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) {
        timeChange = "<span>🌤️ 早上好，一日之计在于晨</span>";
    } else if (date.getHours() >= 11 && date.getHours() < 13) {
        timeChange = "<span>☀️ 中午好，记得午休喔~</span>";
    } else if (date.getHours() >= 13 && date.getHours() < 17) {
        timeChange = "<span>🕞 下午好，欢迎来到我的blog！</span>";
    } else if (date.getHours() >= 17 && date.getHours() < 19) {
        timeChange = "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>";
    } else if (date.getHours() >= 19 && date.getHours() < 24) {
        timeChange = "<span>🌙 晚上好！⭐🌙！</span>";
    } else {
        timeChange = "🌙 夜深了，早点休息，少熬夜";
    }

    let welcomeInfoElement = document.getElementById("welcome-info");

    if (welcomeInfoElement) {
        welcomeInfoElement.innerHTML = `${timeChange}`;
    } else {
        console.log("找不到 welcome-info 元素");
    }
}

// 页面加载时执行
function isHomePage() {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
}

// 初始化
window.onload = function () {
    if (isHomePage()) {
        showWelcome();
    }
};

// 如果使用了 PJAX，添加事件监听
document.addEventListener("pjax:complete", function() {
    if (isHomePage()) {
        showWelcome();
    }
});