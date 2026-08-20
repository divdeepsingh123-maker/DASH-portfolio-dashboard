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
  totalPortfolioCost > 0
    ? (totalProfitLoss / totalPortfolioCost) * 100
    : 0;

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

const totalProfitLossElement =
    document.getElementById("total-profit-loss");

const totalProfitLossPercentElement =
    document.getElementById(
        "total-profit-loss-percent"
    );

if (totalProfitLossElement) {
    const profitLossSign =
        totalProfitLoss >= 0 ? "+" : "-";

    totalProfitLossElement.textContent =
        profitLossSign +
        "$" +
        Math.abs(totalProfitLoss).toLocaleString();

    totalProfitLossElement.className =
        totalProfitLoss >= 0
            ? "positive"
            : "negative";
}

if (totalProfitLossPercentElement) {
    const percentSign =
        totalProfitLossPercent >= 0 ? "+" : "";

    totalProfitLossPercentElement.textContent =
        percentSign +
        totalProfitLossPercent.toFixed(2) +
        "%";

    totalProfitLossPercentElement.className =
        totalProfitLossPercent >= 0
            ? "positive"
            : "negative";
}

console.log("DASH Portfolio Dashboard v0.4 loaded successfully.");
