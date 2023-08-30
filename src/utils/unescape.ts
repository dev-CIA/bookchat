const regex = /&(amp|lt|gt|quot|#39);/g;

const entities = new Map<string, string>();
entities.set('&amp;', '&').set('&lt;', '<').set('&gt;', '>').set('&quot;', '"').set('&#39;', "'");

const unescape = (escapedStr: string) => {
  if (regex.test(escapedStr)) {
    return escapedStr.replace(regex, (match: string) => entities.get(match) || match);
  } else return escapedStr;
};

export default unescape;
