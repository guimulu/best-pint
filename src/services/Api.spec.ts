import { getAll, getById, getFavorites } from "./Api";
import mock from "../mock/response.json";

describe("Test getAll fetch", () => {
  test("should return the mock", () => {
    const response = { json: jest.fn().mockResolvedValueOnce(mock) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getAll(1).then((data) => {
      expect(data).toEqual(mock);
    });
  });
});

describe("Test getById fetch", () => {
  test("should return the mock", () => {
    const response = { json: jest.fn().mockResolvedValueOnce(mock) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getById("1").then((data) => {
      expect(data).toEqual(mock[0]);
    });
  });
});

describe("Test getFavorites fetch", () => {
  test("should return the mock", () => {
    const response = { json: jest.fn().mockResolvedValueOnce(mock) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getFavorites([1]).then((data) => {
      expect(data).toEqual(mock);
    });
  });
});
