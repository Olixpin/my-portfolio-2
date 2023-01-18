const uniqueID = () => {
  // return Math.random().toString(36).substring(2, 9);
  return Math.random(new Date().getFullYear())
    .toString(new Date().getHours())
    .substring(2, 9);
};

export default uniqueID;

