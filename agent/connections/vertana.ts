import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.vertana.ai/mcp",
  description: "Check a local business's Google listing and read its performance and reviews.",
  auth: connect("mcp.vertana.ai/" + process.env.VERCEL_PROJECT_ID),
});
