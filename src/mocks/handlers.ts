import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    const userInfo: any = req.body;
    const { username, password } = userInfo;
    if (username === "John" && password === "1111") {
      return res(
        ctx.status(200),
        ctx.set({ Authorization: "Bearer ohmytoken" }),
        ctx.json({
          code: 200,
          msg: "成功",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        code: 30001,
        msg: "帳號不存在或密碼錯誤，請重新輸入。",
      })
    );
  }),
];
