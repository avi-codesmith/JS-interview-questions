// Array of fruit names
const fruits = ["Apple", "Banana", "Cherry", "Mango"];

// Select the <ul> element with the id "fruit-list"
const fruitList = document.getElementById("fruit-list");

// Loop through the fruits array and create list items
fruits.forEach((fruit) => {
  const listItem = document.createElement("li"); // Create a new <li> element
  listItem.textContent = fruit; // Set the text of the <li> element to the fruit name
  fruitList.appendChild(listItem); // Append the <li> to the <ul>
});
