const categories = ["All", "Men", "Women", "Kids"];

const content = [
  {
    id: "Men",
    label: "Men shirts 1",
  },
  {
    id: "Men",
    label: "Men shirts 2",
  },
  {
    id: "Men",
    label: "Men shirts 3",
  },
  {
    id: "Men",
    label: "Men shirts 4",
  },
  {
    id: "Men",
    label: "Men shirts 5",
  },

  {
    id: "Women",
    label: "Women shirts 1",
  },
  {
    id: "Women",
    label: "Women shirts 2",
  },
  {
    id: "Women",
    label: "Women shirts 3",
  },
  {
    id: "Women",
    label: "Women shirts 4",
  },
  {
    id: "Women",
    label: "Women shirts 5",
  },

  {
    id: "Kids",
    label: "Kids shirts 1",
  },
  {
    id: "Kids",
    label: "Kids shirts 2",
  },
  {
    id: "Kids",
    label: "Kids shirts 3",
  },
  {
    id: "Kids",
    label: "Kids shirts 4",
  },
  {
    id: "Kids",
    label: "Kids shirts 5",
  },
];

const filterButton = document.querySelector(".filter-buttons-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");
function createCategory() {
  categories.forEach((category) => {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("filter-button");
    buttonEl.setAttribute("data-filter", category);
    buttonEl.innerHTML = category;
    filterButton.appendChild(buttonEl);
  });
}

function createContent() {
  content.forEach((contentText) => {
    const singleContentText = document.createElement("div");
    singleContentText.classList.add("card", contentText.id);
    singleContentText.textContent = contentText.label;

    contentWrapper.appendChild(singleContentText);
  });
}

createCategory();
createContent();

const allFilterButton = document.querySelectorAll(".filter-button");
const allCards = document.querySelectorAll(".card");
// console.log(allFilterButton, allCards);

function filterCardsByCategory(extractCurrentCategory, allCards) {
  allCards.forEach((cardItem) => {
    const isShowAll = extractCurrentCategory.toLowerCase() === "all";
    const isFiltercard = !cardItem.classList.contains(extractCurrentCategory);

    if (isFiltercard && !isShowAll) {
      cardItem.classList.add("hide");
    } else {
      cardItem.classList.remove("hide");
    }
  });
}

allFilterButton.forEach((singleButton) => {
  singleButton.addEventListener("click", () => {
    const extractCurrentCategory = singleButton.dataset.filter;
    filterCardsByCategory(extractCurrentCategory, allCards);
    console.log(extractCurrentCategory);
  });
});
