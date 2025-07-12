// promise
const apiBase = "https://api01.f8team.dev/api/address";

function fetchData(method, url) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const contentType = xhr.getResponseHeader("Content-Type");
                const isJSON = contentType && contentType.includes("application/json");

                if (isJSON) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    resolve(xhr.responseText);
                }
            } else {
                reject(`Lỗi Http: ${xhr.status}`);
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    });
}

fetchData("GET", `${apiBase}/provinces`)
    .then((provinceResponse) => {
        const firstProvince = provinceResponse.data[0];
        return fetchData("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`);
    })
    .then((districtResponse) => {
        const firstDistrict = districtResponse.data[0];
        return fetchData("GET", `${apiBase}/wards?district_id=${firstDistrict.district_id}`);
    })
    .then((wardResponse) => {
        const firstWard = wardResponse.data[0];
    })
    .catch((err) => console.error(" Lỗi:", err));

// async await 

async function getData() {
    try {
        const provinceRes = await fetchData("GET", `${apiBase}/provinces`);
        const firstProvince = provinceRes.data[0];

        const districtRes = await fetchData("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`);
        const firstDistrict = districtRes.data[0];

        const wardRes = await fetchData("GET", `${apiBase}/wards?district_id=${firstDistrict.district_id}`);
        const firstWard = wardRes.data[0];
    } catch (error) {

    }
}

getData();

