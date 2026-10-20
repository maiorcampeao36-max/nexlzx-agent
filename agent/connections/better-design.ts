import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://better-design.com/api/mcp",
  description: "Give coding agents design systems, UI principles, icons, and UI review.",
  auth: connect("better-design.com/" + process.env.VERCEL_PROJECT_ID),
});
