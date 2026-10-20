import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.x1wealth.com/mcp",
  description: "Read a household's financial records, documents, and entities.",
  auth: connect("mcp.x1wealth.com/" + process.env.VERCEL_PROJECT_ID),
});
