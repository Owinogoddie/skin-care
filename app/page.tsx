"use client";
import React from "react";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ServicesShowcase } from "@/components/services";
import { OurApproach } from "@/components/aproach";
import { TeamSection } from "@/components/teams";
import { Product } from "@/types";
import { AppointmentForm } from "@/components/appointment-form";
import { Grid } from "@/components/grid";
import { ProductCarousel } from "@/components/product-corousel";
import { SkincareQuiz } from "@/components/quiz";
import { TestimonialsCarousel } from "@/components/testimonials";
import { StatisticsSection } from "@/components/statistics";
import { BeforeAfterComparison } from "@/components/before-after";

const products: Product[] = [
  {
    id: "1",
    name: "Moisturizer",
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    name: "Serum",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    name: "Cleanser",
    image:
      "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    name: "Moisturizer",
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "5",
    name: "Serum",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "6",
    name: "Cleanser",
    image:
      "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "42",
    name: "Moisturizer",
    image:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "52",
    name: "Serum",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "62",
    name: "Cleanser",
    image:
      "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // Add more products as needed
];
const page = () => {
  return (
    <div className="">
    <Navbar />
    <Hero />
    <ServicesShowcase />
    <Grid />
    <OurApproach />
    <ProductCarousel products={products} />
    <SkincareQuiz />
    <TestimonialsCarousel />
    <StatisticsSection />
    {/* <BeforeAfterComparison /> */}
    <AppointmentForm />
    <TeamSection />
    <Footer />
  </div>

  );
};

export default page;
