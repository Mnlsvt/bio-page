(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_cv_page_tsx_afd592._.js", {

"[project]/src/app/cv/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function HomePage() {
    _s();
    const [imageSize, setPaddingLeftRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("px-60");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const handleResize = {
                "HomePage.useEffect.handleResize": ()=>{
                    if (window.innerWidth < 640) {
                        setPaddingLeftRight("pl-10 pr-10");
                    // setMarginRight("mr-12");
                    // setMarginLeft("ml-10");
                    } else if (window.innerWidth < 768) {
                        setPaddingLeftRight("pl-12 pr-12");
                    // setTextSize("text-xl");
                    } else {
                        // setTextSize("text-2xl");
                        // setMarginRight("mr-80");
                        setPaddingLeftRight("pl-80 pr-80");
                    }
                }
            }["HomePage.useEffect.handleResize"];
            // Set initial size and add event listener
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "HomePage.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`,
                alt: "hero template",
                width: 5000,
                height: 5000,
                className: `rounded-xl object-cover h-xl w-xl py-20 ${imageSize}`,
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/src/app/cv/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/VETTAS_EMMANOUIL.pdf",
                className: "flex justify-center text-white text-xl font-bold text-center pb-20",
                children: "Download PDF file."
            }, void 0, false, {
                fileName: "[project]/src/app/cv/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/cv/page.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
} // "use client";
 // import React, { useState } from "react";
 // import Image from "next/image";
 // import "../globals.css";
 // const ImageGallery = () => {
 //   const [activeImage, setActiveImage] = useState<number | null>(null);
 //   const images = [
 //     { id: 1, src: `https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/cv-image.png`, alt: "CV" }
 //   ];
 //   const handleClick = (id: number) => {
 //     setActiveImage(id);
 //   };
 //   return (
 //     <div className="relative flex gap-4">
 //       {images.map((image) => (
 //         <div
 //           key={image.id}
 //           className={`relative w-40 h-40 cursor-pointer transition-all duration-300 ${
 //             activeImage === image.id ? "z-10 scale-110" : "z-0"
 //           }`}
 //           onClick={() => handleClick(image.id)}
 //         >
 //           <Image
 //             src={image.src}
 //             alt={image.alt}
 //             layout="fill"
 //             objectFit="cover"
 //             className="rounded-lg centered"
 //             unoptimized
 //           />
 //         </div>
 //       ))}
 //     </div>
 //   );
 // };
 // export default ImageGallery;
_s(HomePage, "pDPNgmBbOSYfKS0r3sBsNjJyChs=");
_c = HomePage;
var _c;
__turbopack_refresh__.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/cv/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_cv_page_tsx_afd592._.js.map