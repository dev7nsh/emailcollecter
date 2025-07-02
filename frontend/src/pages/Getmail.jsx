import { useEffect, useState } from "react";
import axios from "axios";
import { axiosIntance } from "../lib/axios";

export default function RecentEmails() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axiosIntance.get("/emails");
        setEmails(response.data);
      } catch (error) {
        console.error("Failed to fetch emails:", error);
      }
    };

    fetchEmails(); // initial fetch

    const interval = setInterval(fetchEmails, 5000); // fetch every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="pt-10 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-2 ">Recently Collected Emails</h2>
      <ul className=" p-4 rounded shadow border border-gray-600 w-dvh">
        {emails.map((item, index) => (
          <li key={item._id || index} className="py-2 border-b last:border-b-0 border-gray-600">
            <div className="flex items-center justify-center">{item.email}</div>
            <div className="text-xs text-gray-500">
              {new Date(item.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}