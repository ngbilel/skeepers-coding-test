import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          {users.map((user) => (
            <div class="col">
              <div class="card shadow-sm">
                <Link to={`/user/${user.login.username}`}>
                  <img
                    alt=""
                    src={user.picture.large}
                    width="100%"
                    heigt="100%"
                  />
                </Link>
                <div class="card-body">
                  <p class="card-text">
                    <ul>
                      <li>
                        {user.name.title} {user.name.first} {user.name.last}
                      </li>
                      <li>Age : {user.dob.age}</li>
                      <li>{user.location.country} </li>
                    </ul>
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link to={`/user/${user.login.username}`}>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
