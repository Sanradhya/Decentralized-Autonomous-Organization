import React, { useState } from 'react';
import DAO from '../dao';

const ProposalForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await DAO.createProposal(recipient, amount, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Proposal</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Amount in Ether"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <textarea
        placeholder="Proposal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit Proposal</button>
    </form>
  );
};

export default ProposalForm;
