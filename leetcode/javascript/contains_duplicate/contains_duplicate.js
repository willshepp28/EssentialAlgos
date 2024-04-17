let containsDuplicate = (arr) => {
  const hashMap = {};

  for (let index = 0; index < arr.length; index++) {
    if (hashMap[arr[index]]) {
      return true;
    }

    hashMap[arr[index]] = arr[index];
  }

  return false;
};

module.exports = containsDuplicate;
