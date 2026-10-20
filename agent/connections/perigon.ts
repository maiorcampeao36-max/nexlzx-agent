import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.perigon.io/v1/mcp",
  description: "Retrieve structured news and web content data.",
  auth: connect("mcp.perigon.io/" + process.env.VERCEL_PROJECT_ID),
});
