import {MatchDate} from "./MatchData";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {HtmlReport} from "./reportTargets/HtmlReport";

export interface Analyzer{
    run(matches:MatchDate[]):string;
}

export interface OutputTarget{
    print(report:string):void;
}

export class Summary{
    constructor(public analyzer:Analyzer, public outputTarget:OutputTarget) {}

    static winsAnalysisWithHtmlReport(team:string):Summary{
        return new Summary(new WinsAnalysis(team), new HtmlReport())
    }

    static winsAnalysisWithConsoleReport(team:string):Summary{
        return new Summary(new WinsAnalysis(team), new ConsoleReport())
    }





    buildAndPrintReport(matches:MatchDate[]){
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}