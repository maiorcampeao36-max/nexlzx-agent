import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.mixpanel.com/mcp",
  description: "Analyze product usage and user behavior.",
  auth: connect("mcp.mixpanel.com/" + process.env.VERCEL_PROJECT_ID),
});
