// Lấy nút Follwe từ HTML
const followBtn = document.getElementById("followBtn");

// Lấy số lượng người theo dõi
const numberFollowers = document.getElementById("followers");

// Tạo biến theo dõi trạng thái follow
let isFollowing = false;

// Lắng nghe sự kiện click vào nút
followBtn.addEventListener("click", function () {

    if (isFollowing) {
        isFollowing = false;
        followBtn.textContent = "Follow";
        followBtn.classList.remove("Following");
        numberFollowers.textContent = 2500;
    }
    else {
        isFollowing = true;
        followBtn.textContent = "Following";
        followBtn.classList.add("Following");
        numberFollowers.textContent = 2501;
    }
});

console.log("1. Bắt đầu chạy");

setTimeout(function () {
    console.log("2. Đây là Timeout (0 giây)");
}, 0);

setTimeout(function () {
    console.log("4. Chạy trước");
}, 0);

console.log("3. Kết thúc chạy");
