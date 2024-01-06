// NotificationList.tsx

import React from "react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

interface Notification {
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

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationClick,
}) => {
  return (
    <div className="flex flex-col border-b">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`cursor-pointer hover:bg-skin-dark transition-all p-3 ${
            notification.seen ? "bg-gray-200" : "bg-white"
          }`}
          onClick={() => onNotificationClick(index)}>
          {/* <img
            src={notification.profile_img}
            alt={`${notification.profile}'s profile`}
            className="w-8 h-8 rounded-full mb-2"
          /> */}
          <div className="font-medium text-primary">{notification.name}</div>

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
      ))}
    </div>
  );
};

export default NotificationList;
