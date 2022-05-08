import React, { useEffect, useState } from "react";
import t4Api from "../configs/t4Api";
import queryString from "query-string";

const Home = () => {
  const [ticket, setTicket] = useState();

  useEffect(() => {
    t4Api.serverAuth({ server_id: 1, datasource_id: 4 }).then((response) => {
      const qlikTicket = queryString.parseUrl(response.data.url).query
        .qlikTicket;
      localStorage.setItem("qlikTicket", qlikTicket);
      setTicket(qlikTicket);
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center text-xl font-bold">
      qlikTicket: {ticket}
    </div>
  );
};

export default Home;
