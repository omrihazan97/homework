let black_white = [];
for (let j = 0; j < 8; j++) {
  let row = [];
  for (let i = 0; i < 9; i++) {
    if (i % 2) {
      row.push("זוגי-לבן");
    } else {
      row.push("אי זוגי-שחור");
    }
  }
  black_white.push(row);
}
console.log(black_white);
