import calc from "../../calculator"

test('adds 1 + 2 to equal 3', () => {
  expect(calc(1, 2, 'add')).toBe(3);
});

test('substracts 3 - 2 to equal 1', () => {
  expect(calc(3, 2, 'subs')).toBe(1);
});
