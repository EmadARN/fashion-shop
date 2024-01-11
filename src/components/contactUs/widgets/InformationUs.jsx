import React from "react";
import SendTicket from "./SendTicket";
import CallUs from "./CallUs";

const InformationUs = () => {
  return (
    <section style={{ width: "100%" }}>
      <CallUs />
      <hr />
      <SendTicket />
    </section>
  );
};

export default InformationUs;
