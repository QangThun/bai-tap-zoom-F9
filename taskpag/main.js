const cardData = [
    {
        image: "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
        tag: "Technology",
        tagClass: "tag-teal",
        title: "Why is the Tesla Cybertruck designed the way it is?",
        description: "An exploration into the truck's polarising design",
        userImage: "https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo",
        userName: "July Dec",
        time: "2h ago"
    },
    {
        image: "https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg",
        tag: "Popular",
        tagClass: "tag-purple",
        title: "How to Keep Going When You Don’t Know What’s Next",
        description: "The future can be scary, but there are ways to deal with that fear.",
        userImage: "https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo",
        userName: "Eyup Ucmaz",
        time: "Yesterday"
    },
    {
        image: "https://cdn-i.vtcnews.vn/files/f1/2015/03/23/nightshots-2_1jpg.jpg",
        tag: "City",
        tagClass: "tag-teal",
        title: "The city lights reflect the aspirations and the endless journey.",
        description: "City at night – where dreams are lit up",
        userImage: "https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo",
        userName: "Amat John",
        time: "4h ago"
    },
];

const container = document.getElementById("card-container");

cardData.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-header">
        <img src="${data.image}" alt="${data.title}" />
      </div>
      <div class="card-body">
        <span class="tag ${data.tagClass}">${data.tag}</span>
        <h4>${data.title}</h4>
        <p>${data.description}</p>
        <div class="user">
          <img src="${data.userImage}" alt="${data.userName}" />
          <div class="user-info">
            <h5>${data.userName}</h5>
            <small>${data.time}</small>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
});

