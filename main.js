
const handleFormInputFocus = async () => {
  console.log('focus ocurred');

  await getMealCategories();
};

const searchTermInput = document.body.querySelector("#search-terms");

searchTermInput.addEventListener("focus", handleFormInputFocus);
