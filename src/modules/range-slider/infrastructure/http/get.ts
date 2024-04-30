export const get: (
  exercise: number,
) => Promise<{ min: number; max: number; range?: number[] }> = async (
  exercise: number,
) => {
  try {
    const res = await fetch(`http://localhost:3000/api/exercise-${exercise}`, {
      cache: 'no-cache',
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
