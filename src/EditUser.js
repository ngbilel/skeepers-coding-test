import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isPending, setPending] = useState(true);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);

  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [cell, setCell] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?username=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("user ===>", data.results[0]);
        setUser(data.results[0]);

        setFirstName(data.results[0].name.first);
        setLastName(data.results[0].name.last);
        setUserName(data.results[0].login.username);

        setEmail(data.results[0].email);
        setCity(data.results[0].location.city);
        setCountry(data.results[0].location.country);

        setAge(data.results[0].dob.age);
        setCell(data.results[0].cell);
        setPhone(data.results[0].phone);

        setPending(false);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {user && (
        <div class="d-flex justify-content-center align-items-center">
          <div class="w-50 p-3">
            <form>
              <div class="row">
                <div class="col-sm-4 mx-auto">
                  <img alt="" src={user.picture.large} class="rounded-circle" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="inputFirstName" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputFirstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputLastName" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputLastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputAge" class="form-label">
                      username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputUserame"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="inputEmail" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputCity" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputAge" class="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCountry"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="mb-3">
                    <label for="inputAge" class="form-label">
                      Age
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPhone"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputCell" class="form-label">
                      Cell
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCell"
                      value={cell}
                      onChange={(e) => setCell(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-3">
                    <label for="inputPhone" class="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAge"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleClick}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditUser;
