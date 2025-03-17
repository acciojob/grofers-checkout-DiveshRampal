// Create a button element for calculating the total price
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate the total price of all items
const getSum = () => {
  // Select all elements with the class 'price' (prices of the items)
  const priceElements = document.querySelectorAll('.price');
  
  let total = 0;

  // Loop through each price element and add the price to the total sum
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);  // Get the text content and convert it to a number
    total += price;  // Add to the total
  });

  // Create or update the element with id 'ans' to show the total price
  let ansElement = document.querySelector('#ans');
  if (!ansElement) {
    ansElement = document.createElement('div');  // Create a new element if it doesn't exist
    ansElement.id = 'ans';  // Assign the id 'ans'
    document.body.appendChild(ansElement);  // Append it to the body
  }
  
  // Update the content of the 'ans' element with the total
  ansElement.textContent = `Total: Rs ${total}`;
};

// Attach an event listener to the button to calculate the total when clicked
getSumBtn.addEventListener("click", getSum);
