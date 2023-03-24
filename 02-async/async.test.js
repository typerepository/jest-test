const fetchData = require('./async');

it("should return correct todo", () => {
  const todo = fetchData(1).then(todo => {
    expect(todo.data.id).toBe(1);
  });
})

it("should return correct todo 2", async () => {
  const todo = await fetchData(1);
  expect(todo.data.id).toBe(1);
})
