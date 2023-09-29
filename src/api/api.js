import axios from 'axios';
// import Cookies from "js-cookie";

// export const fetchDataFromApi = async () => {
//   try {
//     const response = await axios.get(
//       `${process.env.BACKEND_URL}/planmaster/find`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

// ////////////////////Registration////////////////////
// //Otp generate
export const selfPurchaseReward = async () => {
  try {
    const response = await axios.get(
      'http://localhost:5000/selfPurchaseReward/findall'
    );
    // console.log('fuy', response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const myInfo = async (userId) => {
  try {
    const response = await axios.get(
      `httt://localhost:5000/user/userInfo/${userId}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
