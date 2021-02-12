
"shared": {   
    "react": {     
        import: "react"   
    } 
} 


"shared": {   
    "react": {     
        shareKey: "react"   
    } 
} 

"shared": {   
    "react": {     
        shareScope: "default"   
    } 
} 

"shared": {   
    "react": {     
        singleton: true   
    } 
} 

"shared": {   
    "react": {     
        singleton: true,     
        strictVersion: true,     
        version: "^16.12.0"   
    } 
} 

"shared": {   
    "react": {     
        version: "^16.12.0"   
    } 
} 

"shared": {   
    "react": {     
        requiredVersion: "^16.12.0"   
    } 
} 

const DynamicWidget = ({ url, scope, module, ...props }) => {
       const { ready, failed } = useDynamicScript(url); 
  ... 
  window[scope].override(
    Object.assign(
        {
            react: () => Promise.resolve().then(() => () => require("react")),
        },       
        global.__webpack_require__ ? global.__webpack_require__.o : {}     
    )   
  ); 
  const Component = React.lazy(() =>
       window[scope].get(module).then((factory) => {
           const Module = factory();       
           return Module;     
        })
    ); 
  return (
      <React.Suspense fallback="Loading System">
        <Component {...props} />
      </React.Suspense>   
      ); 
};

const App = () => (
    <div>     
        <DynamicWidget       
            url={"http://localhost:8082/remoteEntry.js"}
            scope={"widget"}       
            module={"Widget"}     
        />     
        <div>Hi there, I'm React from React in Webpack 4.</div>   
    </div> 
);