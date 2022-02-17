export const dateStringToDate = (date: string): Date => {
  const dateSplit: number[] = date.split("/").map((d:string) => parseInt(d));
  return new Date(dateSplit[0], dateSplit[1], dateSplit[2]);
};
