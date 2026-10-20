import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.beehiiv.com/mcp",
  description: "Publish newsletters and manage subscribers and automations.",
  auth: connect("mcp.beehiiv.com/" + process.env.VERCEL_PROJECT_ID),
});
