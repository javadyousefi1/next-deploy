"use strict";
(() => {
  var e = {};
  (e.id = 453),
    (e.ids = [453]),
    (e.modules = {
      145: (e) => {
        e.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");
      },
      6249: (e, t) => {
        Object.defineProperty(t, "l", {
          enumerable: !0,
          get: function () {
            return function e(t, n) {
              return n in t
                ? t[n]
                : "then" in t && "function" == typeof t.then
                ? t.then((t) => e(t, n))
                : "function" == typeof t && "default" === n
                ? t
                : void 0;
            };
          },
        });
      },
      9615: (e, t, n) => {
        n.r(t),
          n.d(t, { config: () => P, default: () => d, routeModule: () => l });
        var r = {};
        n.r(r), n.d(r, { default: () => a });
        var o = n(1802),
          i = n(7153),
          u = n(6249);
        function a(e, t) {
          t.setHeader("Cache-Control", "no-store"),
            t.status(200).json({ name: "API route end points javad" });
        }
        let d = (0, u.l)(r, "default"),
          P = (0, u.l)(r, "config"),
          l = new o.PagesAPIRouteModule({
            definition: {
              kind: i.x.PAGES_API,
              page: "/api/hello",
              pathname: "/api/hello",
              bundlePath: "",
              filename: "",
            },
            userland: r,
          });
      },
      7153: (e, t) => {
        var n;
        Object.defineProperty(t, "x", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
          (function (e) {
            (e.PAGES = "PAGES"),
              (e.PAGES_API = "PAGES_API"),
              (e.APP_PAGE = "APP_PAGE"),
              (e.APP_ROUTE = "APP_ROUTE");
          })(n || (n = {}));
      },
      1802: (e, t, n) => {
        e.exports = n(145);
      },
    });
  var t = require("../../webpack-api-runtime.js");
  t.C(e);
  var n = t((t.s = 9615));
  module.exports = n;
})();
