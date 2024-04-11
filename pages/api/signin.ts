import type { NextApiRequest, NextApiResponse } from 'next';

// Sign In route
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
  res.status(200).json({ token: 'token' });
}
