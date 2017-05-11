import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*:before": {
        "color": "#96a6ca"
    },
    "body": {
        "height": "100%",
        "fontFamily": "'Noto Sans TC', sans-serif",
        "fontWeight": "300",
        "marginTop": 70,
        "fontSize": 13,
        "lineHeight": 25,
        "backgroundColor": "#F7F7F7"
    },
    "text-center": {
        "textAlign": "center"
    },
    "general-subhead h1": {
        "fontSize": 28
    },
    "wrapper": {
        "minHeight": "100%",
        "position": "relative"
    },
    "section": {
        "marginTop": 70,
        "marginRight": 0,
        "marginBottom": 70,
        "marginLeft": 0
    },
    "pad-top-botm": {
        "paddingTop": 50,
        "paddingBottom": 50
    },
    "pad-row": {
        "paddingTop": 20
    },
    "clr-white": {
        "color": "#fff"
    },
    "clr-main": {
        "color": "#ff6a00"
    },
    "transparent-bk": {
        "backgroundColor": "transparent!important"
    },
    "clr-blue-bk": {
        "backgroundColor": "#7383F8!important"
    },
    "menu-back": {
        "backgroundColor": "#123a4d"
    },
    "navbar-brand-logo": {
        "maxHeight": 60,
        "paddingBottom": 10
    },
    "navbar-brand span": {
        "maxHeight": 60,
        "paddingBottom": 10,
        "fontSize": 30,
        "color": "#e6e6e6",
        "fontFamily": "'Play', sans-serif"
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#FFF"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#96a6ca"
    },
    "navbar-nav > li > a": {
        "borderRight": "1px solid #123444",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "nav li > a>i": {
        "color": "#FB9351",
        "paddingLeft": 5
    },
    "nav li > a>span": {
        "fontSize": 13,
        "display": "table",
        "color": "#C5C5C5"
    },
    "nav dropdown-menu > li > a": {
        "paddingTop": 15,
        "paddingRight": 10,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "borderBottom": "1px solid #565AB1",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "nav dropdown-menu": {
        "minWidth": 200
    },
    "nav dropdown-menu > li > a > i": {
        "color": "#565AB1",
        "fontSize": 14,
        "marginRight": 10
    },
    "navbar-header": {
        "minHeight": 70
    },
    "navbar-default": {
        "borderColor": "rgba(231, 231, 231, 0)"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "rgba(221, 221, 221, 0)"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "rgba(221, 221, 221, 0)"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#A0761D"
    },
    "div-social-top": {
        "backgroundColor": "#565AB1",
        "minHeight": 40,
        "paddingTop": 20,
        "paddingRight": 50,
        "paddingBottom": 10,
        "paddingLeft": 50,
        "color": "#fff",
        "fontSize": 17
    },
    "div-social-top a": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "div-social-top a:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "div-social-top i": {
        "marginRight": 10
    },
    "control-icon": {
        "position": "absolute",
        "top": "50%"
    },
    "carousel-controlright": {
        "right": 0,
        "left": "auto",
        "backgroundRepeat": "repeat-x",
        "backgroundImage": "linear-gradient(to right,rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, 0) 100%)!important"
    },
    "carousel-controlleft": {
        "left": 0,
        "right": "auto",
        "backgroundRepeat": "repeat-x",
        "backgroundImage": "linear-gradient(to left,rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, 0) 100%)!important"
    },
    "back-light": {
        "backgroundColor": "rgba(0, 0, 0, 0.80)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "lineHeight": 30
    },
    "welcome-div": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#777777",
        "color": "#fff",
        "textAlign": "center"
    },
    "welcome-div span": {
        "fontSize": 20,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "home-service i": {
        "color": "#ff6a00",
        "cursor": "pointer"
    },
    "home-service i:hover": {
        "color": "#565AB1",
        "cursor": "pointer",
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out"
    },
    "service-info i": {
        "marginRight": 10,
        "color": "#ff6a00",
        "cursor": "pointer"
    },
    "service-info i:hover": {
        "color": "#000",
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out"
    },
    "icon-round": {
        "marginTop": 30,
        "fontSize": 60,
        "height": 128,
        "width": 128,
        "lineHeight": 130,
        "marginRight": 10,
        "textAlign": "center",
        "display": "inline-block",
        "borderRadius": "100%",
        "marginBottom": 10,
        "backgroundColor": "rgba(158, 158, 158, 0.15)"
    },
    "vedio-style": {
        "border": 0,
        "width": "100%",
        "minHeight": 300
    },
    "index2-header": {
        "background": "url(../img/index2-head.jpg) no-repeat center center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "index2-header h1": {
        "paddingTop": 100,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff",
        "fontSize": 50,
        "fontWeight": "800",
        "textAlign": "center"
    },
    "index2-header p": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff",
        "fontSize": 16,
        "lineHeight": 20,
        "fontWeight": "800",
        "textAlign": "center"
    },
    "index2-header overlay": {
        "background": "rgba(11, 9, 27, 0.7)",
        "minHeight": 400
    },
    "middle-section": {
        "paddingBottom": 30,
        "background": "url(../img/middle-text.jpg) no-repeat 50% 50%",
        "backgroundAttachment": "fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "width": "100%",
        "display": "block",
        "height": "auto",
        "minHeight": 300,
        "color": "#fff",
        "textAlign": "center",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingLeft": 30
    },
    "slide-custom": {
        "minHeight": 200,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "lineHeight": 30
    },
    "h4 i": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "user-img": {
        "border": "2px solid #fff",
        "overflow": "hidden",
        "borderRadius": "50%",
        "display": "inline-block"
    },
    "img-u": {
        "maxHeight": 90,
        "maxWidth": 90
    },
    "media-sec": {
        "backgroundColor": "#565AB1",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff"
    },
    "media-sec h3": {
        "color": "#AF9BFF"
    },
    "media-sec small": {
        "color": "#ff6a00"
    },
    "just-stats": {
        "paddingBottom": 30,
        "background": "url(../img/stats.jpg) no-repeat 50% 50%",
        "backgroundAttachment": "fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover",
        "width": "100%",
        "display": "block",
        "height": "auto",
        "minHeight": 250,
        "color": "#fff",
        "textAlign": "center",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingLeft": 30
    },
    "stats-div": {
        "textAlign": "center",
        "width": "100%",
        "minHeight": 100,
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 30,
        "paddingLeft": 20,
        "color": "#fff"
    },
    "stats-div > h3": {
        "fontSize": 60,
        "fontWeight": "900"
    },
    "footer-sec": {
        "backgroundColor": "#123a4d",
        "color": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "footer-sec i": {
        "marginRight": 10
    },
    "footer-sec span": {
        "fontSize": 20,
        "color": "#96a6ca"
    },
    "footer-sec small": {
        "display": "table-cell",
        "color": "#C5C5C5"
    },
    "footer-sec p": {
        "borderRight": "1px solid #123444",
        "paddingRight": 10
    },
    "footer-sec media-heading > a": {
        "color": "#fff",
        "fontSize": 14
    },
    "blog-footer-div": {
        "borderRight": "1px solid #123444",
        "paddingRight": 10
    },
    "footser-end": {
        "textAlign": "right",
        "backgroundColor": "#123a4d",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "rotate-icon:hover": {
        "WebkitTransform": "rotate(180deg)",
        "MozTransform": "rotate(180deg)",
        "OTransform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "transform": "rotate(180deg)",
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out",
        "cursor": "pointer"
    },
    "upfront-trans:hover": {
        "cursor": "pointer",
        "WebkitTransform": "scale(1.1)",
        "MozTransform": "scale(1.1)",
        "OTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "transform": "scale(1.1)",
        "WebkitTransition": "all 0.5s  ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out"
    },
    "general-subhead": {
        "backgroundColor": "#1e6080",
        "paddingTop": 10,
        "paddingRight": 100,
        "paddingBottom": 15,
        "paddingLeft": 100,
        "color": "#fff"
    },
    "request-quote": {
        "backgroundColor": "#565AB1",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "#fff"
    },
    "request-quotec h3": {
        "color": "#AF9BFF"
    },
    "request-quotec small": {
        "color": "#000"
    },
    "just-middle-row": {
        "backgroundColor": "#d41010",
        "color": "#fff",
        "textAlign": "center"
    },
    "color-facebook": {
        "color": "#3B5998"
    },
    "color-twitter": {
        "color": "#00aced"
    },
    "color-google-plus": {
        "color": "#dd4b39"
    },
    "color-linkedin": {
        "color": "#007bb6"
    },
    "color-pinterest": {
        "color": "#cb2027"
    },
    "cnt": {
        "width": "100%",
        "minHeight": 350,
        "border": "1px solid #e1e1e1"
    },
    "portfolio-item": {
        "border": "2px solid #565AB1",
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3
    },
    "portfolio-item p": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "portfolio-item h5": {
        "textAlign": "center",
        "backgroundColor": "#565AB1",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15
    },
    "portfolio-item overlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "opacity": 0,
        "backgroundColor": "rgba(255, 169, 89, 1)",
        "textAlign": "center",
        "verticalAlign": "middle",
        "WebkitTransition": "opacity 300ms",
        "MozTransition": "opacity 300ms",
        "OTransition": "opacity 300ms",
        "transition": "opacity 300ms",
        "cursor": "pointer",
        "WebkitBorderRadius": 10,
        "MozBorderRadius": 10,
        "borderRadius": 10
    },
    "portfolio-item overlay preview": {
        "position": "relative",
        "top": "50%",
        "display": "inline-block",
        "marginTop": -20
    },
    "portfolio-item:hover overlay": {
        "opacity": 1,
        "zoom": 1,
        "filter": "alpha(opacity=100)"
    },
    "overlay a": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "overlay a:hover": {
        "color": "#fff",
        "textDecoration": "none"
    },
    "set-hover-portfolio": {
        "opacity": "1!important",
        "zoom": "1!important",
        "filter": "alpha(opacity=100)!important"
    },
    "price-simple": {
        "fontSize": "50px!important",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "color": "#ff6a00",
        "border": "none",
        "fontWeight": "700"
    },
    "simple-table:hover": {
        "WebkitTransform": "scale(1.1)",
        "MozTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "OTransform": "scale(1.1)",
        "transform": "scale(1.1)",
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out",
        "cursor": "pointer"
    },
    "normal-table:hover": {
        "WebkitTransform": "scale(1.1)",
        "MozTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "OTransform": "scale(1.1)",
        "transform": "scale(1.1)",
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out",
        "cursor": "pointer"
    },
    "plan": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "plan li": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "borderBottom": "1px solid #e1e1e1"
    },
    "plan li i": {
        "paddingRight": 10
    },
    "price": {
        "fontSize": "30px!important",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "backgroundColor": "#9d9898",
        "color": "#fff",
        "border": "none",
        "fontWeight": "700",
        "WebkitBorderRadius": 10,
        "MozBorderRadius": 10,
        "borderRadius": 10
    },
    "adjust-border-radius": {
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "adjust-border": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "plan-two": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center",
        "cursor": "pointer"
    },
    "active-plan-price": {
        "WebkitTransform": "scale(1.1)",
        "MozTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "OTransform": "scale(1.1)",
        "transform": "scale(1.1)",
        "cursor": "pointer"
    },
    "plan-two li": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0,
        "fontSize": 16,
        "borderBottom": "1px dotted #e1e1e1"
    },
    "round-body": {
        "display": "table",
        "width": 135,
        "height": 135,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 14,
        "marginLeft": "auto",
        "border": "3px solid #ff6a00",
        "borderRadius": "100%"
    },
    "price-main": {
        "color": "#ff6a00",
        "display": "table-cell",
        "fontSize": 28,
        "fontWeight": "bold",
        "textTransform": "uppercase",
        "verticalAlign": "middle"
    },
    "price-Unit": {
        "display": "block"
    },
    "price-main small": {
        "fontSize": "10px!important",
        "fontWeight": "normal"
    },
    "custom-blog": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "custom-blog p": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "textAlign": "justify"
    },
    "custom-blog h2": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "textTransform": "uppercase",
        "textAlign": "center"
    },
    "custom-blog a": {
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3
    },
    "facebook-div": {
        "border": "none",
        "overflow": "hidden",
        "width": 235,
        "height": 258,
        "paddingTop": 50
    },
    "blog-single a": {
        "marginTop": 15,
        "marginRight": 3,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "panel-title-adjust": {
        "fontSize": 14,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "panel-title-adjust a:hover": {
        "textDecoration": "none"
    },
    "panel-title-adjust i": {
        "paddingRight": 5
    },
    "blog-comments h2": {
        "paddingBottom": 50
    },
    "cd-user-modal": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(52, 54, 66, 0.9)",
        "zIndex": 3,
        "overflowY": "auto",
        "cursor": "pointer",
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransition": "opacity 0.3s, visibility 0.3s",
        "MozTransition": "opacity 0.3s, visibility 0.3s",
        "transition": "opacity 0.3s, visibility 0.3s"
    },
    "cd-user-modalis-visible": {
        "visibility": "visible",
        "opacity": 1
    },
    "cd-user-modalis-visible cd-user-modal-container": {
        "WebkitTransform": "translateY(0)",
        "MozTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "OTransform": "translateY(0)",
        "transform": "translateY(0)"
    },
    "cd-user-modal-container": {
        "position": "relative",
        "width": "90%",
        "maxWidth": 600,
        "background": "#FFF",
        "marginTop": 3,
        "marginRight": "auto",
        "marginBottom": 4,
        "marginLeft": "auto",
        "cursor": "auto",
        "borderRadius": 0.25,
        "WebkitTransform": "translateY(-30px)",
        "MozTransform": "translateY(-30px)",
        "MsTransform": "translateY(-30px)",
        "OTransform": "translateY(-30px)",
        "transform": "translateY(-30px)",
        "WebkitTransitionProperty": "-webkit-transform",
        "MozTransitionProperty": "-moz-transform",
        "transitionProperty": "transform",
        "WebkitTransitionDuration": "0.3s",
        "MozTransitionDuration": "0.3s",
        "transitionDuration": "0.3s"
    },
    "cd-user-modal-container cd-switcher:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "cd-user-modal-container cd-switcher li": {
        "listStyleType": "none",
        "width": "50%",
        "float": "left",
        "textAlign": "center"
    },
    "cd-user-modal-container cd-switcher li:first-child a": {
        "borderRadius": ".25em 0 0 0"
    },
    "cd-user-modal-container cd-switcher li:last-child a": {
        "borderRadius": "0 .25em 0 0"
    },
    "cd-user-modal-container cd-switcher a": {
        "display": "block",
        "width": "100%",
        "height": 40,
        "lineHeight": 40,
        "background": "#d2d8d8",
        "color": "#809191"
    },
    "cd-user-modal-container cd-switcher aselected": {
        "background": "#FFF",
        "color": "#505260"
    },
    "cd-form": {
        "paddingTop": 1.4,
        "paddingRight": 1.4,
        "paddingBottom": 1.4,
        "paddingLeft": 1.4
    },
    "cd-form fieldset": {
        "position": "relative",
        "marginTop": 1.4,
        "marginRight": 0,
        "marginBottom": 1.4,
        "marginLeft": 0
    },
    "cd-form fieldset:first-child": {
        "marginTop": 0
    },
    "cd-form fieldset:last-child": {
        "marginBottom": 0
    },
    "cd-form label": {
        "fontSize": 0.875
    },
    "cd-form labelimage-replace": {
        "display": "inline-block",
        "position": "absolute",
        "left": 15,
        "top": "50%",
        "bottom": "auto",
        "WebkitTransform": "translateY(-50%)",
        "MozTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "OTransform": "translateY(-50%)",
        "transform": "translateY(-50%)",
        "height": 20,
        "width": 20,
        "overflow": "hidden",
        "textIndent": "100%",
        "whiteSpace": "nowrap",
        "color": "transparent",
        "textShadow": "none",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "50% 0"
    },
    "cd-form labelcd-username": {
        "backgroundImage": "url(\"../img/cd-icon-username.svg\")"
    },
    "cd-form labelcd-email": {
        "backgroundImage": "url(\"../img/cd-icon-email.svg\")"
    },
    "cd-form labelcd-password": {
        "backgroundImage": "url(\"../img/cd-icon-password.svg\")"
    },
    "cd-form input": {
        "marginTop": -5,
        "marginRight": "auto",
        "marginBottom": -5,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderRadius": 0.25
    },
    "cd-form inputfull-width": {
        "width": "100%"
    },
    "cd-form inputhas-padding": {
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 50
    },
    "cd-form inputhas-border": {
        "border": "1px solid #d2d8d8",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "OAppearance": "none",
        "appearance": "none"
    },
    "cd-form inputhas-border:focus": {
        "borderColor": "#343642",
        "boxShadow": "0 0 5px rgba(52, 54, 66, 0.1)",
        "outline": "none"
    },
    "cd-form inputhas-error": {
        "border": "1px solid #d76666"
    },
    "cd-form input[type=password]": {
        "paddingRight": 65
    },
    "cd-form input[type=submit]": {
        "paddingTop": 16,
        "paddingRight": 0,
        "paddingBottom": 16,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "#2f889a",
        "color": "#FFF",
        "fontWeight": "bold",
        "border": "none",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "OAppearance": "none",
        "appearance": "none"
    },
    "no-touch cd-form input[type=submit]:hover": {
        "background": "#3599ae",
        "outline": "none"
    },
    "no-touch cd-form input[type=submit]:focus": {
        "background": "#3599ae",
        "outline": "none"
    },
    "cd-form hide-password": {
        "display": "inline-block",
        "position": "absolute",
        "right": 0,
        "top": "50%",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 6,
        "paddingLeft": 15,
        "borderLeft": "1px solid #d2d8d8",
        "bottom": "auto",
        "WebkitTransform": "translateY(-50%)",
        "MozTransform": "translateY(-50%)",
        "MsTransform": "translateY(-50%)",
        "OTransform": "translateY(-50%)",
        "transform": "translateY(-50%)",
        "fontSize": 0.875,
        "color": "#343642"
    },
    "cd-form cd-error-message": {
        "display": "inline-block",
        "position": "absolute",
        "left": -5,
        "bottom": -35,
        "background": "rgba(215, 102, 102, 0.9)",
        "paddingTop": 0.8,
        "paddingRight": 0.8,
        "paddingBottom": 0.8,
        "paddingLeft": 0.8,
        "zIndex": 2,
        "color": "#FFF",
        "fontSize": 0.8125,
        "borderRadius": 0.25,
        "pointerEvents": "none",
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransition": "opacity 0.2s 0, visibility 0 0.2s",
        "MozTransition": "opacity 0.2s 0, visibility 0 0.2s",
        "transition": "opacity 0.2s 0, visibility 0 0.2s"
    },
    "cd-form cd-error-message::after": {
        "content": "''",
        "position": "absolute",
        "left": 22,
        "bottom": "100%",
        "height": 0,
        "width": 0,
        "borderLeft": "8px solid transparent",
        "borderRight": "8px solid transparent",
        "borderBottom": "8px solid rgba(215, 102, 102, 0.9)"
    },
    "cd-form cd-error-messageis-visible": {
        "opacity": 1,
        "visibility": "visible",
        "WebkitTransition": "opacity 0.2s 0, visibility 0 0",
        "MozTransition": "opacity 0.2s 0, visibility 0 0",
        "transition": "opacity 0.2s 0, visibility 0 0"
    },
    "cd-form-message": {
        "paddingTop": 1.4,
        "paddingRight": 1.4,
        "paddingBottom": 0,
        "paddingLeft": 1.4,
        "fontSize": 0.875,
        "lineHeight": 1.4,
        "textAlign": "center"
    },
    "cd-form-bottom-message": {
        "position": "absolute",
        "width": "100%",
        "left": 0,
        "bottom": -40,
        "textAlign": "center",
        "fontSize": 0.875
    },
    "cd-form-bottom-message a": {
        "color": "#FFF",
        "textDecoration": "underline"
    },
    "cd-close-form": {
        "display": "block",
        "position": "absolute",
        "width": 40,
        "height": 40,
        "right": 0,
        "top": -40,
        "background": "url(\"../img/cd-icon-close.svg\") no-repeat center center",
        "textIndent": "100%",
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "cd-login": {
        "display": "none"
    },
    "cd-signup": {
        "display": "none"
    },
    "cd-signup2": {
        "display": "none"
    },
    "cd-reset-password": {
        "display": "none"
    },
    "cd-loginis-selected": {
        "display": "block"
    },
    "cd-signupis-selected": {
        "display": "block"
    },
    "cd-signup2is-selected": {
        "display": "block"
    },
    "cd-reset-passwordis-selected": {
        "display": "block"
    },
    "btn-info": {
        "color": "#fff",
        "backgroundColor": "#8c9bbe",
        "borderColor": "#909eb9"
    },
    "btn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#7486af",
        "borderColor": "#7585a2"
    },
    "btn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#7486af",
        "borderColor": "#7585a2"
    },
    "btn-info:active": {
        "color": "#fff",
        "backgroundColor": "#7486af",
        "borderColor": "#7585a2"
    },
    "btn-infoactive": {
        "color": "#fff",
        "backgroundColor": "#7486af",
        "borderColor": "#7585a2"
    },
    "open dropdown-togglebtn-info": {
        "color": "#fff",
        "backgroundColor": "#7486af",
        "borderColor": "#7585a2"
    }
});