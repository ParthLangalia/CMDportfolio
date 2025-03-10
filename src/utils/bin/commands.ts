// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n

[ctrl+l]/clear: clear terminal.
cd: A random book recommendation :)
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. Welcome to my website!
A passionate software developer who loves turning ideas into reality through clean, efficient code. With a B.Tech in Computer Science and a role at Tata Technologies as a Graduate Engineer Trainee, I thrive on solving complex problems and building scalable applications.

My tech stack? JavaScript, React, Node.js, Tailwind, Java, Maven, Hibernate, and Spring & springboot—basically, everything needed to craft seamless user experiences and powerful backend systems. Whether it's designing sleek interfaces or optimizing databases, I enjoy every part of the development journey.

But hey, I’m not all about code! Off the screen, you’ll find me playing basketball, jamming on the tabla and drums, or lost in music. I believe creativity fuels innovation, and I bring that same energy into my projects.
Let’s build something awesome together! Drop me a message, and let’s connect. 🚀<a href="https://music.apple.com/library/playlist/p.O1kz87VF8LaRKaV" target="_blank" rel="noopener noreferrer">🎧</a>🏀

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest.
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}`;
  window.open(gmailURL, '_blank');
  return `Redirecting you to Parths Gmail...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const music = async (args: string[]): Promise<string> => {
  return `Welcome! Chill and Jam for a while : 
  <a href="https://music.apple.com/library/playlist/p.O1kz87VF8LaRKaV" target="_blank" rel="noopener noreferrer">❆ - Cultured</a>
  <a href="https://music.apple.com/library/playlist/p.6xZa3eVuYmWDNWv" target="_blank" rel="noopener noreferrer">♚ - DHH</a>
  <a href="https://music.apple.com/library/playlist/p.6xZagKvuYmWDNWv" target="_blank" rel="noopener noreferrer">¥ - Indie</a>`;
};

export const home = async (args: string[]): Promise<string> => {
  return banner([]);
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };
export const cd = async (args: string[]): Promise<string> => {
  if (args.length !== 1 || !/^[1-3]$/.test(args[0])) {
    return 'Usage: cd <number> (where <number> is a single digit from 1 to 3)';
  }

  const bookUrls: { [key: string]: string } = {
    '1': 'https://www.goodreads.com/book/show/4671.The_Great_Gatsby',
    '2': 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird',
    '3': 'https://www.goodreads.com/book/show/40961427-1984',
  };

  const selectedBook = bookUrls[args[0]];

  if (selectedBook) {
    window.open(selectedBook, '_blank');
    return `Here's a book recommended by me`;
  }

  return 'Invalid input. Enter a number from 1 to 3.';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██████╗  █████╗ ██████╗ ████████╗██╗  ██╗    ██╗      █████╗ ███╗   ██╗ ██████╗  █████╗ ██╗     ██╗ █████╗ 
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║  ██║    ██║     ██╔══██╗████╗  ██║██╔════╝ ██╔══██╗██║     ██║██╔══██╗
██████╔╝███████║██████╔╝   ██║   ███████║    ██║     ███████║██╔██╗ ██║██║  ███╗███████║██║     ██║███████║
██╔═══╝ ██╔══██║██╔══██╗   ██║   ██╔══██║    ██║     ██╔══██║██║╚██╗██║██║   ██║██╔══██║██║     ██║██╔══██║
██║     ██║  ██║██║  ██║   ██║   ██║  ██║    ███████╗██║  ██║██║ ╚████║╚██████╔╝██║  ██║███████╗██║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
