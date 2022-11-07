import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from './App';
import ClusterDetails from './components/ClusterDetails';
import ManageCard from './components/ManageCard';
import Theme from './components/Theme';
import { ThemeProvider } from '@emotion/react';


const EXAMPLE_CLUSTER = {
  name: 'cluster-a',
  nodes: 7,
  url: 'cluster-a.coolclusters.com',
  created: '2022-09-11',
};

describe('main test suite', () => {
  jest.mock('./api/clusters', () => ({
    get: (_) => ({}),
    del: (_) => ({}),
  }));
  
  it('renders main page', async () => {
    render(<App />);
    const linkElement = screen.getByText(/ADD CLUSTER/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders cluster details', async () => {
    render(<ClusterDetails cluster={EXAMPLE_CLUSTER}/>);
    const linkElement = screen.getByText(/cluster-a.coolclusters.com/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renders manage card', async () => {
    render(
      (<ThemeProvider theme={Theme}>
        <ManageCard clusterId={2}/>
      </ThemeProvider>)
    );
    await waitFor(() => {
      expect(screen.getByText(/created/i)).toBeInTheDocument();
    });
  });
});


