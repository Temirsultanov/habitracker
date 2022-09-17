import{_,o as l,c as h,p as f,a as y,b as r,r as d,t as g,d as u,M as D,e as p,m as v,R as I,F as x,f as $,n as L,g as N,h as F,i as B,j as T,k as M}from"./index.a16a4052.js";const H={},C=t=>(f("data-v-a9431b9f"),t=t(),y(),t),O={class:"pencilIcon",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Y=C(()=>r("path",{d:"M1.11839 14.7236L2.48711 11.3879L12.4356 4.67758L14.9227 3L17.1594 6.31615L14.6723 7.99373L4.72388 14.704L1.11839 14.7236Z",fill:"#F8F8F8"},null,-1)),q=C(()=>r("path",{d:"M4.43454 12.4868L13.5539 6.33566M13.5539 6.33566L12.4356 4.67758M13.5539 6.33566L14.6723 7.99373M12.4356 4.67758L2.48711 11.3879L1.11839 14.7236L4.72388 14.704L14.6723 7.99373M12.4356 4.67758L14.9227 3L17.1594 6.31615L14.6723 7.99373",stroke:"#262626","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),P=[Y,q];function S(t,n){return l(),h("svg",O,P)}const A=_(H,[["render",S],["__scopeId","data-v-a9431b9f"]]);const E={components:{PencilIcon:A},emits:{"open-changing-modal":null},props:{habit:{type:Object,required:!0}},computed:{countSuccessedDays(){const t=[...this.habit.days].reverse(),n=t.findIndex(a=>a.state===!1);let s=0;return t[0].state===!0&&(s=s+1),n===-1?s+t.length-1:s+n-1},formattedBeginDay(){return new Intl.DateTimeFormat("ru",{day:"2-digit",month:"2-digit",year:"2-digit"}).format(this.habit.beginDay)}},methods:{openChangingModal(){this.$emit("open-changing-modal")}}},V={class:"habitInfo"},R={class:"habitInfo__top"},j={class:"title"},U={class:"habitInfo__bottom"},W={class:"text-small"},z={class:"text-small"};function Z(t,n,s,o,a,e){const i=d("pencil-icon");return l(),h("div",V,[r("div",R,[r("h3",j,g(s.habit.name),1),r("button",{onClick:n[0]||(n[0]=(...c)=>e.openChangingModal&&e.openChangingModal(...c)),class:"habitInfo__changeButton"},[u(i)])]),r("div",U,[r("span",W,"\u0414\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434: "+g(e.countSuccessedDays),1),r("span",z," \u041D\u0430\u0447\u0430\u043B\u043E: "+g(e.formattedBeginDay),1)])])}const G=_(E,[["render",Z],["__scopeId","data-v-b3566078"]]),J={components:{ModalTemplate:D},props:{habitName:{type:String,required:!0}},emits:{close:null,"change-name":null},data(){return{attrs:{inputValue:this.habitName,buttonText:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",buttonType:"success"}}},methods:{close(){this.$emit("close")},onButtonClick(t){t!==""&&(this.$emit("change-name",t),this.close())}}};function K(t,n,s,o,a,e){const i=d("modal-template");return l(),p(i,v(a.attrs,{onClose:e.close,onButtonClick:e.onButtonClick}),null,16,["onClose","onButtonClick"])}const Q=_(J,[["render",K]]),X={components:{ModalTemplate:D},props:{habitName:{type:String,required:!0}},emits:{close:null,deleteHabit:null},data(){return{attrs:{title:`\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435  \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0443 \xAB${this.habitName}\xBB?`,buttonText:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",buttonType:"danger"}}},methods:{close(){this.$emit("close")},onButtonClick(){this.$emit("delete-habit"),this.close()}}};function tt(t,n,s,o,a,e){const i=d("modal-template");return l(),p(i,v(a.attrs,{onClose:e.close,onButtonClick:e.onButtonClick}),null,16,["onClose","onButtonClick"])}const et=_(X,[["render",tt]]);const nt={},at=t=>(f("data-v-aacdf190"),t=t(),y(),t),st={class:"leftArrowIcon",width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot=at(()=>r("path",{d:"M8 1L1 7L8 13",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),it=[ot];function rt(t,n){return l(),h("svg",st,it)}const lt=_(nt,[["render",rt],["__scopeId","data-v-aacdf190"]]);const ct=new Intl.DateTimeFormat("ru",{month:"long"}),dt={components:{LeftArrowIcon:lt,RightArrowIcon:I},props:{currentMonthDate:{type:Date,required:!0},isFirstMonth:{type:Boolean,required:!0},isLastMonth:{type:Boolean,required:!0}},emits:{"move-to-prev-month":null,"move-to-next-month":null},computed:{formattedDate(){const t=this.currentMonthDate.getFullYear(),n=ct.format(this.currentMonthDate);return`${n[0].toUpperCase()+n.slice(1)}, ${t}`}},methods:{moveToPrevMonth(){this.$emit("move-to-prev-month")},moveToNextMonth(){this.$emit("move-to-next-month")}}},ht={class:"info"},_t={class:"text-medium"},ut={class:"info__controls"},mt=["disabled"],gt=["disabled"];function pt(t,n,s,o,a,e){const i=d("left-arrow-icon"),c=d("right-arrow-icon");return l(),h("div",ht,[r("h3",_t,g(e.formattedDate),1),r("div",ut,[r("button",{onClick:n[0]||(n[0]=(...m)=>e.moveToPrevMonth&&e.moveToPrevMonth(...m)),disabled:s.isFirstMonth,class:"info__button prevMonth"},[u(i)],8,mt),r("button",{onClick:n[1]||(n[1]=(...m)=>e.moveToNextMonth&&e.moveToNextMonth(...m)),disabled:s.isLastMonth,class:"info__button nextMonth"},[u(c)],8,gt)])])}const Mt=_(dt,[["render",pt],["__scopeId","data-v-67c2a7a7"]]);const bt={props:{days:{type:Array,required:!0}},methods:{getDayClass(t){let n;return t===!0?n="day-success":t===!1?n="day-failure":t===null&&(n="day-current"),n}}},ft={class:"calendar__days"},yt={class:"text-small"};function Dt(t,n,s,o,a,e){return l(),h("ul",ft,[(l(!0),h(x,null,$(s.days,(i,c)=>(l(),h("li",{key:c,class:L([e.getDayClass(i.state),"calendar__day"])},[r("span",yt,g(i.number),1)],2))),128))])}const vt=_(bt,[["render",Dt],["__scopeId","data-v-8bd62a29"]]);const b=42,xt={components:{CalendarInfo:Mt,CalendarDays:vt},props:{days:{type:Array,required:!0}},data(){const t=this.days[this.days.length-1].date;return{currentMonthDate:new Date(t.getFullYear(),t.getMonth(),1)}},computed:{beginDay(){return this.days[0]},lastDay(){return this.days[this.days.length-1]},isFirstMonth(){const t=this.currentMonthDate.getMonth(),n=this.currentMonthDate.getFullYear(),s=t===this.beginDay.date.getMonth(),o=n===this.beginDay.date.getFullYear();return s&&o},isLastMonth(){const t=this.currentMonthDate.getMonth(),n=this.currentMonthDate.getFullYear(),s=t===this.lastDay.date.getMonth(),o=n===this.lastDay.date.getFullYear();return s&&o},daysList(){const t=[],n=(6+this.currentMonthDate.getDay())%7;t[n]={number:1};const s=this.currentMonthDate.getFullYear(),o=this.currentMonthDate.getMonth(),a=new Date(s,o,1);for(let e=n+1;e<b;e++)a.setDate(a.getDate()+1),t[e]={number:a.getDate()};a.setDate(1),a.setMonth(a.getMonth()-1);for(let e=n-1;e>-1;e--)a.setDate(a.getDate()-1),t[e]={number:a.getDate()};return this.fillList(t)}},methods:{moveToPrevMonth(){const t=this.currentMonthDate.getMonth()-1;this.currentMonthDate.setMonth(t),this.currentMonthDate=new Date(this.currentMonthDate)},moveToNextMonth(){const t=this.currentMonthDate.getMonth()+1;this.currentMonthDate.setMonth(t),this.currentMonthDate=new Date(this.currentMonthDate)},fillList(t){const n=(6+this.currentMonthDate.getDay())%7;let s;if(this.isLastMonth){const o=this.lastDay.date.getDate();s=this.days.length-1;for(let a=n+o-1;a>=0;a--)this.days[s]&&(t[a].state=this.days[s].state,s=s-1)}else if(this.isFirstMonth){const o=this.beginDay.date.getDate();s=0;for(let a=n+o-1;a<b;a++)t[a].state=this.days[s].state,s=s+1}else{s=this.days.findIndex(e=>{const i=e.date.getMonth()===this.currentMonthDate.getMonth(),c=e.date.getFullYear()===this.currentMonthDate.getFullYear();return i&&c&&e.date.getDate()===1});let o=s;for(let e=n;e<b;e++)t[e].state=this.days[o].state,o=o+1;let a=s;for(let e=n-1;e>=0;e--)t[e].state=this.days[a].state,a=a-1}return t}}},Ct={class:"calendar"},wt=N('<hr class="calendar__line" data-v-debe0aba><ul class="calendar__weekNames" data-v-debe0aba><li class="calendar__weekName text-small" data-v-debe0aba>\u043F\u043D</li><li class="calendar__weekName text-small" data-v-debe0aba>\u0432\u0442</li><li class="calendar__weekName text-small" data-v-debe0aba>\u0441\u0440</li><li class="calendar__weekName text-small" data-v-debe0aba>\u0447\u0442</li><li class="calendar__weekName text-small" data-v-debe0aba>\u043F\u0442</li><li class="calendar__weekName text-small" data-v-debe0aba>\u0441\u0431</li><li class="calendar__weekName text-small" data-v-debe0aba>\u0432\u0441</li></ul>',2);function kt(t,n,s,o,a,e){const i=d("calendar-info"),c=d("calendar-days");return l(),h("div",Ct,[u(i,{onMoveToPrevMonth:e.moveToPrevMonth,onMoveToNextMonth:e.moveToNextMonth,currentMonthDate:a.currentMonthDate,isFirstMonth:e.isFirstMonth,isLastMonth:e.isLastMonth},null,8,["onMoveToPrevMonth","onMoveToNextMonth","currentMonthDate","isFirstMonth","isLastMonth"]),wt,u(c,{days:e.daysList},null,8,["days"])])}const It=_(xt,[["render",kt],["__scopeId","data-v-debe0aba"]]);const $t={components:{HabitInfo:G,ChangingModal:Q,DeletingModal:et,HabitCalendar:It},data(){return{habit:null,isChangingModalOpened:!1,isDeletingModalOpened:!1}},methods:{openChangingModal(){this.isChangingModalOpened=!0},closeChangingModal(){this.isChangingModalOpened=!1},changeHabitName(t){F(this.habit.id,t)},openDeletingModal(){this.isDeletingModalOpened=!0},closeDeletingModal(){this.isDeletingModalOpened=!1},deleteHabit(){B(this.habit.id),this.$router.push("/")}},created(){const n=+this.$router.currentRoute.value.params.id;T(n).then(s=>this.habit=s)}},Lt={key:0,class:"habit"},Nt={class:"deleteButtonWrapper"};function Ft(t,n,s,o,a,e){const i=d("habit-info"),c=d("habit-calendar"),m=d("changing-modal"),w=d("deleting-modal");return l(),h(x,null,[a.habit?(l(),h("section",Lt,[u(i,{onOpenChangingModal:e.openChangingModal,habit:a.habit},null,8,["onOpenChangingModal","habit"]),u(c,{days:a.habit.days},null,8,["days"]),r("div",Nt,[r("button",{onClick:n[0]||(n[0]=(...k)=>e.openDeletingModal&&e.openDeletingModal(...k)),class:"deleteButton text-small"}," \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0443 ")])])):M("",!0),a.isChangingModalOpened?(l(),p(m,{key:1,onClose:e.closeChangingModal,onChangeName:e.changeHabitName,habitName:a.habit.name},null,8,["onClose","onChangeName","habitName"])):M("",!0),a.isDeletingModalOpened?(l(),p(w,{key:2,onClose:e.closeDeletingModal,onDeleteHabit:e.deleteHabit,habitName:a.habit.name},null,8,["onClose","onDeleteHabit","habitName"])):M("",!0)],64)}const Tt=_($t,[["render",Ft],["__scopeId","data-v-1e5a590a"]]);export{Tt as default};
