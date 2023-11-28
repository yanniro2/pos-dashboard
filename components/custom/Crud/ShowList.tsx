// Import React and the ShowLabel component
import React from "react";
import ShowLabel from "../Sub/ShowLabel";
import ShowSummary from "../Sub/ShowSummary";

const labels = [
  { title: "discount", value: 5 },
  { title: "coupon", value: 5 },
  { title: "gift card", value: 5 },
  { title: "voucher", value: 5 },
  { title: "discount", value: 5 },
  { title: "coupon", value: 5 },
  { title: "gift card", value: 5 },
  { title: "voucher", value: 5 },
  { title: "discount", value: 5 },
  { title: "coupon", value: 5 },
  { title: "gift card", value: 5 },
  { title: "voucher", value: 5 },
];

const ShowList = () => {
  return (
    <div className="w-full h-1/2 bg-white flex justify-between ">
      <div className="left bg-gray-300">
        {labels.map((label, index) => (
          <ShowLabel key={index} title={label.title} value={label.value} />
        ))}
      </div>
      <div className="right bg-gray-100">
        <ShowSummary
          quantity={5}
          discount={100}
          subTotal={600}
          grandTotal={500}
        />
      </div>
    </div>
  );
};

export default ShowList;
