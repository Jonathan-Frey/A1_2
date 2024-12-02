import { helloWorld } from "../src/main";

test("should return correct string", () => {
  expect(helloWorld()).toBe("Hello, World!");
});
