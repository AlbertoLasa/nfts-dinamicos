const Heroes = artifacts.require("Heroes");

module.exports = function (deployer) {
  deployer.deploy(Heroes);
};
