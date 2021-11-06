const { expect, use } = require('chai')
const { ethers } = require('hardhat');
const { BigNumber } = require('bignumber.js')

use(require('chai-bignumber')())

describe('FDT', function () {
    let token

    const tokenName = 'FIAT DAO Token'
    const tokenSymbol = 'FDT'
    const mintTokens = new BigNumber(1_000_000_000 * Math.pow(10, 18));

    beforeEach(async function () {
        const Token = await ethers.getContractFactory('FDT')
        token = await Token.deploy()
        await token.deployed()
    })

    it('Deploys successfully', async function () {
        expect(token.address).to.not.equal(0)
    })

    it('Has correct name', async function () {
        expect(await token.name()).to.equal(tokenName)
    })

    it('Has correct symbol', async function () {
        expect(await token.symbol()).to.equal(tokenSymbol)
    })

    it('Mints 1BN tokens', async function () {
        const actual = new BigNumber((await token.totalSupply()).toString())

        expect(actual).to.be.bignumber.equal(mintTokens)
    })
})
