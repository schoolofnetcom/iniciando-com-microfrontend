import { registerApplication, start } from "single-spa";
registerApplication({
  name: "react-app",
  app: () =>
    import('react-app/src/main'),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@lowercase/react-app",
//   app: () => System.import("./lowercase-react-app/src/main.js"),
//   activeWhen: ["/123"]
// });

start({
  urlRerouteOnly: true,
});
