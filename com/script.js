<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <script>
    // JavaScript code for adding items to the cart and calculating total cost

    // Initialize an empty array to store cart items
    let cartItems = [];

    // Function to handle add-to-cart button click
    function addToCart(event) {
      const productContainer = event.target.parentElement;
      const productName = productContainer.querySelector("h4").innerText;
      const productPrice = productContainer.querySelector("p").innerText;

      // Create an object for the selected item
      const item = {
        name: productName,
        price: parseFloat(productPrice.slice(1)) // Remove the "$" sign and parse as a float
      };

      // Add the item to the cart
      cartItems.push(item);

      // Calculate the total cost
      const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

      // Update the cart button text with the total cost
      const cartButton = document.querySelector(".button-container .button");
      cartButton.textContent = `Cart ($${totalCost.toFixed(2)})`;
    }

    // Get all add-to-cart buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Add event listener to each add-to-cart button
    addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
    });
  </script>
</head>
<body>
  <!-- Your HTML code goes here -->
</body>
</html>
