import web3 from './web3.js'
import Factory from './build/CampaingFactory.json'



//0xFA19Dae26B94EaDaB98b1838Fc446Af7243F640
0x3C0Df36196d1316C87e72DbcdEa028499091F8Ec
export const factory = new web3.eth.Contract(
	Factory.abi,
	"0x3C0Df36196d1316C87e72DbcdEa028499091F8Ec"
);

