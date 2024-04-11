import type { NextApiRequest, NextApiResponse } from 'next';
import { DePlanClient } from "deplan-client";

// Sign In API endpoint
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const deplanClient = new DePlanClient('9KSfkquHqtDGq4uzEjwg1AhYynzc9zFCAAQCVZb2hkTn');
  deplanClient.verifySignIn(req.body.message, req.body.signature, '7qUPhUmL6nNTWU7yMsWueR778SYbNhBU2B2tqddfns6j');

  res.status(200).json({ token: 'token' });
}
