document.getElementById("budgetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const days = parseInt(document.getElementById("days").value);
  const people = parseInt(document.getElementById("people").value);
  const travelMode = document.getElementById("travelMode").value;
  const accommodation = document.getElementById("accommodation").value;

  // Rough cost estimation (₹ per person)
  const travelCosts = {
    flight: 5000,
    train: 1500,
    bus: 1000
  };

  const accommodationCosts = {
    budget: 1000,
    standard: 2000,
    luxury: 4000
  };

  const dailyFoodCost = 500;

  const travelCost = travelCosts[travelMode] * people;
  const stayCost = accommodationCosts[accommodation] * days * people;
  const foodCost = dailyFoodCost * days * people;

  const total = travelCost + stayCost + foodCost;

  document.getElementById("result").innerHTML = `
    <h3>Estimated Cost:</h3>
    <p>Destination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}</p>
    <p>For ${people} people, staying ${days} days</p>
    <p><strong>Total Budget: ₹${total.toLocaleString()}</strong></p>
  `;
});
