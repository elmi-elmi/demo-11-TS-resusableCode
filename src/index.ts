import fs from "fs";

const matches = fs
  .readFileSync("./3.1 football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row): string[] => row.split(","));

console.log("-------------");
console.log(matches);
//

let manUnitedWins = 0;
enum MatchResult{
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}
for(let match of matches){
    if(match[1] ==='Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    }else if(match[2] ==='Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    }
}

console.log('Man United win: ', manUnitedWins)
