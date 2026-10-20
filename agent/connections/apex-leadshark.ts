import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://apex.leadshark.io/mcp",
  description: "Run LinkedIn research, engagement, and messaging with approval gates and logs.",
  auth: connect("apex.leadshark.io/" + process.env.VERCEL_PROJECT_ID),
});
