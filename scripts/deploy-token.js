const hre = require('hardhat')
const ethers = hre.ethers;

async function deployFIAT() {
    await hre.run('compile'); // We are compiling the contracts using subtask
    const [deployer] = await ethers.getSigners(); // We are getting the deployer

    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const FIATToken = await ethers.getContractFactory("FIAT"); //
    const fiatToken = await FIATToken.deploy();
    console.log(`Waiting for FIATToken deployment...`);
    await fiatToken.deployTransaction.wait(5);

    console.log(`FIATToken Contract deployed. Address: `, fiatToken.address);

    console.log(`Verifying ...`);
    await hre.run("verify:verify", {
        address: fiatToken.address,
        constructorArguments: [],
        contract: "contracts/FIAT.sol:FIAT",
    });

    console.log('Done!');
}

module.exports = deployFIAT;
