"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1037], {
        29075: (e, a, t) => {
            t.r(a), t.d(a, {
                Accordion: () => l,
                AccordionContent: () => u,
                AccordionItem: () => i,
                AccordionTrigger: () => c
            });
            var r = t(154),
                s = t(98930),
                n = t(89200),
                o = t(15399),
                d = t(5154);
            let l = n.bL,
                i = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, r.jsx)(n.q7, {
                        className: (0, d.cn)("border-b", t),
                        ref: a,
                        ...s
                    })
                });
            i.displayName = "AccordionItem";
            let c = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...l
                } = e;
                return (0, r.jsx)(n.Y9, {
                    className: "flex",
                    children: (0, r.jsxs)(n.l9, {
                        className: (0, d.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", t),
                        ref: a,
                        ...l,
                        children: [s, (0, r.jsx)(o.A, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            c.displayName = n.l9.displayName;
            let u = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...o
                } = e;
                return (0, r.jsx)(n.UC, {
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ref: a,
                    ...o,
                    children: (0, r.jsx)("div", {
                        className: (0, d.cn)("pb-4 pt-0", t),
                        children: s
                    })
                })
            });
            u.displayName = n.UC.displayName
        },
        61880: (e, a, t) => {
            t.r(a), t.d(a, {
                AlertDialog: () => l,
                AlertDialogAction: () => g,
                AlertDialogCancel: () => h,
                AlertDialogContent: () => f,
                AlertDialogDescription: () => x,
                AlertDialogFooter: () => p,
                AlertDialogHeader: () => m,
                AlertDialogOverlay: () => u,
                AlertDialogPortal: () => c,
                AlertDialogTitle: () => b,
                AlertDialogTrigger: () => i
            });
            var r = t(154),
                s = t(98930),
                n = t(42105),
                o = t(5154),
                d = t(48651);
            let l = n.bL,
                i = n.l9,
                c = n.ZL,
                u = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, r.jsx)(n.hJ, {
                        className: (0, o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t),
                        ...s,
                        ref: a
                    })
                });
            u.displayName = n.hJ.displayName;
            let f = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsxs)(c, {
                    children: [(0, r.jsx)(u, {}), (0, r.jsx)(n.UC, {
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", t),
                        ref: a,
                        ...s
                    })]
                })
            });
            f.displayName = n.UC.displayName;
            let m = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-2 text-center sm:text-left", a),
                    ...t
                })
            };
            m.displayName = "AlertDialogHeader";
            let p = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a),
                    ...t
                })
            };
            p.displayName = "AlertDialogFooter";
            let b = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.hE, {
                    className: (0, o.cn)("text-lg font-semibold", t),
                    ref: a,
                    ...s
                })
            });
            b.displayName = n.hE.displayName;
            let x = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.VY, {
                    className: (0, o.cn)("text-sm text-muted-foreground", t),
                    ref: a,
                    ...s
                })
            });
            x.displayName = n.VY.displayName;
            let g = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.rc, {
                    className: (0, o.cn)((0, d.buttonVariants)(), t),
                    ref: a,
                    ...s
                })
            });
            g.displayName = n.rc.displayName;
            let h = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.ZD, {
                    className: (0, o.cn)((0, d.buttonVariants)({
                        variant: "outline"
                    }), "mt-2 sm:mt-0", t),
                    ref: a,
                    ...s
                })
            });
            h.displayName = n.ZD.displayName
        },
        72879: (e, a, t) => {
            t.r(a), t.d(a, {
                Alert: () => l,
                AlertDescription: () => c,
                AlertTitle: () => i
            });
            var r = t(154),
                s = t(98930),
                n = t(99751),
                o = t(5154);
            let d = (0, n.F)("relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                l = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        variant: s,
                        ...n
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, o.cn)(d({
                            variant: s
                        }), t),
                        ref: a,
                        role: "alert",
                        ...n
                    })
                });
            l.displayName = "Alert";
            let i = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("h5", {
                    className: (0, o.cn)("mb-1 font-medium leading-none tracking-tight", t),
                    ref: a,
                    ...s
                })
            });
            i.displayName = "AlertTitle";
            let c = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("text-sm [&_p]:leading-relaxed", t),
                    ref: a,
                    ...s
                })
            });
            c.displayName = "AlertDescription"
        },
        96433: (e, a, t) => {
            t.r(a), t.d(a, {
                AspectRatio: () => r
            });
            let r = t(69281).b
        },
        56688: (e, a, t) => {
            t.r(a), t.d(a, {
                Breadcrumb: () => i,
                BreadcrumbEllipsis: () => b,
                BreadcrumbItem: () => u,
                BreadcrumbLink: () => f,
                BreadcrumbList: () => c,
                BreadcrumbPage: () => m,
                BreadcrumbSeparator: () => p
            });
            var r = t(154),
                s = t(98930),
                n = t(76911),
                o = t(82999),
                d = t(60730),
                l = t(5154);
            let i = s.forwardRef((e, a) => {
                let { ...t
                } = e;
                return (0, r.jsx)("nav", {
                    "aria-label": "breadcrumb",
                    ref: a,
                    ...t
                })
            });
            i.displayName = "Breadcrumb";
            let c = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("ol", {
                    className: (0, l.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", t),
                    ref: a,
                    ...s
                })
            });
            c.displayName = "BreadcrumbList";
            let u = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("li", {
                    className: (0, l.cn)("inline-flex items-center gap-1.5", t),
                    ref: a,
                    ...s
                })
            });
            u.displayName = "BreadcrumbItem";
            let f = s.forwardRef((e, a) => {
                let {
                    asChild: t,
                    className: s,
                    ...o
                } = e, d = t ? n.DX : "a";
                return (0, r.jsx)(d, {
                    className: (0, l.cn)("transition-colors hover:text-foreground", s),
                    ref: a,
                    ...o
                })
            });
            f.displayName = "BreadcrumbLink";
            let m = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("span", {
                    "aria-current": "page",
                    "aria-disabled": "true",
                    className: (0, l.cn)("font-normal text-foreground", t),
                    ref: a,
                    role: "link",
                    ...s
                })
            });
            m.displayName = "BreadcrumbPage";
            let p = e => {
                let {
                    children: a,
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("li", {
                    "aria-hidden": "true",
                    className: (0, l.cn)("[&>svg]:h-3.5 [&>svg]:w-3.5", t),
                    role: "presentation",
                    ...s,
                    children: null != a ? a : (0, r.jsx)(o.A, {})
                })
            };
            p.displayName = "BreadcrumbSeparator";
            let b = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsxs)("span", {
                    "aria-hidden": "true",
                    className: (0, l.cn)("flex h-9 w-9 items-center justify-center", a),
                    role: "presentation",
                    ...t,
                    children: [(0, r.jsx)(d.A, {
                        className: "h-4 w-4"
                    }), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "More"
                    })]
                })
            };
            b.displayName = "BreadcrumbElipssis"
        },
        64049: (e, a, t) => {
            t.r(a), t.d(a, {
                ChartContainer: () => f,
                ChartLegend: () => x,
                ChartLegendContent: () => g,
                ChartStyle: () => m,
                ChartTooltip: () => p,
                ChartTooltipContent: () => b
            });
            var r = t(154),
                s = t(98930),
                n = t(98259),
                o = t(29200),
                d = t(57007),
                l = t(5154);
            let i = {
                    light: "",
                    dark: ".dark"
                },
                c = s.createContext(null);

            function u() {
                let e = s.useContext(c);
                if (!e) throw Error("useChart must be used within a <ChartContainer />");
                return e
            }
            let f = s.forwardRef((e, a) => {
                let {
                    id: t,
                    className: o,
                    children: d,
                    config: i,
                    ...u
                } = e, f = s.useId(), p = "chart-".concat(t || f.replace(/:/g, ""));
                return (0, r.jsx)(c.Provider, {
                    value: {
                        config: i
                    },
                    children: (0, r.jsxs)("div", {
                        className: (0, l.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", o),
                        "data-chart": p,
                        ref: a,
                        ...u,
                        children: [(0, r.jsx)(m, {
                            config: i,
                            id: p
                        }), (0, r.jsx)(n.u, {
                            children: d
                        })]
                    })
                })
            });
            f.displayName = "Chart";
            let m = e => {
                    let {
                        id: a,
                        config: t
                    } = e, s = Object.entries(t).filter(e => {
                        let [a, t] = e;
                        return t.theme || t.color
                    });
                    return s.length ? (0, r.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: Object.entries(i).map(e => {
                                let [t, r] = e;
                                return "\n".concat(r, " [data-chart=").concat(a, "] {\n").concat(s.map(e => {
                                    var a;
                                    let [r, s] = e, n = (null === (a = s.theme) || void 0 === a ? void 0 : a[t]) || s.color;
                                    return n ? "  --color-".concat(r, ": ").concat(n, ";") : null
                                }).join("\n"), "\n}\n")
                            }).join("\n")
                        }
                    }) : null
                },
                p = o.m,
                b = s.forwardRef((e, a) => {
                    let {
                        active: t,
                        payload: n,
                        className: o,
                        indicator: d = "dot",
                        hideLabel: i = !1,
                        hideIndicator: c = !1,
                        label: f,
                        labelFormatter: m,
                        labelClassName: p,
                        formatter: b,
                        color: x,
                        nameKey: g,
                        labelKey: v
                    } = e, {
                        config: N
                    } = u(), w = s.useMemo(() => {
                        var e;
                        if (i || !(null == n ? void 0 : n.length)) return null;
                        let [a] = n, t = "".concat(v || a.dataKey || a.name || "value"), s = h(N, a, t), o = v || "string" != typeof f ? null == s ? void 0 : s.label : (null === (e = N[f]) || void 0 === e ? void 0 : e.label) || f;
                        return m ? (0, r.jsx)("div", {
                            className: (0, l.cn)("font-medium", p),
                            children: m(o, n)
                        }) : o ? (0, r.jsx)("div", {
                            className: (0, l.cn)("font-medium", p),
                            children: o
                        }) : null
                    }, [f, m, n, i, p, N, v]);
                    if (!t || !(null == n ? void 0 : n.length)) return null;
                    let y = 1 === n.length && "dot" !== d;
                    return (0, r.jsxs)("div", {
                        className: (0, l.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", o),
                        ref: a,
                        children: [y ? null : w, (0, r.jsx)("div", {
                            className: "grid gap-1.5",
                            children: n.map((e, a) => {
                                let t = "".concat(g || e.name || e.dataKey || "value"),
                                    s = h(N, e, t),
                                    n = x || e.payload.fill || e.color;
                                return (0, r.jsx)("div", {
                                    className: (0, l.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", "dot" === d && "items-center"),
                                    children: b && void 0 !== e.value && e.name ? b(e.value, e.name, e, a, e.payload) : (0, r.jsxs)(r.Fragment, {
                                        children: [(null == s ? void 0 : s.icon) ? (0, r.jsx)(s.icon, {}) : !c && (0, r.jsx)("div", {
                                            className: (0, l.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                                "h-2.5 w-2.5": "dot" === d,
                                                "w-1": "line" === d,
                                                "w-0 border-[1.5px] border-dashed bg-transparent": "dashed" === d,
                                                "my-0.5": y && "dashed" === d
                                            }),
                                            style: {
                                                "--color-bg": n,
                                                "--color-border": n
                                            }
                                        }), (0, r.jsxs)("div", {
                                            className: (0, l.cn)("flex flex-1 justify-between leading-none", y ? "items-end" : "items-center"),
                                            children: [(0, r.jsxs)("div", {
                                                className: "grid gap-1.5",
                                                children: [y ? w : null, (0, r.jsx)("span", {
                                                    className: "text-muted-foreground",
                                                    children: (null == s ? void 0 : s.label) || e.name
                                                })]
                                            }), e.value && (0, r.jsx)("span", {
                                                className: "font-mono font-medium tabular-nums text-foreground",
                                                children: e.value.toLocaleString()
                                            })]
                                        })]
                                    })
                                }, e.dataKey)
                            })
                        })]
                    })
                });
            b.displayName = "ChartTooltip";
            let x = d.s,
                g = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        hideIcon: s = !1,
                        payload: n,
                        verticalAlign: o = "bottom",
                        nameKey: d
                    } = e, {
                        config: i
                    } = u();
                    return (null == n ? void 0 : n.length) ? (0, r.jsx)("div", {
                        className: (0, l.cn)("flex items-center justify-center gap-4", "top" === o ? "pb-3" : "pt-3", t),
                        ref: a,
                        children: n.map(e => {
                            let a = "".concat(d || e.dataKey || "value"),
                                t = h(i, e, a);
                            return (0, r.jsxs)("div", {
                                className: (0, l.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                                children: [(null == t ? void 0 : t.icon) && !s ? (0, r.jsx)(t.icon, {}) : (0, r.jsx)("div", {
                                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                                    style: {
                                        backgroundColor: e.color
                                    }
                                }), null == t ? void 0 : t.label]
                            }, e.value)
                        })
                    }) : null
                });

            function h(e, a, t) {
                if ("object" != typeof a || null === a) return;
                let r = "payload" in a && "object" == typeof a.payload && null !== a.payload ? a.payload : void 0,
                    s = t;
                return t in a && "string" == typeof a[t] ? s = a[t] : r && t in r && "string" == typeof r[t] && (s = r[t]), s in e ? e[s] : e[t]
            }
            g.displayName = "ChartLegend"
        },
        15732: (e, a, t) => {
            t.r(a), t.d(a, {
                Checkbox: () => l
            });
            var r = t(154),
                s = t(98930),
                n = t(96763),
                o = t(81555),
                d = t(5154);
            let l = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.bL, {
                    ref: a,
                    className: (0, d.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t),
                    ...s,
                    children: (0, r.jsx)(n.C1, {
                        className: (0, d.cn)("flex items-center justify-center text-current"),
                        children: (0, r.jsx)(o.A, {
                            className: "h-4 w-4"
                        })
                    })
                })
            });
            l.displayName = n.bL.displayName
        },
        92649: (e, a, t) => {
            t.r(a), t.d(a, {
                Collapsible: () => s,
                CollapsibleContent: () => o,
                CollapsibleTrigger: () => n
            });
            var r = t(67382);
            let s = r.bL,
                n = r.R6,
                o = r.Ke
        },
        99316: (e, a, t) => {
            t.r(a), t.d(a, {
                DropdownMenu: () => c,
                DropdownMenuCheckboxItem: () => N,
                DropdownMenuContent: () => h,
                DropdownMenuGroup: () => f,
                DropdownMenuItem: () => v,
                DropdownMenuLabel: () => y,
                DropdownMenuPortal: () => m,
                DropdownMenuRadioGroup: () => b,
                DropdownMenuRadioItem: () => w,
                DropdownMenuSeparator: () => j,
                DropdownMenuShortcut: () => S,
                DropdownMenuSub: () => p,
                DropdownMenuSubContent: () => g,
                DropdownMenuSubTrigger: () => x,
                DropdownMenuTrigger: () => u
            });
            var r = t(154),
                s = t(98930),
                n = t(8512),
                o = t(82999),
                d = t(81555),
                l = t(157),
                i = t(5154);
            let c = n.bL,
                u = n.l9,
                f = n.YJ,
                m = n.ZL,
                p = n.Pb,
                b = n.z6,
                x = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        inset: s,
                        children: d,
                        ...l
                    } = e;
                    return (0, r.jsxs)(n.ZP, {
                        className: (0, i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", s && "pl-8", t),
                        ref: a,
                        ...l,
                        children: [d, (0, r.jsx)(o.A, {
                            className: "ml-auto h-4 w-4"
                        })]
                    })
                });
            x.displayName = n.ZP.displayName;
            let g = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.G5, {
                    className: (0, i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                    ref: a,
                    ...s
                })
            });
            g.displayName = n.G5.displayName;
            let h = s.forwardRef((e, a) => {
                let {
                    className: t,
                    sideOffset: s = 4,
                    ...o
                } = e;
                return (0, r.jsx)(n.ZL, {
                    children: (0, r.jsx)(n.UC, {
                        className: (0, i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                        ref: a,
                        sideOffset: s,
                        ...o
                    })
                })
            });
            h.displayName = n.UC.displayName;
            let v = s.forwardRef((e, a) => {
                let {
                    className: t,
                    inset: s,
                    ...o
                } = e;
                return (0, r.jsx)(n.q7, {
                    className: (0, i.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", s && "pl-8", t),
                    ref: a,
                    ...o
                })
            });
            v.displayName = n.q7.displayName;
            let N = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    checked: o,
                    ...l
                } = e;
                return (0, r.jsxs)(n.H_, {
                    checked: o,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ref: a,
                    ...l,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(n.VF, {
                            children: (0, r.jsx)(d.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), s]
                })
            });
            N.displayName = n.H_.displayName;
            let w = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...o
                } = e;
                return (0, r.jsxs)(n.hN, {
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ref: a,
                    ...o,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(n.VF, {
                            children: (0, r.jsx)(l.A, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), s]
                })
            });
            w.displayName = n.hN.displayName;
            let y = s.forwardRef((e, a) => {
                let {
                    className: t,
                    inset: s,
                    ...o
                } = e;
                return (0, r.jsx)(n.JU, {
                    className: (0, i.cn)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", t),
                    ref: a,
                    ...o
                })
            });
            y.displayName = n.JU.displayName;
            let j = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.wv, {
                    className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", t),
                    ref: a,
                    ...s
                })
            });
            j.displayName = n.wv.displayName;
            let S = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("span", {
                    className: (0, i.cn)("ml-auto text-xs tracking-widest opacity-60", a),
                    ...t
                })
            };
            S.displayName = "DropdownMenuShortcut"
        },
        50749: (e, a, t) => {
            t.r(a), t.d(a, {
                Form: () => i,
                FormControl: () => x,
                FormDescription: () => g,
                FormField: () => u,
                FormItem: () => p,
                FormLabel: () => b,
                FormMessage: () => h,
                useFormField: () => f
            });
            var r = t(154),
                s = t(98930),
                n = t(76911),
                o = t(46749),
                d = t(5154),
                l = t(95067);
            let i = o.FormProvider,
                c = s.createContext(null),
                u = e => {
                    let { ...a
                    } = e, [t, n] = s.useState(!1);
                    return (s.useEffect(() => n(!0), []), t) ? (0, r.jsx)(c.Provider, {
                        value: {
                            name: a.name
                        },
                        children: (0, r.jsx)(o.Controller, { ...a
                        })
                    }) : null
                },
                f = () => {
                    let e = s.useContext(c),
                        a = s.useContext(m),
                        {
                            formState: t
                        } = (0, o.useFormContext)(),
                        {
                            getFieldState: r
                        } = (0, o.useForm)();
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let n = r(e.name, t),
                        {
                            id: d
                        } = a;
                    return {
                        id: d,
                        name: e.name,
                        formItemId: "".concat(d, "-form-item"),
                        formDescriptionId: "".concat(d, "-form-item-description"),
                        formMessageId: "".concat(d, "-form-item-message"),
                        ...n
                    }
                },
                m = s.createContext({}),
                p = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        ...n
                    } = e, o = s.useId();
                    return (0, r.jsx)(m.Provider, {
                        value: {
                            id: o
                        },
                        children: (0, r.jsx)("div", {
                            className: (0, d.cn)("space-y-2", t),
                            ref: a,
                            ...n
                        })
                    })
                });
            p.displayName = "FormItem";
            let b = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e, {
                    error: n,
                    formItemId: o
                } = f();
                return (0, r.jsx)(l.Label, {
                    className: (0, d.cn)(n && "text-destructive", t),
                    htmlFor: o,
                    ref: a,
                    ...s
                })
            });
            b.displayName = "FormLabel";
            let x = s.forwardRef((e, a) => {
                let { ...t
                } = e, {
                    error: s,
                    formItemId: o,
                    formDescriptionId: d,
                    formMessageId: l
                } = f();
                return (0, r.jsx)(n.DX, {
                    "aria-describedby": s ? "".concat(d, " ").concat(l) : d,
                    "aria-invalid": !!s,
                    id: o,
                    ref: a,
                    ...t
                })
            });
            x.displayName = "FormControl";
            let g = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e, {
                    formDescriptionId: n
                } = f();
                return (0, r.jsx)("p", {
                    className: (0, d.cn)("text-[0.8rem] text-muted-foreground", t),
                    id: n,
                    ref: a,
                    ...s
                })
            });
            g.displayName = "FormDescription";
            let h = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...n
                } = e, {
                    error: o,
                    formMessageId: l
                } = f(), i = o ? String(o.message) : s;
                return i ? (0, r.jsx)("p", {
                    className: (0, d.cn)("text-[0.8rem] font-medium text-destructive", t),
                    id: l,
                    ref: a,
                    ...n,
                    children: i
                }) : null
            });
            h.displayName = "FormMessage"
        },
        87181: (e, a, t) => {
            t.r(a), t.d(a, {
                Menubar: () => b,
                MenubarCheckboxItem: () => w,
                MenubarContent: () => v,
                MenubarGroup: () => u,
                MenubarItem: () => N,
                MenubarLabel: () => j,
                MenubarMenu: () => c,
                MenubarPortal: () => f,
                MenubarRadioGroup: () => p,
                MenubarRadioItem: () => y,
                MenubarSeparator: () => S,
                MenubarShortcut: () => R,
                MenubarSub: () => m,
                MenubarSubContent: () => h,
                MenubarSubTrigger: () => g,
                MenubarTrigger: () => x
            });
            var r = t(154),
                s = t(98930),
                n = t(9172),
                o = t(82999),
                d = t(81555),
                l = t(157),
                i = t(5154);
            let c = n.W1,
                u = n.YJ,
                f = n.ZL,
                m = n.Pb,
                p = n.z6,
                b = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, r.jsx)(n.bL, {
                        className: (0, i.cn)("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", t),
                        ref: a,
                        ...s
                    })
                });
            b.displayName = n.bL.displayName;
            let x = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.l9, {
                    className: (0, i.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", t),
                    ref: a,
                    ...s
                })
            });
            x.displayName = n.l9.displayName;
            let g = s.forwardRef((e, a) => {
                let {
                    className: t,
                    inset: s,
                    children: d,
                    ...l
                } = e;
                return (0, r.jsxs)(n.ZP, {
                    className: (0, i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", s && "pl-8", t),
                    ref: a,
                    ...l,
                    children: [d, (0, r.jsx)(o.A, {
                        className: "ml-auto h-4 w-4"
                    })]
                })
            });
            g.displayName = n.ZP.displayName;
            let h = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.G5, {
                    className: (0, i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                    ref: a,
                    ...s
                })
            });
            h.displayName = n.G5.displayName;
            let v = s.forwardRef((e, a) => {
                let {
                    className: t,
                    align: s = "start",
                    alignOffset: o = -4,
                    sideOffset: d = 8,
                    ...l
                } = e;
                return (0, r.jsx)(n.ZL, {
                    children: (0, r.jsx)(n.UC, {
                        align: s,
                        alignOffset: o,
                        className: (0, i.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                        ref: a,
                        sideOffset: d,
                        ...l
                    })
                })
            });
            v.displayName = n.UC.displayName;
            let N = s.forwardRef((e, a) => {
                let {
                    className: t,
                    inset: s,
                    ...o
                } = e;
                return (0, r.jsx)(n.q7, {
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s && "pl-8", t),
                    ref: a,
                    ...o
                })
            });
            N.displayName = n.q7.displayName;
            let w = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    checked: o,
                    ...l
                } = e;
                return (0, r.jsxs)(n.H_, {
                    checked: o,
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ref: a,
                    ...l,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(n.VF, {
                            children: (0, r.jsx)(d.A, {
                                className: "h-4 w-4"
                            })
                        })
                    }), s]
                })
            });
            w.displayName = n.H_.displayName;
            let y = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...o
                } = e;
                return (0, r.jsxs)(n.hN, {
                    className: (0, i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
                    ref: a,
                    ...o,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(n.VF, {
                            children: (0, r.jsx)(l.A, {
                                className: "h-2 w-2 fill-current"
                            })
                        })
                    }), s]
                })
            });
            y.displayName = n.hN.displayName;
            let j = s.forwardRef((e, a) => {
                let {
                    className: t,
                    inset: s,
                    ...o
                } = e;
                return (0, r.jsx)(n.JU, {
                    className: (0, i.cn)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", t),
                    ref: a,
                    ...o
                })
            });
            j.displayName = n.JU.displayName;
            let S = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.wv, {
                    className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", t),
                    ref: a,
                    ...s
                })
            });
            S.displayName = n.wv.displayName;
            let R = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("span", {
                    className: (0, i.cn)("ml-auto text-xs tracking-widest text-muted-foreground", a),
                    ...t
                })
            };
            R.displayname = "MenubarShortcut"
        },
        78698: (e, a, t) => {
            t.r(a), t.d(a, {
                Popover: () => d,
                PopoverContent: () => i,
                PopoverTrigger: () => l
            });
            var r = t(154),
                s = t(98930),
                n = t(97726),
                o = t(5154);
            let d = n.bL,
                l = n.l9,
                i = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        align: s = "center",
                        sideOffset: d = 4,
                        ...l
                    } = e;
                    return (0, r.jsx)(n.ZL, {
                        children: (0, r.jsx)(n.UC, {
                            align: s,
                            className: (0, o.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                            ref: a,
                            sideOffset: d,
                            ...l
                        })
                    })
                });
            i.displayName = n.UC.displayName
        },
        26610: (e, a, t) => {
            t.r(a), t.d(a, {
                ScrollArea: () => d,
                ScrollBar: () => l
            });
            var r = t(154),
                s = t(98930),
                n = t(78692),
                o = t(5154);
            let d = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: s,
                    ...d
                } = e;
                return (0, r.jsxs)(n.bL, {
                    className: (0, o.cn)("relative overflow-hidden", t),
                    ref: a,
                    ...d,
                    children: [(0, r.jsx)(n.LM, {
                        className: "h-full w-full rounded-[inherit]",
                        children: s
                    }), (0, r.jsx)(l, {}), (0, r.jsx)(n.OK, {})]
                })
            });
            d.displayName = n.bL.displayName;
            let l = s.forwardRef((e, a) => {
                let {
                    className: t,
                    orientation: s = "vertical",
                    ...d
                } = e;
                return (0, r.jsx)(n.VM, {
                    className: (0, o.cn)("flex touch-none select-none transition-colors", "vertical" === s && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === s && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t),
                    orientation: s,
                    ref: a,
                    ...d,
                    children: (0, r.jsx)(n.lr, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            l.displayName = n.VM.displayName
        },
        92488: (e, a, t) => {
            t.r(a), t.d(a, {
                Separator: () => d
            });
            var r = t(154),
                s = t(98930),
                n = t(3543),
                o = t(5154);
            let d = s.forwardRef((e, a) => {
                let {
                    className: t,
                    orientation: s = "horizontal",
                    decorative: d = !0,
                    ...l
                } = e;
                return (0, r.jsx)(n.b, {
                    className: (0, o.cn)("shrink-0 bg-border", "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]", t),
                    decorative: d,
                    orientation: s,
                    ref: a,
                    ...l
                })
            });
            d.displayName = n.b.displayName
        },
        2384: (e, a, t) => {
            t.r(a), t.d(a, {
                Sheet: () => i,
                SheetClose: () => u,
                SheetContent: () => b,
                SheetDescription: () => v,
                SheetFooter: () => g,
                SheetHeader: () => x,
                SheetOverlay: () => m,
                SheetPortal: () => f,
                SheetTitle: () => h,
                SheetTrigger: () => c
            });
            var r = t(154),
                s = t(98930),
                n = t(25235),
                o = t(99751),
                d = t(29343),
                l = t(5154);
            let i = n.bL,
                c = n.l9,
                u = n.bm,
                f = n.ZL,
                m = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        ...s
                    } = e;
                    return (0, r.jsx)(n.hJ, {
                        className: (0, l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t),
                        ...s,
                        ref: a
                    })
                });
            m.displayName = n.hJ.displayName;
            let p = (0, o.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
                    variants: {
                        side: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                        }
                    },
                    defaultVariants: {
                        side: "right"
                    }
                }),
                b = s.forwardRef((e, a) => {
                    let {
                        side: t = "right",
                        className: s,
                        children: o,
                        ...i
                    } = e;
                    return (0, r.jsxs)(f, {
                        children: [(0, r.jsx)(m, {}), (0, r.jsxs)(n.UC, {
                            className: (0, l.cn)(p({
                                side: t
                            }), s),
                            ref: a,
                            ...i,
                            children: [o, (0, r.jsxs)(n.bm, {
                                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                                children: [(0, r.jsx)(d.A, {
                                    className: "h-4 w-4"
                                }), (0, r.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                });
            b.displayName = n.UC.displayName;
            let x = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, l.cn)("flex flex-col space-y-2 text-center sm:text-left", a),
                    ...t
                })
            };
            x.displayName = "SheetHeader";
            let g = e => {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a),
                    ...t
                })
            };
            g.displayName = "SheetFooter";
            let h = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.hE, {
                    className: (0, l.cn)("text-lg font-semibold text-foreground", t),
                    ref: a,
                    ...s
                })
            });
            h.displayName = n.hE.displayName;
            let v = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(n.VY, {
                    className: (0, l.cn)("text-sm text-muted-foreground", t),
                    ref: a,
                    ...s
                })
            });
            v.displayName = n.VY.displayName
        },
        20417: (e, a, t) => {
            t.r(a), t.d(a, {
                Sidebar: () => v,
                SidebarContent: () => C,
                SidebarFooter: () => R,
                SidebarGroup: () => M,
                SidebarGroupAction: () => T,
                SidebarGroupContent: () => _,
                SidebarGroupLabel: () => z,
                SidebarHeader: () => S,
                SidebarInput: () => j,
                SidebarInset: () => y,
                SidebarMenu: () => D,
                SidebarMenuAction: () => I,
                SidebarMenuBadge: () => P,
                SidebarMenuButton: () => F,
                SidebarMenuItem: () => A,
                SidebarMenuSkeleton: () => B,
                SidebarMenuSub: () => E,
                SidebarMenuSubButton: () => U,
                SidebarMenuSubItem: () => G,
                SidebarProvider: () => h,
                SidebarRail: () => w,
                SidebarSeparator: () => k,
                SidebarTrigger: () => N,
                useSidebar: () => g
            });
            var r = t(154),
                s = t(98930),
                n = t(76911),
                o = t(99751),
                d = t(43001),
                l = t(1031),
                i = t(5154),
                c = t(48651),
                u = t(50173),
                f = t(92488),
                m = t(2384),
                p = t(40538),
                b = t(86020);
            let x = s.createContext(null);

            function g() {
                let e = s.useContext(x);
                if (!e) throw Error("useSidebar must be used within a Sidebar.");
                return e
            }
            let h = s.forwardRef((e, a) => {
                let {
                    defaultOpen: t = !0,
                    open: n,
                    onOpenChange: o,
                    className: d,
                    style: c,
                    children: u,
                    ...f
                } = e, m = (0, l.useIsMobile)(), [p, g] = s.useState(!1), [h, v] = s.useState(t), N = null != n ? n : h, w = s.useCallback(e => {
                    if (o) return o("function" == typeof e ? e(N) : e);
                    v(e), document.cookie = "".concat("sidebar:state", "=").concat(N, "; path=/; max-age=").concat(604800)
                }, [o, N]), y = s.useCallback(() => m ? g(e => !e) : w(e => !e), [m, w, g]);
                s.useEffect(() => {
                    let e = e => {
                        "b" === e.key && (e.metaKey || e.ctrlKey) && (e.preventDefault(), y())
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [y]);
                let j = N ? "expanded" : "collapsed",
                    S = s.useMemo(() => ({
                        state: j,
                        open: N,
                        setOpen: w,
                        isMobile: m,
                        openMobile: p,
                        setOpenMobile: g,
                        toggleSidebar: y
                    }), [j, N, w, m, p, g, y]);
                return (0, r.jsx)(x.Provider, {
                    value: S,
                    children: (0, r.jsx)(b.TooltipProvider, {
                        delayDuration: 0,
                        children: (0, r.jsx)("div", {
                            className: (0, i.cn)("group/sidebar-wrapper text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full", d),
                            ref: a,
                            style: {
                                "--sidebar-width": "16rem",
                                "--sidebar-width-icon": "3rem",
                                ...c
                            },
                            ...f,
                            children: u
                        })
                    })
                })
            });
            h.displayName = "SidebarProvider";
            let v = s.forwardRef((e, a) => {
                let {
                    side: t = "left",
                    variant: s = "sidebar",
                    collapsible: n = "offcanvas",
                    className: o,
                    children: d,
                    ...l
                } = e, {
                    isMobile: c,
                    state: u,
                    openMobile: f,
                    setOpenMobile: p
                } = g();
                return "none" === n ? (0, r.jsx)("div", {
                    className: (0, i.cn)("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", o),
                    ref: a,
                    ...l,
                    children: d
                }) : c ? (0, r.jsxs)(m.Sheet, {
                    onOpenChange: p,
                    open: f,
                    ...l,
                    children: [(0, r.jsx)(m.SheetTitle, {
                        className: "sr-only",
                        children: "Sidebar"
                    }), (0, r.jsx)(m.SheetDescription, {
                        className: "sr-only",
                        children: "Mobile Sidebar"
                    }), (0, r.jsx)(m.SheetContent, {
                        className: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden",
                        "data-mobile": "true",
                        "data-sidebar": "sidebar",
                        side: t,
                        style: {
                            "--sidebar-width": "18rem"
                        },
                        children: (0, r.jsx)("div", {
                            className: "flex h-full w-full flex-col",
                            children: d
                        })
                    })]
                }) : (0, r.jsxs)("div", {
                    className: "group peer hidden md:block",
                    "data-collapsible": "collapsed" === u ? n : "",
                    "data-side": t,
                    "data-state": u,
                    "data-variant": s,
                    ref: a,
                    children: [(0, r.jsx)("div", {
                        className: (0, i.cn)("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", "floating" === s || "inset" === s ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
                    }), (0, r.jsx)("div", {
                        className: (0, i.cn)("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", "left" === t ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", "floating" === s || "inset" === s ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", o),
                        ...l,
                        children: (0, r.jsx)("div", {
                            className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow",
                            "data-sidebar": "sidebar",
                            children: d
                        })
                    })]
                })
            });
            v.displayName = "Sidebar";
            let N = s.forwardRef((e, a) => {
                let {
                    className: t,
                    onClick: s,
                    ...n
                } = e, {
                    toggleSidebar: o
                } = g();
                return (0, r.jsxs)(c.Button, {
                    className: (0, i.cn)("h-7 w-7", t),
                    "data-sidebar": "trigger",
                    onClick: e => {
                        null == s || s(e), o()
                    },
                    ref: a,
                    size: "icon",
                    variant: "ghost",
                    ...n,
                    children: [(0, r.jsx)(d.A, {}), (0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle Sidebar"
                    })]
                })
            });
            N.displayName = "SidebarTrigger";
            let w = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e, {
                    toggleSidebar: n
                } = g();
                return (0, r.jsx)("button", {
                    "aria-label": "Toggle Sidebar",
                    className: (0, i.cn)("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t),
                    "data-sidebar": "rail",
                    onClick: n,
                    ref: a,
                    tabIndex: -1,
                    title: "Toggle Sidebar",
                    ...s
                })
            });
            w.displayName = "SidebarRail";
            let y = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("main", {
                    className: (0, i.cn)("relative flex min-h-svh flex-1 flex-col bg-background", "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", t),
                    ref: a,
                    ...s
                })
            });
            y.displayName = "SidebarInset";
            let j = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(u.Input, {
                    className: (0, i.cn)("focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2", t),
                    "data-sidebar": "input",
                    ref: a,
                    ...s
                })
            });
            j.displayName = "SidebarInput";
            let S = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("flex flex-col gap-2 p-2", t),
                    "data-sidebar": "header",
                    ref: a,
                    ...s
                })
            });
            S.displayName = "SidebarHeader";
            let R = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("flex flex-col gap-2 p-2", t),
                    "data-sidebar": "footer",
                    ref: a,
                    ...s
                })
            });
            R.displayName = "SidebarFooter";
            let k = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)(f.Separator, {
                    className: (0, i.cn)("bg-sidebar-border mx-2 w-auto", t),
                    "data-sidebar": "separator",
                    ref: a,
                    ...s
                })
            });
            k.displayName = "SidebarSeparator";
            let C = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto", t),
                    "data-sidebar": "content",
                    ref: a,
                    ...s
                })
            });
            C.displayName = "SidebarContent";
            let M = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("relative flex w-full min-w-0 flex-col p-2", t),
                    "data-sidebar": "group",
                    ref: a,
                    ...s
                })
            });
            M.displayName = "SidebarGroup";
            let z = s.forwardRef((e, a) => {
                let {
                    className: t,
                    asChild: s = !1,
                    ...o
                } = e, d = s ? n.DX : "div";
                return (0, r.jsx)(d, {
                    className: (0, i.cn)("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t),
                    "data-sidebar": "group-label",
                    ref: a,
                    ...o
                })
            });
            z.displayName = "SidebarGroupLabel";
            let T = s.forwardRef((e, a) => {
                let {
                    className: t,
                    asChild: s = !1,
                    ...o
                } = e, d = s ? n.DX : "button";
                return (0, r.jsx)(d, {
                    className: (0, i.cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", t),
                    "data-sidebar": "group-action",
                    ref: a,
                    ...o
                })
            });
            T.displayName = "SidebarGroupAction";
            let _ = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("w-full text-sm", t),
                    "data-sidebar": "group-content",
                    ref: a,
                    ...s
                })
            });
            _.displayName = "SidebarGroupContent";
            let D = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("ul", {
                    className: (0, i.cn)("flex w-full min-w-0 flex-col gap-1", t),
                    "data-sidebar": "menu",
                    ref: a,
                    ...s
                })
            });
            D.displayName = "SidebarMenu";
            let A = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("li", {
                    className: (0, i.cn)("group/menu-item relative", t),
                    "data-sidebar": "menu-item",
                    ref: a,
                    ...s
                })
            });
            A.displayName = "SidebarMenuItem";
            let L = (0, o.F)("peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            outline: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
                        },
                        size: {
                            default: "h-8 text-sm",
                            sm: "h-7 text-xs",
                            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                F = s.forwardRef((e, a) => {
                    let {
                        asChild: t = !1,
                        isActive: s = !1,
                        variant: o = "default",
                        size: d = "default",
                        tooltip: l,
                        className: c,
                        ...u
                    } = e, f = t ? n.DX : "button", {
                        isMobile: m,
                        state: p
                    } = g(), x = (0, r.jsx)(f, {
                        className: (0, i.cn)(L({
                            variant: o,
                            size: d
                        }), c),
                        "data-active": s,
                        "data-sidebar": "menu-button",
                        "data-size": d,
                        ref: a,
                        ...u
                    });
                    return l ? ("string" == typeof l && (l = {
                        children: l
                    }), (0, r.jsxs)(b.Tooltip, {
                        children: [(0, r.jsx)(b.TooltipTrigger, {
                            asChild: !0,
                            children: x
                        }), (0, r.jsx)(b.TooltipContent, {
                            align: "center",
                            hidden: "collapsed" !== p || m,
                            side: "right",
                            ...l
                        })]
                    })) : x
                });
            F.displayName = "SidebarMenuButton";
            let I = s.forwardRef((e, a) => {
                let {
                    className: t,
                    asChild: s = !1,
                    showOnHover: o = !1,
                    ...d
                } = e, l = s ? n.DX : "button";
                return (0, r.jsx)(l, {
                    className: (0, i.cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", o && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", t),
                    "data-sidebar": "menu-action",
                    ref: a,
                    ...d
                })
            });
            I.displayName = "SidebarMenuAction";
            let P = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, i.cn)("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", t),
                    "data-sidebar": "menu-badge",
                    ref: a,
                    ...s
                })
            });
            P.displayName = "SidebarMenuBadge";
            let B = s.forwardRef((e, a) => {
                let {
                    className: t,
                    showIcon: n = !1,
                    ...o
                } = e, d = s.useMemo(() => "".concat(Math.floor(40 * Math.random()) + 50, "%"), []);
                return (0, r.jsxs)("div", {
                    className: (0, i.cn)("flex h-8 items-center gap-2 rounded-md px-2", t),
                    "data-sidebar": "menu-skeleton",
                    ref: a,
                    ...o,
                    children: [n && (0, r.jsx)(p.Skeleton, {
                        className: "size-4 rounded-md",
                        "data-sidebar": "menu-skeleton-icon"
                    }), (0, r.jsx)(p.Skeleton, {
                        className: "h-4 max-w-[--skeleton-width] flex-1",
                        "data-sidebar": "menu-skeleton-text",
                        style: {
                            "--skeleton-width": d
                        }
                    })]
                })
            });
            B.displayName = "SidebarMenuSkeleton";
            let E = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("ul", {
                    className: (0, i.cn)("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", t),
                    "data-sidebar": "menu-sub",
                    ref: a,
                    ...s
                })
            });
            E.displayName = "SidebarMenuSub";
            let G = s.forwardRef((e, a) => {
                let { ...t
                } = e;
                return (0, r.jsx)("li", {
                    ref: a,
                    ...t
                })
            });
            G.displayName = "SidebarMenuSubItem";
            let U = s.forwardRef((e, a) => {
                let {
                    asChild: t = !1,
                    size: s = "md",
                    isActive: o,
                    className: d,
                    ...l
                } = e, c = t ? n.DX : "a";
                return (0, r.jsx)(c, {
                    className: (0, i.cn)("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", "sm" === s && "text-xs", "md" === s && "text-sm", "group-data-[collapsible=icon]:hidden", d),
                    "data-active": o,
                    "data-sidebar": "menu-sub-button",
                    "data-size": s,
                    ref: a,
                    ...l
                })
            });
            U.displayName = "SidebarMenuSubButton"
        },
        40538: (e, a, t) => {
            t.r(a), t.d(a, {
                Skeleton: () => n
            });
            var r = t(154),
                s = t(5154);

            function n(e) {
                let {
                    className: a,
                    ...t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)("animate-pulse rounded-md bg-muted", a),
                    ...t
                })
            }
        },
        75449: (e, a, t) => {
            t.r(a), t.d(a, {
                Table: () => o,
                TableBody: () => l,
                TableCaption: () => m,
                TableCell: () => f,
                TableFooter: () => i,
                TableHead: () => u,
                TableHeader: () => d,
                TableRow: () => c
            });
            var r = t(154),
                s = t(98930),
                n = t(5154);
            let o = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: "relative w-full overflow-auto",
                    children: (0, r.jsx)("table", {
                        className: (0, n.cn)("w-full caption-bottom text-sm", t),
                        ref: a,
                        ...s
                    })
                })
            });
            o.displayName = "Table";
            let d = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("thead", {
                    className: (0, n.cn)("[&_tr]:border-b", t),
                    ref: a,
                    ...s
                })
            });
            d.displayName = "TableHeader";
            let l = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("tbody", {
                    className: (0, n.cn)("[&_tr:last-child]:border-0", t),
                    ref: a,
                    ...s
                })
            });
            l.displayName = "TableBody";
            let i = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("tfoot", {
                    className: (0, n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t),
                    ref: a,
                    ...s
                })
            });
            i.displayName = "TableFooter";
            let c = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("tr", {
                    className: (0, n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t),
                    ref: a,
                    ...s
                })
            });
            c.displayName = "TableRow";
            let u = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("th", {
                    className: (0, n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", t),
                    ref: a,
                    ...s
                })
            });
            u.displayName = "TableHead";
            let f = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("td", {
                    className: (0, n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", t),
                    ref: a,
                    ...s
                })
            });
            f.displayName = "TableCell";
            let m = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("caption", {
                    className: (0, n.cn)("mt-4 text-sm text-muted-foreground", t),
                    ref: a,
                    ...s
                })
            });
            m.displayName = "TableCaption"
        },
        83801: (e, a, t) => {
            t.r(a), t.d(a, {
                Textarea: () => o
            });
            var r = t(154),
                s = t(98930),
                n = t(5154);
            let o = s.forwardRef((e, a) => {
                let {
                    className: t,
                    ...s
                } = e;
                return (0, r.jsx)("textarea", {
                    className: (0, n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: a,
                    ...s
                })
            });
            o.displayName = "Textarea"
        },
        17533: (e, a, t) => {
            t.r(a), t.d(a, {
                ToggleGroup: () => i,
                ToggleGroupItem: () => c
            });
            var r = t(154),
                s = t(98930),
                n = t(58896),
                o = t(5154),
                d = t(71279);
            let l = s.createContext({
                    size: "default",
                    variant: "default"
                }),
                i = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        variant: s,
                        size: d,
                        children: i,
                        ...c
                    } = e;
                    return (0, r.jsx)(n.bL, {
                        className: (0, o.cn)("flex items-center justify-center gap-1", t),
                        ref: a,
                        ...c,
                        children: (0, r.jsx)(l.Provider, {
                            value: {
                                variant: s,
                                size: d
                            },
                            children: i
                        })
                    })
                });
            i.displayName = n.bL.displayName;
            let c = s.forwardRef((e, a) => {
                let {
                    className: t,
                    children: i,
                    variant: c,
                    size: u,
                    ...f
                } = e, m = s.useContext(l);
                return (0, r.jsx)(n.q7, {
                    className: (0, o.cn)((0, d.toggleVariants)({
                        variant: m.variant || c,
                        size: m.size || u
                    }), t),
                    ref: a,
                    ...f,
                    children: i
                })
            });
            c.displayName = n.q7.displayName
        },
        71279: (e, a, t) => {
            t.r(a), t.d(a, {
                Toggle: () => i,
                toggleVariants: () => l
            });
            var r = t(154),
                s = t(98930),
                n = t(99896),
                o = t(99751),
                d = t(5154);
            let l = (0, o.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", {
                    variants: {
                        variant: {
                            default: "bg-transparent",
                            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                        },
                        size: {
                            default: "h-10 px-3",
                            sm: "h-9 px-2.5",
                            lg: "h-11 px-5"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                i = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        variant: s,
                        size: o,
                        ...i
                    } = e;
                    return (0, r.jsx)(n.b, {
                        className: (0, d.cn)(l({
                            variant: s,
                            size: o,
                            className: t
                        })),
                        ref: a,
                        ...i
                    })
                });
            i.displayName = n.b.displayName
        },
        86020: (e, a, t) => {
            t.r(a), t.d(a, {
                Tooltip: () => l,
                TooltipContent: () => c,
                TooltipProvider: () => d,
                TooltipTrigger: () => i
            });
            var r = t(154),
                s = t(98930),
                n = t(75983),
                o = t(5154);
            let d = n.Kq,
                l = n.bL,
                i = n.l9,
                c = s.forwardRef((e, a) => {
                    let {
                        className: t,
                        sideOffset: s = 4,
                        ...d
                    } = e;
                    return (0, r.jsx)(n.UC, {
                        className: (0, o.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
                        ref: a,
                        sideOffset: s,
                        ...d
                    })
                });
            c.displayName = n.UC.displayName
        },
        1031: (e, a, t) => {
            t.r(a), t.d(a, {
                useIsMobile: () => s
            });
            var r = t(98930);

            function s() {
                let [e, a] = r.useState(void 0);
                return r.useEffect(() => {
                    let e = window.matchMedia("(max-width: ".concat(767, "px)")),
                        t = () => {
                            a(window.innerWidth < 768)
                        };
                    return e.addEventListener("change", t), a(window.innerWidth < 768), () => e.removeEventListener("change", t)
                }, []), !!e
            }
        }
    }
]);