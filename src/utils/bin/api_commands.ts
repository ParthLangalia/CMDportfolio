// // List of commands that require API calls

import { getJoke } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const joke = async (args: string[]): Promise<string> => {
  const data = await getJoke();
  return data.joke;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
