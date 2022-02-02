const ganache  = require('ganache-cli')
const Web3 = require('web3')
const factory = require('../ethereum/build/CampaingFactory.json')
const campaing = require('../ethereum/build/Campaing.json')



const OPTIONS = {
	defaultBlock: "latest",
	transactionConfirmationBlocks: 1,
	transactionBlockTimeout: 5
  };

const web3 =  new Web3(ganache.provider(),null,OPTIONS);

let accounts = [];
let contractAddress;
let campain_contract;
let campaing_address;
let factory_contract;


const create_contract = async() => {
	accounts  = await web3.eth.getAccounts();
	factory_contract = new web3.eth.Contract(factory.abi);
	factory_contract =  factory_contract.deploy({data: factory.evm.bytecode.object})
	factory_contract = await  factory_contract.send({from: accounts[0], gas: '3000000'});
	campain_contract = await factory_contract.methods.createCampaing('100').send({from:accounts[0], gas: '3000000'})
	if(campain_contract.status)
		console.log('New Campaing created')
	campaing_address = await factory_contract.methods.getCampaings().call();
	console.log(campaing_address)
	console.log(campaing.abi)
	campain_contract = await new web3.eth.Contract(campaing.abi,campaing_address[0]);
}


create_contract();
