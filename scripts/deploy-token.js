const hre = require('hardhat')
const ethers = hre.ethers;

async function deployENTR() {
    await hre.run('compile'); // We are compiling the contracts using subtask
    const [deployer] = await ethers.getSigners(); // We are getting the deployer

    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const ENTRToken = await ethers.getContractFactory("ENTR"); // 
    const enterToken = await ENTRToken.deploy();
    console.log(`Waiting for ENTRToken deployment...`);
    await enterToken.deployTransaction.wait(5);

    console.log(`ENTRToken Contract deployed. Address: `, enterToken.address);

    console.log(`Verifying ...`);
    await hre.run("verify:verify", {
        address: enterToken.address,
        constructorArguments: [],
        contract: "contracts/ENTR.sol:ENTR",
    });

    console.log('Done!');
}

module.exports = deployENTR;