//https://eth-ropsten.alchemyapi.io/v2/Mb33c4jyBqpD6iykNi9yw_VHzwN1aPxU


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Mb33c4jyBqpD6iykNi9yw_VHzwN1aPxU',
      accounts: ['e1892b0079d0a3db085e22a7623ff706279733dbcfc1708e93a239d3e16a3d49'],
    },
  },
};

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };
