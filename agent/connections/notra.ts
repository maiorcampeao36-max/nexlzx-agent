import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.usenotra.com/mcp",
  description: "Track how your brand appears in AI search and improve it.",
  auth: connect("mcp.usenotra.com/" + process.env.VERCEL_PROJECT_ID),
});
