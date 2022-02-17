import {CsvFileReader} from "./CsvFileReader";
import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";

const reader = new MatchReader('./3.1 football.csv')
reader.read()
console.log("-------------");
console.log(reader.data);

//

let manUnitedWins = 0;

for(let match of reader.data){
    if(match[1] ==='Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    }else if(match[2] ==='Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    }
}

console.log('Man United win: ', manUnitedWins)
