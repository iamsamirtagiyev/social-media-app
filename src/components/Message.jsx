import React, { Children } from "react";

const Message = ({ children }) => {
  return <div className="w-full px-4">{children}</div>;
};

const YourMessage = ({ children }) => {
  return (
    <div className=" rounded-lg p-2.5  bg-indigo-500 inline-block capitalize max-w-96 relative after:w-6 after:h-6 after:bg-gradient-to-br after:rotate-90 after:from-indigo-500 after:from-50% after:via-transparent after:via-50% after:absolute after:top-0 after:-left-4">
      <span className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam
        delectus corrupti illo voluptatem, fugit deserunt magni soluta veritatis
        quia id ea maiores alias? Numquam nemo atque earum saepe officiis.
      </span>
      <span className="block text-right mt-1.5 font-medium">12:00</span>
    </div>
  );
};

const MyMessage = ({ children }) => {
  return (
    <div className="flex justify-end">
      <div className=" p-2.5 rounded-lg  bg-indigo-500 inline-block capitalize max-w-96 relative after:w-6 after:h-6 after:bg-gradient-to-br after:from-indigo-500 after:from-50% after:via-transparent after:via-50% after:absolute after:top-0 after:-right-4">
        <span className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          ipsam delectus corrupti illo voluptatem, fugit deserunt magni soluta
          veritatis quia id ea maiores alias? Numquam nemo atque earum saepe
          officiis.
        </span>
        <span className="block text-right mt-1.5 font-medium">12:00</span>
      </div>
    </div>
  );
};

Message.YourMessage = YourMessage;
Message.MyMessage = MyMessage;

export default Message;
