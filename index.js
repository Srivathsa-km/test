function avatarIcon(string) {
  if (string) {
    return string.substring(0, 1).toUpperCase();
  } else {
    return " ";
  }
}

module.exports = avatarIcon;
