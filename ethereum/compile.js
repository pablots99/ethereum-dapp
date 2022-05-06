const path =  require('path')
const fs   =  require('fs-extra')
const solc  = require('solc');


//delete build folder if exists
const buildpath = path.resolve(__dirname,'build');
fs.removeSync(buildpath);

//get absolute path
const inbox_path = path.resolve(__dirname,'contracts','campaing.sol');

//read file
const source = fs.readFileSync(inbox_path,'utf-8');



//compile params
var input = {
    language: 'Solidity',
    sources: {
        'campaing.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

console.log("Compiling Contracts...");

const comp_file  = solc.compile(JSON.stringify(input))
const contracts = JSON.parse(comp_file).contracts["campaing.sol"];
fs.ensureDirSync(buildpath);
for (let c in contracts) {
	fs.outputJsonSync(buildpath + '/' + c + '.json', contracts[c])
	console.log("-> Contract: "+ c + " compiled!");
}
