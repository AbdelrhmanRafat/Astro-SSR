import { fetch, Agent } from 'undici';

const API_BASE = 'https://ecommerce.routemisr.com/';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

export async function signIn(user: any): Promise<Response> {
  const res : any = await fetch(`${API_BASE}api/v1/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    dispatcher: agent,
  });
  return res;
}

export async function signUp(user: any): Promise<Response> {
  const res : any = await fetch(`${API_BASE}api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    dispatcher: agent,
  });
  return res;
}
