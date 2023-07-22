import{s as i,d as n,j as e,I as t,P as s}from"./index-857828b4.js";import{e as z,f as x,c as G,g as C,a as p,h as L,i as M,E as r}from"./index.esm-288fe6f9.js";const I=i.section`
  display: flex;
  gap: 32px;
  background-color: #fef9f9;
  padding: 62px 0;
`,B=i.div``,E=i.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.xxl};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;
`,R=i.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${a=>a.theme.colors.bgdColor};
`,D=i.div`
  text-align: center;
  margin-bottom: 26px;
`,q=i(z)`
  position: relative;
  width: 395px;
  padding: 20px 24px 16px;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: ${a=>a.theme.boxShadow.main};
`,l=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`,m=i.label`
  font-size: 18px;
  font-family: ${a=>a.theme.fonts.main.semiBold};
  letter-spacing: 0.72px;
`,d=i(x)`
  /* float: right; */
  min-width: 255px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${a=>a.theme.colors.blue};
  font-size: ${a=>a.theme.fontSizes.md};
  letter-spacing: 0.64px;
  padding: 4px 12px;
`,T=i.button`
  display: flex;
  justify-content: center;
  width: 255px;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${a=>a.theme.colors.blue};
  color: ${a=>a.theme.colors.bgdColor};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  margin-left: auto;
`,A=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;i.p`
  color: ${a=>a.theme.colors.grey};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const N=i.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
`,K=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,H=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,Z=3e6,O=G().shape({avatar:C().required("Please, add your avatar").test("fileSize","Image too large, max 3mb",a=>a.size<=Z),name:p().required(),email:p().required("It's Required field").matches(K,"Invalid email address"),birthday:L().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:p().required().matches(H,"Invalid phone number"),city:p().required("It's Required field")}),U=()=>{const[a,u]=n.useState(""),[w,b]=n.useState(""),[y,f]=n.useState(""),[j,_]=n.useState(""),[k,P]=n.useState(""),[v,F]=n.useState(""),S=(o,$)=>{u(o.avatar),b(o.name),f(o.email),_(o.birthday),P(o.phone),F(o.city),console.log(o),console.log($)};return e.jsxs(B,{children:[e.jsx(E,{children:"My information:"}),e.jsx(M,{initialValues:{name:w,email:y,birthday:j,phone:k,city:v,avatar:a},onSubmit:S,validationSchema:O,children:e.jsxs(q,{children:[e.jsxs(N,{children:[e.jsx(t,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"}),e.jsx(t,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"})]}),e.jsxs(D,{children:[e.jsx(R,{}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(t,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"}),"Confirm",e.jsx(t,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})]}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(t,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),e.jsx(x,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*"}),e.jsx(r,{name:"avatar",component:"div",style:{color:"red",fontSize:14}})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"name",children:"Name:"}),e.jsx(d,{id:"name",name:"name",placeholder:"Anna"}),e.jsx(r,{name:"name",component:"div"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"email",children:"Email:"}),e.jsx(d,{id:"email",name:"email",placeholder:"anna00@gmail.com"}),e.jsx(r,{name:"email",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"birthday",children:"Birthday:"}),e.jsx(d,{type:"date",id:"birthday",name:"birthday"}),e.jsx(r,{name:"birthday",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"phone",children:"Phone:"}),e.jsx(d,{id:"phone",name:"phone",placeholder:"+38000000000"}),e.jsx(r,{name:"phone",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"city",children:"City:"}),e.jsx(d,{id:"city",name:"city",placeholder:"Kyiv"}),e.jsx(r,{name:"city",component:"div",style:{color:"red",fontSize:12}})]}),e.jsx(T,{type:"submit",children:"Save"}),e.jsxs(A,{children:[e.jsx(t,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx("p",{children:"Log Out"})]})]})})]})},V=()=>e.jsx(e.Fragment,{children:e.jsx(U,{})}),Y=i.div``,J=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Q=i.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.xxl};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;
`,W=i.ul``,X=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${a=>a.theme.colors.blue};
  border: none;
  border-radius: 40px;
  padding: 8px 20px;
  color: ${a=>a.theme.colors.bgdColor};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.bold};
  letter-spacing: 0.64px;
`,ee=i.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 821px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: ${a=>a.theme.boxShadow.main};
  border-radius: 40px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,ae=i.img`
  width: 161px;
  border-radius: 40px;
`,c=i.p`
  font-family: ${a=>a.theme.fonts.main.regular};
  font-size: ${a=>a.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`,ie=i.div`
  display: block;
  position: absolute;
  top: 8%;
  right: 2%;
`,g=({item:a})=>e.jsxs(ee,{children:[e.jsx(ie,{children:e.jsx(t,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),e.jsx(ae,{src:a.url}),e.jsxs("div",{children:[e.jsxs(c,{children:[e.jsx("b",{children:"Name:"})," ",a.name]}),e.jsxs(c,{children:[e.jsx("b",{children:"Date of birth:"})," ",a.birthday]}),e.jsxs(c,{children:[e.jsx("b",{children:"Type:"})," ",a.breed]}),e.jsxs(c,{children:[e.jsx("b",{children:"Comments:"})," ",a.comments]})]})]});g.propTypes={item:s.shape({name:s.string.isRequired,birthday:s.string.isRequired,breed:s.string.isRequired,comments:s.string.isRequired,url:s.string.isRequired}).isRequired};const te=[{name:"Buddy",birthday:"2019-02-14",breed:"Labrador Retriever",comments:"Loves playing fetch!",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Luna",birthday:"2020-07-08",breed:"Maine Coon",comments:"A fluffy and gentle cat.",place:"Lviv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Max",birthday:"2018-11-03",breed:"German Shepherd",comments:"Great at guarding the house.",place:"Kharkiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Coco",birthday:"2021-04-20",breed:"French Bulldog",comments:"Enjoys napping on the couch.",place:"Dnipro",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Rocky",birthday:"2017-09-10",breed:"Golden Retriever",comments:"Loves swimming in the river.",place:"Odessa",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Molly",birthday:"2019-12-05",breed:"Siberian Husky",comments:"Energetic and loves running.",place:"Zaporizhzhia",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Leo",birthday:"2022-01-25",breed:"British Shorthair",comments:"Curious and playful.",place:"Vinnytsia",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Bella",birthday:"2020-03-12",breed:"Poodle",comments:"Loves learning new tricks.",place:"Kherson",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Oscar",birthday:"2018-06-18",breed:"Ragdoll",comments:"Very affectionate and gentle.",place:"Poltava",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucy",birthday:"2021-08-30",breed:"Bengal",comments:"Adores climbing and jumping.",place:"Chernihiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Charlie",birthday:"2019-11-02",breed:"Beagle",comments:"Has a great sense of smell.",place:"Sumy",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Daisy",birthday:"2020-05-22",breed:"Dachshund",comments:"Loves digging in the garden.",place:"Rivne",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Milo",birthday:"2017-07-17",breed:"Chihuahua",comments:"Tiny but full of energy.",place:"Ternopil",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Sophie",birthday:"2021-03-09",breed:"Scottish Fold",comments:"Likes playing with paper balls.",place:"Cherkasy",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Teddy",birthday:"2018-09-01",breed:"Bulldog",comments:"Loves cuddling on the couch.",place:"Ivano-Frankivsk",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Zoe",birthday:"2022-02-12",breed:"Siamese",comments:"Talkative and affectionate.",place:"Khmelnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucky",birthday:"2019-10-07",breed:"Jack Russell Terrier",comments:"Highly energetic and smart.",place:"Zhytomyr",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Mia",birthday:"2020-06-15",breed:"Persian",comments:"Loves lounging in the sun.",place:"Kropyvnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Bruno",birthday:"2018-04-27",breed:"Doberman",comments:"Protective and loyal.",place:"Mariupol",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Nala",birthday:"2022-03-20",breed:"Rottweiler",comments:"Fearless and confident.",place:"Mykolaiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Harley",birthday:"2019-12-08",breed:"Australian Shepherd",comments:"Loves herding anything that moves.",place:"Brovary",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Cleo",birthday:"2021-01-14",breed:"Exotic Shorthair",comments:"Playful and affectionate.",place:"Kremenchuk",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Toby",birthday:"2018-08-05",breed:"Boxer",comments:"Always up for a game of fetch.",place:"Chernivtsi",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lola",birthday:"2020-04-03",breed:"Scottish Terrier",comments:"Playful and affectionate.",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"}],h={pets:te},oe=()=>e.jsxs(Y,{children:[e.jsxs(J,{children:[e.jsx(Q,{children:"My pets:"}),e.jsxs(X,{type:"button",children:["Add Pet",e.jsx(t,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})]}),h?e.jsx(W,{children:h.pets.map(a=>e.jsx(g,{item:a},a.name))}):e.jsx("div",{children:e.jsx("h1",{children:"You have not pets in your collection. Please, add your pet(s)"})})]}),ne=()=>e.jsx(e.Fragment,{children:e.jsx(oe,{})});function le(){return e.jsxs(I,{children:[e.jsx(V,{}),e.jsx(ne,{})]})}export{le as default};
