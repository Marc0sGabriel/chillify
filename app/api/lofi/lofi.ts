interface LofiData {
  range: string;
  majorDimension: string;
  values: string[];
}

export async function fetchLofiSongs(): Promise<LofiData> {
  const url = process.env.API_URL!;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    next: {
      revalidate: 72 * 3600, // revalidate each 3 days
    },
  }).then((r) => {
    return r.json();
  });

  return response;
}
