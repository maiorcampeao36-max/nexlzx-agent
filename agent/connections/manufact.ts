import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.manufact.com/mcp",
  description: "Deploy and monitor MCP servers.",
  auth: connect("mcp.manufact.com/" + process.env.VERCEL_PROJECT_ID),
});
