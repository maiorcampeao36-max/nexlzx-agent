import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.withruntime.com/mcp",
  description: "Run code in Linux sandboxes for AI agents.",
  auth: connect("api.withruntime.com/" + process.env.VERCEL_PROJECT_ID),
});
