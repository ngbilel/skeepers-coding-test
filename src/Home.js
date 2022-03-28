import { useEffect, useState } from "react";
import UserList from "./UserList";

const Home = () => {
  const [users, setUsers] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    console.log("useEffect ran");
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setUsers(data.results);
        setPending(false);
      });
  }, []);
  return (
    <main>
      {isPending && <div>Loading ...</div>}
      {users && <UserList users={users} />}
    </main>
  );
};

export default Home;
