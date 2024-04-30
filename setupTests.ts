import '@testing-library/jest-dom';

vi.mock('next/font/google', () => ({
  Inconsolata: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));
