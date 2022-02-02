import web3 from './web3.js'
import Factory from './build/CampaingFactory.json'




export const factory = new web3.eth.Contract(
	Factory.abi,
	"0xFA19Dae26B94EaDaB98b1838Fc446Af7243F6400"
);

