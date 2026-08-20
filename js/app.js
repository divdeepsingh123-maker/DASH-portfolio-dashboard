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
        : 0;
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
const totalPortfolioCostElement =
    document.getElementById("total-portfolio-cost");

if (totalPortfolioCostElement) {
    totalPortfolioCostElement.textContent =
        "$" + totalPortfolioCost.toLocaleString();
}
const totalPortfolioCostElement =
    document.getElementById("total-portfolio-cost");

if (totalPortfolioCostElement) {
    totalPortfolioCostElement.textContent =
        "$" + totalPortfolioCost.toLocaleString();
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
const holdingsContainer =
    document.getElementById("holdings-container");

if (holdingsContainer) {

    portfolio.forEach((holding) => {

        const holdingCost =
            holding.shares * holding.averageCost;

        const holdingMarketValue =
            holding.shares * holding.currentPrice;

        const holdingProfitLoss =
            holdingMarketValue - holdingCost;

        const holdingProfitLossPercent =
            holdingCost > 0
                ? (holdingProfitLoss / holdingCost) * 100
                : 0;

        const profitLossSign =
            holdingProfitLoss >= 0 ? "+" : "-";

        const percentSign =
            holdingProfitLossPercent >= 0 ? "+" : "";

        const performanceClass =
            holdingProfitLoss >= 0
                ? "positive"
                : "negative";

        const holdingCard =
            document.createElement("article");

        holdingCard.className =
            "card holding-card";

        holdingCard.innerHTML = `
            <span>${holding.symbol}</span>

            <strong>
                $${holdingMarketValue.toLocaleString()}
            </strong>

            <small>
                ${holding.shares} shares
            </small>

            <small>
                Avg Cost: $${holding.averageCost.toLocaleString()}
            </small>

            <small>
                Current Price: $${holding.currentPrice.toLocaleString()}
            </small>

            <small class="${performanceClass}">
                ${profitLossSign}$${Math.abs(holdingProfitLoss).toLocaleString()}
                (${percentSign}${holdingProfitLossPercent.toFixed(2)}%)
            </small>
        `;

        holdingsContainer.appendChild(holdingCard);

    });
const holdingsContainer =
    document.getElementById("holdings-container");

if (holdingsContainer) {

    portfolio.forEach((holding) => {

        const holdingCost =
            holding.shares * holding.averageCost;

        const holdingMarketValue =
            holding.shares * holding.currentPrice;

        const holdingProfitLoss =
            holdingMarketValue - holdingCost;

        const holdingProfitLossPercent =
            holdingCost > 0
                ? (holdingProfitLoss / holdingCost) * 100
                : 0;

        const performanceClass =
            holdingProfitLoss >= 0 ? "positive" : "negative";

        const sign =
            holdingProfitLoss >= 0 ? "+" : "-";

        const holdingCard =
            document.createElement("article");

        holdingCard.className = "card holding-card";

        holdingCard.innerHTML = `
            <span>${holding.symbol}</span>

            <strong>
                $${holdingMarketValue.toLocaleString()}
            </strong>

            <small>${holding.shares} shares</small>

            <small>
                Avg Cost: $${holding.averageCost}
            </small>

            <small>
                Current Price: $${holding.currentPrice}
            </small>

            <small class="${performanceClass}">
                ${sign}$${Math.abs(holdingProfitLoss).toLocaleString()}
                (${holdingProfitLossPercent >= 0 ? "+" : ""}${holdingProfitLossPercent.toFixed(2)}%)
            </small>
        `;

        holdingsContainer.appendChild(holdingCard);
    });
}
}
console.log("DASH Portfolio Dashboard v0.4 loaded successfully.");
