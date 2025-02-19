import React from "react";
import img from "../../../assets/images/Shrug-pana.png";
import img2 from "../../../assets/images/parcelBox.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const Faq = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat mt-10 "
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10  p-8 lg:p-16 bg-black/60">
        <div className="  ">
          <img
            src={img}
            alt="FAQ Illustration"
            className="object-cover w-full md:w-[450px] rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mb-5 font-bold text-5xl text-white font">
            Some Common Questions...
          </h2>
          <div className="border dark:text-black rounded-lg overflow-hidden shadow-sm mb-4">
            <Accordion className="bg-gray-50 px-5" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the purpose of this platform?
                </AccordionTrigger>
                <AccordionContent>
                  This platform helps users manage parcel deliveries
                  efficiently, connecting users, delivery personnel, and admins
                  through a seamless interface.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="border dark:text-black rounded-lg overflow-hidden shadow-sm mb-4">
            <Accordion className="bg-gray-50 px-5" type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I track my parcel?</AccordionTrigger>
                <AccordionContent>
                  Once your delivery request is created, you can track your
                  parcel's status in the "My Deliveries" section of your
                  account.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="border dark:text-black rounded-lg overflow-hidden shadow-sm mb-4">
            <Accordion className="bg-gray-50 px-5" type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I contact customer support?
                </AccordionTrigger>
                <AccordionContent>
                  You can reach out to our support team via the "Contact Us"
                  page or by emailing support@example.com.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="border dark:text-black rounded-lg overflow-hidden shadow-sm mb-4">
            <Accordion className="bg-gray-50 px-5" type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>
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
          <div className="border dark:text-black rounded-lg overflow-hidden shadow-sm mb-4">
            <Accordion className="bg-gray-50 px-5" type="single" collapsible>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and bank transfers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
