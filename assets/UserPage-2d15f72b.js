import{s as t,d as n,j as e,I as i,P as s}from"./index-879f4a28.js";import{e as z,f as x,c as G,g as C,a as c,h as L,i as M,E as r}from"./index.esm-e9f2d083.js";const I=t.section`
  display: flex;
  gap: 32px;
  background-color: #fef9f9;
  padding: 62px 0;
`,B=t.div``,E=t.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.xxl};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;
`,R=t.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${a=>a.theme.colors.bgdColor};
`,D=t.div`
  text-align: center;
  margin-bottom: 26px;
`,q=t(z)`
  position: relative;
  width: 395px;
  padding: 20px 24px 16px;
  background-color: #ffffff;
  border-radius: 40px;
  box-shadow: ${a=>a.theme.boxShadow.main};
`,d=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`,l=t.label`
  font-size: 18px;
  font-family: ${a=>a.theme.fonts.main.semiBold};
  letter-spacing: 0.72px;
`,m=t(x)`
  /* float: right; */
  min-width: 255px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${a=>a.theme.colors.blue};
  font-size: ${a=>a.theme.fontSizes.md};
  letter-spacing: 0.64px;
  padding: 4px 12px;
`,T=t.button`
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
`,A=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;t.p`
  color: ${a=>a.theme.colors.grey};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const N=t.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
`,K=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,H=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,Z=3e6,O=G().shape({avatar:C().required("Please, add your avatar").test("fileSize","Image too large, max 3mb",a=>a.size<=Z),name:c().required(),email:c().required("It's Required field").matches(K,"Invalid email address"),birthday:L().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:c().required().matches(H,"Invalid phone number"),city:c().required("It's Required field")}),U=()=>{const[a,g]=n.useState(""),[w,b]=n.useState(""),[y,f]=n.useState(""),[j,_]=n.useState(""),[k,P]=n.useState(""),[v,F]=n.useState(""),S=(o,$)=>{g(o.avatar),b(o.name),f(o.email),_(o.birthday),P(o.phone),F(o.city),console.log(o),console.log($)};return e.jsxs(B,{children:[e.jsx(E,{children:"My information:"}),e.jsx(M,{initialValues:{name:w,email:y,birthday:j,phone:k,city:v,avatar:a},onSubmit:S,validationSchema:O,children:e.jsxs(q,{children:[e.jsxs(N,{children:[e.jsx(i,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"}),e.jsx(i,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"})]}),e.jsxs(D,{children:[e.jsx(R,{}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(i,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"}),"Confirm",e.jsx(i,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})]}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(i,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),e.jsx(x,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*"}),e.jsx(r,{name:"avatar",component:"div",style:{color:"red",fontSize:14}})]}),e.jsxs(d,{children:[e.jsx(l,{htmlFor:"name",children:"Name:"}),e.jsx(m,{id:"name",name:"name",placeholder:"Anna"}),e.jsx(r,{name:"name",component:"div"})]}),e.jsxs(d,{children:[e.jsx(l,{htmlFor:"email",children:"Email:"}),e.jsx(m,{id:"email",name:"email",placeholder:"anna00@gmail.com"}),e.jsx(r,{name:"email",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(l,{htmlFor:"birthday",children:"Birthday:"}),e.jsx(m,{type:"date",id:"birthday",name:"birthday"}),e.jsx(r,{name:"birthday",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(l,{htmlFor:"phone",children:"Phone:"}),e.jsx(m,{id:"phone",name:"phone",placeholder:"+38000000000"}),e.jsx(r,{name:"phone",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(l,{htmlFor:"city",children:"City:"}),e.jsx(m,{id:"city",name:"city",placeholder:"Kyiv"}),e.jsx(r,{name:"city",component:"div",style:{color:"red",fontSize:12}})]}),e.jsx(T,{type:"submit",children:"Save"}),e.jsxs(A,{children:[e.jsx(i,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx("p",{children:"Log Out"})]})]})})]})},V=()=>e.jsx(e.Fragment,{children:e.jsx(U,{})}),Y=t.div``,J=t.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Q=t.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.xxl};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;
`,W=t.ul``,X=t.button`
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
`,ee=t.div`
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
`,ae=t.img`
  width: 161px;
  border-radius: 40px;
`,p=t.p`
  font-family: ${a=>a.theme.fonts.main.regular};
  font-size: ${a=>a.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`,te=t.div`
  display: block;
  position: absolute;
  top: 8%;
  right: 2%;
`,u=({item:a})=>e.jsxs(ee,{children:[e.jsx(te,{children:e.jsx(i,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),e.jsx(ae,{src:a.url}),e.jsxs("div",{children:[e.jsxs(p,{children:[e.jsx("b",{children:"Name:"})," ",a.name]}),e.jsxs(p,{children:[e.jsx("b",{children:"Date of birth:"})," ",a.birthday]}),e.jsxs(p,{children:[e.jsx("b",{children:"Type:"})," ",a.breed]}),e.jsxs(p,{children:[e.jsx("b",{children:"Comments:"})," ",a.comments]})]})]});u.propTypes={item:s.shape({name:s.string.isRequired,birthday:s.string.isRequired,breed:s.string.isRequired,comments:s.string.isRequired,url:s.string.isRequired}).isRequired};const ie=[{name:"Buddy",birthday:"2019-02-14",breed:"Labrador Retriever",comments:"Loves playing fetch!",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Luna",birthday:"2020-07-08",breed:"Maine Coon",comments:"A fluffy and gentle cat.",place:"Lviv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Max",birthday:"2018-11-03",breed:"German Shepherd",comments:"Great at guarding the house.",place:"Kharkiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Coco",birthday:"2021-04-20",breed:"French Bulldog",comments:"Enjoys napping on the couch.",place:"Dnipro",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Rocky",birthday:"2017-09-10",breed:"Golden Retriever",comments:"Loves swimming in the river.",place:"Odessa",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Molly",birthday:"2019-12-05",breed:"Siberian Husky",comments:"Energetic and loves running.",place:"Zaporizhzhia",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Leo",birthday:"2022-01-25",breed:"British Shorthair",comments:"Curious and playful.",place:"Vinnytsia",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Bella",birthday:"2020-03-12",breed:"Poodle",comments:"Loves learning new tricks.",place:"Kherson",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Oscar",birthday:"2018-06-18",breed:"Ragdoll",comments:"Very affectionate and gentle.",place:"Poltava",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Lucy",birthday:"2021-08-30",breed:"Bengal",comments:"Adores climbing and jumping.",place:"Chernihiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Charlie",birthday:"2019-11-02",breed:"Beagle",comments:"Has a great sense of smell.",place:"Sumy",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Daisy",birthday:"2020-05-22",breed:"Dachshund",comments:"Loves digging in the garden.",place:"Rivne",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Milo",birthday:"2017-07-17",breed:"Chihuahua",comments:"Tiny but full of energy.",place:"Ternopil",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Sophie",birthday:"2021-03-09",breed:"Scottish Fold",comments:"Likes playing with paper balls.",place:"Cherkasy",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Teddy",birthday:"2018-09-01",breed:"Bulldog",comments:"Loves cuddling on the couch.",place:"Ivano-Frankivsk",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Zoe",birthday:"2022-02-12",breed:"Siamese",comments:"Talkative and affectionate.",place:"Khmelnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Lucky",birthday:"2019-10-07",breed:"Jack Russell Terrier",comments:"Highly energetic and smart.",place:"Zhytomyr",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Mia",birthday:"2020-06-15",breed:"Persian",comments:"Loves lounging in the sun.",place:"Kropyvnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Bruno",birthday:"2018-04-27",breed:"Doberman",comments:"Protective and loyal.",place:"Mariupol",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Nala",birthday:"2022-03-20",breed:"Rottweiler",comments:"Fearless and confident.",place:"Mykolaiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Harley",birthday:"2019-12-08",breed:"Australian Shepherd",comments:"Loves herding anything that moves.",place:"Brovary",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Cleo",birthday:"2021-01-14",breed:"Exotic Shorthair",comments:"Playful and affectionate.",place:"Kremenchuk",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"},{name:"Toby",birthday:"2018-08-05",breed:"Boxer",comments:"Always up for a game of fetch.",place:"Chernivtsi",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell"},{name:"Lola",birthday:"2020-04-03",breed:"Scottish Terrier",comments:"Playful and affectionate.",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands"}],h={pets:ie},oe=()=>e.jsxs(Y,{children:[e.jsxs(J,{children:[e.jsx(Q,{children:"My pets:"}),e.jsxs(X,{type:"button",children:["Add Pet",e.jsx(i,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})]}),h?e.jsx(W,{children:h.pets.map(a=>e.jsx(u,{item:a},a.name))}):e.jsx("div",{children:e.jsx("h1",{children:"You have not pets in your collection. Please, add your pet(s)"})})]}),ne=()=>e.jsx(e.Fragment,{children:e.jsx(oe,{})});function de(){return e.jsxs(I,{children:[e.jsx(V,{}),e.jsx(ne,{})]})}export{de as default};
