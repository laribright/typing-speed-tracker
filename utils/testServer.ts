import "whatwg-fetch";
import { beforeAll, afterAll, afterEach } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { API_ENDPOINT, FAKE_API_RESPONSE } from "../constants/challenge";

const server = setupServer(
  rest.get(API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([FAKE_API_RESPONSE]));
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Request handler needed for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
