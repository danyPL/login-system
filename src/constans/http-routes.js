export default {
  server: "http://localhost:3001/users/",
  route: {
    api: {
      login: {
        post: "login",
      },
      register: {
        post: "register",
      },
      logout: {
        get: "logout",
      },
      
    },
  },
};
