(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),s=a.n(o),c=(a(137),a(238)),i=a(9),l=a(20),d=a(1);const j=Object(n.createContext)(null);var b=e=>{let{children:t}=e;const[a,r]=Object(n.useState)({name:"",username:""});return Object(d.jsx)(j.Provider,{value:{account:a,setAccount:r},children:t})},h=a(4),u=a(241),p=a(242),x=a(236),g=a(217);const m=Object(h.a)(u.a)`
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient with shades */
    color: black;
`,O=Object(h.a)(p.a)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: normal; /* Default font weight */
        transition: all 0.3s ease; /* Smooth transition for the hover effect */
    }
    & > a:hover {
        font-weight: bold; /* Make text bold on hover */
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 3D effect with text shadow */
    }
`,f=Object(h.a)(x.a)`
    background-color: #f44336; /* Red color */
    color: #ffffff;
    &:hover {
        background-color: #d32f2f; /* Darker red on hover */
    }
`,w=Object(h.a)(g.a)`
    color: #007bff; /* Blue color */
    font-size: 24px; /* Default size */
    transition: all 0.3s ease; /* Smooth transition for the hover effect */
    &:hover {
        color: #0056b3; /* Darker blue on hover */
        transform: scale(1.1); /* Slightly enlarge icon on hover */
    }
`;var y=()=>{const e=Object(i.h)();return Object(d.jsx)(m,{children:Object(d.jsxs)(O,{children:[Object(d.jsx)(l.b,{to:"/",children:"HOME"}),Object(d.jsx)(l.b,{to:"/about",children:"ABOUT"}),Object(d.jsxs)(l.b,{to:"/contact",children:[Object(d.jsx)(w,{})," "]}),Object(d.jsx)(f,{onClick:async()=>{e("/account")},children:"LOGOUT"})]})})},v=a(239),k=a(243);const F=Object(h.a)(c.a)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,S=Object(h.a)(k.a)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`,C=Object(h.a)(k.a)`
    font-size: 20px;
    font-style: italic; /* Set text to italic */
    color: #FFFFFF; /* Ensure text color is white */
    line-height: 1;
`;var E=()=>Object(d.jsxs)(F,{children:[Object(d.jsx)(S,{children:"BLOG"}),Object(d.jsx)(C,{children:"Latest Posts and Articles"})]}),P=a(218),T=a(219);const A=[{id:1,type:"Music"},{id:2,type:"Movies"},{id:3,type:"Sports"},{id:4,type:"Tech"},{id:5,type:"Fashion"}],M=Object(h.a)(x.a)`
    position: absolute;
    right: 20px;
    top: 450px;
    background: none;
    color: Blue;
    min-width: 0;
    padding: 0;

    &:hover {
        color: #FF6347;
        background: none;
    }
`,D=Object(h.a)(l.b)`
    text-decoration: none;
    color: #6495ED;
    font-weight: 600;
    display: block;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: black;
        color: #fff;
        font-weight: 700;
    }
`,z=Object(h.a)(l.b)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #6495ED;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
    position: relative;

    &:hover {
        background-color: black;
        color: #fff;
        font-weight: 700;
    }
`,I=Object(h.a)(P.a)`
    margin-left: 8px; /* Space between text and arrow */
    font-size: 20px;
    transition: transform 0.3s ease;
    transform: ${e=>{let{visible:t}=e;return t?"rotate(180deg)":"rotate(0)"}}; /* Rotate arrow when categories are visible */
`,q=Object(h.a)("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`,B=Object(h.a)("div")`
    opacity: ${e=>{let{visible:t}=e;return t?1:0}};
    transform: ${e=>{let{visible:t}=e;return t?"translateY(0)":"translateY(-10px)"}};
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin-top: 10px; /* Space between categories */
`;var L=()=>{const[e]=Object(l.c)(),t=e.get("category"),[a,r]=Object(n.useState)(!0);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b,{to:`/create?category=${t||""}`,style:{textDecoration:"none"},children:Object(d.jsx)(M,{variant:"contained",children:Object(d.jsx)(T.a,{fontSize:"large"})})}),Object(d.jsxs)(q,{children:[Object(d.jsx)(z,{to:"/",onClick:()=>r(!1),children:"All Categories"}),Object(d.jsx)(I,{visible:a,onClick:()=>{r((e=>!e))}}),A.map(((e,t)=>Object(d.jsx)(B,{visible:a,style:{animationDelay:.2*t+"s"},children:Object(d.jsx)(D,{to:`/?category=${e.type}`,children:e.type})},e.id)))]})]})},R=a(111),W=a.n(R);const G={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},H={userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}},U=(e,t)=>e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{},Y=`${window.location.origin}`,_=W.a.create({baseURL:Y,timeout:1e4,headers:{"Content-Type":"application/json"}});_.interceptors.request.use((function(e){var t,a;const n=sessionStorage.getItem("accessToken");return n&&e.url!==H.userSignup.url&&(e.headers.authorization=n),(null===(t=e.TYPE)||void 0===t?void 0:t.params)?e.params=e.TYPE.params:(null===(a=e.TYPE)||void 0===a?void 0:a.query)&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),_.interceptors.response.use((function(e){return $(e)}),(function(e){return Promise.reject(Z(e))}));const $=e=>{return 200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Unknown Error Occurred",code:null===e||void 0===e?void 0:e.status};var t},Z=e=>{if(e.response){var t,a,n;const r=null===(t=e.response)||void 0===t?void 0:t.status,o=(null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Request failed";return 401===r?{isError:!0,msg:"Incorrect username or password",code:r}:409===r?{isError:!0,msg:"Username already exists",code:r}:403===r?(sessionStorage.clear(),{isError:!0,msg:"Session expired, please login again",code:r}):{isError:!0,msg:o,code:r}}return e.request?{isError:!0,msg:G.requestFailure,code:""}:{isError:!0,msg:G.networkError,code:""}},J={};for(const[yt,vt]of Object.entries(H))J[yt]=(e,t,a)=>_({method:vt.method,url:vt.url,data:"DELETE"===vt.method?void 0:e,responseType:vt.responseType,TYPE:U(vt,e),onUploadProgress:function(e){if(t){let a=Math.round(100*e.loaded/e.total);t(a)}},onDownloadProgress:function(e){if(a){let t=Math.round(100*e.loaded/e.total);a(t)}}});const V=Object(h.a)(c.a)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`,X=Object(h.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150}),N=Object(h.a)(k.a)`
    color: #878787
    font-size: 12px;
`,Q=Object(h.a)(k.a)`
    font-size: 18px;
    font-weight: 600
`,K=Object(h.a)(k.a)`
    font-size: 14px;
    word-break: break-word;
`;var ee=e=>{let{post:t}=e;const a=t.picture?t.picture:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",n=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return Object(d.jsxs)(V,{children:[Object(d.jsx)(X,{src:a,alt:"post"}),Object(d.jsx)(N,{children:t.categories}),Object(d.jsx)(Q,{children:n(t.title,20)}),Object(d.jsxs)(N,{children:["Author: ",t.username]}),Object(d.jsx)(K,{children:n(t.description,100)})]})};var te=()=>{const[e,t]=Object(n.useState)([]),[a]=Object(l.c)(),r=a.get("category");return Object(n.useEffect)((()=>{(async()=>{try{let e=await J.getAllPosts({category:r||""});e.isSuccess?t(e.data):console.error("Failed to fetch posts")}catch(e){console.error("Error fetching posts:",e)}})()}),[r]),Object(d.jsx)(d.Fragment,{children:e.length?e.map((e=>Object(d.jsx)(v.a,{item:!0,lg:3,sm:4,xs:12,children:Object(d.jsx)(l.b,{style:{textDecoration:"none",color:"inherit"},to:`details/${e._id}`,children:Object(d.jsx)(ee,{post:e})})},e._id))):Object(d.jsx)(c.a,{style:{color:"#878787",margin:"140px 370px",fontSize:18},children:"No data is available for the selected category"})})};var ae=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{}),Object(d.jsxs)(v.a,{container:!0,children:[Object(d.jsx)(v.a,{item:!0,lg:2,xs:12,sm:2,children:Object(d.jsx)(L,{})}),Object(d.jsx)(v.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(d.jsx)(te,{})})]})]}),ne=a(244),re=a(22),oe=a(220),se=a(221);const ce=Object(h.a)(c.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),ie=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),le=Object(h.a)(ne.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,de=Object(h.a)(re.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,je=Object(h.a)(oe.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,be={title:"",description:"",picture:"",username:"",categories:"",createdDate:new Date};var he=()=>{const e=Object(i.h)(),t=Object(i.g)(),[a,r]=Object(n.useState)(be),[o,s]=Object(n.useState)(""),{account:c}=Object(n.useContext)(j),l=a.picture?a.picture:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";Object(n.useEffect)((()=>{var e;(async()=>{if(o){const e=new FormData;e.append("name",o.name),e.append("file",o);const t=await J.uploadFile(e);a.picture=t.data}})(),a.categories=(null===(e=t.search)||void 0===e?void 0:e.split("=")[1])||"All",a.username=c.username}),[o]);const b=e=>{r({...a,[e.target.name]:e.target.value})};return Object(d.jsxs)(ce,{children:[Object(d.jsx)(ie,{src:l,alt:"post"}),Object(d.jsxs)(le,{children:[Object(d.jsx)("label",{htmlFor:"fileInput",children:Object(d.jsx)(se.a,{fontSize:"large",color:"action"})}),Object(d.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>s(e.target.files[0])}),Object(d.jsx)(de,{onChange:e=>b(e),name:"title",placeholder:"Title"}),Object(d.jsx)(x.a,{onClick:()=>(async()=>{await J.createPost(a),e("/")})(),variant:"contained",color:"primary",children:"Publish"})]}),Object(d.jsx)(je,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>b(e)})]})},ue=a(223),pe=a(222);const xe=Object(h.a)(c.a)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`,ge=Object(h.a)(c.a)`
    display: flex;
    margin-bottom: 5px;
`,me=Object(h.a)(k.a)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`,Oe=Object(h.a)(k.a)`
    font-size: 14px;
    color: #878787;
`,fe=Object(h.a)(pe.a)`
    margin-left: auto;
`;var we=e=>{let{comment:t,setToggle:a}=e;const{account:r}=Object(n.useContext)(j);return Object(d.jsxs)(xe,{children:[Object(d.jsxs)(ge,{children:[Object(d.jsx)(me,{children:t.name}),Object(d.jsx)(Oe,{children:new Date(t.date).toDateString()}),t.name===r.username&&Object(d.jsx)(fe,{onClick:()=>(async()=>{await J.deleteComment(t._id),a((e=>!e))})()})]}),Object(d.jsx)(k.a,{children:t.comments})]})};const ye=Object(h.a)(c.a)`
    margin-top: 100px;
    display: flex;
`,ve=Object(h.a)("img")({width:50,height:50,borderRadius:"50%"}),ke=Object(h.a)(oe.a)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`,Fe={name:"",postId:"",date:new Date,comments:""};var Se=e=>{let{post:t}=e;const[a,r]=Object(n.useState)(Fe),[o,s]=Object(n.useState)([]),[i,l]=Object(n.useState)(!1),{account:b}=Object(n.useContext)(j);Object(n.useEffect)((()=>{(async()=>{const e=await J.getAllComments(t._id);e.isSuccess&&s(e.data)})()}),[i,t]);return Object(d.jsxs)(c.a,{children:[Object(d.jsxs)(ye,{children:[Object(d.jsx)(ve,{src:"https://static.thenounproject.com/png/12017-200.png",alt:"dp"}),Object(d.jsx)(ke,{rowsMin:5,placeholder:"what's on your mind?",onChange:e=>(e=>{r({...a,name:b.username,postId:t._id,comments:e.target.value})})(e),value:a.comments}),Object(d.jsx)(x.a,{variant:"contained",color:"primary",size:"medium",style:{height:40},onClick:e=>(async()=>{await J.newComment(a),r(Fe),l((e=>!e))})(),children:"Post"})]}),Object(d.jsx)(c.a,{children:o&&o.length>0&&o.map((e=>Object(d.jsx)(we,{comment:e,setToggle:l})))})]})};const Ce=Object(h.a)(c.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),Ee=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),Pe=Object(h.a)(ue.a)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`,Te=Object(h.a)(pe.a)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`,Ae=Object(h.a)(k.a)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`,Me=Object(h.a)(c.a)((e=>{let{theme:t}=e;return{color:"#878787",display:"flex",margin:"20px 0",[t.breakpoints.down("sm")]:{display:"block"}}}));var De=()=>{const[e,t]=Object(n.useState)({}),{account:a}=Object(n.useContext)(j),r=Object(i.h)(),{id:o}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await J.getPostById(o);e.isSuccess&&t(e.data)})()}),[]);return Object(d.jsxs)(Ce,{children:[Object(d.jsx)(Ee,{src:e.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(d.jsx)(c.a,{style:{float:"right"},children:a.username===e.username&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b,{to:`/update/${e._id}`,children:Object(d.jsx)(Pe,{color:"primary"})}),Object(d.jsx)(Te,{onClick:()=>(async()=>{await J.deletePost(e._id),r("/")})(),color:"error"})]})}),Object(d.jsx)(Ae,{children:e.title}),Object(d.jsxs)(Me,{children:[Object(d.jsx)(l.b,{to:`/?username=${e.username}`,style:{textDecoration:"none",color:"inherit"},children:Object(d.jsxs)(k.a,{children:["Author: ",Object(d.jsx)("span",{style:{fontWeight:600},children:e.username})]})}),Object(d.jsx)(k.a,{style:{marginLeft:"auto"},children:new Date(e.createdDate).toDateString()})]}),Object(d.jsx)(k.a,{children:e.description}),Object(d.jsx)(Se,{post:e})]})};const ze=Object(h.a)(c.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),Ie=Object(h.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),qe=Object(h.a)(ne.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,Be=Object(h.a)(re.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,Le=Object(h.a)(oe.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,Re={title:"",description:"",picture:"",username:"codeforinterview",categories:"Tech",createdDate:new Date};var We=()=>{const e=Object(i.h)(),[t,a]=Object(n.useState)(Re),[r,o]=Object(n.useState)(""),[s,c]=Object(n.useState)(""),{id:l}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await J.getPostById(l);e.isSuccess&&a(e.data)})()}),[]),Object(n.useEffect)((()=>{(async()=>{if(r){const e=new FormData;e.append("name",r.name),e.append("file",r);const a=await J.uploadFile(e);a.isSuccess&&(t.picture=a.data,c(a.data))}})()}),[r]);const j=e=>{a({...t,[e.target.name]:e.target.value})};return Object(d.jsxs)(ze,{children:[Object(d.jsx)(Ie,{src:t.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(d.jsxs)(qe,{children:[Object(d.jsx)("label",{htmlFor:"fileInput",children:Object(d.jsx)(se.a,{fontSize:"large",color:"action"})}),Object(d.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>o(e.target.files[0])}),Object(d.jsx)(Be,{onChange:e=>j(e),value:t.title,name:"title",placeholder:"Title"}),Object(d.jsx)(x.a,{onClick:()=>(async()=>{await J.updatePost(t),e(`/details/${l}`)})(),variant:"contained",color:"primary",children:"Update"})]}),Object(d.jsx)(Le,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>j(e),value:t.description})]})},Ge=a(240),He=a(224),Ue=a(225),Ye=a(226);const _e=Object(h.a)(c.a)`
    background-image: url(https://www.shutterstock.com/image-illustration/about-us-letters-on-wooden-260nw-258283535.jpg);
 width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
`,$e=Object(h.a)(c.a)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`,Ze=Object(h.a)(k.a)`
    color: #FFFFFF; /* Change text color to white for better readability on black background */
`,Je=(Object(h.a)("span")`
    color: #FF5722;
    text-decoration: underline;
    text-decoration-color: #FFFFFF; /* White color for underline */
    text-decoration-style: double; /* Double underline */
`,Object(h.a)(c.a)`
    background: linear-gradient(270deg, #2c2c2c, #4a4a4a, #5c5c5c, #707070, #828282, #999999);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`);var Ve=()=>Object(d.jsxs)(Je,{sx:{minHeight:"100vh",color:"#FFFFFF"},children:[Object(d.jsx)(_e,{}),Object(d.jsxs)($e,{children:[Object(d.jsx)(k.a,{variant:"h3",style:{color:"#FFFFFF"},children:"About Me"})," ",Object(d.jsxs)(Ze,{variant:"h5",children:["Who Am I : ",Object(d.jsx)("br",{}),Object(d.jsxs)("span",{style:{color:"#B0BEC5"},children:[" ","I am a beginner full-stack developer based in Pakistan with a passion for creative development and fresh website designs. As I continue to grow my skills in the world of full-stack development, I look forward to building innovative and visually appealing web solutions. My aim is to combine functionality with creativity, much like the one you're viewing right now."]}),Object(d.jsx)(c.a,{component:"span",style:{marginLeft:5},children:Object(d.jsxs)(Ge.a,{href:"https://github.com/Shayanumair",color:"inherit",target:"_blank",children:[Object(d.jsx)(He.a,{sx:{color:"#FFFFFF"}})," "]})})]}),Object(d.jsxs)(Ze,{variant:"h5",children:["Need something built or simply want to have a chat? Reach out to me on",Object(d.jsx)(c.a,{component:"span",style:{marginLeft:5},children:Object(d.jsxs)(Ge.a,{href:"https://www.instagram.com/shayanumair9?igsh=MXI4YTd6MzRoM20zcQ==",color:"inherit",target:"_blank",children:[Object(d.jsx)(Ue.a,{sx:{color:"#E4405F"}})," "]})}),"or send me an Email",Object(d.jsxs)(Ge.a,{href:"mailto:shayan19609@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:[Object(d.jsx)(Ye.a,{sx:{color:"#EA4335"}})," "]}),"."]})]})]});const Xe=Object(h.a)(c.a)`
    background: linear-gradient(270deg, #2c2c2c, #4a4a4a, #5c5c5c, #707070, #828282, #999999);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`,Ne=Object(h.a)(c.a)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`,Qe=Object(h.a)(c.a)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`,Ke=Object(h.a)(k.a)`
    color: white;
`;var et=()=>Object(d.jsxs)(Xe,{children:[Object(d.jsx)(Ne,{}),Object(d.jsxs)(Qe,{children:[Object(d.jsx)(k.a,{variant:"h3",children:"Getting in touch is easy!"}),Object(d.jsxs)(Ke,{variant:"h5",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Reach out to me on",Object(d.jsx)(Ge.a,{href:"https://www.instagram.com/shayanumair9?igsh=MXI4YTd6MzRoM20zcQ==",color:"inherit",target:"_blank",children:Object(d.jsx)(Ue.a,{sx:{color:"#E4405F"}})}),"or send me an Email",Object(d.jsx)(Ge.a,{href:"mailto:shayan19609@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(d.jsx)(Ye.a,{sx:{color:"#EA4335"}})}),"."]})]})]}),tt=a(232),at=a(235),nt=a(233),rt=a(112),ot=a.n(rt),st=a(113),ct=a.n(st);const it=Object(h.a)("div")`
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff7e5f);
    background-size: 300% 300%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`,lt=Object(h.a)(c.a)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #ff6b6b, #f7d94c, #48dbfb); /* Vibrant gradient */
    color: white; /* Text color for contrast */
`,dt=Object(h.a)("img")({width:100,display:"flex",margin:"auto",padding:"50px 0 0"}),jt=Object(h.a)(c.a)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`,bt=Object(h.a)(x.a)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    &:hover {
        background: #C0C0C0;
    }
`,ht=Object(h.a)(x.a)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover {
        background: #C0C0C0;
    }
`,ut=Object(h.a)(k.a)`
    color: #878787;
    font-size: 12px;
`,pt=Object(h.a)(k.a)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`,xt={username:"",password:""},gt={name:"",username:"",password:"",confirmPassword:""};var mt=e=>{let{isUserAuthenticated:t}=e;const[a,r]=Object(n.useState)(xt),[o,s]=Object(n.useState)(gt),[l,b]=Object(n.useState)(""),[h,u]=Object(n.useState)("login"),[p,x]=Object(n.useState)(!1),[g,m]=Object(n.useState)(""),[O,f]=Object(n.useState)(""),w=Object(i.h)(),{setAccount:y}=Object(n.useContext)(j);Object(n.useEffect)((()=>{b("")}),[a]);const v=e=>{r({...a,[e.target.name]:e.target.value})},k=e=>{s({...o,[e.target.name]:e.target.value})},F=()=>{u("signup"===h?"login":"signup")},S=()=>{x(!1),f("")};return Object(d.jsx)(it,{children:Object(d.jsxs)(lt,{children:[Object(d.jsxs)(c.a,{children:[Object(d.jsx)(dt,{src:"https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png",alt:"blog"}),"login"===h?Object(d.jsxs)(jt,{children:[Object(d.jsx)(tt.a,{variant:"standard",value:a.username,onChange:v,name:"username",label:"Enter Username",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),Object(d.jsx)(tt.a,{variant:"standard",type:"password",value:a.password,onChange:v,name:"password",label:"Enter Password",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),l&&Object(d.jsx)(pt,{children:l}),Object(d.jsx)(bt,{variant:"contained",onClick:async()=>{let e=await J.userLogin(a);e.isSuccess?(b(""),m(""),sessionStorage.setItem("accessToken",`Bearer ${e.data.accessToken}`),sessionStorage.setItem("refreshToken",`Bearer ${e.data.refreshToken}`),y({name:e.data.name,username:e.data.username}),t(!0),r(xt),w("/")):(401===e.code?m("Incorrect username or password"):m("Something went wrong! Please try again later"),x(!0))},children:"Login"}),Object(d.jsx)(ut,{style:{textAlign:"center"},children:"OR"}),Object(d.jsx)(ht,{onClick:F,style:{marginBottom:50},children:"Create an account"})]}):Object(d.jsxs)(jt,{children:[Object(d.jsx)(tt.a,{variant:"standard",onChange:k,name:"name",label:"Enter Name",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),Object(d.jsx)(tt.a,{variant:"standard",onChange:k,name:"username",label:"Enter Username",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),Object(d.jsx)(tt.a,{variant:"standard",type:"password",onChange:k,name:"password",label:"Enter Password",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),Object(d.jsx)(tt.a,{variant:"standard",type:"password",onChange:k,name:"confirmPassword",label:"Confirm Password",fullWidth:!0,required:!0,InputLabelProps:{shrink:!0}}),Object(d.jsx)(ut,{style:{fontSize:"10px",color:"#757575"},children:"Password must include uppercase, lowercase letters, and digits."}),l&&Object(d.jsx)(pt,{children:l}),Object(d.jsx)(ht,{onClick:async()=>{if(o.password!==o.confirmPassword)return void b("Passwords do not match");let e=await J.userSignup(o);e.isSuccess?(b(""),s(gt),u("login"),f("Successfully signed up! Please log in."),x(!0)):409===e.code?b("Username already exists"):b("Something went wrong! Please try again later")},children:"Signup"}),Object(d.jsx)(ut,{style:{textAlign:"center"},children:"OR"}),Object(d.jsx)(bt,{variant:"contained",onClick:F,children:"Already have an account"})]})]}),Object(d.jsx)(at.a,{open:p,autoHideDuration:6e3,onClose:S,children:Object(d.jsx)(nt.a,{onClose:S,severity:O?"success":"error",sx:{width:"100%",backgroundColor:O?"#90ee90":"red"},children:O?Object(d.jsxs)("span",{children:[Object(d.jsx)(ot.a,{style:{verticalAlign:"middle",marginRight:"5px"}}),O]}):Object(d.jsxs)("span",{children:[Object(d.jsx)(ct.a,{style:{verticalAlign:"middle",marginRight:"5px"}}),g]})})})]})})};const Ot=e=>{let{isAuthenticated:t,...a}=e;const n=sessionStorage.getItem("accessToken");return t&&n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(i.b,{})]}):Object(d.jsx)(i.a,{replace:!0,to:"/account"})};var ft=function(){const[e,t]=Object(n.useState)(!1);return Object(d.jsx)(b,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(c.a,{style:{marginTop:64},children:Object(d.jsxs)(i.e,{children:[Object(d.jsx)(i.c,{path:"/account",element:Object(d.jsx)(mt,{isUserAuthenticated:t})}),Object(d.jsx)(i.c,{path:"/",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/",element:Object(d.jsx)(ae,{})})}),Object(d.jsx)(i.c,{path:"/create",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/create",element:Object(d.jsx)(he,{})})}),Object(d.jsx)(i.c,{path:"/details/:id",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/details/:id",element:Object(d.jsx)(De,{})})}),Object(d.jsx)(i.c,{path:"/update/:id",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/update/:id",element:Object(d.jsx)(We,{})})}),Object(d.jsx)(i.c,{path:"/about",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/about",element:Object(d.jsx)(Ve,{})})}),Object(d.jsx)(i.c,{path:"/contact",element:Object(d.jsx)(Ot,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/contact",element:Object(d.jsx)(et,{})})})]})})})})};var wt=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,246)).then((t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:s}=t;a(e),n(e),r(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ft,{})}),document.getElementById("root")),wt()}},[[162,1,2]]]);
//# sourceMappingURL=main.a7cdd6e9.chunk.js.map