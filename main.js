console.log("main.js connected");

const handleFormInputFocus = () => {
  console.log("focus ocurred");
};

const searchTermInput = document.body.querySelector("#search-terms");

searchTermInput.addEventListener("focus", handleFormInputFocus);
