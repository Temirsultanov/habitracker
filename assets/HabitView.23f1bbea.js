import{_ as u,o as r,c as d,a as i,M as p,r as h,b as g,m as b,R as C,t as _,d as m,F as v,e as k,f as w,n as L,g as x,h as F,i as f}from"./index.e32100b3.js";const P={},B={width:"19",height:"23",viewBox:"0 0 19 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=i("path",{d:"M1.53867 15.0327L2.9074 11.6971L12.8559 4.98677L15.343 3.30919L17.5797 6.62534L15.0926 8.30292L5.14417 15.0132L1.53867 15.0327Z",fill:"white"},null,-1),$=i("path",{d:"M4.85482 12.796L13.9742 6.64485M13.9742 6.64485L12.8559 4.98677M13.9742 6.64485L15.0926 8.30292M12.8559 4.98677L2.9074 11.6971L1.53867 15.0327L5.14417 15.0132L15.0926 8.30292M12.8559 4.98677L15.343 3.30919L17.5797 6.62534L15.0926 8.30292",stroke:"#3A3A3A","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Y=[N,$];function I(n,t){return r(),d("svg",B,Y)}const T=u(P,[["render",I]]),H={components:{ModalTemplate:p},props:{habitName:{type:String,required:!0}},emits:{close:null,changeName:null},data(){return{attrs:{inputValue:this.habitName,buttonText:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",buttonType:"success"}}},methods:{close(){this.$emit("close")},onButtonClick(n){n!==""&&(this.$emit("change-name",n),this.close())}}};function S(n,t,a,o,e,s){const c=h("modal-template");return r(),g(c,b(e.attrs,{onClose:s.close,onButtonClick:s.onButtonClick}),null,16,["onClose","onButtonClick"])}const q=u(H,[["render",S]]),O={components:{ModalTemplate:p},props:{habitName:{type:String,required:!0}},emits:{close:null,deleteHabit:null},data(){return{attrs:{title:`\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435  \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0443 \xAB${this.habitName}\xBB?`,buttonText:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",buttonType:"danger"}}},methods:{close(){this.$emit("close")},onButtonClick(){this.$emit("delete-habit"),this.close()}}};function E(n,t,a,o,e,s){const c=h("modal-template");return r(),g(c,b(e.attrs,{onClose:s.close,onButtonClick:s.onButtonClick}),null,16,["onClose","onButtonClick"])}const V=u(O,[["render",E]]),A={},R={width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=i("path",{d:"M8 1L1 7L8 13",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),z=[j];function U(n,t){return r(),d("svg",R,z)}const W=u(A,[["render",U]]);const Z={components:{LeftArrowIcon:W,RightArrowIcon:C},props:{days:{type:Array,required:!0}},data(){return{currentMonthDate:new Date(this.days[this.days.length-1].date.getFullYear(),this.days[this.days.length-1].date.getMonth()),currentPrintDay:this.days.length-1}},computed:{beginDay(){return this.days[0]},lastDay(){return this.days[this.days.length-1]},isFirstMonth(){const n=this.currentMonthDate.getMonth(),t=this.currentMonthDate.getFullYear(),a=n===this.beginDay.date.getMonth(),o=t===this.beginDay.date.getFullYear();return a&&o},isLastMonth(){const n=this.currentMonthDate.getMonth(),t=this.currentMonthDate.getFullYear(),a=n===this.lastDay.date.getMonth(),o=t===this.lastDay.date.getFullYear();return a&&o},monthString(){let t=new Intl.DateTimeFormat("ru",{month:"long"}).format(this.currentMonthDate);return t=t[0].toUpperCase()+t.slice(1),`${t}, ${this.currentMonthDate.getFullYear()}`},daysList(){const n=[],t=(6+this.currentMonthDate.getDay())%7;n[t]={number:1};const a=this.currentMonthDate.getFullYear(),o=this.currentMonthDate.getMonth(),e=new Date(a,o,1);for(let s=t+1;s<35;s++)e.setDate(e.getDate()+1),n[s]={number:e.getDate()};e.setDate(1),e.setMonth(e.getMonth()-1);for(let s=t-1;s>-1;s--)e.setDate(e.getDate()-1),n[s]={number:e.getDate()};return this.fillList(n)}},methods:{moveToPrevMonth(){const n=this.currentMonthDate.getFullYear(),t=this.currentMonthDate.getMonth()-1;this.currentMonthDate=new Date(n,t,1),this.isLastMonth?this.currentPrintDay=this.days.length-1:this.isFirstMonth&&(this.currentPrintDay=0)},moveToNextMonth(){const n=this.currentMonthDate.getFullYear(),t=this.currentMonthDate.getMonth()+1;this.currentMonthDate=new Date(n,t,1),this.isLastMonth?this.currentPrintDay=this.days.length-1:this.isFirstMonth&&(this.currentPrintDay=0)},fillList(n){const t=(6+this.currentMonthDate.getDay())%7;if(this.isLastMonth){const a=this.lastDay.date.getDate();for(let o=t+a-1;o>=0;o--)this.days[this.currentPrintDay]&&(n[o].state=this.days[this.currentPrintDay].state,this.currentPrintDay=this.currentPrintDay-1)}else if(this.isFirstMonth){const a=this.beginDay.date.getDate();for(let o=t+a-1;o<35;o++)n[o].state=this.days[this.currentPrintDay].state,this.currentPrintDay=this.currentPrintDay+1}else{this.currentPrintDay=this.days.findIndex(e=>{const s=e.date.getMonth()===this.currentMonthDate.getMonth(),c=e.date.getFullYear()===this.currentMonthDate.getFullYear();return s&&c&&e.date.getDate()===1});let a=this.currentPrintDay;console.log(a),console.log(this.days[a]),console.log(this.days);for(let e=t;e<35;e++)n[e].state=this.days[a].state,a=a+1;let o=this.currentPrintDay;for(let e=t-1;e>=0;e--)n[e].state=this.days[o].state,o=o-1}return n}}},G={class:"calendar"},J={class:"calendar__month"},K={class:"calendar__title"},Q={class:"calendar__controls"},X=["disabled"],tt=["disabled"],et=w('<hr class="calendar__line" data-v-e43aef6e><ul class="week-names" data-v-e43aef6e><li class="week-name" data-v-e43aef6e>\u043F\u043D</li><li class="week-name" data-v-e43aef6e>\u0432\u0442</li><li class="week-name" data-v-e43aef6e>\u0441\u0440</li><li class="week-name" data-v-e43aef6e>\u0447\u0442</li><li class="week-name" data-v-e43aef6e>\u043F\u0442</li><li class="week-name" data-v-e43aef6e>\u0441\u0431</li><li class="week-name" data-v-e43aef6e>\u0432\u0441</li></ul>',2),nt={class:"calendar__days"};function st(n,t,a,o,e,s){const c=h("left-arrow-icon"),y=h("right-arrow-icon");return r(),d("div",G,[i("div",J,[i("h3",K,_(s.monthString),1),i("div",Q,[i("button",{onClick:t[0]||(t[0]=(...l)=>s.moveToPrevMonth&&s.moveToPrevMonth(...l)),disabled:s.isFirstMonth,class:"calendar__button prevMonth"},[m(c)],8,X),i("button",{onClick:t[1]||(t[1]=(...l)=>s.moveToNextMonth&&s.moveToNextMonth(...l)),disabled:s.isLastMonth,class:"calendar__button nextMonth"},[m(y)],8,tt)])]),et,i("ul",nt,[(r(!0),d(v,null,k(s.daysList,(l,D)=>(r(),d("li",{class:L(["calendar__day",{"day-success":l.state===!0,"day-failure":l.state===!1,"day-current":l.state===null}]),key:D},_(l.number),3))),128))])])}const at=u(Z,[["render",st],["__scopeId","data-v-e43aef6e"]]);const ot={components:{PencilIcon:T,ChangingModal:q,DeletingModal:V,HabitCalendar:at},data(){return{habit:null,isChangingModalOpened:!1,isDeletingModalOpened:!1}},computed:{countSuccessedDays(){const n=[...this.habit.days].reverse(),t=n.findIndex(e=>e.state===!1);let a=0;return n[0].state===!0&&(a=a+1),t===-1?a+n.length-1:a+t-1},beginDay(){return new Intl.DateTimeFormat("ru",{day:"2-digit",month:"2-digit",year:"2-digit"}).format(this.habit.beginDay)}},methods:{openChangingModal(){this.isChangingModalOpened=!0},closeChangingModal(){this.isChangingModalOpened=!1},changeHabitName(n){this.habit.name=n},openDeletingModal(){this.isDeletingModalOpened=!0},closeDeletingModal(){this.isDeletingModalOpened=!1},deleteHabit(){x(this.habit.id),this.$router.push("/")}},created(){const t=+this.$router.currentRoute.value.params.id;this.habit=F(t)}},it={key:0,class:"habit"},rt={class:"habit__info info"},lt={class:"info__top"},ct={class:"info__title"},ht={class:"info__bottom"},dt={class:"countSuccessedDays"},ut={class:"beginDay"},_t={class:"deleteButton__wrapper"};function gt(n,t,a,o,e,s){const c=h("pencil-icon"),y=h("habit-calendar"),l=h("changing-modal"),D=h("deleting-modal");return r(),d(v,null,[e.habit?(r(),d("section",it,[i("div",rt,[i("div",lt,[i("h3",ct,_(e.habit.name),1),i("button",{onClick:t[0]||(t[0]=(...M)=>s.openChangingModal&&s.openChangingModal(...M)),class:"changeButton"},[m(c)])]),i("div",ht,[i("span",dt," \u0414\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434: "+_(s.countSuccessedDays),1),i("span",ut," \u041D\u0430\u0447\u0430\u043B\u043E: "+_(s.beginDay),1)])]),m(y,{days:e.habit.days},null,8,["days"]),i("div",_t,[i("button",{onClick:t[1]||(t[1]=(...M)=>s.openDeletingModal&&s.openDeletingModal(...M)),class:"deleteButton"}," \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0443 ")])])):f("",!0),e.isChangingModalOpened?(r(),g(l,{key:1,habitName:e.habit.name,onClose:s.closeChangingModal,onChangeName:s.changeHabitName},null,8,["habitName","onClose","onChangeName"])):f("",!0),e.isDeletingModalOpened?(r(),g(D,{key:2,habitName:e.habit.name,onClose:s.closeDeletingModal,onDeleteHabit:s.deleteHabit},null,8,["habitName","onClose","onDeleteHabit"])):f("",!0)],64)}const yt=u(ot,[["render",gt]]);export{yt as default};
