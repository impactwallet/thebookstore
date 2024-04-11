import { DePlanClient } from "deplan-client";
import axios from 'axios';

function Paywall({ onSignIn }: { onSignIn: Function }) {

  // Sign In with DePlan click handler
  async function handleSignInWithDeplan() {
    const deplanClient = new DePlanClient('9KSfkquHqtDGq4uzEjwg1AhYynzc9zFCAAQCVZb2hkTn');
    const { message, signature, address } = await deplanClient.signIn();

    const { data } = await axios.post('/api/signin', { message, signature, address });

    onSignIn(data.token);
  }

  return (
    <>
      <div style={{ background: '#fff', padding: '30px 0', borderRadius: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="w-full sm:w-96 h-full sm:h-auto">
        <h1 style={{ marginBottom: '60px' }} className="text-4xl font-semibold">Choose your plan</h1>
        <h2 style={{ marginBottom: '10px' }}>
          <span className="text-6xl font-bold">$21</span> <span className="text-4xl font-semibold">/ mo</span>
        </h2>
        <button style={{ marginBottom: '10px', width: '260px', padding: '15px 0', backgroundColor: '#000', color: '#fff', borderRadius: '15px', fontWeight: '600', letterSpacing: '3px' }} className="text-lg">SUBSCRIBE</button>
        <p style={{ color: '#87899B' }}>Commit with credit card. Billed annually.</p>

        <p style={{ color: '#87899B', margin: '35px 0' }} className="text-2xl">
          <span style={{ letterSpacing: '-2px' }}>———————</span> or <span style={{ letterSpacing: '-2px' }}>———————</span>
        </p>

        <h2 style={{ marginBottom: '10px' }}>
          <span className="text-6xl font-bold">$0.10</span> <span className="text-4xl font-semibold">/ hr</span>
        </h2>
        <button style={{ marginBottom: '10px', width: '260px', padding: '15px 0', backgroundColor: '#000', color: '#fff', borderRadius: '15px', fontWeight: '600', letterSpacing: '3px' }} className="text-lg" onClick={handleSignInWithDeplan}>PAY-AS-YOU-GO</button>
        <p style={{ color: '#87899B' }}>No commitment. Powered by DePlan</p>
      </div>
    </>
  );
}

export default Paywall;