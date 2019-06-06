function confirmEnding(str, target) {
  let targetLength = target.length;
  return str.substring(str.length-targetLength, str.length) === target;
}

confirmEnding("Bastian", "n");