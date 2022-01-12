const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

const superbowlWin = (record) => {
    const winner = record.find(record => record.result === "W");
    return !!winner ? winner.year : undefined;
}
