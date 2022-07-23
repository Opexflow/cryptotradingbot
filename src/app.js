const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: process.env.APIKEY || 'YOUR_API_KEY',
    APISECRET: process.env.APISECRET || 'YOUR_API_SECRET',
});

(async () => {
    console.info(await binance.futuresPrices()); // eslint-disable-line no-console
    console.info(await binance.futuresCandles('TRXUSDT', '1m')); // eslint-disable-line no-console

    binance.prevDay(false, (error, prevDay) => {
        for (const obj of prevDay) {
            const symbol = obj.symbol;

            console.info(`${symbol} volume: ${obj.volume} change: ${obj.priceChangePercent}%`); // eslint-disable-line no-console
        }
    });
})();
