import ContractSteps from "@/components/en/contract/ContractSteps";
import React from "react";

const contractLayout = ({ children }) => {
  return (
    <>
      <ContractSteps />
      {children}
    </>
  );
};

export default contractLayout;
