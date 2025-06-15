import { fetch, Agent } from 'undici';
import { CachingLayer } from "../lib/CachingLayer";

const API_BASE = 'https://ecommerce.routemisr.com/';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

export async function getAllCategories() : Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/categories`, {
    dispatcher: agent,
  });
  return res.json();
}
