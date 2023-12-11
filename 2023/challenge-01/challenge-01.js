// 60 puntos
function findFirstRepeated(gifts) {
  let array = [];
  let found = -1;
  let i = 0;

  while (i < gifts.length && found < 0) {
    if (array.includes(gifts[i])) {
      found = gifts[i];
    } else {
      array.push(gifts[i]);
      i++;
    }
  }

  return found;
}

// 160 puntos
function findFirstRepeated(gifts) {
  let array = [];

  for (const gift of gifts) {
    if (array.includes(gift)) return gift;
    array.push(gift);
  }

  return -1;
}
