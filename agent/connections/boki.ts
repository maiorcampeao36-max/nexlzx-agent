import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://app.boki.io",
  description: "Run marketing research, content, and distribution with AI agents.",
  auth: connect("app.boki.io/" + process.env.VERCEL_PROJECT_ID),
});
