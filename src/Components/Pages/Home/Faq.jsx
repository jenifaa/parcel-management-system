import React from "react";
import img from "../../../assets/images/FAQs-rafiki (1).png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const Faq = () => {
  return (
    <div className=" lg:overflow-y-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16 bg-gray-100 lg:h-[600px]">
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt="FAQ Illustration"
            className="rounded-lg shadow-lg object-cover w-full h-[450px]"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="">
            <h2 className="mb-5 font-bold text-2xl text-green-800">Some Common Questions...</h2>
            <div className="border  rounded-lg overflow-hidden shadow-sm mb-4">
              <Accordion className="bg-gray-200 px-5" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    What is the purpose of this platform?
                  </AccordionTrigger>
                  <AccordionContent>
                    This platform helps users manage parcel deliveries
                    efficiently, connecting users, delivery personnel, and
                    admins through a seamless interface.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border  rounded-lg overflow-hidden shadow-sm mb-4">
              <Accordion className="bg-gray-200 px-5" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    How do I track my parcel?
                  </AccordionTrigger>
                  <AccordionContent>
                    Once your delivery request is created, you can track your
                    parcel's status in the "My Deliveries" section of your
                    account.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border  rounded-lg overflow-hidden shadow-sm mb-4">
              <Accordion className="bg-gray-200 px-5" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    How do I contact customer support?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reach out to our support team via the "Contact Us"
                    page or by emailing support@example.com.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border  rounded-lg overflow-hidden shadow-sm mb-4">
              <Accordion className="bg-gray-200 px-5" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    Can I cancel or reschedule my delivery?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel or reschedule your delivery through the
                    "My Deliveries" section, as long as the delivery is not
                    already in progress.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border  rounded-lg overflow-hidden shadow-sm mb-4">
              <Accordion className="bg-gray-200 px-5" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, PayPal, and bank
                    transfers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
