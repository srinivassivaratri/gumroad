# Gumroad-like Product Creation Page

This project is a simplified version of Gumroad's product creation page, built using Next.js and React. It allows users to set up a new digital product or service for sale.

## What's in this project?

1. **Product Form**: We've created a form where users can input details about their product or service.

2. **Product and Service Cards**: Users can choose from various product types (like e-books, courses) or services (like commissions, calls).

3. **Price Setting**: There's a feature to set price ranges and choose different currencies.

4. **Inverse Pricing**: We've added an advanced feature called "Inverse Pricing" with a graph to visualize how the price changes based on sales.

5. **Responsive Design**: The page looks good on both desktop and mobile devices.

## How to run this project

1. Make sure you have Node.js installed on your computer.

2. Open your terminal and navigate to the project folder.

3. Install the necessary packages by running:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your web browser and go to `http://localhost:3000` to see the page.

## Main Features

- **Product Naming**: Users can give their product a name.
- **Product Type Selection**: Choose from various digital products or services.
- **Price Setting**: Set a minimum and maximum price for the product.
- **Currency Selection**: Choose from a wide range of currencies.
- **Inverse Pricing**: An advanced pricing model with a visual graph.

## Project Structure

- `app/page.tsx`: The main page component.
- `components/ProductForm.tsx`: The form for creating a new product.
- `components/ProductCard.tsx` and `components/ServiceCard.tsx`: Display options for products and services.
- `components/PriceGraph.tsx`: Visualizes the inverse pricing model.
- `components/PricingSlider.tsx`: Interactive slider for setting price ranges.

## Styling

We've used Tailwind CSS for styling, making it easy to create a responsive and good-looking interface.

