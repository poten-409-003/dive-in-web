"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </>
  );
};

export default Template;
