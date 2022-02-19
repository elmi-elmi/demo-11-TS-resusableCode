import fs from "fs";
import { dateStringToDate } from "../utils";
import {MatchResult} from "../MatchResult";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row:string): string[] => row.split(","))
      .map(this.mapRow);
  }

  abstract mapRow(row:string[]):T;
}
