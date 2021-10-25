const hre = require('hardhat')
const ethers = hre.ethers;

async function deployFDT() {
    await hre.run('compile'); // We are compiling the contracts using subtask
    const [deployer] = await ethers.getSigners(); // We are getting the deployer

    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const FDTToken = await ethers.getContractFactory("FDT"); //
    const fdtToken = await FDTToken.deploy();
    console.log(`Waiting for FDTToken deployment...`);
    await fdtToken.deployTransaction.wait(5);

    console.log(`FDTToken Contract deployed. Address: `, fdtToken.address);

    console.log(`Verifying ...`);
    await hre.run("verify:verify", {
        address: fdtToken.address,
        constructorArguments: [],
        contract: "contracts/FDT.sol:FDT",
    });

    console.log('Done!');
}

module.exports = deployFDT;
