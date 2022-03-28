import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    console.log("useEffect ran");
    console.log("id", id);
    fetch(`https://randomuser.me/api/?username=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setUser(data.results[0]);
        setPending(false);
      });
  }, []);
  return (
    <>
      {isPending && <div>Loading...</div>}
      {user && (
        <div class="row d-flex justify-content-center ">
          <div class="col-md-6 mt-5">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={user.picture.large}
                    class="card-img"
                    alt="..."
                    width="100%"
                    height="100%"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <ul>
                      <li>
                        {user.name.title} {user.name.first} {user.name.last}
                      </li>
                      <li> Username : {user.login.username}</li>
                      <li> Gender : {user.gender}</li>
                      <li>Age : {user.dob.age}</li>
                      <li>
                        Location : {user.location.city} {user.location.country}{" "}
                      </li>
                      <li>Email : {user.email}</li>
                      <li>Phone : {user.phone}</li>
                      <li>Cell : {user.cell}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/editUser/${user.login.username}`}>
              <button type="button" class="btn btn-secondary btn-sm">
                Edit
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
