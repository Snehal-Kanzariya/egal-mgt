import { ExpandMoreIcon } from "@mui/icons-material";
import { Accordion, AccordionSummary } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <>
      hello
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        ></AccordionSummary>
      </Accordion>
    </>
  );
};

export default Sidebar;
