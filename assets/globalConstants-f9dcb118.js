import{d as a,e,L as t}from"./index-64191879.js";const s="https://mypets-backend.onrender.com/api",n=/^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/,d=3e6,i=a().shape({name:e().min(2).max(16).required("Name  is required field"),birthday:t().required("Enter a date of birth").min(new Date(1900,0,1)).max(new Date,"You can't be born in the future!"),phone:e().matches(n,"Invalid phone number"),city:e().min(2).max(16)});export{s as B,d as F,i as s};