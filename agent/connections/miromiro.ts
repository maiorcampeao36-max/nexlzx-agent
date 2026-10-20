import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://miromiro.app/mcp",
  description: "Extract code, design tokens, brand assets, and media from live websites.",
  auth: connect("miromiro.app/" + process.env.VERCEL_PROJECT_ID),
});
