import React, { useEffect } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = React.useState("");

  useEffect(() => {
    const timmer = setInterval(() => {
      const newDate = new Date();
      const formattedDate = newDate.toLocaleDateString();
      const formattedTime = newDate.toLocaleTimeString();
      setDateTime(`${formattedDate}-${formattedTime}`);
    }, 1000);
    return () => clearInterval(timmer);
  }, []);

  return (
    <>
      <h2 className="date_time"> {dateTime} </h2>
    </>
  );
};

export default TodoDate;
