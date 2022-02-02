import web3 from './web3.js'
import Factory from './build/CampaingFactory.json'




export const factory = new web3.eth.Contract(
	Factory.abi,
	"0x669b9698E04AfeD5543A02F53F9f3881EA9A5219"
);

