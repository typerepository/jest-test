const axios = require('axios');

const fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return results;
}

const forEach = (items, callback) => {
  for(let i = 0;i < items.length;i++) {
    callback(items[i]);
  }
}

it("mock callback", () => {
  const mockCalledback = jest.fn(x => 42 + x);

  forEach([0,1], mockCalledback);

  expect(mockCalledback.mock.calls.length).toBe(2);

  expect(mockCalledback.mock.calls[0][0]).toBe(0);

  expect(mockCalledback.mock.calls[1][0]).toBe(1);

  expect(mockCalledback.mock.results[0].value).toBe(42);

  expect(mockCalledback.mock.results[1].value).toBe(43);
})

it("mock return", () => {
  const mock = jest.fn();

  mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

  const results = mock();
  const result2 = mock();
  const result3 = mock();

  expect(results).toBe(true);
  expect(result2).toBe(false);
  expect(result3).toBe("Hello");
})

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Get 1M Subs"
    }
  });
  const results = await fetchData(1);

  expect(results.data.todo).toBe("Get 1M Subs");
})
