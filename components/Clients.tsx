"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className={`${
                  company.id === 3 ? "md:w-20 w-10" : "md:w-40 w-20"
                }`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Clients;
