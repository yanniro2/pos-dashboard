import { CartContext } from "@/app/contexts/CartContext";
import { Items } from "@/typings";
import React, { useContext, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
type Props = {
  item: Items;
};

const Quantity: React.FC<Props> = (props) => {
  const addButton = (item: Items) => {
    const newItem = {
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      qt: value,
      discount: props.item.discount,
      availableStock: props.item.availableStock,
    };
    if (value > 0) {
      addItems(newItem);
    } else {
      alert("value not be zero");
    }
  };
  const { addItems } = useContext(CartContext);
  const [value, setValue] = useState<number>(0);

  const handleClickAdd = () => {
    setValue(value + 1);
  };

  const handleClickMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setValue(newValue);
  };

  return (
    <div className="w-full z-[20] relative flex justify-between gap-[1rem]  flex-col ">
      <div className="flex items-center  border rounded-lg p-1 justify-evenly bg-gray-300 w-full ">
        <button onClick={handleClickMinus}>
          <MdRemove className="quantity-icon" />
        </button>
        <input
          type="number"
          name="value"
          id="value"
          value={value} // Use value instead of defaultValue
          onChange={handleChange}
          className="w-min  overflow-y-auto pl-3 rounded "
        />
        <button onClick={handleClickAdd}>
          <MdAdd className="quantity-icon" />
        </button>
      </div>

      <button
        className="text-primary underline font-semibold hover:bg-primary hover:text-skin-base px-6 py-3 rounded-lg hover:shadow-md transition-all hover:no-underline"
        onClick={() => addButton(props.item)}>
        Add
      </button>
    </div>
  );
};

export default Quantity;
