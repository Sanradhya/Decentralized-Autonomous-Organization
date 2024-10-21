import { ethers } from 'ethers';
import governanceAbi from './abis/Governance.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const governanceAddress = 'YOUR_GOVERNANCE_CONTRACT_ADDRESS'; // Replace with deployed address

async function createProposal(recipient, amount, description) {
    const signer = provider.getSigner();
    const governanceContract = new ethers.Contract(governanceAddress, governanceAbi, signer);
    const tx = await governanceContract.createProposal(recipient, ethers.utils.parseEther(amount), description);
    await tx.wait();
    alert("Proposal Created!");
}

async function getProposalCount() {
    const governanceContract = new ethers.Contract(governanceAddress, governanceAbi, provider);
    return await governanceContract.proposalsCount();
}

async function getProposal(proposalId) {
    const governanceContract = new ethers.Contract(governanceAddress, governanceAbi, provider);
    return await governanceContract.proposals(proposalId);
}

export default { createProposal, getProposalCount, getProposal };
