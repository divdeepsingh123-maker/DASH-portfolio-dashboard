const lastUpdated = document.getElementById("last-updated");

const now = new Date();

lastUpdated.textContent = now.toLocaleString();

const portfolio = [
    {
        symbol: "AAPL",
        shares: 5,
        averageCost: 200,
        currentPrice: 230
    },
    {
        symbol: "GOOG",
        shares: 4,
        averageCost: 180,
        currentPrice: 205
    },
    {
        symbol: "CNQ",
        shares: 10,
        averageCost: 42,
        currentPrice: 46
    }
];

console.log(portfolio);

portfolio.forEach((holding) => {
    const currentValue = holding.shares * holding.currentPrice;

    console.log(
        holding.symbol,
        "Current Value:",
        currentValue
    );
});

console.log("DASH Portfolio Dashboard v0.3 loaded successfully.");
