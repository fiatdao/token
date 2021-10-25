require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const { task } = require('hardhat/config');

task("deploy-token", "Deploys FIAT Token Vault")
  .setAction(async ({ }, hre, runSuper) => {
    const deploy = require("./scripts/deploy-token");
    await deploy();
  });

const config = require('./config');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: config.networks,
  etherscan: config.etherscan
};
