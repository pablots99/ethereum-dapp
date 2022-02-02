
import Web3 from "web3";
const HDWalletProvider = require("@truffle/hdwallet-provider");

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
 const provider = new HDWalletProvider(
		process.env.SEMANTIC,
		"https://rinkeby.infura.io/v3/1c9a83f2f28b493cba9b36fad7ce37a9"
)
  web3 = new Web3(provider);
}

export default web3;
