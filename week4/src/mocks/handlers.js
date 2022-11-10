import { rest } from "msw";

export const handlers = [
  rest.get("/user/team", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: ["YOOJS1205", "henization", "iamphj3", "seobbang"],
      })
    );
  }),
];
