import { API } from "../../backend";

export const login = async (data) => {
  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return console.log(err.message);
  }
};

export const signup = async (data) => {
  try {
    const res = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return console.log(err.message);
  }
};
