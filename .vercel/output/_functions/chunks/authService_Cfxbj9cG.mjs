import { Agent, fetch } from 'undici';

const API_BASE = "https://ecommerce.routemisr.com/";
const agent = new Agent({
  connect: {
    rejectUnauthorized: false
  }
});
async function signIn(user) {
  const res = await fetch(`${API_BASE}api/v1/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
    dispatcher: agent
  });
  return res;
}
async function signUp(user) {
  const res = await fetch(`${API_BASE}api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
    dispatcher: agent
  });
  return res;
}

export { signUp as a, signIn as s };
