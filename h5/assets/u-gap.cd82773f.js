import{l as t,m as e,h as a,o as i,c as o,n,i as r}from"./index-7259cb7d.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const u=g({name:"u-gap",mixins:[e,a,{props:{bgColor:{type:String,default:t.gap.bgColor},height:{type:[String,Number],default:t.gap.height},marginTop:{type:[String,Number],default:t.gap.marginTop},marginBottom:{type:[String,Number],default:t.gap.marginBottom}}}],computed:{gapStyle(){const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.height),marginTop:uni.$u.addUnit(this.marginTop),marginBottom:uni.$u.addUnit(this.marginBottom)};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}},[["render",function(t,e,a,g,u,p){const s=r;return i(),o(s,{class:"u-gap",style:n([p.gapStyle])},null,8,["style"])}],["__scopeId","data-v-ef5cc2d5"]]);export{u as _};
