import Image from "next/image";
import "./ChatBubble.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function ChatBubble(props: { msg: string }) {
  return (
    <div className="w-11/12 border-gray-200 shadow-black drop-shadow-xl md:w-8/12 lg:w-8/12 xl:w-7/12">
      <div className="leading-1.5 flex flex-col rounded-xl bg-gray-100/90 p-4 dark:bg-gray-700/90">
        <div className="flex items-center space-x-2 last:self-end rtl:space-x-reverse">
          <Image
            className="h-14 w-14 rounded-full"
            src="https://iili.io/JkG05Wx.webp"
            alt="My Cat Mango"
            width={50}
            height={50}
          />
          <span className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
            Mango (My Cat)
          </span>
        </div>

        <h2 className="py-2.5 text-2xl font-normal text-gray-900 dark:text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
          {props.msg}
        </h2>

        <div className="flex flex-row justify-between space-x-2 rtl:space-x-reverse">
          <a
            className="sm:text-md md:text-md lg:text-md xl:text-md text-sm font-normal text-gray-500 dark:text-gray-400"
            href="https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments"
          >
            Source: Compliments API
          </a>
          <p className="hidden text-xs uppercase text-gray-500 dark:text-gray-400 lg:visible">
            Fake loading just to show you my loading screen.
          </p>
          <div className="flex flex-row justify-end space-x-2 rtl:space-x-reverse">
            <span className="text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-xl md:text-xl lg:text-xl xl:text-xl">
              {formatAMPM(new Date())}
            </span>
            <i className="fa-solid fa-check-double text-xl text-blue-400"></i>
          </div>
        </div>
      </div>
      <div className="triangle relative m-auto h-10"></div>
    </div>
  );
}

export default ChatBubble;
