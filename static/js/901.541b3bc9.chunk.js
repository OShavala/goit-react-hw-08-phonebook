"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[901],{6901:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,a,o,s,c,d,l=t(9434),p=t(2791),u=t(8881),x=t(3634),g=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},m=function(n){return n.filters.filter},b=t(4768),j=t(168),w=t(5867),Z=w.ZP.div(r||(r=(0,j.Z)(["\n  h1,\n  h2 {\n    text-align: center;\n    font-size: 28px;\n    color: #fff;\n    \n  }\n"]))),v=w.ZP.ul(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  margin: 0px;\n"]))),y=w.ZP.li(a||(a=(0,j.Z)(["\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  padding: 0px 0px 0px 20px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(255, 255, 255);\n  \n"]))),k=w.ZP.div(o||(o=(0,j.Z)(["\n  margin-right: 15px;\n  border-radius: 4px;\n  width: 27px;\n  height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"]))),C=w.ZP.p(s||(s=(0,j.Z)(["\n  font-size: 18px;\n"]))),P=w.ZP.button(c||(c=(0,j.Z)(["\n  display: inline-block;\n  padding: 10px 12px;\n  margin: 0px 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #391717;\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n  letter-spacing: 0.03em;\n  cursor: pointer;\n\n \n\n  &:hover,\n  &:focus {\n    background-color: #fff;\n    color: #391717;\n  }\n\n  \n"]))),z=t(184);function A(){var n=(0,l.v9)(g),e=(0,l.v9)(m).toLowerCase(),t=(0,l.I0)(),r=function(n){t((0,x.GK)(n.currentTarget.id))},i=e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;return(0,z.jsx)(v,{children:i.map((function(n){return(0,z.jsxs)(y,{children:[(0,z.jsx)(k,{children:(0,z.jsx)(b.FJ3,{})}),(0,z.jsxs)(C,{children:[n.name,": ",(0,z.jsx)("span",{children:n.number})]}),(0,z.jsx)(P,{type:"button",id:n.id,onClick:r,children:"Delete"})]},n.id)}))})}var L,F,I,_,q,D=w.ZP.label(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  padding: 0px;\n  margin: 0px 0px 10px;\n\n  input {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n   \n    outline: none;\n  }\n"]))),J=t(3165);function K(){var n=(0,l.I0)();return(0,z.jsxs)(D,{children:["Find contacts by name",(0,z.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,J.l)(e.target.value))}})]})}w.ZP.section(L||(L=(0,j.Z)(["\n  max-width: 540px;\n"])));var N=w.ZP.form(F||(F=(0,j.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  label {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n    padding: 0px;\n    \n  }\n\n  input {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    \n    border-radius: 5px;\n    background-color: rgb(255, 255, 255);\n     outline: none;\n  }\n"]))),S=w.ZP.ul(I||(I=(0,j.Z)(["\n  padding: 0;\n  display: flex;\n"]))),B=w.ZP.li(_||(_=(0,j.Z)(["\n  margin-right: 10px;\n  p {\n    margin-bottom: 8px;\n    font-size: 18px;\n  }\n"]))),E=w.ZP.button(q||(q=(0,j.Z)(["\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 0px auto;\n  border: none;\n  border-radius: 5px;\n  background-color: rgb(57, 23, 23);\n  color: rgb(255, 255, 255);\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.2;\n  letter-spacing: 0.03em;\n  cursor: pointer;\n  margin-top: 20px;\n\n  &:hover,\n  &:focus {\n    background-color: #fff;\n    color: rgb(57, 23, 23);\n    cursor: pointer;\n  }\n\n  svg {\n    margin-right: 10px;\n    width: 18px;\n    height: 18px;\n  }\n"]))),G=function(){var n=(0,l.I0)(),e=(0,l.v9)(g);return(0,z.jsxs)(N,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,a=r.number.value;if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))return alert("".concat(i," is already in contacts."));n((0,x.uK)({name:i,number:a})),r.reset()},children:[(0,z.jsxs)(S,{children:[(0,z.jsxs)(B,{children:[(0,z.jsx)("p",{children:"Name"}),(0,z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(B,{children:[(0,z.jsx)("p",{children:"Contact"}),(0,z.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,z.jsx)(E,{type:"submit",children:"Add contact"})]})},M=function(){var n=(0,l.I0)(),e=(0,l.v9)(f),t=(0,l.v9)(h);return(0,p.useEffect)((function(){n((0,x.yF)())}),[n]),(0,z.jsxs)(Z,{children:[(0,z.jsx)("h1",{children:"Your phonebook"}),(0,z.jsx)(G,{}),(0,z.jsx)("h2",{children:"Contacts"}),(0,z.jsx)(K,{}),e&&!t&&(0,z.jsx)(u.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),(0,z.jsx)(A,{})]})}}}]);
//# sourceMappingURL=901.541b3bc9.chunk.js.map