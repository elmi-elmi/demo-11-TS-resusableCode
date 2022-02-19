import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import {Summary} from "./Summary";

const csvFileReader = new CsvFileReader('./3.1 football.csv')
const reader = new MatchReader(csvFileReader)
reader.load()
console.log("-------------");


const summaryConsole = Summary.winsAnalysisWithConsoleReport('Man United')
summaryConsole.buildAndPrintReport(reader.matches)
const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United');

summaryHtml.buildAndPrintReport(reader.matches)


