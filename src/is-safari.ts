export = function isSafari(userAgent?: string): boolean {
  userAgent = userAgent || window.navigator.userAgent;

  return (
    /^Mozilla\/5\.0.*Safari\//.test(userAgent) &&
    !/(iPhone|iPad|iPod|Android|SM-)/i.test(userAgent) &&
    !/Chrome|CriOS|FxiOS|OPiOS|mercury/i.test(userAgent)
  );
};
