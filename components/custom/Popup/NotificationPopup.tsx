"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBell } from "react-icons/fa";
import NotificationList from "../Notification/NotificationList";
import data from "../../../data/notification.json";
import { CartContext } from "@/app/contexts/CartContext";

type Props = {
  type: string;
  style: number;
  close: () => void;
};

const NotificationPopup: React.FC<Props> = (props) => {
  const z = 10 - props.style;
  const [notifications, setNotifications] = useState(data);

  const { setnotificationNo, notificationNo } = useContext(CartContext);
  const unseenNotificationsCount = notifications.filter(
    (notification) => !notification.seen
  ).length;

  const handleNotificationClick = (index: number) => {
    // Toggle the 'seen' property of the clicked notification
    const updatedNotifications = [...notifications];
    updatedNotifications[index].seen = true; // Change to true when clicked
    setNotifications(updatedNotifications);
  };

  console.log(typeof unseenNotificationsCount);

  useEffect(() => {
    setnotificationNo(unseenNotificationsCount);
  }, [unseenNotificationsCount, handleNotificationClick]);

  return (
    <div className="w-screen h-screen fixed z-[1500] ">
      <div
        className="w-full h-full z-[1501] bg-transparent backdrop-brightness-50"
        onClick={props.close}></div>
      <div
        className={`fixed z-[150${z}] w-[20rem] h-[60vh]  top-[3rem] rounded-lg  drop-shadow flex items-center  right-[11rem] bg-skin-light justify-between flex-col overflow-auto `}>
        <div className="bg-skin-fill w-full flex items-center justify-between p-3 text-primary border-b sticky top-0 left-0 right-0">
          <h1 className="h3 capitalize">notification</h1>

          <div className="flex">
            <p className=" text-sm text-gray-500 underline cursor-pointer hover:text-primary transition-all ">
              {notificationNo}{" "}
              {notificationNo === 1 ? "Unseen Message" : "Unseen Messages"}
            </p>

            {/* <FaBell /> */}
          </div>
        </div>

        <NotificationList
          notifications={notifications}
          onNotificationClick={handleNotificationClick}
        />
      </div>
    </div>
  );
};

export default NotificationPopup;
