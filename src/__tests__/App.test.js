import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { convertToPDF } from '../api';
import { blobToBase64 } from '../utils/blobToBase64';

jest.mock('../api', () => ({
  convertToPDF: jest.fn()
}));

jest.mock('../utils/blobToBase64', () => ({
  blobToBase64: jest.fn()
}));

window.alert = (message) => {
  console.log('Mock alert:', message);
};

describe('App', () => {
  it('should handle click event correctly', async () => {
    const { getByRole } = render(<App />);

    // Mock the response from convertToPDF
    const mockedResponse = { data: 'mockedData' };
    convertToPDF.mockResolvedValue(mockedResponse);

    // Simulate typing into the textarea
    const textarea = getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Test PDF content' } });

    // Simulate clicking the button
    const button = getByRole('button');
    fireEvent.click(button);

    // Wait for async operations to complete
    await waitFor(() => {
      expect(convertToPDF).toHaveBeenCalledWith('Test PDF content');
      expect(blobToBase64).toHaveBeenCalledWith('mockedData');
    });
  });
});