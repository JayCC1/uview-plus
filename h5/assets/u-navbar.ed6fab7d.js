import{l as t,m as e,h as a,d as l,o as r,c as n,w as o,n as i,p as s,a as u,q as c,k as f,f as d,t as _,i as h,g as b}from"./index-7259cb7d.js";import{_ as g}from"./u-status-bar.f6b304b5.js";import{r as p}from"./uni-app.es.58690612.js";import{_ as y}from"./u-icon.807c0673.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const m=v({name:"u-navbar",mixins:[e,a,{props:{safeAreaInsetTop:{type:Boolean,default:t.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:t.navbar.placeholder},fixed:{type:Boolean,default:t.navbar.fixed},border:{type:Boolean,default:t.navbar.border},leftIcon:{type:String,default:t.navbar.leftIcon},leftText:{type:String,default:t.navbar.leftText},rightText:{type:String,default:t.navbar.rightText},rightIcon:{type:String,default:t.navbar.rightIcon},title:{type:[String,Number],default:t.navbar.title},bgColor:{type:String,default:t.navbar.bgColor},titleWidth:{type:[String,Number],default:t.navbar.titleWidth},height:{type:[String,Number],default:t.navbar.height},leftIconSize:{type:[String,Number],default:t.navbar.leftIconSize},leftIconColor:{type:String,default:t.navbar.leftIconColor},autoBack:{type:Boolean,default:t.navbar.autoBack},titleStyle:{type:[String,Object],default:t.navbar.titleStyle}}}],data:()=>({}),methods:{leftClick(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick(){this.$emit("rightClick")}}},[["render",function(t,e,a,v,m,k){const x=h,C=p(l("u-status-bar"),g),I=p(l("u-icon"),y),S=b;return r(),n(x,{class:"u-navbar"},{default:o((()=>[t.fixed&&t.placeholder?(r(),n(x,{key:0,class:"u-navbar__placeholder",style:i({height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")})},null,8,["style"])):s("",!0),u(x,{class:c([t.fixed&&"u-navbar--fixed"])},{default:o((()=>[t.safeAreaInsetTop?(r(),n(C,{key:0,bgColor:t.bgColor},null,8,["bgColor"])):s("",!0),u(x,{class:c(["u-navbar__content",[t.border&&"u-border-bottom"]]),style:i({height:t.$u.addUnit(t.height),backgroundColor:t.bgColor})},{default:o((()=>[u(x,{class:"u-navbar__content__left","hover-class":"u-navbar__content__left--hover","hover-start-time":"150",onClick:k.leftClick},{default:o((()=>[f(t.$slots,"left",{},(()=>[t.leftIcon?(r(),n(I,{key:0,name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor},null,8,["name","size","color"])):s("",!0),t.leftText?(r(),n(S,{key:1,style:i({color:t.leftIconColor}),class:"u-navbar__content__left__text"},{default:o((()=>[d(_(t.leftText),1)])),_:1},8,["style"])):s("",!0)]),!0)])),_:3},8,["onClick"]),f(t.$slots,"center",{},(()=>[u(S,{class:"u-line-1 u-navbar__content__title",style:i([{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)])},{default:o((()=>[d(_(t.title),1)])),_:1},8,["style"])]),!0),t.$slots.right||t.rightIcon||t.rightText?(r(),n(x,{key:0,class:"u-navbar__content__right",onClick:k.rightClick},{default:o((()=>[f(t.$slots,"right",{},(()=>[t.rightIcon?(r(),n(I,{key:0,name:t.rightIcon,size:"20"},null,8,["name"])):s("",!0),t.rightText?(r(),n(S,{key:1,class:"u-navbar__content__right__text"},{default:o((()=>[d(_(t.rightText),1)])),_:1})):s("",!0)]),!0)])),_:3},8,["onClick"])):s("",!0)])),_:3},8,["class","style"])])),_:3},8,["class"])])),_:3})}],["__scopeId","data-v-a05cfecf"]]);export{m as _};
