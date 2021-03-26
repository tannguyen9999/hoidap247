import axios from 'axios';


  export const UploadAvatar = async (form) => {
    const URL = `http://api.vietfunnels.com/api/uploads/avatar`;
    try {
        const { data } = await axios({
          method: 'post',
          url: URL,
          data: form,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmI4ODNiNGMxMGJhZDQxNzU3NDBiNjgiLCJpYXQiOjE2MTY3Njk5NjYsImV4cCI6MTYxNjc3MDg2Nn0.PaOeIk32I6643VqPva7zCJX4U4evO6pc4Nu-c_jz4l8`,
          },
        });
        console.log(data)
        return data;
      } catch (err) {
        throw err;
      }
  };