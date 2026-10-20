import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.seodata.dev/mcp/auth",
  description: "Look up Google keyword search volume, CPC, competition, and similar keywords.",
  auth: connect("mcp.seodata.dev/" + process.env.VERCEL_PROJECT_ID),
});
