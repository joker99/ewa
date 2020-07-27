(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["uiFabricLazy"],{

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js?05fe":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: Callout */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CalloutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Layer */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js");




var Callout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, layerProps = _a.layerProps, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["layerProps"]);
        var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CalloutContent__WEBPACK_IMPORTED_MODULE_2__[/* CalloutContent */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rest));
        return this.props.doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_3__[/* Layer */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, layerProps), content);
    };
    return Callout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

//# sourceMappingURL=Callout.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: CalloutContent */
/*! exports used: CalloutContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalloutContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@uifabric/utilities/7.23.0_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/@uifabric/utilities/lib/styled.js");
/* harmony import */ var _CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalloutContent.base */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js");
/* harmony import */ var _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent.styles */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js");



var CalloutContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__[/* CalloutContentBase */ "a"], _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__[/* getStyles */ "a"], undefined, { scope: 'CalloutContent' });
//# sourceMappingURL=CalloutContent.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/*! exports used: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@uifabric/styling/7.13.7_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/@uifabric/styling/lib/index.js");

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth,
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main',
};
var getStyles = function (props) {
    var _a;
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalClassNames */ "R"])(GlobalClassNames, theme);
    var semanticColors = theme.semanticColors, effects = theme.effects;
    return {
        container: [
            classNames.container,
            {
                position: 'relative',
            },
        ],
        root: [
            classNames.root,
            theme.fonts.medium,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderRadius: effects.roundedCorner2,
                boxShadow: effects.elevation16,
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__[/* HighContrastSelector */ "l"]] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText',
                    },
                    _a),
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* focusClear */ "L"])(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth },
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: semanticColors.menuBackground,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)',
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: semanticColors.menuBackground,
                borderRadius: effects.roundedCorner2,
            },
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: semanticColors.menuBackground,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative',
                borderRadius: effects.roundedCorner2,
            },
            overflowYHidden && {
                overflowY: 'hidden',
            },
            backgroundColor && {
                backgroundColor: backgroundColor,
            },
        ],
    };
};
//# sourceMappingURL=CalloutContent.styles.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js?40e5":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: ContextualMenu */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return ContextualMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@uifabric/utilities/7.23.0_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/@uifabric/utilities/lib/styled.js");
/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenu.base */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js");
/* harmony import */ var _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenu.styles */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js");





// This is to prevent cyclic import with ContextualMenu.base.tsx.
var LocalContextualMenu;
function onRenderSubMenu(subMenuProps) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LocalContextualMenu, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subMenuProps));
}
LocalContextualMenu = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__[/* styled */ "a"])(_ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__[/* ContextualMenuBase */ "a"], _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__[/* getStyles */ "a"], function () {
    return {
        onRenderSubMenu: onRenderSubMenu,
    };
}, { scope: 'ContextualMenu' });
/**
 * ContextualMenu description
 */
var ContextualMenu = LocalContextualMenu;
//# sourceMappingURL=ContextualMenu.js.map

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: getStyles */
/*! exports used: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@uifabric/styling/7.13.7_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/@uifabric/styling/lib/index.js");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/office-ui-fabric-react/7.121.9_c8cfd8d2632af57a582ce3bb7e56b488/node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js");


var GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open',
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__[/* getGlobalClassNames */ "R"])(GlobalClassNames, theme);
    var fonts = theme.fonts, semanticColors = theme.semanticColors, effects = theme.effects;
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            classNames.isopen,
            {
                backgroundColor: semanticColors.menuBackground,
                minWidth: '180px',
            },
            className,
        ],
        container: [
            classNames.container,
            {
                selectors: {
                    ':focus': { outline: 0 },
                },
            },
        ],
        list: [
            classNames.list,
            classNames.isopen,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
            },
        ],
        header: [
            classNames.header,
            fonts.small,
            {
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__[/* FontWeights */ "k"].semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__[/* CONTEXTUAL_MENU_ITEM_HEIGHT */ "a"],
                lineHeight: _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__[/* CONTEXTUAL_MENU_ITEM_HEIGHT */ "a"],
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left',
            },
        ],
        title: [
            classNames.title,
            {
                fontSize: fonts.mediumPlus.fontSize,
                paddingRight: '14px',
                paddingLeft: '14px',
                paddingBottom: '5px',
                paddingTop: '5px',
                backgroundColor: semanticColors.menuItemBackgroundPressed,
            },
        ],
        subComponentStyles: {
            callout: {
                root: {
                    boxShadow: effects.elevation8,
                },
            },
            menuItem: {},
        },
    };
};
//# sourceMappingURL=ContextualMenu.styles.js.map

/***/ })

}]);
//# sourceMappingURL=uiFabricLazy.js.map