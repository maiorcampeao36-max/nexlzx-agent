import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.todofor.ai/mcp",
  description: "Start agent tasks, send follow-ups, and check status and results in a shared workspace.",
  auth: connect("api.todofor.ai/" + process.env.VERCEL_PROJECT_ID),
});
