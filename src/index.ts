import fs from "fs";

const matches = fs
  .readFileSync("3.1 football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row): string[] => row.split(","));

console.log("-------------");
console.log(matches);
