import axios from 'axios';

const req = 'https://reqres.in/api/users?page=3';

const handleRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(req)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};

export default handleRequest;
