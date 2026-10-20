import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.useinvent.com/mcp",
  description: "Read and reply to customer conversations across chat channels.",
  auth: connect("api.useinvent.com/" + process.env.VERCEL_PROJECT_ID),
});
