import './CustomAccordion.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomAccordion({ item }) {
  return (
    <Accordion className="custom-accordion">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h3 className="custom-accordion__question">{item.question}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <p className="custom-accordion__answer">{item.answer}</p>
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
