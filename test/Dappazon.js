const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

// STEP -1 ---------------------------
describe("Dappazon", () => {
  let dappazon
  let deployer, buyer

// STEP -3 ---------------------------
    beforeEach(async () => {
      // Setup accounts
      [deployer, buyer] = await ethers.getSigners() // we don't need to run hardhat node(local blockchain) to execute this specific code.

      // Deploy contract
      const Dappazon = await ethers.getContractFactory("Dappazon")
      dappazon = await Dappazon.deploy()
    })

// STEP -4 ---------------------------
    describe("Deployment", () => {
      it("Sets the owner", async () => {
        expect(await dappazon.owner()).to.equal(deployer.address) // 1st address of ethers.getSigners() is deployer of contract by default
      })
    })
})
