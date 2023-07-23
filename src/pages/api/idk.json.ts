import type { APIRoute } from 'astro';

export const get: APIRoute = ({ url: { searchParams } }) => {
  return {
    body: JSON.stringify({ message: searchParams.get('message') }),
  };
};
