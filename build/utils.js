"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const dateSplit = date.split("/").map((d) => parseInt(d));
    return new Date(dateSplit[0], dateSplit[1], dateSplit[2]);
};
exports.dateStringToDate = dateStringToDate;
