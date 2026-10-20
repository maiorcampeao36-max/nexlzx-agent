import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.prismic.io/mcp",
  description: "Manage content in your Prismic repositories.",
  auth: connect("mcp.prismic.io/" + process.env.VERCEL_PROJECT_ID),
});
