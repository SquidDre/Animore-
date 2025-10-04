module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/ani-app/app/map/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ani-app/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // Next.js router hook
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-ssr] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-ssr] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-ssr] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-zoom/src/index.js [app-ssr] (ecmascript)");
"use client"; // 👈 Required if you're in Next.js App Router
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [animeData, setAnimeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        visible: false,
        content: null,
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnimeData(sampleAnimes);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!animeData || animeData.length === 0) return;
        // what is svg? it is the d3 selection of the svg element
        const svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](svgRef.current);
        svg.selectAll("*").remove(); // Clear previous contents
        const { width, height } = svg.node().getBoundingClientRect();
        const margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        };
        // Scales for positioning the points based on umap_x and umap_y
        const xExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"](animeData, (d)=>d.umap_x);
        const yExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"](animeData, (d)=>d.umap_y);
        // main container for all points
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
        const xScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"]().domain([
            xExtent[0] - 1,
            xExtent[1] + 1
        ]).range([
            0,
            width - margin.left - margin.right
        ]);
        const yScale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"]().domain([
            yExtent[0] - 1,
            yExtent[1] + 1
        ]).range([
            height - margin.top - margin.bottom,
            0
        ]); // Invert y-axis for correct orientation
        g.selectAll("circle").data(animeData).join("circle")// this is where the points are positioned
        .attr("cx", (d)=>xScale(d.umap_x)).attr("cy", (d)=>yScale(d.umap_y))// radius of each point
        .attr("r", 6)// color of each point
        .attr("fill", "black")// opacity of each point
        .attr("opacity", 0.7).style("cursor", "pointer").on("mouseover", (event, d)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](event.currentTarget).attr("fill", "orange").attr("r", 10);
            setTooltip({
                visible: true,
                content: d,
                x: event.pageX,
                y: event.pageY
            });
        }).on("mouseout", (event, d)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"](event.currentTarget).attr("fill", "black").attr("r", 6);
            setTooltip({
                visible: false,
                content: null,
                x: 0,
                y: 0
            });
        });
        const zoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoom"]().scaleExtent([
            0.5,
            20
        ]) // Limit zoom scale
        .on("zoom", (event)=>{
            g.attr("transform"), event.transform.toString();
        });
        svg.call(zoom); // Type assertion for d3 zoom
    }, [
        animeData
    ]); // re-run when animeData changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans min-h-screen p-4 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between gap-4 m-4 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        onClick: ()=>router.push(""),
                        className: "m-4 mt-4 text-4xl font-bold flex",
                        children: [
                            "ANIMORE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-blink text-amber-300",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/ani-app/app/map/page.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 ml-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/signup"),
                                className: "flex-wrap-reverse outline-2 px-6 py-3 my-3 bg-black text-white hover:bg-white hover:text-black transition font-bold",
                                children: "SIGNUP"
                            }, void 0, false, {
                                fileName: "[project]/ani-app/app/map/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/login"),
                                className: "flex-wrap-reverse outline-2 px-6 py-3 my-3 bg-black text-white hover:bg-white hover:text-black transition font-bold",
                                children: "LOGIN"
                            }, void 0, false, {
                                fileName: "[project]/ani-app/app/map/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ani-app/app/map/page.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[calc(100vh-150px)] border rounded-lg shadow-lg bg-white overflowh-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            ref: svgRef,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/ani-app/app/map/page.tsx",
                            lineNumber: 156,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this),
                    tooltip.visible && tooltip.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ani$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bg-white p-4 border rounded-lg shadow-lg max-w-xs",
                        style: {
                            top: tooltip.y + 10,
                            left: tooltip.x + 10
                        }
                    }, void 0, false, {
                        fileName: "[project]/ani-app/app/map/page.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ani-app/app/map/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ani-app/app/map/page.tsx",
        lineNumber: 131,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__baf86174._.js.map