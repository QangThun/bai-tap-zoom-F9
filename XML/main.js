const headerElement = document.querySelector(".header");
const footerElement = document.querySelector(".footer");

function send(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (typeof callback === "function") {
                    callback(xhr.responseText);
                } else {
                    console.error("Dữ liệu truyền sai định dạng callback");
                }
            } else {
                console.error("Lỗi tải dữ liệu từ " + url);
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

send("GET", "./header.html", function (response) {
    headerElement.innerHTML = response;
});

send("GET", "./footer.html", function (response) {
    footerElement.innerHTML = response;
});

