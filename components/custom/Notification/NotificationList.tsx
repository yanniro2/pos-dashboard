// NotificationList.tsx

import React from "react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

import {
  FaCalendarAlt,
  FaClipboardList,
  FaBell,
  FaComment,
  FaUserFriends,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaThumbsUp,
  FaMoneyBill,
  FaRocket,
} from "react-icons/fa";

interface Notification {
  icon: any;
  name: string;
  time: string;
  day: string;
  profile: string;
  notification: string;
  profile_img: string;
  seen: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
  onNotificationClick: (index: number) => void;
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaCalendarAlt,
  FaClipboardList,
  FaBell,
  FaComment,
  FaUserFriends,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaThumbsUp,
  FaMoneyBill,
  FaRocket,

  // Add more icon components as needed
};

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationClick,
}) => {
  return (
    <div className="flex flex-col border-b text-skin-base">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`cursor-pointer hover:bg-skin-dark transition-all p-3 flex items-start justify-between border-b ${
            notification.seen ? "bg-skin-fill" : "bg-skin-light"
          }`}
          onClick={() => onNotificationClick(index)}>
          {/* <img
            src={notification.profile_img}
            alt={`${notification.profile}'s profile`}
            className="w-8 h-8 rounded-full mb-2"
          /> */}
          <div className="w-[20%] flex items-start justify-center pt-1">
            {/* <IoIosTime className="text-xl" /> */}
            {React.createElement(iconComponents[notification.icon], {
              className: "text-2xl text-skin-primary",
            })}
          </div>

          <div className="w-[80%]">
            {/* <div className="font-medium text-primary">{notification.name}</div> */}

            <div className="mb-2">{notification.notification}</div>
            <div className="text-gray-500 text-sm mb-2">
              {notification.day}, {notification.time}
            </div>
            {notification.seen ? (
              <PiEyeBold className="text-primary" />
            ) : (
              <PiEyeClosed className="text-primary" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
