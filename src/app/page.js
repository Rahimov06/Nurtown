"use client"

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField } from "@mui/material";
import Link from "next/link";
import CardSwiper from "./component/cardswiper";
import { useState } from "react";
import AboutCompany from "./component/aboutcompony";
import Tasksection from "./component/tasksection";
import Project from "./component/project";
import Contact from "./component/contact";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setShowModal(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "",
      message: ""
    });
  };

  return (
    <>
      <CardSwiper />

      <AboutCompany />

      <Tasksection />

      <Project />

      <Contact />


    </>
  );
}
