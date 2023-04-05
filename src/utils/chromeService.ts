export const storeData = (data: Object) => {
  localStorage.setItem("secret", JSON.stringify(data));
};

export const getData = () => {
  return localStorage.getItem("secret") || "";

};

export const RemoveData = () => {
  localStorage.removeItem("secret");
};
