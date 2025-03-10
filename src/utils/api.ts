import axios from 'axios';
import config from '../../config.json';

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getJoke = async () => {
  const { data } = await axios.get(
    'https://official-joke-api.appspot.com/jokes/random',
  );
  return {
    joke: `“${data.setup}” — ${data.punchline}`,
  };
};
