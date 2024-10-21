import React, { useEffect, useState } from 'react';
import DAO from '../dao';

const ProposalList = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchProposals = async () => {
      const count = await DAO.getProposalCount();
      const tempProposals = [];
      for (let i = 0; i < count; i++) {
        const proposal = await DAO.getProposal(i);
        tempProposals.push(proposal);
      }
      setProposals(tempProposals);
    };

    fetchProposals();
  }, []);

  return (
    <div>
      <h2>Proposals</h2>
      <ul>
        {proposals.map((proposal, index) => (
          <li key={index}>
            <p>{proposal.description}</p>
            <p>Votes: {proposal.voteCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposalList;
