import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.bulkpublish.com/mcp",
  description: "Schedule and publish social media posts across networks.",
  auth: connect("mcp.bulkpublish.com/" + process.env.VERCEL_PROJECT_ID),
});
