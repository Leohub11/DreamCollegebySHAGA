// Tìm kiếm sách
const searchInput = document.querySelector(".search-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  cards.forEach((card) => {
    const title = card
      .querySelector(".Student_name h2")
      .textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const userStatus = document.querySelector(".user-status .status");
userStatus.addEventListener("click", () => {
  if (userStatus.textContent === "Online") {
    userStatus.textContent = "Offline";
    userStatus.style.color = "red";
  } else {
    userStatus.textContent = "Online";
    userStatus.style.color = "green";
  }
});

const checkOutButtons = document.querySelectorAll(".click button:first-child");
checkOutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Redirecting to the Check-Out page!");
  });
});

const printButtons = document.querySelectorAll(".click button:last-child");
printButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Printing report...");
  });
});

const menuItems = document.querySelectorAll("aside nav ul li a");
menuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#007bff";
  });
  item.addEventListener("mouseout", () => {
    item.style.color = "";
  });
});
