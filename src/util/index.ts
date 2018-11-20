export const awaitError = async (prom: Promise<any>) => {
  try {
    const data = await prom;
    return data;
  } catch (error) {
    return { error: error };
  }
};
