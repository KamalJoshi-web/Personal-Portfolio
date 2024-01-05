import React from "react";
import ContactForm from "./ContactForm";
import { Heading, Paragraphs } from "../index";
import { motion } from "framer-motion";
import { slideInBottom } from "../../animations/animations";

const Contact = () => {
  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      whileInView="animate"
      className=" min-h-[85vh] mt-14 mb-10"
      id="contact"
    >
      <Heading className=" text-5xl py-5 text-center ">Get in Touch</Heading>
      <Paragraphs className=" text-center py-5">
        {" "}
        I'm just a click away! <br className=" max-md:hidden " /> for any
        business inquiries, project proposals, or just a friendly chat,{" "}
        <br className=" max-md:hidden " /> Let's discuss how we can work
        together to create something exceptional.
      </Paragraphs>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
