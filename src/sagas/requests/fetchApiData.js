// const url = "https://randomuser.me/api/";
// import axios from "axios";
// const url = "https://api.chucknorris.io/jokes/random"
const url = "https://jsonplaceholder.typicode.com/users";


export const fetchGetUsers = () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

// export default fetchGetUsers;