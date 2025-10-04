(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ani-app/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/navigation.js [app-client] (ecmascript)"); // Next.js router hook
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SiteHeader() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return(//what does each class do?
    //flex makes it a flexbox container which allows for flexible layouts
    //justify-between spaces out the child elements to the edges
    //items-center vertically centers the child elements
    //p-4 sm:p-8 adds padding of 1rem on all sides for small screens and 2rem for larger screens
    //border-b border-gray-300 adds a bottom border with a light gray color
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex justify-between items-center p-4 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                onClick: ()=>router.push("/"),
                className: "text-4xl font-bold cursor-pointer flex",
                children: [
                    "ANIMORE",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-blink text-amber-300",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/ani-app/components/SiteHeader.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ani-app/components/SiteHeader.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/signup"),
                        className: "outline-2 px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition font-bold",
                        children: "SIGNUP"
                    }, void 0, false, {
                        fileName: "[project]/ani-app/components/SiteHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/login"),
                        className: "outline-2 px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition font-bold",
                        children: "   LOGIN"
                    }, void 0, false, {
                        fileName: "[project]/ani-app/components/SiteHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ani-app/components/SiteHeader.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ani-app/components/SiteHeader.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this));
}
_s(SiteHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ani-app/app/map/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-zoom/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/components/SiteHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // Required if you're in Next.js App Router
;
;
;
;
const sampleAnimes = [
    {
        id: 1,
        title: 'Attack on Titan',
        genres: [
            'Action',
            'Drama',
            'Fantasy'
        ],
        synopsis: 'In a world where humanity resides within enormous walls, giant humanoid Titans prey on them. The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown.',
        image_url: 'https://placehold.co/300x450/7f1d1d/fee2e2?text=AoT',
        umap_x: -8.5,
        umap_y: 10.2
    },
    {
        id: 2,
        title: 'Steins;Gate',
        genres: [
            'Sci-Fi',
            'Thriller',
            'Drama'
        ],
        synopsis: 'A group of friends who have customized their microwave into a device that can send text messages to the past.',
        image_url: 'https://placehold.co/300x450/064e3b/d1fae5?text=Steins;Gate',
        umap_x: 5.1,
        umap_y: -7.3
    },
    {
        id: 3,
        title: 'Your Name.',
        genres: [
            'Romance',
            'Supernatural',
            'Drama'
        ],
        synopsis: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.',
        image_url: 'https://placehold.co/300x450/1e3a8a/dbeafe?text=Your+Name',
        umap_x: 12.8,
        umap_y: 3.5
    },
    {
        id: 4,
        title: 'Death Note',
        genres: [
            'Thriller',
            'Mystery',
            'Supernatural'
        ],
        synopsis: 'A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it.',
        image_url: 'https://placehold.co/300x450/171717/e5e5e5?text=Death+Note',
        umap_x: 2.3,
        umap_y: -9.1
    },
    {
        id: 5,
        title: 'My Neighbor Totoro',
        genres: [
            'Fantasy',
            'Slice of Life'
        ],
        synopsis: 'Two young girls move to the countryside to be near their ailing mother and have adventures with the wondrous forest spirits who live nearby.',
        image_url: 'https://placehold.co/300x450/059669/a7f3d0?text=Totoro',
        umap_x: 15.2,
        umap_y: 8.9
    },
    {
        id: 6,
        title: 'K-On!',
        genres: [
            'Slice of Life',
            'Comedy',
            'Music'
        ],
        synopsis: 'A group of high school girls form a light music club. Their days are filled with practice, performances, and heartwarming moments.',
        image_url: 'https://placehold.co/300x450/be185d/fce7f3?text=K-On!',
        umap_x: 18.5,
        umap_y: 12.1
    },
    {
        id: 7,
        title: 'Cowboy Bebop',
        genres: [
            'Action',
            'Sci-Fi',
            'Adventure'
        ],
        synopsis: 'The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.',
        image_url: 'https://placehold.co/300x450/9a3412/fed7aa?text=Cowboy+Bebop',
        umap_x: -12.3,
        umap_y: -4.8
    },
    {
        id: 8,
        title: 'Fullmetal Alchemist: Brotherhood',
        genres: [
            'Action',
            'Adventure',
            'Fantasy'
        ],
        synopsis: 'Two brothers search for the Philosopher\'s Stone after an attempt to revive their deceased mother goes awry and leaves them with damaged bodies.',
        image_url: 'https://placehold.co/300x450/78350f/fef3c7?text=FMAB',
        umap_x: -10.1,
        umap_y: 8.5
    },
    {
        id: 9,
        title: 'Mushishi',
        genres: [
            'Fantasy',
            'Mystery',
            'Slice of Life'
        ],
        synopsis: 'A "Mushi Master" named Ginko travels to investigate and help people troubled by supernatural creatures called Mushi.',
        image_url: 'https://placehold.co/300x450/365314/dcfce7?text=Mushishi',
        umap_x: 14.9,
        umap_y: 9.5
    },
    {
        id: 10,
        title: 'Psycho-Pass',
        genres: [
            'Sci-Fi',
            'Thriller',
            'Police'
        ],
        synopsis: 'In a futuristic Japan, the Sibyl System can determine a person\'s criminal potential. The story follows Akane Tsunemori, a new Inspector.',
        image_url: 'https://placehold.co/300x450/1e40af/dbeafe?text=Psycho-Pass',
        umap_x: 4.5,
        umap_y: -8.2
    }
];
function SignupPage() {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [animeData, setAnimeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        content: null,
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            setAnimeData(sampleAnimes);
        }
    }["SignupPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignupPage.useEffect": ()=>{
            if (!animeData || animeData.length === 0) return;
            // what is svg? it is the d3 selection of the svg element
            const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
            svg.selectAll("*").remove(); // Clear previous contents
            const { width, height } = svg.node().getBoundingClientRect();
            const margin = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            };
            // Scales for positioning the points based on umap_x and umap_y
            const xExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"](animeData, {
                "SignupPage.useEffect.xExtent": (d)=>d.umap_x
            }["SignupPage.useEffect.xExtent"]);
            const yExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"](animeData, {
                "SignupPage.useEffect.yExtent": (d)=>d.umap_y
            }["SignupPage.useEffect.yExtent"]);
            // main container for all points
            const g = svg.append("g").attr("transform", "translate(".concat(margin.left, ",").concat(margin.top, ")"));
            const xScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"]().domain([
                xExtent[0] - 1,
                xExtent[1] + 1
            ]).range([
                0,
                width - margin.left - margin.right
            ]);
            const yScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"]().domain([
                yExtent[0] - 1,
                yExtent[1] + 1
            ]).range([
                height - margin.top - margin.bottom,
                0
            ]); // Invert y-axis for correct orientation
            g.selectAll("circle").data(animeData).join("circle")// this is where the points are positioned
            .attr("cx", {
                "SignupPage.useEffect": (d)=>xScale(d.umap_x)
            }["SignupPage.useEffect"]).attr("cy", {
                "SignupPage.useEffect": (d)=>yScale(d.umap_y)
            }["SignupPage.useEffect"])// radius of each point
            .attr("r", 6)// color of each point
            .attr("fill", "white")// opacity of each point
            .attr("opacity", 0.8).style("cursor", "pointer").on("mouseover", {
                "SignupPage.useEffect": (event, d)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](event.currentTarget).attr("fill", "orange").attr("r", 10);
                    setTooltip({
                        visible: true,
                        content: d,
                        x: event.pageX,
                        y: event.pageY
                    });
                }
            }["SignupPage.useEffect"]).on("mouseout", {
                "SignupPage.useEffect": (event, d)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](event.currentTarget).attr("fill", "white").attr("r", 6);
                    setTooltip({
                        visible: false,
                        content: null,
                        x: 0,
                        y: 0
                    });
                }
            }["SignupPage.useEffect"]);
            const zoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoom"]().scaleExtent([
                0.5,
                20
            ]) // Limit zoom scale
            .on("zoom", {
                "SignupPage.useEffect.zoom": (event)=>{
                    g.attr("transform", event.transform.toString());
                }
            }["SignupPage.useEffect.zoom"]);
            svg.call(zoom); // Type assertion for d3 zoom
        }
    }["SignupPage.useEffect"], [
        animeData
    ]); // re-run when animeData changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans min-h-screen p-4 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/ani-app/app/map/page.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[calc(100vh-150px)] border rounded-lg shadow-lg bg-black overflowh-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            ref: svgRef,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/ani-app/app/map/page.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    tooltip.visible && tooltip.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bg-white p-4 border rounded-lg shadow-lg max-w-xs",
                        style: {
                            top: tooltip.y + 10,
                            left: tooltip.x + 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ani-app/app/map/page.tsx",
                lineNumber: 136,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ani-app/app/map/page.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
_s(SignupPage, "6sPEtMT4Gg55zK+DTw3NxdWNqXA=");
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ani-app_6d8b6e0e._.js.map