// khai bao mang
var products = [
    {
        img: "https://cdn.hoanghamobile.com/Uploads/2024/07/19/mbook-1409a-1.png;trim.threshold=80;trim.percentpadding=0.5;width=180;height=180;mode=pad",
        name: "Samsung Galaxy S25 Plus - 12GB/512GB Thu cũ",
        price: 25000000,
        description: "Thu cũ lên đời S25 series hỗ trợ lên đến 2 triệu đồng"
    },
    {
        img: "https://cdn.hoanghamobile.com/Uploads/2024/07/19/mbook-1409a-1.png;trim.threshold=80;trim.percentpadding=0.5;width=180;height=180;mode=pad",
        name: "Thu cũ Laptop M- SMART MBOOK 1409B",
        price: 26000000,
        description: "Nhận báo giá tốt nhất cho khách hàng doanh nghiệp B2B khi mua số lượng lớn "
    },
    {
        img: "https://cdn.hoanghamobile.com/Uploads/2024/07/19/mbook-1409a-1.png;trim.threshold=80;trim.percentpadding=0.5;width=180;height=180;mode=pad",
        name: "Máy tính mới nhất Laptop M- SMART MBOOK 1409C",
        price: 27000000,
        description: "Nhận báo giá tốt nhất cho khách  hàng doanh nghiệp B2B khi mua số lượng lớn"
    },
]

var keyProducts = "products";

// initials Products
// setLocalStorage("products", products);

var productFilter = getLocalStorage(keyProducts);

//biến chỉnh sửa
var editMode = false;

var tmpIdProduct;

// che do sua
function enableEditMode() {
    editMode = true;
}

// che do tao
function disableEditMode() {
    editMode = false;
}

function setLocalStorage(key, value) {
    var stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)
}

function getLocalStorage(key) {
    var productArr = localStorage.getItem(key);
    return JSON.parse(productArr);
}

// ham doc tai lieu va render lai HTML
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
})

// ham hien thi HTML
function renderProducts() {
    var html = "";
    // var productFilter = getLocalStorage(keyProducts);

    var productLength = productFilter.length;

    for (var i = 0; i < productLength; i++) {
        var product = productFilter[i];

        html += `
            <li class="product-item">
                <img src="${product.img}"
                    alt="photo">
                <h4>${product.name}</h4>

                <p style="color: red">${formatCurrencyNumber(product.price)}</p>
                <p>${product.description}</p>

                <button class="btn btn-delete" onclick="onDeleteProduct(${i})">Delete</button>
                <button class=" btn btn-edit" onclick="onEditProduct(${i})">Edit</button>
            </li>
        `
    }

    setHTML('.product-list', html);
}

// ham thay đổi ndung HTML
function setHTML(selector, value) {
    var tagElement = document.querySelector(selector);
    tagElement.innerHTML = value;
}

function handleEditProduct() {
    // B1: tmpIdProduct -> Lấy ra obj ban đầu muốn qua tmpIdProduct

    // B2: Tạo obj muốn sửa
    var img = getValueInput("#photo");
    var name = getValueInput("#name");
    var price = getValueInput("#price");
    var description = getValueInput("#description");

    var newProduct = {
        img,
        name,
        price,
        description
    }

    var products = getLocalStorage(keyProducts);// [A, B, C']

    // B3: Thay thế obj sửa vào vị trí object ban đầu
    products[tmpIdProduct] = newProduct;

    // B3': Lưu dữ liệu localstorage
    productFilter = products;
    setLocalStorage(keyProducts, products);

    // B4: Render lại sản phẩm
    renderProducts();

    // B5: resetForm
    resetForm();

    // B6: Sửa lại title
    setHTML(".form-heading", "Create Product"); // title
    setHTML("#create-product", "Create"); // button

    // B7: Chuyển form trạng thái ban đầu: create
    disableEditMode();
}

// hàm thêm sản phẩm
function handleCreate() {
    // if...else: Khi nao em tao, khi nao em sua
    if (editMode) {
        handleEditProduct();
    } else {
        handleCreateProduct();
    }
}
function handleCreateProduct() {
    var img = getValueInput("#photo");
    var name = getValueInput("#name");
    var price = getValueInput("#price");
    var description = getValueInput("#description");

    var product = {
        img,
        name,
        price,
        description
    };

    addCreate(product);
    setLocalStorage("products", products);
    renderProducts();
    resetForm();
}

// hàm tạo
function addCreate(item) {
    products.push(item);
}

// hàm reset form
function resetForm() {
    setValueInput("#photo", "");
    setValueInput("#name", "");
    setValueInput("#price", "");
    setValueInput("#description", "");
}

// hàm lấy giá trị của ô input 
function getValueInput(selector) {
    var inputValue = document.querySelector(selector).value;
    return inputValue;
}

// hàm gắn giá trị cho input: getInputValue
function setValueInput(selector, value) {
    var inputElement = document.querySelector(selector);
    inputElement.value = value;
}

// sự kiện xóa sp
function onDeleteProduct(index) {
    var isDelete = confirm("Bạn chắc chắn muốn xóa sản phẩm ?");

    if (isDelete) {
        deleteProduct(index);
        renderProducts();

        var productLength = products.length;
        if (productLength == 0) {
            setHTML(".product-list", "Chưa có sản phẩm được thêm vào...");
        }
    }
}

// hàm xóa sản phần
function deleteProduct(index) {
    var productsLocalStorage = getLocalStorage(keyProducts);
    productsLocalStorage.splice(index, 1);

    productFilter = productsLocalStorage;
    setLocalStorage(keyProducts, productsLocalStorage);
}

// Xử lý sự kiện khi nhấn nút Edit
function onEditProduct(index) {
    console.log("index edit", index);

    enableEditMode(); // Chuyển sang chế độ chỉnh sửa
    setHTML(".form-heading", "Edit Product");

    var productsStoreage = getLocalStorage(keyProducts);
    var product = productsStoreage[index];

    // Hiển thị thông tin sản phẩm lên form để sửa
    setValueInput("#photo", product.img);
    setValueInput("#name", product.name);
    setValueInput("#price", product.price);
    setValueInput("#description", product.description);

    tmpIdProduct = index;// Lưu lại index để cập nhật khi nhấn "Update"

    setHTML("#create-product", "Save");
}

function formatCurrencyNumber(number) {
    var convertNumber = Number(number).toLocaleString();
    return `${convertNumber} đ`
}

// search logic
// tìm kiếm in hoa, in thường
// tiếng việt, tiếng anh
// name, description
// button, enter -> tìm kiếm được

function searchProduct() {
    var keyword = getValueInput(".input-search").trim().toLowerCase();
    var keywordNormalized = removeVietnameseTones(keyword);
    var productsLocalStorage = getLocalStorage(keyProducts);

    var productsResult = productsLocalStorage.filter((product) => {
        var conditionSeachName = removeVietnameseTones(product.name).includes(keywordNormalized);
        var conditionSeachDesc = removeVietnameseTones(product.description).includes(keywordNormalized);

        return conditionSeachName || conditionSeachDesc;
    });

    productFilter = productsResult;
    // setLocalStorage(keyProducts, productsResult);
    renderProducts();
}

function removeVietnameseTones(inputSearch) {
    return inputSearch
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D")
        .toLowerCase();
}

// function handleKeyDown(event) {
//     if(event.keyCode === 13) {
//         searchProduct();
//     }
// }

document.querySelector(".input-search").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        searchProduct();
    }
})