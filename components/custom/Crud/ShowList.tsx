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
    <div className="w-full h-1/3  flex justify-between   rounded-lg gap-1 bg-skin-dark    ">
      <div className="left  p-1">
        {labels.map((label, index) => (
          <ShowLabel key={index} title={label.title} value={label.value} />
        ))}
      </div>
      <div className="right">
        <ShowSummary
          quantity={5}
          discount={100}
          subTotal={600}
          tax={100}
          grandTotal={500}
        />
      </div>
    </div>
  );
};

export default ShowList;
