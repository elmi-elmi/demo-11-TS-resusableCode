import {MatchDate} from "./MatchData";

export interface Analyzer{
    run(matches:MatchDate[]):string;
}

export interface OutputTarget{
    print(report:string):void;
}

export class Summary{
    constructor(public analyzer:Analyzer, public outputTarget:OutputTarget) {}


    buildAndPrintReport(matches:MatchDate[]){
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}