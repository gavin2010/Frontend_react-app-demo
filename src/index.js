import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<div><h2>Hello World!</h2><h2>Hello React!</h2></div>);

// const name = 'Jack';
// const element = <h1>Hello,{name}</h1>
// root.render(element);

// function tick(){
//   const element =(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick,1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
function Welcome(props){
  return <h1>Hello,{props.name}</h1>
}
/**如下2种方式都可以使用，是等效的 */
//root.render(Welcome({name:'gavin'}));
root.render(<Welcome name='Lili'/>);

// /*组件首字母必须大写，以区分原生dom标签（首字母小写）*/
// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello,{this.props.name}</h1>
//   }
// }
// root.render(<Welcome name='Tom'/>);

// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={time:new Date(),}
//     console.log("执行了构造方法")
//   }
//   render(){
//     console.log("执行了render方法")
//     return(
//     <div>
//       <h2>Hello,everyone</h2>
//       <h2>It's time:{this.state.time.toLocaleTimeString()}.</h2>
//     </div>
//     )
//   }
//   componentDidMount(){
//     console.log("执行了mount方法")
//     this.taskId = setInterval(()=>this.tick(),1000);
//   }
//   tick(){
//     this.setState({time:new Date()});
//   }
//   componentWillUnmount(){
//     console.log("执行了ummount方法")
//     clearInterval(this.taskId);
//   }
// }
// root.render(<div><Clock/></div>);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// function ActionLink(){
//   function theFuncion(e){
//     e.preventDefault();
//     console.log('has clicked');
//     /**react这种不起作用，应该使用e.preventDefault()方法 */
//     //return false;
//   }
//   return(
//     <a href="http://www.baidu.com" onClick={theFuncion}>
//       click me
//     </a>
//   );
// }
// root.render(<ActionLink/>);

/**组件中的函数不能直接使用组件层级的this,可以通过如下3种方式解决（推荐方法1、方法2）
  （1）构造函数方法bind(this)、（2）方法使用箭头函数、（3）回调方法中使用箭头函数 */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {toggle:true};
//     /**方法一：此处绑定this,在handleClick方法中才能用this */
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState({toggle:!this.state.toggle});
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.toggle ? "On" : "Off"}
//       </button>
//     );
//   }
// }
// root.render(<Toggle/>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {toggle:true};
//   }
//   //方法二：使用箭头函数的方式，handleClick中才能使用this
//   handleClick = ()=>{
//     this.setState({toggle:!this.state.toggle});
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.toggle ? "On" : "Off"}
//       </button>
//     );
//   }
// }
// root.render(<Toggle/>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {toggle:true};
//   }
//   handleClick(){
//     this.setState({toggle:!this.state.toggle});
//   }
//   render(){
//     return(
//       /**方法三:回调函数中用箭头函数，不推荐这种写法，当回调函数作为props传入子组件时，这些组件会重新渲染，推荐方法一和方法二 */
//       <button onClick={()=>this.handleClick()}>
//         {this.state.toggle ? "On" : "Off"}
//       </button>
//     );
//   }
// }
// root.render(<Toggle/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// class DeleteTest extends React.Component{
//   deleteRow(id,e){
//     alert(id);
//     alert(e);
//   }
//   render(){
//     let id = 1;
//     return(
//       <div>
//         <button onClick={this.deleteRow(id)}>Delete Row(=>)</button>
//         <button onClick={this.deleteRow.bind(this,id)}>Delete Row(bind)</button>
//         <button onClick={(e)=>this.deleteRow(id,e)}>Delete Row(=>)</button>
//       </div>

//     );
//   }
// }
// root.render(<DeleteTest/>);

/**登录登出问候语（条件渲染） */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function WelComeUser(props){
//   return(
//     <h2>Welcome back!</h2>
//   );
// }
// function WelComeGuest(props){
//   return(
//     <h2>Please sign up!</h2>
//   );
// }
// function Greeting(props){
//   if(props.isLogin){
//     return <WelComeUser/>
//   }else{
//     return <WelComeGuest/>
//   }
// }
// function LoginButton(props){
//   return(
//     <button onClick={props.onClick}>
//       登录
//     </button>
//   )
// }
// function LoginOutButton(props){
//   return(
//     <button onClick={props.onClick}>
//       退出
//     </button>
//   )
// }
// class LoginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = ({isLogin:true});
//     this.fnLoginOut = this.fnLoginOut.bind(this);
//   }
//   fnLogin = ()=>{
//     this.setState({isLogin:true});
//   }
//   fnLoginOut(){
//     this.setState({isLogin:false});
//   }
//   render(){
//     let button;
//     if(this.state.isLogin){
//       button = <LoginOutButton onClick={this.fnLoginOut}/>
//     }else{
//       button = <LoginButton onClick={this.fnLogin}/>
//     }
//     return(
//       <div>
//         <Greeting isLogin={this.state.isLogin}/>
//         {button}
//       </div>
//     );
//   }
// }
// root.render(<LoginControl/>);


/** 条件渲染 */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function MailBox(props){
//   const unReadMessag = props.unReadMailList;
//   return(
//     <div>
//       <h2>Hello!</h2>
//       {unReadMessag.length>0 &&
//         <h2>you hava {unReadMessag.length} unread message!</h2>
//       }
//       {unReadMessag.length===0 &&
//         <h2>you hava no unread message!</h2>
//       }
//     </div>
//   );
// }
// const mailList = ['Msg',"Re:Msg","Re:Re:Msg"]
// root.render(<MailBox unReadMailList={mailList}/>);


/** 根据条件隐藏（条件渲染，隐藏） */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function WarningMsg(props){
//   if(!props.showWarn){
//     /**在组件的 render 方法中返回 null 并不会影响组件的生命周期。例如，上面这个示例中，componentDidUpdate 依然会被调用 */
//     return null;
//   }
//   return(
//     <h2>Waring</h2>
//   );
// }
// class WarnPage extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {showWarn:true}
//   }
//   fnShow = ()=>{
//     /**下面2中写法等效 */
//    // this.setState((state)=>{return{showWarn:!state.showWarn}});
//     this.setState(state=>({showWarn:!state.showWarn}));
//   }
//   render(){
//     return(
//       <div>     
//         <button onClick={this.fnShow}>{this.state.showWarn ? '隐藏Warning':'显示Warning'}</button>
//         <WarningMsg showWarn={this.state.showWarn} />
//       </div>
//     );
//   }
// }
// root.render(<WarnPage/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function Eli(props){
//    /**下面2种写法，效果一样 */
//    // const liElement = props.data.map((m)=>(<li key={m}>{m.toString()}</li>))
//   return(
//    //  <ol>{liElement}</ol>
//     <ol>
//       {props.data.map((m)=>(<li key={m}>{m.toString()}</li>))}
//     </ol>
//   );
// }
// const data=['a','b','c']
// root.render(<Eli data={data}/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// class InputComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={value:'11'}
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleSubmit=(event)=>{
//     alert('提交的名字event:'+event.target+",state中的名字:"+this.state.value);
//     event.preventDefault();
//   };
//   handleChange(event){
//     this.setState({value:event.target.value});
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>表单元素</label>
//         <input type='text' value={this.state.value} onChange={this.handleChange}></input>
//         <button type='submit' >提交</button>
//       </form>
//     );
//   }
// }
// root.render(<InputComponent/>);

/**华氏温度和摄氏温度的转换*/
// const root = ReactDOM.createRoot(document.getElementById('root'));
// //设置为固定的值，不能数入
// root.render(<input value='hi'/>);
// setTimeout(function(){
//   //设置为null可以输入
//   root.render(<input value={null}/>);
// },2000)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function BoilingVerdict(props){
//   if(props.celsius>=100){
//     return(<p>The water would boil.</p>);
//   }
//   return <p>The water would not boil.</p>
// }
// class TemperatureInput extends React.Component{
//   onChangeInput = (e)=>{
//     this.props.onTemperatureChange(e.target.value);
//   };
//   render(){
//     return(
//       <fieldset>
//         <legend>{this.props.flag==='c' ? '摄氏温度':'华氏温度'}</legend>
//         <input type='text' value={this.props.temperature} onChange={this.onChangeInput}/>
//       </fieldset>
//     );
//   }
// }
// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={temperature:12,flag:'c'};
//   }
//   onTemperatureChangeF=(value)=>{
//     this.setState({temperature:value,flag:'f'});
//   };
//   onTemperatureChangeC=(value)=>{
//     this.setState({temperature:value,flag:'c'});
//   };
//   convert(flag){
//     if(flag === this.state.flag){
//       return this.state.temperature;
//     }
//     if(flag==='c' && this.state.flag==='f'){
//       return Math.round(((this.state.temperature-32)*5/9)*100)/100;
//     }
//     return Math.round((this.state.temperature*9/5+32)*100)/100;
//   }
//   render(){
//     return(
//       <div>
//         <TemperatureInput flag='c' temperature={this.convert('c')} onTemperatureChange={this.onTemperatureChangeC}/>
//         <TemperatureInput flag='f' temperature={this.convert('f')} onTemperatureChange={this.onTemperatureChangeF}/>
//         <BoilingVerdict celsius={this.convert('c')}/>
//       </div>
//     );
//   }
// }
// root.render(<Calculator/>);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
