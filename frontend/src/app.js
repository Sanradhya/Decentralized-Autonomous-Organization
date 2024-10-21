import React from 'react';
import Header from './components/headereader';
import ProposalForm from './components/proposalform';
import ProposalList from './components/proposallist';

const App = () => {
  return (
    <div className="container">
      <Header />
      <ProposalForm />
      <ProposalList />
    </div>
  );
};

export default App;
