import request from 'request';

const fetchRss = (apiLink, fetchLink, lastTime) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: apiLink,
      headers: [
        {
          name: "Authorization", 
          value: "Negotiate"
        }
      ],
      form: {
        fetchLink,
        lastTime
      }
    }, (err, response, body) => {
      var json = JSON.parse(body);
      if (json.success) {
        resolve(json);
      } else {
        reject(json);
      }
    })
  });
}
export default {
  fetchRss
} 
