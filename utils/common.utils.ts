export const createRoute = (
  route: string,
  options: any,
  keepUnmatched: boolean = true
): string => {
  return route.replace(/:([a-zA-Z]+)/g, (match, key) => {
    if (options.hasOwnProperty(key)) {
      return options[key];
    }
    return keepUnmatched ? match : "";
  });
};

export const prittifyTime = (time: number): string => {
  const now = Date.now() / 1000;
  const diffinSec = now - time;

  const minAgo = Math.round(diffinSec / 60);
  const hoursAgo = Math.round(diffinSec / 3600);
  const daysAgo = Math.round(diffinSec / (3600 * 24));

  if (minAgo < 60) {
    return `${minAgo} minutes ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else {
    return `${daysAgo} days ago`;
  }
};

export const getBaseDomain = (url: string): string => {
    try {
        const hostname = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)![2];
        const parts = hostname.split('.').reverse();

        if (parts.length >= 2) {
            return `${parts[1]}.${parts[0]}`;
        }

        return hostname;
    } catch (error) {
        console.error('Invalid URL:', error);
        return '';
    }
};
