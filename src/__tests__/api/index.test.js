import axios from 'axios';
import { convertToPDF } from '../../api';

jest.mock('axios');

window.alert = (message) => {
  console.log('Mock alert:', message);
};

describe('convertToPDF', () => {
  it('should return a PDF blob when given text', async () => {
    // Mock environment variable
    process.env.REACT_APP_API_KEY = 'yourApiKey';

    // Mock axios.post implementation
    axios.post.mockResolvedValue({
      data: {}, // You can provide a mock response here if needed
    });

    // Call the function
    const text = 'Your text here';
    const response = await convertToPDF(text);

    // Assertions
    expect(response).toBeDefined();
    // You may add more specific assertions depending on your needs
  });

  it('should handle errors', async () => {
    // Mock environment variable
    process.env.REACT_APP_API_KEY = 'yourApiKey';

    // Mock axios.post to simulate an error
    axios.post.mockRejectedValue(new Error('Network Error'));

    // Call the function
    const text = 'Your text here';
    const error = await convertToPDF(text).catch(error => error);

    // Assert that the error is an instance of Error
    expect(error).toBeInstanceOf(Error);
  });
});