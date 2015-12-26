import store from "store";
import axios from "axios";


// authorization token management
export const setToken = (token) => {
  if (token) {
    store.set("auth-token", token);
  }else{
    store.remove("auth-token");
  }
}

const getToken = () => {
  return store.get("auth-token");
}


// web request client
const instance = axios.create({
  baseURL: "http://localhost:3000/"
});

const tokenAddingInterceptor = (config) => {
  var token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

instance.interceptors.request.use(tokenAddingInterceptor);

export function getRandomUser({}) {
  return instance.get("http://localhost:3000/random-user");
};

export function loginUser({username, password}) {
  return instance.post("http://localhost:3000/login", {
    username, password
  });
};
