import axios from 'axios';

const url = `http://95.217.134.12:4010/create-pdf?apiKey=${process.env.REACT_APP_API_KEY}`;

export const convertToPDF = async (text) => {
  try {
    const response = await axios.post(url, {
      text
    }, { responseType: 'blob' });

    return response;
  } catch (error) {
    throw error;
  }
};