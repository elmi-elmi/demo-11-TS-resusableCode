import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import {Summary} from "./Summary";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {HtmlReport} from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader('./3.1 football.csv')
const reader = new MatchReader(csvFileReader)
reader.load()
console.log("-------------");


const summaryConsole = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summaryConsole.buildAndPrintReport(reader.matches)
//
const summaryHtml = new Summary(new WinsAnalysis('Man United'), new HtmlReport())

summaryHtml.buildAndPrintReport(reader.matches)


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
