import { EXERCISE_1_RESPONSE, EXERCISE_2_RESPONSE, get } from '@/modules';

describe('get test suite', () => {
  const mockResponse1 = EXERCISE_1_RESPONSE;
  const mockResponse2 = EXERCISE_2_RESPONSE;

  vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockResponse1),
    } as Response);
  });

  it('should fetch the data for exercise 1', async () => {
    const response = await get(1);
    expect(response).toEqual(mockResponse1);
  });

  it('should fetch the data for exercise 2', async () => {
    const response = await get(2);
    expect(response).toEqual(mockResponse2);
  });
});
