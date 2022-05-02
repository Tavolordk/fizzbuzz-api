const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

// Clase anterior con la que obtenemos los explorers
const explorers = Reader.readJsonFile("explorer.json");

// Aplicación del ExplorerService sobre la lista de explorers
const explorersInNode=ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(explorersInNode.map((e)=>{return e}));
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
//console.log(FizzbuzzService.applyValidationInExplorer(explorer1));
//console.log(FizzbuzzService.applyValidationInExplorer(explorer3));
//console.log(FizzbuzzService.applyValidationInExplorer(explorer5));
//console.log(FizzbuzzService.applyValidationInExplorer(explorer15));
const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzBuzzTrick);