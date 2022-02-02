const {abi,evm} = require('./build/CampaingFactory.json');
const Web3     = require('web3');
const env 		= 	require('dotenv').config()

const HDWalletProvider = require("@truffle/hdwallet-provider");

const OPTIONS = {
	defaultBlock: "latest",
	transactionConfirmationBlocks: 1,
	transactionBlockTimeout: 5
  };

//UYSE YOUR OWN SEMANTIC
const provider = new HDWalletProvider(
		env.parsed.SEMANTIC,
		"https://rinkeby.infura.io/v3/1c9a83f2f28b493cba9b36fad7ce37a9"
			)

const web3 = new Web3(provider, null, OPTIONS);
let accounts = [];
let factory;
console.log("creating Contract...")
const create_contract = async () => {
	accounts = await web3.eth.getAccounts();
	console.log(accounts)
	factory =  new web3.eth.Contract(abi)
	factory = await factory.deploy({data: evm.bytecode.object})
	const gasprice = await web3.eth.getGasPrice()
	console.log("gas price: ",gasprice)
	try {
		factory =  await factory.send({ from: accounts[2], gas: '10000000' });
		console.log(`factory contract: ${factory.options.address}`)
	}
	catch (err){
		console.log(err);
	}
}
create_contract()

const testContract = async() => {


}
//contract-> 0x669b9698E04AfeD5543A02F53F9f3881EA9A5219
