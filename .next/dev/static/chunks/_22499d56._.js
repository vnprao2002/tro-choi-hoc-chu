(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/game-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const games = [
    {
        id: "letter-game",
        name: "🎮 Học Chữ Cái",
        description: "Trò chơi học chữ cái tiếng Việt",
        icon: "🎮"
    },
    {
        id: "chiec-non-chu-cai",
        name: "🎩 Chiếc Nón Chữ Cái",
        description: "Trò chơi với chiếc nón chữ cái",
        icon: "🎩"
    },
    {
        id: "learn-letters-game",
        name: "🍎 Hái Trái Cây",
        description: "Trò chơi hái trái cây thú vị",
        icon: "🍎"
    },
    {
        id: "nong-trai",
        name: "🚜 Nông Trại",
        description: "Trò chơi nông trại vui nhộn",
        icon: "🚜"
    },
    {
        id: "tim-chu-khac-biet",
        name: "🔍 Tìm Chữ Khác Biệt",
        description: "Tìm chữ cái khác biệt",
        icon: "🔍"
    },
    {
        id: "tim-tu",
        name: "🔎 Tìm Từ",
        description: "Trò chơi tìm từ thú vị",
        icon: "🔎"
    }
];
function GameMenu({ onSelectGame }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 text-6xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '3s'
                },
                children: "✨"
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-20 text-5xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '2.5s',
                    animationDelay: '0.5s'
                },
                children: "⭐"
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '2.8s',
                    animationDelay: '1s'
                },
                children: "🎈"
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '3.2s',
                    animationDelay: '0.3s'
                },
                children: "🎨"
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg mb-2",
                        children: "🎮 Trò Chơi Giáo Dục 🎮"
                    }, void 0, false, {
                        fileName: "[project]/components/game-menu.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl text-purple-600 font-bold",
                        children: "Chọn trò chơi bạn muốn chơi"
                    }, void 0, false, {
                        fileName: "[project]/components/game-menu.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10",
                children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectGame(game.id),
                        className: "bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:shadow-3xl transform hover:scale-105 transition-all text-left group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4 group-hover:scale-110 transition-transform",
                                children: game.icon
                            }, void 0, false, {
                                fileName: "[project]/components/game-menu.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-800 mb-2",
                                children: game.name
                            }, void 0, false, {
                                fileName: "[project]/components/game-menu.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: game.description
                            }, void 0, false, {
                                fileName: "[project]/components/game-menu.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, game.id, true, {
                        fileName: "[project]/components/game-menu.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base font-medium text-gray-600",
                    children: "Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa"
                }, void 0, false, {
                    fileName: "[project]/components/game-menu.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/game-menu.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game-menu.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = GameMenu;
var _c;
__turbopack_context__.k.register(_c, "GameMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/vietnamese-alphabet.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Vietnamese alphabet with diacritics - organized by base letter
// Bảng chữ cái tiếng Việt chuẩn: A, Ă, Â, B, C, D, Đ, E, Ê, G, H, I, K, L, M, N, O, Ô, Ơ, P, Q, R, S, T, U, Ư, V, X, Y
__turbopack_context__.s([
    "VIETNAMESE_ALPHABET_GROUPS",
    ()=>VIETNAMESE_ALPHABET_GROUPS,
    "VIETNAMESE_BASE_LETTERS",
    ()=>VIETNAMESE_BASE_LETTERS,
    "WORD_POOLS",
    ()=>WORD_POOLS,
    "extractLettersFromWord",
    ()=>extractLettersFromWord,
    "getAllDiacriticsForLetter",
    ()=>getAllDiacriticsForLetter,
    "getRandomAnswers",
    ()=>getRandomAnswers
]);
const VIETNAMESE_ALPHABET_GROUPS = {
    a: [
        "a",
        "á",
        "à",
        "ả",
        "ã",
        "ạ"
    ],
    ă: [
        "ă",
        "ắ",
        "ằ",
        "ẳ",
        "ẵ",
        "ặ"
    ],
    â: [
        "â",
        "ấ",
        "ầ",
        "ẩ",
        "ẫ",
        "ậ"
    ],
    b: [
        "b"
    ],
    c: [
        "c"
    ],
    d: [
        "d"
    ],
    đ: [
        "đ"
    ],
    e: [
        "e",
        "é",
        "è",
        "ẻ",
        "ẽ",
        "ẹ"
    ],
    ê: [
        "ê",
        "ế",
        "ề",
        "ễ",
        "ệ"
    ],
    g: [
        "g"
    ],
    h: [
        "h"
    ],
    i: [
        "i",
        "í",
        "ì",
        "ỉ",
        "ĩ",
        "ị"
    ],
    k: [
        "k"
    ],
    l: [
        "l"
    ],
    m: [
        "m"
    ],
    n: [
        "n"
    ],
    o: [
        "o",
        "ó",
        "ò",
        "ỏ",
        "õ",
        "ọ"
    ],
    ô: [
        "ô",
        "ố",
        "ồ",
        "ổ",
        "ỗ",
        "ộ"
    ],
    ơ: [
        "ơ",
        "ớ",
        "ờ",
        "ở",
        "ỡ",
        "ợ"
    ],
    p: [
        "p"
    ],
    q: [
        "q"
    ],
    r: [
        "r"
    ],
    s: [
        "s"
    ],
    t: [
        "t"
    ],
    u: [
        "u",
        "ú",
        "ù",
        "ủ",
        "ũ",
        "ụ"
    ],
    ư: [
        "ư",
        "ứ",
        "ừ",
        "ử",
        "ữ",
        "ự"
    ],
    v: [
        "v"
    ],
    x: [
        "x"
    ],
    y: [
        "y",
        "ý",
        "ỳ",
        "ỷ",
        "ỹ",
        "ỵ"
    ]
};
const VIETNAMESE_BASE_LETTERS = [
    "a",
    "ă",
    "â",
    "b",
    "c",
    "d",
    "đ",
    "e",
    "ê",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ô",
    "ơ",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "ư",
    "v",
    "x",
    "y"
];
function getAllDiacriticsForLetter(baseLetter) {
    return VIETNAMESE_ALPHABET_GROUPS[baseLetter] || [
        baseLetter
    ];
}
const WORD_POOLS = {
    family: [
        {
            vietnamese: "mẹ",
            image: "https://images.unsplash.com/photo-1494395799317-773bedeeb500?w=400&h=400&fit=crop",
            targetLetter: "ẹ"
        },
        {
            vietnamese: "bố",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            targetLetter: "ố"
        },
        {
            vietnamese: "anh",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            targetLetter: "nh"
        },
        {
            vietnamese: "em",
            image: "https://images.unsplash.com/photo-1503454537688-e6694265ceef?w=400&h=400&fit=crop",
            targetLetter: "em"
        },
        {
            vietnamese: "gia đình",
            image: "https://images.unsplash.com/photo-1511992514110-9b02e84b4cb6?w=400&h=400&fit=crop",
            targetLetter: "đ"
        },
        {
            vietnamese: "bà",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
            targetLetter: "à"
        }
    ],
    animals: [
        {
            vietnamese: "chó",
            image: "https://images.unsplash.com/photo-1633722715463-d30628519d2e?w=400&h=400&fit=crop",
            targetLetter: "ó"
        },
        {
            vietnamese: "mèo",
            image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
            targetLetter: "ò"
        },
        {
            vietnamese: "vịt",
            image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
            targetLetter: "ị"
        },
        {
            vietnamese: "cá",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
            targetLetter: "á"
        },
        {
            vietnamese: "gà",
            image: "https://images.unsplash.com/photo-1500626046944-287a6106e257?w=400&h=400&fit=crop",
            targetLetter: "à"
        },
        {
            vietnamese: "heo",
            image: "https://images.unsplash.com/photo-1516059211519-b3f43e71b8e1?w=400&h=400&fit=crop",
            targetLetter: "eo"
        }
    ],
    fruits: [
        {
            vietnamese: "táo",
            image: "https://images.unsplash.com/photo-1560806674368-fd86d36ae8d0?w=400&h=400&fit=crop",
            targetLetter: "á"
        },
        {
            vietnamese: "chuối",
            image: "https://images.unsplash.com/photo-1587859211305-d92bc9efeb81?w=400&h=400&fit=crop",
            targetLetter: "ối"
        },
        {
            vietnamese: "cam",
            image: "https://images.unsplash.com/photo-1557803104368-fd86d36ae8d0?w=400&h=400&fit=crop",
            targetLetter: "am"
        },
        {
            vietnamese: "dâu",
            image: "https://images.unsplash.com/photo-1595599810694-2d72ca91a633?w=400&h=400&fit=crop",
            targetLetter: "â"
        },
        {
            vietnamese: "nho",
            image: "https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=400&fit=crop",
            targetLetter: "ho"
        },
        {
            vietnamese: "dừa",
            image: "https://images.unsplash.com/photo-1608550453385-39a2c6e504e8?w=400&h=400&fit=crop",
            targetLetter: "ừ"
        }
    ],
    colors: [
        {
            vietnamese: "đỏ",
            image: "/solid-red.png",
            targetLetter: "đ"
        },
        {
            vietnamese: "xanh",
            image: "/green-color.png",
            targetLetter: "xanh"
        },
        {
            vietnamese: "vàng",
            image: "/yellow-color.png",
            targetLetter: "à"
        },
        {
            vietnamese: "tím",
            image: "/purple-color.png",
            targetLetter: "í"
        },
        {
            vietnamese: "trắng",
            image: "/white-color.jpg",
            targetLetter: "ắ"
        },
        {
            vietnamese: "đen",
            image: "/black-color.jpg",
            targetLetter: "ề"
        }
    ],
    numbers: [
        {
            vietnamese: "một",
            image: "/number-one.jpg",
            targetLetter: "ộ"
        },
        {
            vietnamese: "hai",
            image: "/number-two.jpg",
            targetLetter: "ai"
        },
        {
            vietnamese: "ba",
            image: "/number-three.jpg",
            targetLetter: "ba"
        },
        {
            vietnamese: "bốn",
            image: "/number-four.jpg",
            targetLetter: "ố"
        },
        {
            vietnamese: "năm",
            image: "/number-five.png",
            targetLetter: "ă"
        },
        {
            vietnamese: "sáu",
            image: "/number-six.jpg",
            targetLetter: "á"
        }
    ]
};
function getRandomAnswers(correct, count = 3) {
    const answers = [
        correct
    ];
    const allLetters = VIETNAMESE_BASE_LETTERS.filter((l)=>l !== correct);
    while(answers.length < count){
        const random = allLetters[Math.floor(Math.random() * allLetters.length)];
        if (!answers.includes(random)) {
            answers.push(random);
        }
    }
    // Shuffle answers
    return answers.sort(()=>Math.random() - 0.5);
}
function extractLettersFromWord(word) {
    return word.split("").filter((char, index, arr)=>arr.indexOf(char) === index);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/word-pools.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Each word has: vietnamese text, image URL
__turbopack_context__.s([
    "WORD_POOLS",
    ()=>WORD_POOLS,
    "generateAnswerOptions",
    ()=>generateAnswerOptions,
    "generateWordOptions",
    ()=>generateWordOptions,
    "getAllVietnameseLetter",
    ()=>getAllVietnameseLetter,
    "getBaseVietnameseLetter",
    ()=>getBaseVietnameseLetter,
    "getWordPool",
    ()=>getWordPool,
    "getWordsWithAnyLetter",
    ()=>getWordsWithAnyLetter,
    "getWordsWithLetter",
    ()=>getWordsWithLetter,
    "wordContainsLetter",
    ()=>wordContainsLetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vietnamese-alphabet.ts [app-client] (ecmascript)");
;
const WORD_POOLS = {
    "family": [
        {
            "text": "mẹ",
            "image": "/images/family/me.jpg"
        },
        {
            "text": "bố",
            "image": "/images/family/bo.jpg"
        },
        {
            "text": "anh trai",
            "image": "/images/family/anh.jpg"
        },
        {
            "text": "chị gái",
            "image": "/images/family/chi.jpg"
        },
        {
            "text": "em gái",
            "image": "/images/family/em-gai.jpg"
        },
        {
            "text": "em trai",
            "image": "/images/family/em-trai.jpg"
        },
        {
            "text": "em bé",
            "image": "/images/family/be.jpg"
        },
        {
            "text": "bà",
            "image": "/images/family/ba.jpg"
        },
        {
            "text": "ông",
            "image": "/images/family/ong.jpg"
        },
        {
            "text": "cô",
            "image": "/images/family/co.jpg"
        },
        {
            "text": "chú",
            "image": "/images/family/chu.jpg"
        },
        {
            "text": "dì",
            "image": "/images/family/di.jpg"
        },
        {
            "text": "gia đình",
            "image": "/images/family/gia-dinh.jpg"
        }
    ],
    "healthcare": [
        {
            "text": "bác sĩ",
            "image": "/images/healthcare/bac-si.jpg"
        },
        {
            "text": "bác sĩ nhi",
            "image": "/images/healthcare/bac-si-nhi.jpg"
        },
        {
            "text": "y tá",
            "image": "/images/healthcare/y-ta.jpg"
        },
        {
            "text": "bệnh viện",
            "image": "/images/healthcare/benh-vien.jpg"
        },
        {
            "text": "phòng khám",
            "image": "/images/healthcare/phong-kham.jpg"
        },
        {
            "text": "phòng cấp cứu",
            "image": "/images/healthcare/phong-cap-cuu.jpg"
        },
        {
            "text": "thuốc",
            "image": "/images/healthcare/thuoc.jpg"
        },
        {
            "text": "hộp thuốc",
            "image": "/images/healthcare/hop-thuoc.jpg"
        },
        {
            "text": "băng gạc",
            "image": "/images/healthcare/bang-gac.jpg"
        },
        {
            "text": "nhiệt kế",
            "image": "/images/healthcare/nhiet-ke.jpg"
        },
        {
            "text": "ống nghe",
            "image": "/images/healthcare/ong-nghe.jpg"
        },
        {
            "text": "mũ phẫu thuật",
            "image": "/images/healthcare/mu-phau-thuat.jpg"
        },
        {
            "text": "găng tay",
            "image": "/images/healthcare/gang-tay.jpg"
        },
        {
            "text": "tăm bông",
            "image": "/images/healthcare/tam-bong.jpg"
        },
        {
            "text": "khẩu trang",
            "image": "/images/healthcare/khau-trang.jpg"
        },
        {
            "text": "nước rửa tay",
            "image": "/images/healthcare/nuoc-rua-tay.jpg"
        },
        {
            "text": "giường bệnh",
            "image": "/images/healthcare/giuong-benh.jpg"
        },
        {
            "text": "xe cứu thương",
            "image": "/images/healthcare/xe-cuu-thuong.jpg"
        },
        {
            "text": "tiêm chủng",
            "image": "/images/healthcare/tiem-chung.jpg"
        }
    ],
    "school": [
        {
            "text": "cô giáo",
            "image": "/images/school/co-giao.jpg"
        },
        {
            "text": "thầy giáo",
            "image": "/images/school/thay-giao.jpg"
        },
        {
            "text": "học sinh",
            "image": "/images/school/hoc-sinh.jpg"
        },
        {
            "text": "balo",
            "image": "/images/school/balo.jpg"
        },
        {
            "text": "bút",
            "image": "/images/school/but.jpg"
        },
        {
            "text": "bút màu",
            "image": "/images/school/but-mau.jpg"
        },
        {
            "text": "bút chì",
            "image": "/images/school/but-chi.jpg"
        },
        {
            "text": "vở",
            "image": "/images/school/vo.jpg"
        },
        {
            "text": "sách",
            "image": "/images/school/sach.jpg"
        },
        {
            "text": "bảng",
            "image": "/images/school/bang.jpg"
        },
        {
            "text": "bảng đen",
            "image": "/images/school/bang-den.jpg"
        },
        {
            "text": "phấn",
            "image": "/images/school/phan.jpg"
        },
        {
            "text": "thư viện",
            "image": "/images/school/thu-vien.jpg"
        },
        {
            "text": "phòng học",
            "image": "/images/school/phong-hoc.jpg"
        },
        {
            "text": "giờ ra chơi",
            "image": "/images/school/gio-ra-choi.jpg"
        },
        {
            "text": "sân trường",
            "image": "/images/school/san-truong.jpg"
        },
        {
            "text": "đồ chơi lớp học",
            "image": "/images/school/do-choi-lop-hoc.jpg"
        },
        {
            "text": "máy chiếu",
            "image": "/images/school/may-chieu.jpg"
        },
        {
            "text": "máy tính",
            "image": "/images/school/may-tinh.png"
        },
        {
            "text": "bảng tên",
            "image": "/images/school/bang-ten.jpg"
        },
        {
            "text": "thước kẻ",
            "image": "/images/school/thuoc-ke.jpg"
        },
        {
            "text": "tẩy xóa",
            "image": "/images/school/tay-xoa.jpg"
        }
    ],
    "cooking": [
        {
            "text": "đầu bếp",
            "image": "/images/cooking/dau-bep.jpg"
        },
        {
            "text": "nồi",
            "image": "/images/cooking/noi.jpg"
        },
        {
            "text": "nồi cơm",
            "image": "/images/cooking/noi-com.jpg"
        },
        {
            "text": "chảo",
            "image": "/images/cooking/chao.jpg"
        },
        {
            "text": "dao",
            "image": "/images/cooking/dao.jpg"
        },
        {
            "text": "dĩa",
            "image": "/images/cooking/dia.jpg"
        },
        {
            "text": "muỗng",
            "image": "/images/cooking/muong.jpg"
        },
        {
            "text": "muôi",
            "image": "/images/cooking/muoi.jpg"
        },
        {
            "text": "nhà bếp",
            "image": "/images/cooking/bep.jpg"
        },
        {
            "text": "bếp gas",
            "image": "/images/cooking/bep-gas.jpg"
        },
        {
            "text": "bếp điện",
            "image": "/images/cooking/bep-dien.jpg"
        },
        {
            "text": "lò nướng",
            "image": "/images/cooking/lo-nuong.jpg"
        },
        {
            "text": "lò vi sóng",
            "image": "/images/cooking/lo-vi-song.jpg"
        },
        {
            "text": "bát",
            "image": "/images/cooking/bat.jpg"
        },
        {
            "text": "thớt",
            "image": "/images/cooking/thot.jpg"
        },
        {
            "text": "tủ lạnh",
            "image": "/images/cooking/tu-lanh.jpg"
        },
        {
            "text": "ly",
            "image": "/images/cooking/ly.jpg"
        },
        {
            "text": "bàn ăn",
            "image": "/images/cooking/ban-an.jpg"
        },
        {
            "text": "khăn lau",
            "image": "/images/cooking/khan-lau.jpg"
        },
        {
            "text": "rau",
            "image": "/images/cooking/rau.jpg"
        },
        {
            "text": "trái cây",
            "image": "/images/cooking/trai-cay.jpg"
        },
        {
            "text": "vòi nước",
            "image": "/images/cooking/nuoc.jpg"
        },
        {
            "text": "bột mì",
            "image": "/images/cooking/bot-mi.jpg"
        },
        {
            "text": "sách công thức",
            "image": "/images/cooking/cong-thuc.jpg"
        },
        {
            "text": "tạp dề",
            "image": "/images/cooking/tap-de.jpg"
        },
        {
            "text": "gia vị",
            "image": "/images/cooking/gia-vi.jpg"
        },
        {
            "text": "dầu ăn",
            "image": "/images/cooking/dau-an.jpg"
        },
        {
            "text": "nấu ăn",
            "image": "/images/cooking/nau-an.jpg"
        }
    ],
    "animals": [
        {
            "text": "chó",
            "image": "/images/animal/cho.jpg"
        },
        {
            "text": "mèo",
            "image": "/images/animal/meo.jpg"
        },
        {
            "text": "vịt",
            "image": "/images/animal/vit.jpg"
        },
        {
            "text": "vịt con",
            "image": "/images/animal/vit-con.jpg"
        },
        {
            "text": "gà",
            "image": "/images/animal/ga.jpg"
        },
        {
            "text": "bò",
            "image": "/images/animal/bo.jpg"
        },
        {
            "text": "lợn",
            "image": "/images/animal/lon.jpg"
        },
        {
            "text": "ngựa",
            "image": "/images/animal/ngua.jpg"
        },
        {
            "text": "thỏ",
            "image": "/images/animal/tho.jpg"
        },
        {
            "text": "cừu",
            "image": "/images/animal/cuu.jpg"
        },
        {
            "text": "voi",
            "image": "/images/animal/voi.jpg"
        },
        {
            "text": "khỉ",
            "image": "/images/animal/khi.jpg"
        },
        {
            "text": "rùa",
            "image": "/images/animal/rua.jpg"
        },
        {
            "text": "ếch",
            "image": "/images/animal/ech.jpg"
        },
        {
            "text": "chim",
            "image": "/images/animal/chim.jpg"
        },
        {
            "text": "cá",
            "image": "/images/animal/ca.jpg"
        },
        {
            "text": "gấu",
            "image": "/images/animal/gau.jpg"
        },
        {
            "text": "hổ",
            "image": "/images/animal/ho.jpg"
        },
        {
            "text": "sư tử",
            "image": "/images/animal/su-tu.jpg"
        },
        {
            "text": "nai",
            "image": "/images/animal/nai.jpg"
        },
        {
            "text": "dê",
            "image": "/images/animal/de.jpg"
        },
        {
            "text": "chuột",
            "image": "/images/animal/chuot.jpg"
        },
        {
            "text": "cú mèo",
            "image": "/images/animal/cu-meo.jpg"
        },
        {
            "text": "chim cánh cụt",
            "image": "/images/animal/chim-canh-cut.jpg"
        },
        {
            "text": "cá heo",
            "image": "/images/animal/ca-heo.jpg"
        },
        {
            "text": "nhím",
            "image": "/images/animal/nhim.jpg"
        }
    ],
    "colors": [
        {
            "text": "màu đỏ",
            "image": "/images/colors/do.jpg"
        },
        {
            "text": "màu xanh lá",
            "image": "/images/colors/xanh-la.jpg"
        },
        {
            "text": "màu xanh dương",
            "image": "/images/colors/xanh-duong.jpg"
        },
        {
            "text": "màu vàng",
            "image": "/images/colors/vang.jpg"
        },
        {
            "text": "màu tím",
            "image": "/images/colors/tim.jpg"
        },
        {
            "text": "màu trắng",
            "image": "/images/colors/trang.jpg"
        },
        {
            "text": "màu đen",
            "image": "/images/colors/den.jpg"
        },
        {
            "text": "màu cam",
            "image": "/images/colors/cam.jpg"
        },
        {
            "text": "màu hồng",
            "image": "/images/colors/hong.jpg"
        },
        {
            "text": "màu nâu",
            "image": "/images/colors/nau.jpg"
        },
        {
            "text": "màu xám",
            "image": "/images/colors/xam.jpg"
        }
    ],
    "transport": [
        {
            "text": "ô tô",
            "image": "/images/transport/o-to.jpg"
        },
        {
            "text": "xe đạp",
            "image": "/images/transport/xe-dap.jpg"
        },
        {
            "text": "xe máy",
            "image": "/images/transport/xe-may.jpg"
        },
        {
            "text": "xe buýt",
            "image": "/images/transport/xe-buyt.jpg"
        },
        {
            "text": "tàu hỏa",
            "image": "/images/transport/tau-hoa.jpg"
        },
        {
            "text": "tàu lửa",
            "image": "/images/transport/tau-lua.jpg"
        },
        {
            "text": "máy bay",
            "image": "/images/transport/may-bay.jpg"
        },
        {
            "text": "tàu thủy",
            "image": "/images/transport/tau-thuy.jpg"
        },
        {
            "text": "thuyền",
            "image": "/images/transport/thuyen.jpg"
        },
        {
            "text": "cano",
            "image": "/images/transport/cano.jpg"
        },
        {
            "text": "taxi",
            "image": "/images/transport/taxi.jpg"
        },
        {
            "text": "xe đẩy trẻ",
            "image": "/images/transport/xe-day-tre.jpg"
        },
        {
            "text": "xe cút kít",
            "image": "/images/transport/xe-cut-kit.jpg"
        },
        {
            "text": "đèn giao thông",
            "image": "/images/transport/den-giao-thong.jpg"
        },
        {
            "text": "mũ bảo hiểm",
            "image": "/images/transport/mu-bao-hiem.jpg"
        },
        {
            "text": "ga tàu",
            "image": "/images/transport/ga-tau.jpg"
        },
        {
            "text": "sân bay",
            "image": "/images/transport/san-bay.jpg"
        },
        {
            "text": "bến xe",
            "image": "/images/transport/ben-xe.jpg"
        },
        {
            "text": "trạm xăng",
            "image": "/images/transport/tram-xang.jpg"
        },
        {
            "text": "vô lăng",
            "image": "/images/transport/vo-lang.jpg"
        }
    ],
    "farm": [
        {
            "text": "nông dân",
            "image": "/images/farm/nong-dan.jpg"
        },
        {
            "text": "trâu",
            "image": "/images/farm/trau.jpg"
        },
        {
            "text": "bò",
            "image": "/images/farm/bo.jpg"
        },
        {
            "text": "gà",
            "image": "/images/farm/ga.jpg"
        },
        {
            "text": "khoai",
            "image": "/images/farm/khoai.jpg"
        },
        {
            "text": "bắp",
            "image": "/images/farm/bap.jpg"
        },
        {
            "text": "lúa",
            "image": "/images/farm/lua.jpg"
        },
        {
            "text": "bí đỏ",
            "image": "/images/farm/bi-do.jpg"
        },
        {
            "text": "dưa hấu",
            "image": "/images/farm/dua-hau.jpg"
        },
        {
            "text": "vườn",
            "image": "/images/farm/vuon.jpg"
        },
        {
            "text": "cây ăn quả",
            "image": "/images/farm/cay-an-qua.jpg"
        },
        {
            "text": "rẫy",
            "image": "/images/farm/ray.jpg"
        },
        {
            "text": "nông trại",
            "image": "/images/farm/nong-trai.jpg"
        },
        {
            "text": "cuốc",
            "image": "/images/farm/cuoc.jpg"
        },
        {
            "text": "xẻng",
            "image": "/images/farm/xeng.jpg"
        },
        {
            "text": "máy cày",
            "image": "/images/farm/may-cay.jpg"
        },
        {
            "text": "hàng rào",
            "image": "/images/farm/hang-rao.jpg"
        },
        {
            "text": "chuồng trại",
            "image": "/images/farm/chuong-trai.jpg"
        },
        {
            "text": "tổ gà",
            "image": "/images/farm/to-ga.jpg"
        },
        {
            "text": "cỏ",
            "image": "/images/farm/co.jpg"
        },
        {
            "text": "tưới nước",
            "image": "/images/farm/tuoi-nuoc.jpg"
        },
        {
            "text": "phân bón",
            "image": "/images/farm/phan-bon.jpg"
        },
        {
            "text": "rơm",
            "image": "/images/farm/rom.jpg"
        },
        {
            "text": "giỏ hái",
            "image": "/images/farm/gio-hai.jpg"
        },
        {
            "text": "thu hoạch",
            "image": "/images/farm/thu-hoach.jpg"
        }
    ],
    "military": [
        {
            "text": "bộ đội",
            "image": "/images/military/bo-doi.jpg"
        },
        {
            "text": "quân phục",
            "image": "/images/military/quan-phuc.jpg"
        },
        {
            "text": "mũ cối",
            "image": "/images/military/mu-coi.jpg"
        },
        {
            "text": "giày bộ đội",
            "image": "/images/military/giay-bo-doi.jpg"
        },
        {
            "text": "ba lô",
            "image": "/images/military/ba-lo.jpg"
        },
        {
            "text": "doanh trại",
            "image": "/images/military/doanh-trai.jpg"
        },
        {
            "text": "cờ đỏ sao vàng",
            "image": "/images/military/co-do.jpg"
        },
        {
            "text": "xe quân đội",
            "image": "/images/military/xe-quan-doi.jpg"
        },
        {
            "text": "lều trại",
            "image": "/images/military/leu-trai.jpg"
        },
        {
            "text": "loa phóng thanh",
            "image": "/images/military/loa.jpg"
        },
        {
            "text": "thuyền quân đội",
            "image": "/images/military/thuyen-quan-doi.jpg"
        },
        {
            "text": "hành quân",
            "image": "/images/military/hanh-quan.jpg"
        },
        {
            "text": "súng trường",
            "image": "/images/military/sung-truong.jpg"
        },
        {
            "text": "máy bay quân sự",
            "image": "/images/military/may-bay-quan-su.jpg"
        }
    ],
    "fruits": [
        {
            "text": "táo",
            "image": "/images/food/tap.jpg"
        },
        {
            "text": "chuối",
            "image": "/images/food/chuoi.jpg"
        },
        {
            "text": "cam",
            "image": "/images/food/cam.jpg"
        },
        {
            "text": "dứa",
            "image": "/images/food/dua.jpg"
        },
        {
            "text": "nho",
            "image": "/images/food/nho.jpg"
        },
        {
            "text": "ổi",
            "image": "/images/food/oi.jpg"
        },
        {
            "text": "xoài",
            "image": "/images/food/xoai.jpg"
        },
        {
            "text": "mít",
            "image": "/images/food/mit.jpg"
        },
        {
            "text": "dưa lưới",
            "image": "/images/food/dua-luoi.jpg"
        },
        {
            "text": "mận",
            "image": "/images/food/man.jpg"
        }
    ],
    "vegetables": [
        {
            "text": "cà rốt",
            "image": "/images/food/ca-rot.jpg"
        },
        {
            "text": "cải thìa",
            "image": "/images/food/cai-thia.jpg"
        },
        {
            "text": "khoai tây",
            "image": "/images/food/khoai-tay.jpg"
        },
        {
            "text": "cà chua",
            "image": "/images/food/ca-chua.jpg"
        },
        {
            "text": "rau muống",
            "image": "/images/food/rau-muong.jpg"
        },
        {
            "text": "bắp cải",
            "image": "/images/food/bap-cai.jpg"
        },
        {
            "text": "bí xanh",
            "image": "/images/food/bi-xanh.jpg"
        },
        {
            "text": "su su",
            "image": "/images/food/su-su.jpg"
        },
        {
            "text": "đu đủ xanh",
            "image": "/images/food/du-du-xanh.jpg"
        }
    ],
    "household": [
        {
            "text": "ghế",
            "image": "/images/home/ghe.jpg"
        },
        {
            "text": "bàn",
            "image": "/images/home/ban.jpg"
        },
        {
            "text": "tivi",
            "image": "/images/home/tivi.jpg"
        },
        {
            "text": "tủ",
            "image": "/images/home/tu.jpg"
        },
        {
            "text": "đèn",
            "image": "/images/home/den.jpg"
        },
        {
            "text": "quạt",
            "image": "/images/home/quat.jpg"
        },
        {
            "text": "nệm",
            "image": "/images/home/nem.jpg"
        },
        {
            "text": "tủ quần áo",
            "image": "/images/home/tu-quan-ao.jpg"
        },
        {
            "text": "bồn rửa",
            "image": "/images/home/bon-rua.jpg"
        }
    ],
    "feelings": [
        {
            "text": "vui",
            "image": "/images/feelings/vui.jpg"
        },
        {
            "text": "buồn",
            "image": "/images/feelings/buon.jpg"
        },
        {
            "text": "giận",
            "image": "/images/feelings/gian.jpg"
        },
        {
            "text": "ngạc nhiên",
            "image": "/images/feelings/ngac-nhien.jpg"
        },
        {
            "text": "sợ",
            "image": "/images/feelings/so.jpg"
        },
        {
            "text": "mệt",
            "image": "/images/feelings/met.jpg"
        },
        {
            "text": "hạnh phúc",
            "image": "/images/feelings/hanh-phuc.jpg"
        },
        {
            "text": "xấu hổ",
            "image": "/images/feelings/xau-ho.jpg"
        }
    ],
    "numbers": [
        {
            "text": "một",
            "image": "/images/numbers/1.jpg"
        },
        {
            "text": "hai",
            "image": "/images/numbers/2.jpg"
        },
        {
            "text": "ba",
            "image": "/images/numbers/3.jpg"
        },
        {
            "text": "bốn",
            "image": "/images/numbers/4.jpg"
        },
        {
            "text": "năm",
            "image": "/images/numbers/5.jpg"
        },
        {
            "text": "sáu",
            "image": "/images/numbers/6.jpg"
        },
        {
            "text": "bảy",
            "image": "/images/numbers/7.jpg"
        },
        {
            "text": "tám",
            "image": "/images/numbers/8.jpg"
        },
        {
            "text": "chín",
            "image": "/images/numbers/9.jpg"
        },
        {
            "text": "mười",
            "image": "/images/numbers/10.jpg"
        }
    ],
    "toys": [
        {
            "text": "gấu bông",
            "image": "/images/toys/gau-bong.jpg"
        },
        {
            "text": "ô tô đồ chơi",
            "image": "/images/toys/o-to.jpg"
        },
        {
            "text": "búp bê",
            "image": "/images/toys/bup-be.jpg"
        },
        {
            "text": "xếp hình",
            "image": "/images/toys/xep-hinh.jpg"
        },
        {
            "text": "bóng",
            "image": "/images/toys/bong.jpg"
        },
        {
            "text": "lego",
            "image": "/images/toys/lego.jpg"
        },
        {
            "text": "xe kéo",
            "image": "/images/toys/xe-keo.jpg"
        },
        {
            "text": "xe lắc",
            "image": "/images/toys/xe-lac.jpg"
        },
        {
            "text": "bập bênh",
            "image": "/images/toys/bap-benh.jpg"
        },
        {
            "text": "đồ chơi âm nhạc",
            "image": "/images/toys/do-choi-am-nhac.jpg"
        }
    ],
    "shapes": [
        {
            "text": "hình tròn",
            "image": "/images/shapes/hinh-tron.jpg"
        },
        {
            "text": "hình vuông",
            "image": "/images/shapes/hinh-vuong.jpg"
        },
        {
            "text": "hình tam giác",
            "image": "/images/shapes/hinh-tam-giac.jpg"
        },
        {
            "text": "hình chữ nhật",
            "image": "/images/shapes/hinh-chu-nhat.jpg"
        },
        {
            "text": "hình trái tim",
            "image": "/images/shapes/hinh-trai-tim.jpg"
        },
        {
            "text": "hình sao",
            "image": "/images/shapes/hinh-sao.jpg"
        },
        {
            "text": "hình bầu dục",
            "image": "/images/shapes/hinh-bau-duc.jpg"
        },
        {
            "text": "hình ngũ giác",
            "image": "/images/shapes/hinh-ngu-giac.jpg"
        },
        {
            "text": "hình lục giác",
            "image": "/images/shapes/hinh-luc-giac.jpg"
        }
    ],
    "emotions": [
        {
            "text": "vui",
            "image": "/images/feelings/vui.jpg"
        },
        {
            "text": "buồn",
            "image": "/images/feelings/buon.jpg"
        },
        {
            "text": "sợ",
            "image": "/images/feelings/so.jpg"
        },
        {
            "text": "giận",
            "image": "/images/feelings/gian.jpg"
        },
        {
            "text": "ngạc nhiên",
            "image": "/images/feelings/ngac-nhien.jpg"
        },
        {
            "text": "hạnh phúc",
            "image": "/images/feelings/hanh-phuc.jpg"
        },
        {
            "text": "mệt",
            "image": "/images/feelings/met.jpg"
        },
        {
            "text": "xấu hổ",
            "image": "/images/feelings/xau-ho.jpg"
        },
        {
            "text": "tự hào",
            "image": "/images/feelings/tu-hao.jpg"
        }
    ]
};
function getWordPool(category) {
    // Nếu là array, trộn các chủ đề
    if (Array.isArray(category)) {
        const allWords = [];
        category.forEach((cat)=>{
            if (cat === "mixed") {
                // Trộn tất cả các chủ đề
                Object.values(WORD_POOLS).forEach((words)=>{
                    allWords.push(...words);
                });
            } else {
                const words = WORD_POOLS[cat] || [];
                allWords.push(...words);
            }
        });
        return allWords;
    }
    // Xử lý string như trước
    if (category === "mixed") {
        // Trộn tất cả các chủ đề
        const allWords = [];
        Object.values(WORD_POOLS).forEach((words)=>{
            allWords.push(...words);
        });
        return allWords;
    }
    return WORD_POOLS[category] || WORD_POOLS.family;
}
function getAllVietnameseLetter() {
    return [
        "a",
        "ă",
        "â",
        "á",
        "à",
        "ả",
        "ã",
        "ạ",
        "ắ",
        "ằ",
        "ẳ",
        "ẵ",
        "ặ",
        "ấ",
        "ầ",
        "ẩ",
        "ẫ",
        "ậ",
        "e",
        "ê",
        "é",
        "è",
        "ẻ",
        "ẽ",
        "ẹ",
        "ế",
        "ề",
        "ễ",
        "ệ",
        "i",
        "í",
        "ì",
        "ỉ",
        "ĩ",
        "ị",
        "o",
        "ô",
        "ơ",
        "ó",
        "ò",
        "ỏ",
        "õ",
        "ọ",
        "ố",
        "ồ",
        "ổ",
        "ỗ",
        "ộ",
        "ớ",
        "ờ",
        "ở",
        "ỡ",
        "ợ",
        "u",
        "ư",
        "ú",
        "ù",
        "ủ",
        "ũ",
        "ụ",
        "ứ",
        "ừ",
        "ử",
        "ữ",
        "ự",
        "y",
        "ý",
        "ỳ",
        "ỷ",
        "ỹ",
        "ỵ",
        "d",
        "đ"
    ];
}
function getBaseVietnameseLetter() {
    return [
        "a",
        "ă",
        "â",
        "b",
        "c",
        "d",
        "đ",
        "e",
        "ê",
        "g",
        "h",
        "i",
        "k",
        "l",
        "m",
        "n",
        "o",
        "ô",
        "ơ",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "ư",
        "v",
        "x",
        "y"
    ];
}
function getWordsWithAnyLetter(category, letters) {
    const pool = getWordPool(category);
    return pool.filter((word)=>letters.some((letter)=>word.text.includes(letter)));
}
function getWordsWithLetter(category, letter) {
    const pool = getWordPool(category);
    return pool.filter((word)=>word.text.includes(letter));
}
// Get base letter from a letter (with or without diacritics)
function getBaseLetter(letter) {
    // Check if it's already a base letter
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_BASE_LETTERS"].includes(letter)) {
        return letter;
    }
    // Find which base letter group it belongs to
    for (const [baseLetter, variants] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_ALPHABET_GROUPS"])){
        if (variants.includes(letter)) {
            return baseLetter;
        }
    }
    // If not found, return the letter as-is
    return letter;
}
function generateAnswerOptions(targetLetter, count = 3) {
    // Use base Vietnamese letters for wrong answers
    const baseLetters = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_BASE_LETTERS"];
    const targetBaseLetter = getBaseLetter(targetLetter);
    const options = [
        targetLetter
    ];
    // Filter out the target base letter and any letters that match the target
    const available = baseLetters.filter((l)=>l !== targetBaseLetter && l !== targetLetter);
    while(options.length < count && available.length > 0){
        const randomIdx = Math.floor(Math.random() * available.length);
        options.push(available[randomIdx]);
        available.splice(randomIdx, 1);
    }
    return options.sort(()=>Math.random() - 0.5);
}
function wordContainsLetter(word, letter) {
    const wordLower = word.toLowerCase();
    const letterLower = letter.toLowerCase();
    const baseLetter = getBaseLetter(letter).toLowerCase();
    // Check exact match
    if (wordLower.includes(letterLower)) {
        return true;
    }
    // Check base letter match (for diacritics)
    // Nếu letter là base letter (như "a"), kiểm tra tất cả variants (a, á, à, ả, ã, ạ)
    // Nếu letter là variant (như "à"), kiểm tra tất cả variants của base letter
    const baseLetterVariants = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_ALPHABET_GROUPS"][baseLetter] || [];
    for (const variant of baseLetterVariants){
        if (wordLower.includes(variant.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function generateWordOptions(correctWord, targetLetter, allWords, count = 3) {
    const options = [
        correctWord
    ];
    // Filter words that don't contain the target letter
    const available = allWords.filter((w)=>{
        if (w.text === correctWord.text) return false;
        return !wordContainsLetter(w.text, targetLetter);
    });
    // Use 2-3 options
    const numOptions = Math.min(count, available.length + 1);
    while(options.length < numOptions && available.length > 0){
        const randomIdx = Math.floor(Math.random() * available.length);
        options.push(available[randomIdx]);
        available.splice(randomIdx, 1);
    }
    return options.sort(()=>Math.random() - 0.5);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/pool-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PoolModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/word-pools.ts [app-client] (ecmascript)");
"use client";
;
;
function PoolModal({ category, isOpen, onClose }) {
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordPool"])(category);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-black text-white",
                            children: "Danh Sách Từ"
                        }, void 0, false, {
                            fileName: "[project]/components/pool-modal.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-gray-100",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/pool-modal.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pool-modal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",
                        children: words.map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full aspect-square bg-gray-100 rounded-2xl mb-3 overflow-hidden shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: word.image || "/placeholder.svg",
                                            alt: word.text,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pool-modal.tsx",
                                            lineNumber: 34,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/pool-modal.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-gray-800",
                                        children: word.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/pool-modal.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/components/pool-modal.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/pool-modal.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/pool-modal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/pool-modal.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/pool-modal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = PoolModal;
var _c;
__turbopack_context__.k.register(_c, "PoolModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/letter-customization-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LetterCustomizationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vietnamese-alphabet.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LetterCustomizationModal({ isOpen, onClose, onConfirm, category }) {
    _s();
    const [selectedLetters, setSelectedLetters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "a",
        "e",
        "i"
    ]);
    const [isUppercase, setIsUppercase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleLetter = (letter)=>{
        setSelectedLetters((prev)=>{
            if (prev.includes(letter)) {
                return prev.filter((l)=>l !== letter);
            } else if (prev.length < 3) {
                return [
                    ...prev,
                    letter
                ];
            }
            return prev;
        });
    };
    const handleConfirm = ()=>{
        onConfirm(selectedLetters, isUppercase);
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-black text-blue-600 mb-6",
                    children: "Tùy Chỉnh Chữ Cái"
                }, void 0, false, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsUppercase(false),
                            className: `flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${!isUppercase ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                            children: "Chữ Thường"
                        }, void 0, false, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsUppercase(true),
                            className: `flex-1 py-3 px-4 rounded-xl font-bold text-lg transition-all ${isUppercase ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                            children: "Chữ Hoa"
                        }, void 0, false, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 font-semibold mb-4",
                    children: [
                        "Chọn 1-3 chữ cái để tập (đã chọn ",
                        selectedLetters.length,
                        "/3):"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                selectedLetters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-4 bg-blue-100 rounded-xl flex gap-3 flex-wrap",
                    children: selectedLetters.map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-xl flex items-center gap-2",
                            children: [
                                isUppercase ? letter.toUpperCase() : letter,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleLetter(letter),
                                    className: "ml-2 text-lg font-bold hover:text-blue-200",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/letter-customization-modal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, letter, true, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 73,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-6 gap-3 mb-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_BASE_LETTERS"].map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleLetter(letter),
                            disabled: selectedLetters.length >= 3 && !selectedLetters.includes(letter),
                            className: `py-3 px-3 rounded-lg font-bold text-lg transition-all ${selectedLetters.includes(letter) ? "bg-blue-500 text-white shadow-lg scale-110" : "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"}`,
                            children: isUppercase ? letter.toUpperCase() : letter
                        }, letter, false, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            className: "flex-1 py-3 px-4 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-xl text-lg",
                            children: "Hủy"
                        }, void 0, false, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleConfirm,
                            disabled: selectedLetters.length === 0,
                            className: "flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl text-lg",
                            children: [
                                "Xác Nhận ",
                                selectedLetters.length > 0 && `(${selectedLetters.length} chữ)`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/letter-customization-modal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/letter-customization-modal.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/letter-customization-modal.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/letter-customization-modal.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(LetterCustomizationModal, "Ybohuxsxped6nynusOIe+Gm8MZo=");
_c = LetterCustomizationModal;
var _c;
__turbopack_context__.k.register(_c, "LetterCustomizationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pool$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pool-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$letter$2d$customization$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/letter-customization-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STORAGE_KEY = "game-settings";
const defaultSettings = {
    category: [
        "family"
    ],
    roundCount: 5,
    selectedLetters: [
        "a",
        "e",
        "i"
    ],
    isUppercase: false
};
function HomeScreen({ onStartGame, onBack }) {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings.category);
    const [roundCount, setRoundCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings.roundCount);
    const [showPoolModal, setShowPoolModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCustomizeModal, setShowCustomizeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLetters, setSelectedLetters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings.selectedLetters);
    const [isUppercase, setIsUppercase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings.isUppercase);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load settings from localStorage after component mounts (client-side only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    try {
                        const loadedSettings = JSON.parse(saved);
                        // Hỗ trợ cả string (cũ) và array (mới)
                        const loadedCategory = loadedSettings.category || defaultSettings.category;
                        setCategory(Array.isArray(loadedCategory) ? loadedCategory : [
                            loadedCategory
                        ]);
                        setRoundCount(loadedSettings.roundCount || defaultSettings.roundCount);
                        setSelectedLetters(loadedSettings.selectedLetters || defaultSettings.selectedLetters);
                        setIsUppercase(loadedSettings.isUppercase ?? defaultSettings.isUppercase);
                    } catch (e) {
                        console.error("Error loading settings:", e);
                    }
                }
                setIsLoaded(true);
            }
        }
    }["HomeScreen.useEffect"], []);
    // Save settings to localStorage whenever they change (only after initial load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            if (isLoaded && ("TURBOPACK compile-time value", "object") !== "undefined") {
                const settings = {
                    category,
                    roundCount,
                    selectedLetters,
                    isUppercase
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            }
        }
    }["HomeScreen.useEffect"], [
        category,
        roundCount,
        selectedLetters,
        isUppercase,
        isLoaded
    ]);
    const categories = [
        {
            id: "mixed",
            name: "🔀 Trộn Các Chủ Đề"
        },
        {
            id: "family",
            name: "👨‍👩‍👧 Gia Đình"
        },
        {
            id: "healthcare",
            name: "⚕️ Y Tế"
        },
        {
            id: "school",
            name: "📚 Trường Học"
        },
        {
            id: "cooking",
            name: "🍲 Nấu Ăn"
        },
        {
            id: "animals",
            name: "🐶 Động Vật"
        },
        {
            id: "colors",
            name: "🎨 Màu Sắc"
        },
        {
            id: "transport",
            name: "🚗 Giao Thông"
        },
        {
            id: "farm",
            name: "🚜 Nông Nghiệp"
        },
        {
            id: "military",
            name: "🎖️ Bộ Đội"
        },
        {
            id: "fruits",
            name: "🍎 Trái Cây"
        },
        {
            id: "vegetables",
            name: "🥕 Rau Củ"
        },
        {
            id: "household",
            name: "🏠 Đồ Dùng Gia Đình"
        },
        {
            id: "feelings",
            name: "😊 Cảm Xúc"
        },
        {
            id: "numbers",
            name: "🔢 Số Đếm"
        },
        {
            id: "toys",
            name: "🧸 Đồ Chơi"
        },
        {
            id: "shapes",
            name: "🔷 Hình Dạng"
        },
        {
            id: "emotions",
            name: "😀 Tình Cảm"
        }
    ];
    const handleLetterCustomization = (letters, uppercase)=>{
        setSelectedLetters(letters);
        setIsUppercase(uppercase);
    };
    const toggleCategory = (catId)=>{
        setCategory((prev)=>{
            // Nếu chọn "mixed", chỉ giữ mixed thôi
            if (catId === "mixed") {
                if (prev.includes("mixed")) {
                    // Nếu đã chọn mixed, bỏ chọn và chọn family làm mặc định
                    return [
                        "family"
                    ];
                } else {
                    // Chọn mixed, xóa tất cả các chủ đề khác
                    return [
                        "mixed"
                    ];
                }
            }
            // Nếu đã chọn mixed, không thể chọn chủ đề khác
            if (prev.includes("mixed")) {
                return prev;
            }
            // Logic bình thường cho các chủ đề khác
            if (prev.includes(catId)) {
                // Bỏ chọn, nhưng phải giữ ít nhất 1 chủ đề
                if (prev.length > 1) {
                    return prev.filter((id)=>id !== catId);
                }
                return prev;
            } else {
                // Thêm chọn, nhưng tối đa 3 chủ đề
                if (prev.length < 3) {
                    return [
                        ...prev,
                        catId
                    ];
                }
                return prev;
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex flex-col items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 text-6xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '3s'
                },
                children: "✨"
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-20 text-5xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '2.5s',
                    animationDelay: '0.5s'
                },
                children: "⭐"
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '2.8s',
                    animationDelay: '1s'
                },
                children: "🎈"
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce",
                style: {
                    animationDuration: '3.2s',
                    animationDelay: '0.3s'
                },
                children: "🎨"
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onBack,
                    className: "px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all",
                    children: "← Quay Lại"
                }, void 0, false, {
                    fileName: "[project]/components/home-screen.tsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12 animate-bounce relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg mb-2",
                        children: "🎮 Học Chữ Cái 🎮"
                    }, void 0, false, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl text-purple-600 font-bold",
                        children: "Trò chơi vui cho bé 5-6 tuổi"
                    }, void 0, false, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 max-w-2xl w-full space-y-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-800 mb-2",
                                children: "Chọn Chủ Đề (1-3 chủ đề):"
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: [
                                    "Đã chọn: ",
                                    category.length,
                                    "/3"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleCategory(cat.id),
                                        disabled: // Disable nếu: đã chọn mixed và đang cố chọn chủ đề khác, hoặc đã chọn 3 chủ đề và cố chọn thêm
                                        category.includes("mixed") && cat.id !== "mixed" || !category.includes(cat.id) && category.length >= 3 && !category.includes("mixed"),
                                        className: `py-4 px-4 rounded-2xl font-bold text-lg transition-all transform ${category.includes(cat.id) ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"}`,
                                        children: [
                                            category.includes(cat.id) && "✓ ",
                                            cat.name
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/components/home-screen.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-black text-gray-800 mb-6",
                                children: "Số Vòng Chơi:"
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 flex-wrap",
                                children: [
                                    5,
                                    10,
                                    15,
                                    20
                                ].map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setRoundCount(count),
                                        className: `py-3 px-8 rounded-2xl font-bold text-lg transition-all ${roundCount === count ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg"}`,
                                        children: [
                                            count,
                                            " vòng"
                                        ]
                                    }, count, true, {
                                        fileName: "[project]/components/home-screen.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPoolModal(true),
                                className: "w-full py-3 px-6 bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-2xl text-lg transition-all",
                                children: "👀 Xem Danh Sách Từ"
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCustomizeModal(true),
                                className: "w-full py-3 px-6 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-2xl text-lg transition-all",
                                children: "⚙️ Tùy Chỉnh Chữ Cái"
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-green-50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: [
                                    "Chủ đề đã chọn (",
                                    category.length,
                                    "/3):"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: category.map((catId)=>{
                                    const cat = categories.find((c)=>c.id === catId);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-sm",
                                        children: cat?.name || catId
                                    }, catId, false, {
                                        fileName: "[project]/components/home-screen.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-blue-50 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: "Chữ cái được chọn:"
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 flex-wrap",
                                children: selectedLetters.map((letter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-500 text-white px-3 py-1 rounded-lg font-bold text-lg",
                                        children: isUppercase ? letter.toUpperCase() : letter
                                    }, letter, false, {
                                        fileName: "[project]/components/home-screen.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home-screen.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>onStartGame({
                        category,
                        roundCount,
                        selectedLetters,
                        isUppercase
                    }),
                className: "mt-10 px-16 py-8 text-3xl font-black bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-full shadow-2xl transform hover:scale-110 transition-transform",
                children: "🎮 Bắt Đầu Chơi 🎮"
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold text-gray-700 drop-shadow mb-2",
                        children: "Giúp bé học tiếng Việt một cách vui vẻ!"
                    }, void 0, false, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-medium text-gray-600",
                        children: "Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa"
                    }, void 0, false, {
                        fileName: "[project]/components/home-screen.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pool$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                category: category,
                isOpen: showPoolModal,
                onClose: ()=>setShowPoolModal(false)
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$letter$2d$customization$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showCustomizeModal,
                onClose: ()=>setShowCustomizeModal(false),
                onConfirm: handleLetterCustomization,
                category: category
            }, void 0, false, {
                fileName: "[project]/components/home-screen.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home-screen.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(HomeScreen, "/2EMxuBaUWJ3XTTWz8K5Nu1GcbI=");
_c = HomeScreen;
var _c;
__turbopack_context__.k.register(_c, "HomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/card-game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/word-pools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vietnamese-alphabet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CardGame({ word, targetLetter, onCardClick, onWrongAnswer, onNext, wordOptions }) {
    _s();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // For letter selection mode
    ;
    const [selectedWords, setSelectedWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [wrongSelected, setWrongSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const answerCardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const imageCardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const useImageMode = wordOptions && wordOptions.length > 0;
    // Tìm tất cả các đáp án đúng (các từ chứa targetLetter)
    const correctAnswers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardGame.useMemo[correctAnswers]": ()=>{
            if (!useImageMode || !wordOptions) return new Set();
            const correct = new Set();
            wordOptions.forEach({
                "CardGame.useMemo[correctAnswers]": (option)=>{
                    // Sử dụng wordContainsLetter để kiểm tra bao gồm cả diacritics
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(option.text, targetLetter)) {
                        correct.add(option.text);
                    }
                }
            }["CardGame.useMemo[correctAnswers]"]);
            return correct;
        }
    }["CardGame.useMemo[correctAnswers]"], [
        useImageMode,
        wordOptions,
        targetLetter
    ]);
    const allCorrectSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardGame.useMemo[allCorrectSelected]": ()=>{
            if (!useImageMode) return false;
            const allSelected = correctAnswers.size > 0 && correctAnswers.size === selectedWords.size && Array.from(correctAnswers).every({
                "CardGame.useMemo[allCorrectSelected]": (text)=>selectedWords.has(text)
            }["CardGame.useMemo[allCorrectSelected]"]);
            return allSelected;
        }
    }["CardGame.useMemo[allCorrectSelected]"], [
        useImageMode,
        correctAnswers,
        selectedWords
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardGame.useEffect": ()=>{
            // Clear timeout khi chuyển câu mới
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            if (!useImageMode) {
                const newAnswers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAnswerOptions"])(targetLetter);
                setAnswers(newAnswers);
            }
            // Reset state ngay lập tức khi chuyển câu
            setSelectedAnswer(null);
            setIsAnswered(false);
            setSelectedWords(new Set());
            setWrongSelected(false);
            hasTriggeredSuccess.current = false;
            // Reset all animations
            answerCardsRef.current.forEach({
                "CardGame.useEffect": (card)=>{
                    if (card) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(card);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            backgroundColor: "",
                            borderColor: "",
                            x: 0,
                            clearProps: "all"
                        });
                    }
                }
            }["CardGame.useEffect"]);
            imageCardsRef.current.forEach({
                "CardGame.useEffect": (card)=>{
                    if (card) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(card);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            backgroundColor: "",
                            borderColor: "",
                            x: 0,
                            clearProps: "all"
                        });
                    }
                }
            }["CardGame.useEffect"]);
        }
    }["CardGame.useEffect"], [
        targetLetter,
        word?.text,
        useImageMode,
        wordOptions?.length
    ]);
    // Trigger success khi đã chọn hết tất cả đáp án đúng
    const hasTriggeredSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardGame.useEffect": ()=>{
            if (allCorrectSelected && useImageMode && correctAnswers.size > 0 && !hasTriggeredSuccess.current) {
                // Chỉ gọi một lần khi đã chọn hết tất cả đáp án đúng
                hasTriggeredSuccess.current = true;
                onCardClick(true);
            }
            // Reset khi chuyển câu mới
            if (!allCorrectSelected) {
                hasTriggeredSuccess.current = false;
            }
        }
    }["CardGame.useEffect"], [
        allCorrectSelected,
        useImageMode,
        correctAnswers.size,
        onCardClick
    ]);
    const handleAnswerClick = (answer, cardIndex)=>{
        if (isAnswered) return;
        const isCorrect = answer === targetLetter;
        setSelectedAnswer(answer);
        setIsAnswered(true);
        if (isCorrect) {
            // Chỉ đổi màu đáp án đúng
            if (answerCardsRef.current[cardIndex]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(answerCardsRef.current[cardIndex], {
                    backgroundColor: "#22c55e",
                    duration: 0.3
                });
            }
            onCardClick(true);
        } else {
            if (answerCardsRef.current[cardIndex]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(answerCardsRef.current[cardIndex], {
                    x: [
                        0,
                        -10,
                        10,
                        -10,
                        10,
                        0
                    ],
                    borderColor: "#ef4444",
                    duration: 0.4
                });
            }
            // Call wrong answer handler
            if (onWrongAnswer) {
                onWrongAnswer();
            }
            timeoutRef.current = setTimeout(()=>{
                // Reset animation khi sai
                if (answerCardsRef.current[cardIndex]) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(answerCardsRef.current[cardIndex]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(answerCardsRef.current[cardIndex], {
                        x: 0,
                        borderColor: "",
                        scale: 1,
                        clearProps: "all"
                    });
                }
                setIsAnswered(false);
                setSelectedAnswer(null);
                timeoutRef.current = null;
            }, 1000);
        }
    };
    const handleImageClick = (selectedOption, cardIndex)=>{
        // Kiểm tra xem đáp án này có chứa targetLetter không
        const isCorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(selectedOption.text, targetLetter);
        // Nếu đã chọn rồi, bỏ chọn
        if (selectedWords.has(selectedOption.text)) {
            const newSelected = new Set(selectedWords);
            newSelected.delete(selectedOption.text);
            setSelectedWords(newSelected);
            setWrongSelected(false);
            // Reset animation
            if (imageCardsRef.current[cardIndex]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(imageCardsRef.current[cardIndex]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageCardsRef.current[cardIndex], {
                    borderColor: "",
                    borderWidth: "",
                    x: 0,
                    clearProps: "all"
                });
            }
            return;
        }
        // Nếu chọn đáp án đúng
        if (isCorrect) {
            const newSelected = new Set(selectedWords);
            newSelected.add(selectedOption.text);
            setSelectedWords(newSelected);
            setWrongSelected(false);
            // Highlight đáp án đúng
            if (imageCardsRef.current[cardIndex]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageCardsRef.current[cardIndex], {
                    borderColor: "#22c55e",
                    borderWidth: "8px",
                    duration: 0.3
                });
            }
        // Chỉ trigger success khi đã chọn hết TẤT CẢ đáp án đúng
        // Không gọi onCardClick ở đây, chỉ gọi khi allCorrectSelected thay đổi trong useEffect
        } else {
            // Chọn đáp án sai
            setWrongSelected(true);
            if (imageCardsRef.current[cardIndex]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageCardsRef.current[cardIndex], {
                    x: [
                        0,
                        -10,
                        10,
                        -10,
                        10,
                        0
                    ],
                    borderColor: "#ef4444",
                    duration: 0.4
                });
            }
            // Call wrong answer handler
            if (onWrongAnswer) {
                onWrongAnswer();
            }
            timeoutRef.current = setTimeout(()=>{
                // Reset animation khi sai
                if (imageCardsRef.current[cardIndex]) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(imageCardsRef.current[cardIndex]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageCardsRef.current[cardIndex], {
                        x: 0,
                        borderColor: "",
                        borderWidth: "",
                        clearProps: "all"
                    });
                }
                setWrongSelected(false);
                timeoutRef.current = null;
            }, 1000);
        }
    };
    const renderWordWithHighlight = ()=>{
        const isCorrectAnswer = isAnswered && selectedAnswer === targetLetter;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-4xl",
            children: word.text.split("").map((char, idx)=>{
                const matchesTarget = char === targetLetter || char.toLowerCase() === targetLetter.toLowerCase();
                if (matchesTarget && isCorrectAnswer) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-yellow-500 font-black",
                        children: char
                    }, idx, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 248,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: char
                }, idx, false, {
                    fileName: "[project]/components/card-game.tsx",
                    lineNumber: 256,
                    columnNumber: 18
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/card-game.tsx",
            lineNumber: 242,
            columnNumber: 7
        }, this);
    };
    // Hàm highlight chữ cái targetLetter trong từ khi đã chọn đúng
    const renderWordWithLetterHighlight = (wordText, isSelected)=>{
        if (!isSelected) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold text-gray-800",
                children: wordText
            }, void 0, false, {
                fileName: "[project]/components/card-game.tsx",
                lineNumber: 265,
                columnNumber: 14
            }, this);
        }
        const targetLower = targetLetter.toLowerCase();
        // Tìm base letter của targetLetter
        let targetBase = targetLower;
        for (const [base, variants] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_ALPHABET_GROUPS"])){
            if (variants.some((v)=>v.toLowerCase() === targetLower) || base === targetLower) {
                targetBase = base;
                break;
            }
        }
        // Lấy tất cả variants của target base letter
        const targetVariants = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vietnamese$2d$alphabet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIETNAMESE_ALPHABET_GROUPS"][targetBase] || [
            targetBase
        ];
        const targetVariantsLower = targetVariants.map((v)=>v.toLowerCase());
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-2xl font-bold",
            children: wordText.split("").map((char, idx)=>{
                const charLower = char.toLowerCase();
                // Kiểm tra xem char có phải là variant của targetLetter không
                const matchesTarget = targetVariantsLower.includes(charLower) || charLower === targetLower;
                if (matchesTarget) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-yellow-500 font-black",
                        children: char
                    }, idx, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 292,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800",
                    children: char
                }, idx, false, {
                    fileName: "[project]/components/card-game.tsx",
                    lineNumber: 300,
                    columnNumber: 18
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/card-game.tsx",
            lineNumber: 284,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl flex flex-col items-center gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl text-gray-700 font-bold mb-6",
                        children: "Tìm chữ cái:"
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-8 shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-7xl font-black text-white drop-shadow-lg",
                            children: targetLetter
                        }, void 0, false, {
                            fileName: "[project]/components/card-game.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card-game.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            !useImageMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wordRef,
                className: "flex flex-col items-center gap-6 transform transition-transform",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-48 h-48 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border-4 border-blue-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: word.image || "/placeholder.svg",
                            alt: word.text,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/card-game.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold text-green-700 bg-white px-8 py-4 rounded-2xl shadow-lg",
                        children: renderWordWithHighlight()
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card-game.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            useImageMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl text-gray-700 font-bold mb-4",
                        children: [
                            'Chọn hình ảnh có chứa chữ "',
                            targetLetter,
                            '":'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid ${wordOptions.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6 md:gap-8 w-full mt-4`,
                        children: wordOptions.map((option, index)=>{
                            const isCorrect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(option.text, targetLetter);
                            const isSelected = selectedWords.has(option.text);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    if (el) imageCardsRef.current[index] = el;
                                },
                                onClick: ()=>handleImageClick(option, index),
                                className: `relative rounded-2xl overflow-hidden transition-all transform ${isSelected ? isCorrect ? "border-8 border-green-500 shadow-2xl scale-105" : "border-8 border-red-500" : "border-4 border-blue-300 hover:shadow-xl hover:scale-105 cursor-pointer"} shadow-lg active:scale-95`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full aspect-square bg-white flex items-center justify-center overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: option.image || "/placeholder.svg",
                                            alt: option.text,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/card-game.tsx",
                                            lineNumber: 349,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/card-game.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white px-4 py-2 text-center word-label",
                                        children: renderWordWithLetterHighlight(option.text, isSelected && isCorrect)
                                    }, void 0, false, {
                                        fileName: "[project]/components/card-game.tsx",
                                        lineNumber: 355,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, `${word.text}-${targetLetter}-${option.text}-${index}`, true, {
                                fileName: "[project]/components/card-game.tsx",
                                lineNumber: 335,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    wrongSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-xl",
                        children: "Thử lại nhé! 🔄"
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 364,
                        columnNumber: 13
                    }, this),
                    allCorrectSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-end mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNext,
                            className: "px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-transform",
                            children: "Tiếp Theo →"
                        }, void 0, false, {
                            fileName: "[project]/components/card-game.tsx",
                            lineNumber: 369,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 368,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-6 md:gap-8 w-full mt-4",
                        children: answers.map((answer, index)=>{
                            const isSelected = selectedAnswer === answer;
                            const isCorrect = isAnswered && answer === targetLetter;
                            const showGradient = !isSelected && !isAnswered;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    if (el) answerCardsRef.current[index] = el;
                                },
                                onClick: ()=>handleAnswerClick(answer, index),
                                disabled: isAnswered && selectedAnswer !== answer,
                                className: `p-12 rounded-3xl font-black text-8xl transition-all transform ${isSelected ? isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white" : "bg-white border-4 border-blue-300 hover:shadow-xl hover:scale-105 cursor-pointer answer-button"} ${isAnswered && selectedAnswer !== answer ? "opacity-50" : ""} shadow-lg active:scale-95`,
                                children: showGradient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "answer-letter-gradient",
                                    style: {
                                        background: 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444, #ec4899, #a855f7, #6366f1, #3b82f6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        backgroundSize: '200% 200%',
                                        display: 'inline-block',
                                        animation: 'gradient-shift 3s ease infinite'
                                    },
                                    children: answer
                                }, void 0, false, {
                                    fileName: "[project]/components/card-game.tsx",
                                    lineNumber: 403,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: answer
                                }, void 0, false, {
                                    fileName: "[project]/components/card-game.tsx",
                                    lineNumber: 418,
                                    columnNumber: 21
                                }, this)
                            }, `${word.text}-${targetLetter}-${answer}-${index}`, false, {
                                fileName: "[project]/components/card-game.tsx",
                                lineNumber: 388,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            .answer-letter-gradient {
              transition: all 0.3s ease;
            }
            
            .word-label {
              transition: all 0.3s ease;
            }
            
            button:hover .word-label {
              background: linear-gradient(135deg, #fef3c7, #fde68a, #fcd34d);
            }
            
            @keyframes gradient-shift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this),
                    isAnswered && selectedAnswer !== targetLetter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-xl",
                        children: "Thử lại nhé! 🔄"
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 451,
                        columnNumber: 13
                    }, this),
                    isAnswered && selectedAnswer === targetLetter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-end mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNext,
                            className: "px-12 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-xl shadow-lg transform hover:scale-105 transition-transform",
                            children: "Tiếp Theo →"
                        }, void 0, false, {
                            fileName: "[project]/components/card-game.tsx",
                            lineNumber: 456,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/card-game.tsx",
                        lineNumber: 455,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card-game.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
_s(CardGame, "mn5iLDn+Pgre6oR6RyDeDK8PAyw=");
_c = CardGame;
var _c;
__turbopack_context__.k.register(_c, "CardGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
function GameHeader({ currentRound, totalRounds, score, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 backdrop-blur-sm shadow-lg p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onBack,
                    variant: "outline",
                    className: "px-4 py-2 bg-transparent",
                    children: "← Quay Lại"
                }, void 0, false, {
                    fileName: "[project]/components/game-header.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Vòng"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-blue-600",
                                    children: [
                                        currentRound,
                                        "/",
                                        totalRounds
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game-header.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game-header.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Điểm"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-header.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-green-600",
                                    children: score
                                }, void 0, false, {
                                    fileName: "[project]/components/game-header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game-header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game-header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24"
                }, void 0, false, {
                    fileName: "[project]/components/game-header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/game-header.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/game-header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = GameHeader;
var _c;
__turbopack_context__.k.register(_c, "GameHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/confetti-effect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ConfettiEffect = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((_, ref)=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ConfettiEffect.useImperativeHandle": ()=>({
                trigger: ({
                    "ConfettiEffect.useImperativeHandle": (count = 50)=>{
                        if (canvasRef.current) {
                            createConfetti(count);
                        }
                    }
                })["ConfettiEffect.useImperativeHandle"],
                triggerVictory: ({
                    "ConfettiEffect.useImperativeHandle": ()=>{
                        if (canvasRef.current) {
                            // Trigger nhiều lần với delay để tạo hiệu ứng liên tục
                            createConfetti(200);
                            setTimeout({
                                "ConfettiEffect.useImperativeHandle": ()=>createConfetti(150)
                            }["ConfettiEffect.useImperativeHandle"], 200);
                            setTimeout({
                                "ConfettiEffect.useImperativeHandle": ()=>createConfetti(100)
                            }["ConfettiEffect.useImperativeHandle"], 400);
                            setTimeout({
                                "ConfettiEffect.useImperativeHandle": ()=>createConfetti(100)
                            }["ConfettiEffect.useImperativeHandle"], 600);
                        }
                    }
                })["ConfettiEffect.useImperativeHandle"],
                clear: ({
                    "ConfettiEffect.useImperativeHandle": ()=>{
                        particlesRef.current = [];
                        const canvas = canvasRef.current;
                        if (canvas) {
                            const ctx = canvas.getContext("2d");
                            if (ctx) {
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                            }
                        }
                    }
                })["ConfettiEffect.useImperativeHandle"]
            })
    }["ConfettiEffect.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfettiEffect.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const animate = {
                "ConfettiEffect.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for(let i = particlesRef.current.length - 1; i >= 0; i--){
                        const p = particlesRef.current[i];
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.1; // gravity
                        p.rotation += p.rotationSpeed;
                        ctx.save();
                        ctx.translate(p.x, p.y);
                        ctx.rotate(p.rotation);
                        ctx.fillStyle = p.color;
                        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                        ctx.restore();
                        p.life--;
                        if (p.life <= 0) {
                            particlesRef.current.splice(i, 1);
                        }
                    }
                    if (particlesRef.current.length > 0) {
                        requestAnimationFrame(animate);
                    }
                }
            }["ConfettiEffect.useEffect.animate"];
            const handleResize = {
                "ConfettiEffect.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["ConfettiEffect.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "ConfettiEffect.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["ConfettiEffect.useEffect"];
        }
    }["ConfettiEffect.useEffect"], []);
    const createConfetti = (count = 50, fromTop = false)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const colors = [
            "#FF6B6B",
            "#4ECDC4",
            "#FFE66D",
            "#95E1D3",
            "#F38181",
            "#FF9FF3",
            "#54A0FF",
            "#5F27CD",
            "#00D2D3",
            "#FF9F43"
        ];
        const startX = fromTop ? Math.random() * canvas.width : canvas.width / 2;
        const startY = fromTop ? 0 : canvas.height / 2;
        for(let i = 0; i < count; i++){
            particlesRef.current.push({
                x: startX,
                y: startY,
                vx: (Math.random() - 0.5) * (fromTop ? 8 : 10),
                vy: fromTop ? Math.random() * 5 + 2 : (Math.random() - 0.5) * 10 - 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 10 + 5,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.4,
                life: fromTop ? 150 : 100
            });
        }
        // Trigger animation
        const animate = ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(let i = particlesRef.current.length - 1; i >= 0; i--){
                const p = particlesRef.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.rotation += p.rotationSpeed;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
                p.life--;
                if (p.life <= 0) {
                    particlesRef.current.splice(i, 1);
                }
            }
            if (particlesRef.current.length > 0) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 pointer-events-none"
    }, void 0, false, {
        fileName: "[project]/components/confetti-effect.tsx",
        lineNumber: 147,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
}, "yeAppHNncp/HB1kmarynRxoKjHk=")), "yeAppHNncp/HB1kmarynRxoKjHk=");
_c1 = ConfettiEffect;
ConfettiEffect.displayName = "ConfettiEffect";
const __TURBOPACK__default__export__ = ConfettiEffect;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConfettiEffect$forwardRef");
__turbopack_context__.k.register(_c1, "ConfettiEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/victory-effects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VictoryEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function VictoryEffects({ score, totalRounds }) {
    _s();
    const [emojis, setEmojis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VictoryEffects.useEffect": ()=>{
            // Tạo emoji bay lên
            const emojiList = [
                "🎉",
                "🎊",
                "⭐",
                "🌟",
                "✨",
                "🏆",
                "👏",
                "🎈",
                "🎁",
                "💫"
            ];
            const newEmojis = [];
            for(let i = 0; i < 20; i++){
                newEmojis.push({
                    id: i,
                    emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
                    x: Math.random() * 100,
                    y: 100 + Math.random() * 20,
                    vx: (Math.random() - 0.5) * 2,
                    vy: -Math.random() * 3 - 2
                });
            }
            setEmojis(newEmojis);
            // Play victory sound
            playVictorySound();
            // Cleanup after animation
            const timer = setTimeout({
                "VictoryEffects.useEffect.timer": ()=>{
                    setEmojis([]);
                }
            }["VictoryEffects.useEffect.timer"], 3000);
            return ({
                "VictoryEffects.useEffect": ()=>clearTimeout(timer)
            })["VictoryEffects.useEffect"];
        }
    }["VictoryEffects.useEffect"], []);
    const playVictorySound = ()=>{
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            // Tạo chuỗi nốt nhạc vui vẻ
            const notes = [
                523.25,
                659.25,
                783.99,
                1046.50
            ] // C, E, G, C (quãng tám)
            ;
            notes.forEach((freq, index)=>{
                setTimeout(()=>{
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    oscillator.frequency.value = freq;
                    oscillator.type = "sine";
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.3);
                }, index * 100);
            });
        } catch (e) {
        // Audio not supported
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes floatUp {
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/victory-effects.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-50 overflow-hidden",
                children: emojis.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute text-4xl",
                        style: {
                            left: `${emoji.x}%`,
                            top: `${emoji.y}%`,
                            animation: `floatUp 3s ease-out forwards`
                        },
                        children: emoji.emoji
                    }, emoji.id, false, {
                        fileName: "[project]/components/victory-effects.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/victory-effects.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(VictoryEffects, "s7iqDoYuKNRdP0sam9CC5bkfCz0=");
_c = VictoryEffects;
var _c;
__turbopack_context__.k.register(_c, "VictoryEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/game-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/card-game.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$confetti$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/confetti-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$victory$2d$effects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/victory-effects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/word-pools.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function GameScreen({ settings, onBackToHome }) {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("playing");
    const [currentRound, setCurrentRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentTargetLetter, setCurrentTargetLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordOptions, setWordOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [words, setWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usedWords, setUsedWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set()) // Track các từ đã dùng
    ;
    const confettiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const correctSoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrongSoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const victorySoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            const validWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordsWithAnyLetter"])(settings.category, settings.selectedLetters);
            if (validWords.length === 0) {
                alert("Không có từ nào chứa chữ cái được chọn!");
                onBackToHome();
                return;
            }
            setWords(validWords);
            selectNewWord(validWords);
        }
    }["GameScreen.useEffect"], [
        settings.category,
        settings.selectedLetters
    ]);
    const selectNewWord = (wordPool, retryCount = 0)=>{
        // Clear confetti khi chuyển câu
        if (confettiRef.current) {
            confettiRef.current.clear();
        }
        // Tránh vòng lặp vô hạn
        if (retryCount > 10) {
            // Fallback: chọn từ đầu tiên và chữ cái đầu tiên
            const fallbackWord = wordPool[0];
            const fallbackLetter = settings.selectedLetters[0];
            setCurrentWord(fallbackWord);
            setCurrentTargetLetter(settings.isUppercase ? fallbackLetter.toUpperCase() : fallbackLetter);
            const allWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordPool"])(settings.category);
            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateWordOptions"])(fallbackWord, fallbackLetter, allWords, 3);
            setWordOptions(options);
            setUsedWords((prev)=>new Set(prev).add(fallbackWord.text));
            return;
        }
        const allWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordPool"])(settings.category);
        // Ưu tiên chọn từ chưa dùng, nếu đã dùng hết thì reset
        const unusedWords = wordPool.filter((w)=>!usedWords.has(w.text));
        const wordsToChooseFrom = unusedWords.length > 0 ? unusedWords : wordPool;
        // Nếu đã dùng hết, reset lại
        if (unusedWords.length === 0 && usedWords.size > 0) {
            setUsedWords(new Set());
        }
        // Shuffle các chữ cái đã chọn để random chữ cái được chọn
        const shuffledLetters = [
            ...settings.selectedLetters
        ].sort(()=>Math.random() - 0.5);
        // Tìm tất cả các chữ cái có thể dùng (có ít nhất 1 từ chứa chữ cái đó trong wordsToChooseFrom)
        const availableLetters = [];
        for (const letter of shuffledLetters){
            const targetLower = letter.toLowerCase();
            const wordsWithLetter = allWords.filter((w)=>{
                const wordLower = w.text.toLowerCase();
                // Kiểm tra exact match hoặc base letter match
                return wordLower.includes(targetLower) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(w.text, letter);
            });
            // Tìm từ đầu tiên chứa chữ cái này mà có trong wordsToChooseFrom
            for (const word of wordsWithLetter){
                if (wordsToChooseFrom.some((w)=>w.text === word.text)) {
                    availableLetters.push({
                        letter,
                        word
                    });
                    break; // Chỉ cần 1 từ cho mỗi chữ cái
                }
            }
        }
        // Random chọn 1 chữ cái từ danh sách có thể dùng
        if (availableLetters.length === 0) {
            selectNewWord(wordPool, retryCount + 1);
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableLetters.length);
        const selected = availableLetters[randomIndex];
        const targetLetter = selected.letter;
        const targetWord = selected.word;
        // Đánh dấu từ đã dùng
        setUsedWords((prev)=>new Set(prev).add(targetWord.text));
        setCurrentWord(targetWord);
        setCurrentTargetLetter(settings.isUppercase ? targetLetter.toUpperCase() : targetLetter);
        // Tạo 3 từ làm đáp án (hình ảnh), có thể có nhiều đáp án đúng
        // Tìm tất cả các từ chứa targetLetter
        const wordsWithLetter = allWords.filter((w)=>{
            const wordLower = w.text.toLowerCase();
            const targetLower = targetLetter.toLowerCase();
            return wordLower.includes(targetLower) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(w.text, targetLetter);
        });
        // Tìm các từ KHÔNG chứa targetLetter để làm đáp án sai
        const wordsWithoutLetter = allWords.filter((w)=>{
            if (w.text === targetWord.text) return false;
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(w.text, targetLetter);
        });
        // Tạo danh sách đáp án: 1-2 đáp án đúng + 1-2 đáp án sai (tổng 3 đáp án)
        const options = [];
        // Thêm từ đúng (targetWord)
        options.push(targetWord);
        // Có thể thêm thêm 1 đáp án đúng khác nếu có (random)
        const otherCorrectWords = wordsWithLetter.filter((w)=>w.text !== targetWord.text);
        if (otherCorrectWords.length > 0 && Math.random() > 0.5) {
            const randomCorrect = otherCorrectWords[Math.floor(Math.random() * otherCorrectWords.length)];
            options.push(randomCorrect);
        }
        // Thêm đáp án sai để đủ 3 đáp án
        const numWrongAnswers = Math.min(3 - options.length, wordsWithoutLetter.length);
        const shuffledWrong = [
            ...wordsWithoutLetter
        ].sort(()=>Math.random() - 0.5);
        for(let i = 0; i < numWrongAnswers; i++){
            if (shuffledWrong[i]) {
                options.push(shuffledWrong[i]);
            }
        }
        // Đảm bảo có ít nhất 1 đáp án đúng và ít nhất 1 đáp án sai
        const finalCorrectCount = options.filter((w)=>{
            const wordLower = w.text.toLowerCase();
            const targetLower = targetLetter.toLowerCase();
            return wordLower.includes(targetLower) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$word$2d$pools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wordContainsLetter"])(w.text, targetLetter);
        }).length;
        if (finalCorrectCount >= 1 && options.length >= 2) {
            setWordOptions(options.sort(()=>Math.random() - 0.5));
        } else {
            // Nếu không đủ điều kiện, thử lại với chữ cái khác
            selectNewWord(wordPool, retryCount + 1);
        }
    };
    const handleCorrectAnswer = ()=>{
        playSound("success");
        if (confettiRef.current) {
            confettiRef.current.trigger();
        }
    };
    const handleWrongAnswer = ()=>{
        playSound("error");
    };
    const handleNext = ()=>{
        const newScore = score + 1;
        if (currentRound >= settings.roundCount) {
            setScore(newScore);
            setGameState("gameOver");
            playSound("victory");
            // Trigger victory confetti
            if (confettiRef.current) {
                confettiRef.current.triggerVictory();
            }
        } else {
            setCurrentRound(currentRound + 1);
            setScore(newScore);
            selectNewWord(words);
        }
    };
    // Initialize audio elements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                correctSoundRef.current = new Audio("/games/nong-trai/assets/correct.mp3");
                wrongSoundRef.current = new Audio("/games/nong-trai/assets/wrong.mp3");
                victorySoundRef.current = new Audio("/games/nong-trai/assets/victory.mp3");
                // Set volume
                if (correctSoundRef.current) correctSoundRef.current.volume = 0.7;
                if (wrongSoundRef.current) wrongSoundRef.current.volume = 0.7;
                if (victorySoundRef.current) victorySoundRef.current.volume = 0.8;
            }
        }
    }["GameScreen.useEffect"], []);
    const playSound = (type)=>{
        try {
            if (type === "success" && correctSoundRef.current) {
                correctSoundRef.current.currentTime = 0;
                correctSoundRef.current.play().catch(()=>{});
            } else if (type === "error" && wrongSoundRef.current) {
                wrongSoundRef.current.currentTime = 0;
                wrongSoundRef.current.play().catch(()=>{});
            } else if (type === "victory" && victorySoundRef.current) {
                victorySoundRef.current.currentTime = 0;
                victorySoundRef.current.play().catch(()=>{});
            }
        } catch (e) {
        // Audio not supported
        }
    };
    if (gameState === "gameOver") {
        const percentage = Math.round(score / settings.roundCount * 100);
        const isPerfect = score === settings.roundCount;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-10 left-10 text-6xl opacity-20 animate-bounce",
                    style: {
                        animationDuration: '3s'
                    },
                    children: "✨"
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-20 right-20 text-5xl opacity-20 animate-bounce",
                    style: {
                        animationDuration: '2.5s',
                        animationDelay: '0.5s'
                    },
                    children: "⭐"
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-20 left-20 text-5xl opacity-20 animate-bounce",
                    style: {
                        animationDuration: '2.8s',
                        animationDelay: '1s'
                    },
                    children: "🎈"
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce",
                    style: {
                        animationDuration: '3.2s',
                        animationDelay: '0.3s'
                    },
                    children: "🎨"
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$confetti$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ref: confettiRef
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$victory$2d$effects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    score: score,
                    totalRounds: settings.roundCount
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: [
                        ...Array(30)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping",
                            style: {
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1 + Math.random()}s`
                            }
                        }, i, false, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md relative z-10 animate-bounce-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 mb-2 animate-pulse",
                                    children: isPerfect ? "🏆 Hoàn Hảo! 🏆" : "🎉 Tuyệt Vời! 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl animate-bounce",
                                    children: "⭐ ⭐ ⭐"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl font-black text-green-600 drop-shadow-lg animate-scale-in",
                                    children: [
                                        score,
                                        "/",
                                        settings.roundCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-purple-600 mt-2",
                                    children: [
                                        percentage,
                                        "% Đúng"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-2xl font-bold text-yellow-500 animate-pulse",
                                    children: "🎯 Tất cả đều đúng!"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl text-gray-700 mb-10 animate-fade-in",
                            children: isPerfect ? "Bạn là người chiến thắng xuất sắc!" : "Bạn đã hoàn thành trò chơi!"
                        }, void 0, false, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>window.location.reload(),
                                    className: "flex-1 px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-2xl text-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl",
                                    children: "🔄 Chơi Lại"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onBackToHome,
                                    className: "flex-1 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-2xl text-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl",
                                    children: "🏠 Trang Chủ"
                                }, void 0, false, {
                                    fileName: "[project]/components/game-screen.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-600",
                                children: "Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa"
                            }, void 0, false, {
                                fileName: "[project]/components/game-screen.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes bounce-in {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes scale-in {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-bounce-in {
            animation: bounce-in 0.6s ease-out;
          }

          .animate-scale-in {
            animation: scale-in 0.8s ease-out;
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
            animation-delay: 0.4s;
            animation-fill-mode: both;
          }
        `
                }, void 0, false, {
                    fileName: "[project]/components/game-screen.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/game-screen.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 text-5xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '3s'
                },
                children: "✨"
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-20 text-4xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '2.5s',
                    animationDelay: '0.5s'
                },
                children: "⭐"
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-20 text-4xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '2.8s',
                    animationDelay: '1s'
                },
                children: "🎈"
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 text-5xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '3.2s',
                    animationDelay: '0.3s'
                },
                children: "🎨"
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$confetti$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: confettiRef
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentRound: currentRound,
                totalRounds: settings.roundCount,
                score: score,
                onBack: onBackToHome
            }, void 0, false, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col min-h-[calc(100vh-120px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center flex-1 p-4",
                        children: currentWord && currentTargetLetter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2d$game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            word: currentWord,
                            targetLetter: currentTargetLetter,
                            onCardClick: handleCorrectAnswer,
                            onWrongAnswer: handleWrongAnswer,
                            onNext: handleNext,
                            wordOptions: wordOptions
                        }, `${currentWord.text}-${currentTargetLetter}-${currentRound}`, false, {
                            fileName: "[project]/components/game-screen.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/game-screen.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4 text-sm text-gray-600 relative z-10",
                        children: "Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa"
                    }, void 0, false, {
                        fileName: "[project]/components/game-screen.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/game-screen.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/game-screen.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_s(GameScreen, "irOrXZIFzgDN2hcfSAy7ESEL5Ac=");
_c = GameScreen;
var _c;
__turbopack_context__.k.register(_c, "GameScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/html-game-wrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HtmlGameWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HtmlGameWrapper({ gamePath, gameName, onBack }) {
    _s();
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HtmlGameWrapper.useEffect": ()=>{
            // Đảm bảo iframe load đúng cách
            if (iframeRef.current) {
                iframeRef.current.onload = ({
                    "HtmlGameWrapper.useEffect": ()=>{
                        console.log("Game loaded successfully");
                    }
                })["HtmlGameWrapper.useEffect"];
            }
        }
    }["HtmlGameWrapper.useEffect"], [
        gamePath
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-yellow-100 to-blue-100 flex flex-col relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 left-10 text-5xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '3s'
                },
                children: "✨"
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-20 text-4xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '2.5s',
                    animationDelay: '0.5s'
                },
                children: "⭐"
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-20 text-4xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '2.8s',
                    animationDelay: '1s'
                },
                children: "🎈"
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 right-10 text-5xl opacity-15 animate-bounce",
                style: {
                    animationDuration: '3.2s',
                    animationDelay: '0.3s'
                },
                children: "🎨"
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-4 bg-white/80 backdrop-blur-sm flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onBack,
                            className: "px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all",
                            children: "← Quay Lại"
                        }, void 0, false, {
                            fileName: "[project]/components/html-game-wrapper.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
                            children: gameName
                        }, void 0, false, {
                            fileName: "[project]/components/html-game-wrapper.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24"
                        }, void 0, false, {
                            fileName: "[project]/components/html-game-wrapper.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/html-game-wrapper.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex-1 relative z-10 p-4 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        ref: iframeRef,
                        src: gamePath,
                        className: "w-full h-full border-0",
                        title: gameName,
                        allow: "fullscreen",
                        style: {
                            width: '100%',
                            height: '100%',
                            display: 'block'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/html-game-wrapper.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/html-game-wrapper.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4 text-sm text-gray-600 relative z-10 bg-white/80 backdrop-blur-sm flex-shrink-0",
                children: "Giáo viên Hà Thị Thanh Hằng - Trường Mầm non Hoa Sữa"
            }, void 0, false, {
                fileName: "[project]/components/html-game-wrapper.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/html-game-wrapper.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HtmlGameWrapper, "t+QLBFeKBjfwOucJtKDr1H/gxrE=");
_c = HtmlGameWrapper;
var _c;
__turbopack_context__.k.register(_c, "HtmlGameWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/game-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$html$2d$game$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/html-game-wrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Page() {
    _s();
    const [currentGame, setCurrentGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("menu");
    const [htmlGamePath, setHtmlGamePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [htmlGameName, setHtmlGameName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: [
            "family"
        ],
        roundCount: 5,
        selectedLetters: [
            "a",
            "e",
            "i"
        ],
        isUppercase: false
    });
    const handleSelectGame = (gameId)=>{
        if (gameId === "letter-game") {
            setCurrentGame("letter-game-home");
        } else {
            // Các trò chơi HTML/CSS/JS
            const gamePaths = {
                "chiec-non-chu-cai": {
                    path: "/games/chiec-non-chu-cai/index.html",
                    name: "🎩 Chiếc Nón Chữ Cái"
                },
                "learn-letters-game": {
                    path: "/games/learn-letters-game/index.html",
                    name: "🍎 Hái Trái Cây"
                },
                "nong-trai": {
                    path: "/games/nong-trai/index.html",
                    name: "🚜 Nông Trại"
                },
                "tim-chu-khac-biet": {
                    path: "/games/tim-chu-khac-biet/index.html",
                    name: "🔍 Tìm Chữ Khác Biệt"
                },
                "tim-tu": {
                    path: "/games/tim-tu/index.html",
                    name: "🔎 Tìm Từ"
                }
            };
            const game = gamePaths[gameId];
            if (game) {
                setHtmlGamePath(game.path);
                setHtmlGameName(game.name);
                setCurrentGame("html-game");
            }
        }
    };
    const handleStartLetterGame = (newSettings)=>{
        setSettings(newSettings);
        setCurrentGame("letter-game");
    };
    const handleBackToMenu = ()=>{
        setCurrentGame("menu");
    };
    const handleBackToLetterHome = ()=>{
        setCurrentGame("letter-game-home");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen overflow-hidden",
        children: currentGame === "menu" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSelectGame: handleSelectGame
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, this) : currentGame === "letter-game-home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onStartGame: handleStartLetterGame,
            onBack: handleBackToMenu
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this) : currentGame === "letter-game" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$game$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            settings: settings,
            onBackToHome: handleBackToLetterHome
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 79,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$html$2d$game$2d$wrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            gamePath: htmlGamePath,
            gameName: htmlGameName,
            onBack: handleBackToMenu
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Page, "vFDBptIYKY1QhnBvSp207XdETZQ=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_22499d56._.js.map