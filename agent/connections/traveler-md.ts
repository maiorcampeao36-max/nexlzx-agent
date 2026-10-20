import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.traveler.md/mcp",
  description: "Save and recall your travel preferences and trips for trip planning.",
  auth: connect("mcp.traveler.md/" + process.env.VERCEL_PROJECT_ID),
});
