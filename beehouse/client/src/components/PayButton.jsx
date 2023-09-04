import React, { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { PaystackButton } from "react-paystack";

export default function PayButton({
  updatedStep,
  status,
  buttonAvailability,
  application,
}) {
  const publicKey = "pk_test_e3fd9414aa9c96ebb8ed9e2993d3e78b79a5a35e";
  console.log(application);
  const [price, setPrice] = useState(application.jobId.price);
  const amount = price * 100; // Remember, set in kobo!
  const componentProps = {
    email: application.modelUserId.email,
    amount,
    currency: "GHS",
    metadata: {
      name,
    },
    publicKey,
    text: "Momo pay",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  return (
    <div
      className={`rounded p-2 text-sm ${
        buttonAvailability || status === "Approved"
          ? "bg-yellow-500 text-white font-bold flex items-center cursor-pointer hover:bg-purple-600"
          : "bg-gray-200 text-gray-400 hover:cursor-not-allowed flex items-center"
      }`}
      disabled={updatedStep !== "Approved" || buttonAvailability}
    >
      <PaystackButton {...componentProps}>
        {" "}
        <GiTakeMyMoney className="mr-1 text-xl" />
      </PaystackButton>
    </div>
  );
}
