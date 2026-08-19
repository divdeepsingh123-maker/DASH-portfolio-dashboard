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

let totalPortfolioValue = 0;

portfolio.forEach((holding) => {
    totalPortfolioValue += holding.shares * holding.currentPrice;
});

let totalPortfolioCost = 0;

portfolio.forEach((holding) => {
    totalPortfolioCost += holding.shares * holding.averageCost;
});

const totalProfitLoss =
    totalPortfolioValue - totalPortfolioCost;

const totalProfitLossPercent =
    (totalProfitLoss / totalPortfolioCost) * 100;

console.log("Total Portfolio Cost:", totalPortfolioCost);
console.log("Total Profit/Loss:", totalProfitLoss);
console.log(
    "Total Profit/Loss Percent:",
    totalProfitLossPercent
);

console.log("Total Portfolio Value:", totalPortfolioValue);

const portfolioValueElement =
    document.getElementById("portfolio-value");

if (portfolioValueElement) {
    portfolioValueElement.textContent =
        "$" + totalPortfolioValue.toLocaleString();
}

console.log("DASH Portfolio Dashboard v0.3 loaded successfully.");
