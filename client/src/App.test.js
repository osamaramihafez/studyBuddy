import React from 'react';
import ***REMOVED*** render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => ***REMOVED***
  const ***REMOVED*** getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
***REMOVED***
