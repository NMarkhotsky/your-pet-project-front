import{s as i,b as t,a as c,g as s,j as e,I as o,P as r}from"./index-756b9992.js";import{e as C,f as u,c as L,g as M,a as h,h as B,i as E,E as l}from"./index.esm-4c6e49a2.js";const I=i.section`
  background-color: #fef9f9;
  padding: 40px 0;

  @media ${t} {
    padding: 62px 0;
  }

  @media ${c} {
    display: flex;
    gap: 32px;
  }
`,D=i.div``,q=i.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;

  @media ${t} {
    font-size: ${a=>a.theme.fontSizes.xxl};
  }
`,R=i.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${a=>a.theme.colors.bgdColor};
`,T=i.div`
  text-align: center;
  margin-bottom: 26px;
`,A=i(C)`
  background-color: #ffffff;
  border-radius: 40px;
  position: relative;
  padding: 20px 8px 16px;
  margin-bottom: 46px; 

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    margin-bottom: 40px;
    padding: 20px 24px 16px;
  }

  @media ${c} {
    box-shadow: ${a=>a.theme.boxShadow.main};
  }
`,d=i.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`,m=i.label`
  font-size: ${a=>a.theme.fontSizes.sm};
  font-family: ${a=>a.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;
  

  @media ${t} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`,p=i(u)`
  width: 190px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${a=>a.theme.colors.blue};
  font-size: ${a=>a.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${t} {
    min-width: 255px;
    font-size: ${a=>a.theme.fontSizes.md};
    letter-spacing: 0.64px;
  }
`,N=i.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${a=>a.theme.colors.blue};
  color: ${a=>a.theme.colors.bgdColor};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${t} {
    letter-spacing: 0.64px;
  }
`,K=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;i.p`
  color: ${a=>a.theme.colors.grey};
  font-size: ${a=>a.theme.fontSizes.md};
  font-family: ${a=>a.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;const H=i.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
`,Z=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,O=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,U=3e6,V=L().shape({avatar:M().required("Please, add your photo").test("fileSize","Image too large, max 3mb",a=>a.size<=U),name:h().required("Name  is required field"),email:h().required("Email  is required field").matches(Z,"Invalid email address"),birthday:B().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:h().required("Phone is required field").matches(O,"Invalid phone number"),city:h().required("City is required field")}),Y=()=>{const[a,b]=s.useState(""),[y,f]=s.useState(""),[j,_]=s.useState(""),[k,P]=s.useState(""),[v,F]=s.useState(""),[$,S]=s.useState(""),z=(n,G)=>{b(n.avatar),f(n.name),_(n.email),P(n.birthday),F(n.phone),S(n.city),console.log(n),console.log(G)};return e.jsxs(D,{children:[e.jsx(q,{children:"My information:"}),e.jsx(E,{initialValues:{name:y,email:j,birthday:k,phone:v,city:$,avatar:a},onSubmit:z,validationSchema:V,children:e.jsxs(A,{children:[e.jsxs(H,{children:[e.jsx(o,{iconName:"icon-edit",width:"24px",height:"24px",fill:"#54ADFF"}),e.jsx(o,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#54ADFF"})]}),e.jsxs(T,{children:[e.jsx(R,{}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(o,{iconName:"icon-check",width:"24px",height:"24px",stroke:"#54ADFF"}),"Confirm",e.jsx(o,{iconName:"icon-cross",width:"24px",height:"24px",stroke:"#F43F5E"})]}),e.jsxs("label",{htmlFor:"avatar",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[e.jsx(o,{iconName:"icon-camera",width:"24px",height:"24px",stroke:"#54ADFF"}),"Edit photo"]}),e.jsx(u,{style:{display:"none"},type:"file",id:"avatar",name:"avatar",accept:"image/*"}),e.jsx(l,{name:"avatar",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs("div",{children:[e.jsxs(d,{children:[e.jsx(m,{htmlFor:"name",children:"Name:"}),e.jsx(p,{id:"name",name:"name",placeholder:"Anna"}),e.jsx(l,{name:"name",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"email",children:"Email:"}),e.jsx(p,{id:"email",name:"email",placeholder:"anna00@gmail.com"}),e.jsx(l,{name:"email",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"birthday",children:"Birthday:"}),e.jsx(p,{type:"date",id:"birthday",name:"birthday"}),e.jsx(l,{name:"birthday",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"phone",children:"Phone:"}),e.jsx(p,{id:"phone",name:"phone",placeholder:"+38000000000"}),e.jsx(l,{name:"phone",component:"div",style:{color:"red",fontSize:12}})]}),e.jsxs(d,{children:[e.jsx(m,{htmlFor:"city",children:"City:"}),e.jsx(p,{id:"city",name:"city",placeholder:"Kyiv"}),e.jsx(l,{name:"city",component:"div",style:{color:"red",fontSize:12}})]}),e.jsx(N,{type:"submit",children:"Save"}),e.jsxs(K,{children:[e.jsx(o,{iconName:"icon-logout",width:"24px",height:"24px",stroke:"#54ADFF"}),e.jsx("p",{children:"Log Out"})]})]})]})})]})},J=()=>e.jsx(e.Fragment,{children:e.jsx(Y,{})}),Q=i.div``,W=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,X=i.h2`
  font-family: ${a=>a.theme.fonts.main.medium};
  font-size: ${a=>a.theme.fontSizes.lg};
  color: ${a=>a.theme.colors.black};
  margin-bottom: 24px;

  @media ${t} {
    font-size: ${a=>a.theme.fontSizes.xxl};
  }
`,ee=i.ul``,ae=i.button`
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
`,ie=i.div`
  background-color: #ffffff;
  box-shadow: ${a=>a.theme.boxShadow.main};
  border-radius: 40px;
  padding: 20px;
  position: relative;
  margin-top: 24px;

  @media ${t} {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${c} {
    gap: 32px;
    width: 821px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`,te=i.img`
  width: 100%;
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media ${t} {
    width: 128px;
  }

  @media ${c} {
    width: 161px;
  }
`,x=i.p`
  font-size: ${a=>a.theme.fontSizes.md};
  letter-spacing: 0.64px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:last-child {
    padding-bottom: 40px;
  }

  &:first-child {
    padding-top: 20px;
  }

  @media ${t} {
    font-size: ${a=>a.theme.fontSizes.sm};
    letter-spacing: 0.56px;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media ${c} {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`,oe=i.div`
  display: block;
  position: absolute;
  top: 62%;
  right: 7%;

  @media ${t} {
    top: 8%;
    right: 2%;
  }
`,w=({item:a})=>e.jsxs(ie,{children:[e.jsx(oe,{children:e.jsx(o,{iconName:"icon-trash",width:"24px",height:"24px",stroke:"#54ADFF"})}),e.jsx(te,{src:a.url}),e.jsxs("div",{children:[e.jsxs(x,{children:[e.jsx("b",{children:"Name:"})," ",a.name]}),e.jsxs(x,{children:[e.jsx("b",{children:"Date of birth:"})," ",a.birthday]}),e.jsxs(x,{children:[e.jsx("b",{children:"Type:"})," ",a.breed]}),e.jsxs(x,{children:[e.jsx("b",{children:"Comments:"})," ",a.comments]})]})]});w.propTypes={item:r.shape({name:r.string.isRequired,birthday:r.string.isRequired,breed:r.string.isRequired,comments:r.string.isRequired,url:r.string.isRequired}).isRequired};const ne=[{name:"Buddy",birthday:"2019-02-14",breed:"Labrador Retriever",comments:"Loves playing fetch!",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Luna",birthday:"2020-07-08",breed:"Maine Coon",comments:"A fluffy and gentle cat.",place:"Lviv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Max",birthday:"2018-11-03",breed:"German Shepherd",comments:"Great at guarding the house.",place:"Kharkiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Coco",birthday:"2021-04-20",breed:"French Bulldog",comments:"Enjoys napping on the couch.",place:"Dnipro",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Rocky",birthday:"2017-09-10",breed:"Golden Retriever",comments:"Loves swimming in the river.",place:"Odessa",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Molly",birthday:"2019-12-05",breed:"Siberian Husky",comments:"Energetic and loves running.",place:"Zaporizhzhia",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Leo",birthday:"2022-01-25",breed:"British Shorthair",comments:"Curious and playful.",place:"Vinnytsia",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Bella",birthday:"2020-03-12",breed:"Poodle",comments:"Loves learning new tricks.",place:"Kherson",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Oscar",birthday:"2018-06-18",breed:"Ragdoll",comments:"Very affectionate and gentle.",place:"Poltava",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucy",birthday:"2021-08-30",breed:"Bengal",comments:"Adores climbing and jumping.",place:"Chernihiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Charlie",birthday:"2019-11-02",breed:"Beagle",comments:"Has a great sense of smell.",place:"Sumy",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Daisy",birthday:"2020-05-22",breed:"Dachshund",comments:"Loves digging in the garden.",place:"Rivne",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Milo",birthday:"2017-07-17",breed:"Chihuahua",comments:"Tiny but full of energy.",place:"Ternopil",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Sophie",birthday:"2021-03-09",breed:"Scottish Fold",comments:"Likes playing with paper balls.",place:"Cherkasy",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Teddy",birthday:"2018-09-01",breed:"Bulldog",comments:"Loves cuddling on the couch.",place:"Ivano-Frankivsk",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Zoe",birthday:"2022-02-12",breed:"Siamese",comments:"Talkative and affectionate.",place:"Khmelnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Lucky",birthday:"2019-10-07",breed:"Jack Russell Terrier",comments:"Highly energetic and smart.",place:"Zhytomyr",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Mia",birthday:"2020-06-15",breed:"Persian",comments:"Loves lounging in the sun.",place:"Kropyvnytskyi",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Bruno",birthday:"2018-04-27",breed:"Doberman",comments:"Protective and loyal.",place:"Mariupol",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Nala",birthday:"2022-03-20",breed:"Rottweiler",comments:"Fearless and confident.",place:"Mykolaiv",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Harley",birthday:"2019-12-08",breed:"Australian Shepherd",comments:"Loves herding anything that moves.",place:"Brovary",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Cleo",birthday:"2021-01-14",breed:"Exotic Shorthair",comments:"Playful and affectionate.",place:"Kremenchuk",sex:"Female",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"},{name:"Toby",birthday:"2018-08-05",breed:"Boxer",comments:"Always up for a game of fetch.",place:"Chernivtsi",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"sell",email:"example@gmail.com",phone:"+380501234567"},{name:"Lola",birthday:"2020-04-03",breed:"Scottish Terrier",comments:"Playful and affectionate.",place:"Kyiv",sex:"Male",url:"https://upload.wikimedia.org/wikipedia/commons/5/53/Patron_with_Golden_Paw_award.jpg",status:"in good hands",email:"example@gmail.com",phone:"+380501234567"}],g={pets:ne},se=()=>e.jsxs(Q,{children:[e.jsxs(W,{children:[e.jsx(X,{children:"My pets:"}),e.jsxs(ae,{type:"button",children:["Add Pet",e.jsx(o,{iconName:"icon-plus-small",width:"24px",height:"24px",stroke:"#FEF9F9",fill:"#FEF9F9"})]})]}),g?e.jsx(ee,{children:g.pets.map(a=>e.jsx(w,{item:a},a.name))}):e.jsx("div",{children:e.jsx("h1",{children:"You have not pets in your collection. Please, add your pet(s)"})})]}),re=()=>e.jsx(e.Fragment,{children:e.jsx(se,{})});function me(){return e.jsxs(I,{children:[e.jsx(J,{}),e.jsx(re,{})]})}export{me as default};
