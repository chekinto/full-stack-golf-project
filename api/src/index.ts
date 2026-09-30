import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.get("/", (c) => {
  return c.json({
    message: "Health check passed",
    success: "ok",
  });
});

app.notFound((c) => {
  return c.text("Route not found", 404);
});

export default app;
