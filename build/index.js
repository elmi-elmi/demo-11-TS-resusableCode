"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader('./3.1 football.csv');
const reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
console.log("-------------");
const summaryConsole = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summaryConsole.buildAndPrintReport(reader.matches);
//
const summaryHtml = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summaryHtml.buildAndPrintReport(reader.matches);
// let manUnitedWins = 0;
//
// for(let match of reader.matches){
//     if(match[1] ==='Man United' && match[5] === MatchResult.HomeWin){
//         manUnitedWins++
//     }else if(match[2] ==='Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++
//     }
// }
//
// console.log('Man United win: ', manUnitedWins)
