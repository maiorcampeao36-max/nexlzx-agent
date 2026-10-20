import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.kvickd.com/mcp",
  description: "Run Swedish company bookkeeping: vouchers, invoices, VAT, payroll, and year-end reports.",
  auth: connect("api.kvickd.com/" + process.env.VERCEL_PROJECT_ID),
});
