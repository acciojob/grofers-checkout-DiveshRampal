// Create a button element for calculating the total price
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");

// Append the button to the body so it can be seen on the page
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

  // Create a new row for displaying the total price
  const table = document.querySelector('table');
  const totalRow = document.createElement('tr');  // Create a new table row for the total

  // Create a cell for the "Total" text
  const totalCell1 = document.createElement('td');
  totalCell1.textContent = "Total";
  totalRow.appendChild(totalCell1);  // Add the "Total" text to the row

  // Create a cell for displaying the total price
  const totalCell2 = document.createElement('td');
  totalCell2.textContent = total;  // Display the total sum of prices
  totalRow.appendChild(totalCell2);  // Add the total price cell to the row

  // Append the total row to the table
  table.appendChild(totalRow);
};

// Attach an event listener to the button to calculate the total when clicked
getSumBtn.addEventListener("click", getSum);
