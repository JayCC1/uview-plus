import{_ as o}from"./u-navbar.ed6fab7d.js";import{o as e,c as t,w as p,i as l,a,b as s,r as i,F as u,n as r,d as n,e as c}from"./index-7259cb7d.js";import{r as d}from"./uni-app.es.58690612.js";import{_ as m}from"./u-gap.cd82773f.js";import{_ as v}from"./u-cell.4cf33127.js";import{_ as h}from"./u-cell-group.07527697.js";import{_ as y}from"./u-button.390d52b0.js";import{_ as w}from"./u-popup.83d9c595.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.f6b304b5.js";import"./u-icon.807c0673.js";import"./u-line.15bda168.js";import"./u-loading-icon.22c3afc5.js";import"./u-overlay.2869c749.js";import"./u-transition.dfcf1fa1.js";import"./u-safe-bottom.f900bb87.js";const O=f({data:()=>({show:!1,popupData:{overlay:!0,mode:"bottom",borderRadius:"",closeable:!0,closeOnClickOverlay:!0},list:[{popupData:{overlay:!0,mode:"top",closeOnClickOverlay:!0},title:"顶部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeTop.png"},{popupData:{overlay:!0,mode:"right",closeOnClickOverlay:!0},title:"右侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeRight.png"},{popupData:{overlay:!0,mode:"bottom",closeOnClickOverlay:!0},title:"底部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"},{popupData:{overlay:!0,mode:"left",closeOnClickOverlay:!0},title:"左侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"},{popupData:{overlay:!0,mode:"center",round:10,closeOnClickOverlay:!0},title:"居中弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"},{popupData:{overlay:!0,mode:"bottom",round:10,closeOnClickOverlay:!0},title:"显示圆角",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showRadis.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!1,closeOnClickOverlay:!1},title:"禁止点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/noClose.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!0,closeOnClickOverlay:!0},title:"显示关闭按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"}]}),methods:{openPopup(o){this.popupData=o,uni.$u.sleep().then((()=>{this.show=!this.show}))},navigateBack(){uni.navigateBack()},open(){},close(){this.show=!1}}},[["render",function(f,O,b,g,C,k){const D=d(n("u-navbar"),o),j=d(n("u-gap"),m),_=c,x=d(n("u-cell"),v),U=d(n("u-cell-group"),h),B=d(n("u-button"),y),R=l,I=d(n("u-popup"),w);return e(),t(R,null,{default:p((()=>[a(D,{title:"弹窗",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),a(j,{height:"20",bgColor:"#fff"}),a(U,null,{default:p((()=>[(e(!0),s(u,null,i(C.list,((o,l)=>(e(),t(x,{titleStyle:{fontWeight:500},onClick:e=>k.openPopup(o.popupData),title:o.title,key:l,isLink:""},{default:p((()=>[a(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),a(I,{safeAreaInsetBottom:!0,safeAreaInsetTop:!0,mode:C.popupData.mode,show:C.show,round:C.popupData.round,overlay:C.popupData.overlay,borderRadius:C.popupData.borderRadius,closeable:C.popupData.closeable,closeOnClickOverlay:C.popupData.closeOnClickOverlay,onClose:k.close,onOpen:k.open},{default:p((()=>[a(R,{class:"u-popup-slot",style:r({width:["bottom","top"].includes(C.popupData.mode)?"750rpx":"200px",marginTop:["left","right"].includes(C.popupData.mode)?"480rpx":"0"})},{default:p((()=>[a(B,{type:"success",text:"点我关闭",customStyle:"width: 200rpx",onClick:O[0]||(O[0]=o=>C.show=!C.show)})])),_:1},8,["style"])])),_:1},8,["mode","show","round","overlay","borderRadius","closeable","closeOnClickOverlay","onClose","onOpen"])])),_:1})}],["__scopeId","data-v-3dd9d7d4"]]);export{O as default};
