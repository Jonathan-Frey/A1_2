import { ConsoleUiInput } from "../src/ConsoleUiInput";
import { stdin } from "node:process";

describe("ConsoleUiInput()", () => {
  it("should be defined", () => {
    expect(ConsoleUiInput).toBeDefined();
  });

  it("should not thor an exception when instatiated", () => {
    expect(() => new ConsoleUiInput(stdin)).not.toThrow();
  });

  describe("requestInput()", () => {
    it("should be defined", () => {
      const sut = new ConsoleUiInput(stdin);
      expect(sut.requestInput).toBeDefined();
    });

    it("should return a string", async () => {
      class MockReadableStream implements NodeJS.ReadableStream {
        readable = true;
        read(size?: number) {
          return "test";
        }
        setEncoding(encoding: string) {
          return this;
        }
        pause() {
          return this;
        }
        resume() {
          return this;
        }
        isPaused() {
          return false;
        }
        unpipe(destination?: NodeJS.WritableStream) {
          return this;
        }
        unshift(chunk: any, encoding?: BufferEncoding) {}
        wrap(oldStream: any) {
          return this;
        }
        push(chunk: any, encoding?: string) {
          return true;
        }
        _destroy(
          error: Error | null,
          callback: (error?: Error | null) => void
        ) {
          callback(error);
        }
        _read(size: number) {}
        pipe<T extends NodeJS.WritableStream>(
          destination: T,
          options?: { end?: boolean }
        ): T {
          return destination;
        }
        on(event: string | symbol, listener: (...args: any[]) => void) {
          return this;
        }
        addListener(
          event: string | symbol,
          listener: (...args: any[]) => void
        ) {
          return this;
        }
        once(event: string | symbol, listener: (...args: any[]) => void) {
          return this;
        }
        removeListener(
          event: string | symbol,
          listener: (...args: any[]) => void
        ) {
          return this;
        }
        off(event: string | symbol, listener: (...args: any[]) => void) {
          return this;
        }
        removeAllListeners(event?: string | symbol) {
          return this;
        }
        setMaxListeners(n: number) {
          return this;
        }
        getMaxListeners() {
          return 0;
        }
        listeners(event: string | symbol) {
          return [];
        }
        rawListeners(event: string | symbol) {
          return [];
        }
        emit(event: string | symbol, ...args: any[]) {
          return false;
        }
        listenerCount(type: string | symbol) {
          return 0;
        }
        prependListener(
          event: string | symbol,
          listener: (...args: any[]) => void
        ) {
          return this;
        }
        prependOnceListener(
          event: string | symbol,
          listener: (...args: any[]) => void
        ) {
          return this;
        }
        eventNames() {
          return [];
        }
        [Symbol.asyncIterator](): NodeJS.AsyncIterator<
          string | Buffer,
          any,
          any
        > {
          return {
            next: async () => ({ done: true, value: "" }),
            return: async () => ({ done: true, value: "" }),
            throw: async (error) => {
              throw error;
            },
            [Symbol.asyncIterator]() {
              return this;
            },
          };
        }
      }

      const sut = new ConsoleUiInput(new MockReadableStream());
      const expected = "string";
      const actual = typeof (await sut.requestInput());

      expect(actual).toBe(expected);
    });
  });
});
