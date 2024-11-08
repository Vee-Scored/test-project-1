import React from "react";
import ContactUsOfficeHeard from "./ContactUsOfficeHeard";
import ContactUsOfficeImg from "./ContactUsOfficeImg";
import ContactUsOfficeText from "./ContactUsOfficeText";

const ContactUsOffice = () => {
  const officeAddress = [
    {
      id: 1,
      address: " Apt. 989 Jl. Gatot Soebroto No. 54, Bandar Lampung, KI 04867.",
      country: "Indea",
      addressWidth: "90%",
    },
    {
      id: 2,
      address: "4262 Hane Spring, North Joannieshire, AR 57693-7102.",
      country: "USA",
      addressWidth: "80%",
    },
  ];
  return (
    <div className=" mt-20">
      <ContactUsOfficeHeard />
      <div className=" ">
        <div className=" gap-5 lg:gap-0 lg:w-[1220px] lg:h-[507px] flex flex-col lg:flex-row justify-between items-center mt-10 mx-auto">
          <div className=" flex gap-3 lg:gap-0 flex-col justify-evenly items-center lg:h-full">
            {officeAddress.map((office) => (
              <ContactUsOfficeText
                key={office.id}
                addressWidth={office.addressWidth}
                country={office.country}
                address={office.address}
              />
            ))}
          </div>
          <div className="lg:w-[625px] h-full  ">
            <ContactUsOfficeImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsOffice;
