let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = Number(prompt(`猜猜神秘數字！請輸入${n1}~${n2}之間的數字：`));

  if (guess < n1 || guess > n2) {
    alert(`無效！請重新猜測一個數字！`);
    continue;
  }

  if (guess == answer) {
    alert(`恭喜你猜中！神秘數字是${answer}號！`);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
