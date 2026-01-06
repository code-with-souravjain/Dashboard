import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../../../utilities/Button";
import FaqForm from "../../../components/FaqForm";
import { useState } from "react";

const Faq = () => {
  const [faqopen, setFaqOpen] = useState(false);

  // FAQ LIST STATE
  const [faqs, setFaqs] = useState([
    {
      title: "Accordion 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  //  ADD FAQ HANDLER
  const handleAddFaq = (newFaq) => {
    setFaqs([...faqs, newFaq]);
    setFaqOpen(false);
  };

  return (
    <div className="px-4 h-[550px]">
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-3">
        <h1 className="text-3xl text-gray-800 mb-5">
          Our FAQ's are below :
        </h1>

        <Button Btntext="Add Faq" onClick={() => setFaqOpen(true)} />
      </div>

      {/* Render Accordions */}
      {faqs.map((faq, index) => (
        <Accordion key={index} className="mb-3">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">
              <div className="font-semibold">
                {faq.title}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.description}
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Popup */}
      {faqopen && (
        <FaqForm
          onClose={() => setFaqOpen(false)}
          onSubmit={handleAddFaq}
        />
      )}
    </div>
  );
};

export default Faq;
