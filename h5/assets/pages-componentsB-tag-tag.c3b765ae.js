import{o as e,c as t,w as a,i as l,a as s,f as c,b as _,r as u,F as o,g as i,d}from"./index-7259cb7d.js";import{_ as n}from"./u-tag.24398be9.js";import{r as p}from"./uni-app.es.58690612.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.807c0673.js";import"./u-transition.dfcf1fa1.js";const g=m({data:()=>({close1:!0,close2:!0,close3:!0,radios:[{checked:!0},{checked:!1},{checked:!1}],checkboxs:[{checked:!0},{checked:!1},{checked:!1}]}),methods:{radioClick(e){this.radios.map(((t,a)=>{t.checked=a===e}))},checkboxClick(e){this.checkboxs[e].checked=!this.checkboxs[e].checked}}},[["render",function(m,g,f,k,r,b){const x=i,h=p(d("u-tag"),n),y=l;return e(),t(y,{class:"u-page"},{default:a((()=>[s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("基础功能")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",plain:"",size:"mini",type:"warning"})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("自定义主题")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"error"})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("圆形标签")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",plain:"",shape:"circle"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning",shape:"circle"})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("镂空标签")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",plain:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning",plain:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success",plain:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"error",plain:""})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("镂空带背景色")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",plain:"",plainFill:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning",plain:"",plainFill:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success",plain:"",plainFill:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"error",plain:"",plainFill:""})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("自定义尺寸")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",plain:"",size:"mini"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success",plain:"",size:"large"})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("可关闭标签")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",size:"mini",closable:"",show:r.close1,onClose:g[0]||(g[0]=e=>r.close1=!1)},null,8,["show"])])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning",closable:"",show:r.close2,onClose:g[1]||(g[1]=e=>r.close2=!1)},null,8,["show"])])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success",plain:"",size:"large",closable:"",show:r.close3,onClose:g[2]||(g[2]=e=>r.close3=!1)},null,8,["show"])])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("带图片和图标")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",size:"mini",icon:"map",plain:""})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"warning",icon:"tags-fill"})])),_:1}),s(y,{class:"u-page__tag-item"},{default:a((()=>[s(h,{text:"标签",type:"success",plain:"",size:"large",icon:"https://cdn.uviewui.com/uview/example/tag.png"})])),_:1})])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("单选标签")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[(e(!0),_(o,null,u(r.radios,((l,c)=>(e(),t(y,{class:"u-page__tag-item",key:c},{default:a((()=>[s(h,{text:`选项${c+1}`,plain:!l.checked,type:"warning",name:c,onClick:b.radioClick},null,8,["text","plain","name","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1}),s(y,{class:"u-demo-block"},{default:a((()=>[s(x,{class:"u-demo-block__title"},{default:a((()=>[c("多选标签")])),_:1}),s(y,{class:"u-demo-block__content"},{default:a((()=>[(e(!0),_(o,null,u(r.checkboxs,((l,c)=>(e(),t(y,{class:"u-page__tag-item",key:c},{default:a((()=>[s(h,{text:`选项${c+1}`,plain:!l.checked,type:"warning",name:c,onClick:b.checkboxClick},null,8,["text","plain","name","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-42c198c2"]]);export{g as default};
