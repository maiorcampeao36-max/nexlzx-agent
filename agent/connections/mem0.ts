import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.mem0.ai/mcp",
  description: "Give AI agents persistent memory.",
  auth: connect("mcp.mem0.ai/" + process.env.VERCEL_PROJECT_ID),
});
