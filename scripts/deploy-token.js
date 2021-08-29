const hre = require("hardhat");

async function main() {
    const entrToken = await hre.ethers.getContractFactory('ENTR')
    const token = await entrToken.deploy()
    await token.deployed()
    console.log('ENTR Token deployed to:', token.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })