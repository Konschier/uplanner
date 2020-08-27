(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    7959: function(e, a, t) {
      "use strict";
      t.r(a);
      const o = function() {
          const e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "div",
            { staticClass: "home" },
            [
              e.showModal
                ? t(
                    "b-modal",
                    {
                      attrs: { id: "modal-1", title: "BootstrapVue" },
                      on: {
                        close: function(a) {
                          e.showModal = !1;
                        }
                      }
                    },
                    [
                      t("h3", { attrs: { slot: "header" }, slot: "header" }, [
                        e._v("custom header")
                      ])
                    ]
                  )
                : e._e(),
              t("div", { staticClass: "row" }, [
                t("div", { staticClass: "col-lg-12" }, [
                  t("div", { staticClass: "card" }, [
                    t("div", { staticClass: "card-body" }, [
                      t("h4", { staticClass: "card-title" }, [
                        e._v("Lista de servicos")
                      ]),
                      t(
                        "ul",
                        { staticClass: "icons-list" },
                        e._l(e.listaDeServico, function(a) {
                          return t("li", { key: a.id }, [
                            t(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.modal-1",
                                    modifiers: { "modal-1": !0 }
                                  }
                                ],
                                attrs: { href: "#" },
                                on: {
                                  click: function(t) {
                                    return e.openService(a);
                                  }
                                }
                              },
                              [e._v(e._s(a.descricao))]
                            )
                          ]);
                        }),
                        0
                      ),
                      t("br")
                    ])
                  ])
                ])
              ])
            ],
            1
          );
        },
        c = [],
        i = t("d4ec");
      function s(e, a) {
        for (let t = 0; t < a.length; t++) {
          const o = a[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function r(e, a, t) {
        return a && s(e.prototype, a), t && s(e, t), e;
      }
      let l = t("262e"),
        n = t("2caf"),
        d = t("9ab4"),
        u = t("60a3"),
        v = t("fdab"),
        f = t("d178"),
        b = (function(e) {
          Object(l["a"])(t, e);
          const a = Object(n["a"])(t);
          function t() {
            let e;
            return (
              Object(i["a"])(this, t),
              (e = a.apply(this, arguments)),
              (e.listaDeServico = [
                {
                  status: "Aberto",
                  id: 1,
                  descricao: "Servico 1",
                  desconto: 10,
                  total: "1200",
                  clienteID: 1
                },
                {
                  status: "Pago",
                  id: 2,
                  descricao: "Servico 2",
                  desconto: 20,
                  total: "400",
                  clienteID: 1
                },
                {
                  status: "Fechado",
                  id: 3,
                  descricao: "Servico 3",
                  desconto: 50,
                  total: "500",
                  clienteID: 2
                },
                {
                  status: "Cancelado",
                  id: 4,
                  descricao: "Servico 4",
                  desconto: 0,
                  total: "100",
                  clienteID: 3
                }
              ]),
              (e.clientes = [
                {
                  id: 1,
                  nome: "Rafael",
                  endereco: "Rua joao",
                  tel: "111",
                  email: "rafa@"
                },
                {
                  id: 2,
                  nome: "Marcelo",
                  endereco: "Rua joao",
                  tel: "111",
                  email: "rafa@"
                },
                {
                  id: 3,
                  nome: "Joao",
                  endereco: "Rua joao",
                  tel: "111",
                  email: "rafa@"
                }
              ]),
              (e.showModal = !1),
              e
            );
          }
          return (
            r(t, [
              {
                key: "openService",
                value: function(e) {
                  console.log(e), (this.showModal = !0);
                }
              }
            ]),
            t
          );
        })(u["c"]);
      b = Object(d["a"])(
        [
          Object(u["a"])({
            components: { HelloWorld: v["a"], NavbarComponent: f["a"] }
          })
        ],
        b
      );
      const m = b,
        h = m,
        p = t("2877"),
        _ = Object(p["a"])(h, o, c, !1, null, null, null);
      a["default"] = _.exports;
    },
    f820: function(e, a, t) {
      "use strict";
      t.r(a);
      const o = function() {
          const e = this,
            a = e.$createElement;
          e._self._c;
          return e._m(0);
        },
        c = [
          function() {
            const e = this,
              a = e.$createElement,
              t = e._self._c || a;
            return t("div", { staticClass: "about" }, [
              t("h1", [e._v("This is an about page")])
            ]);
          }
        ],
        i = t("2877"),
        s = {},
        r = Object(i["a"])(s, o, c, !1, null, null, null);
      a["default"] = r.exports;
    }
  }
]);
//# sourceMappingURL=about.874f5829.js.map
