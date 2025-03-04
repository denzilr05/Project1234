const randomNodeCode = () => {
  const numbers = [1, 2, 3, 4, 5];
  const letters = ["a", "b", "c", "d", "e"];
  const symbols = ["+", "-", "*", "/", "%"];
  const operator = Math.floor(Math.random() * symbols.length);
  const leftOperand = Math.floor(Math.random() * numbers.length);
  const rightOperand = Math.floor(Math.random() * numbers.length);
  return `${numbers[leftOperand]} ${symbols[operator]} ${numbers[rightOperand]}`;
};
