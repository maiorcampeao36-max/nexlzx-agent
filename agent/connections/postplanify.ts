import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.postplanify.com/api/mcp",
  description: "Schedule and publish social posts, read analytics, and reply to comments.",
  auth: connect("api.postplanify.com/" + process.env.VERCEL_PROJECT_ID),
});
