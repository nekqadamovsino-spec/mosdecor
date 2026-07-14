document.querySelectorAll('.reveal').forEach(el=>{new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.15}).observe(el)});
document.querySelector('.form').addEventListener('submit',e=>{e.preventDefault();alert('Заявка пока тестовая. Нужно подключить Telegram или Google Таблицу.');});
const filterButtons = document.querySelectorAll(".filter-btn");
const templateCards = document.querySelectorAll(".template-card");
const catalogSearch = document.getElementById("catalogSearch");
const catalogEmpty = document.getElementById("catalogEmpty");

let activeFilter = "all";

function updateCatalog() {
  if (!templateCards.length) return;

  const searchValue = catalogSearch
    ? catalogSearch.value.trim().toLowerCase()
    : "";

  let visibleCards = 0;

  templateCards.forEach((card) => {
    const categories = card.dataset.category || "";
    const title = (card.dataset.title || "").toLowerCase();

    const matchesFilter =
      activeFilter === "all" ||
      categories.split(" ").includes(activeFilter);

    const matchesSearch =
      !searchValue ||
      title.includes(searchValue) ||
      card.textContent.toLowerCase().includes(searchValue);

    const shouldShow = matchesFilter && matchesSearch;

    card.classList.toggle("is-hidden", !shouldShow);

    if (shouldShow) {
      visibleCards += 1;
    }
  });

  if (catalogEmpty) {
    catalogEmpty.classList.toggle("show", visibleCards === 0);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    activeFilter = button.dataset.filter || "all";

    updateCatalog();
  });
});

if (catalogSearch) {
  catalogSearch.addEventListener("input", updateCatalog);
}
