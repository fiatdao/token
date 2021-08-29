module.exports = {
    networks: {
        hardhat: {
        },
        coverage: {
            url: 'http://localhost:8555',
        },
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/YOUR-INFURA-API-KEY',
            chainId: 4,
            accounts: ["PK"],
            gas: 'auto',
            gasPrice: 1000000000, // 1 gwei
        },
        mainnet: {
            url: 'https://mainnet.infura.io/v3/YOUR-INFURA-API-KEY',
            chainID: 1,
            accounts: ["PK"]
        },
    },
    // Use to verify contracts on Etherscan
    // https://buidler.dev/plugins/nomiclabs-buidler-etherscan.html
    etherscan: {
        apiKey: 'YOUR-ETHERSCAN-API-KEY',
    },
}