(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{E3cr:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){},o=u("pMnS"),i=u("Ip0R"),a=function(){function n(){this.onDelete=new t.m,this.onEdit=new t.m}return n.prototype.ngOnInit=function(){},n.prototype.deleteTask=function(n,l){this.onDelete.emit(l)},n.prototype.editarTask=function(n,l){this.onEdit.emit(l)},n}(),s=t.lb({encapsulation:0,styles:[[""]],data:{}});function r(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,5,"li",[["class","list-group-item"]],null,null,null,null,null)),(n()(),t.zb(1,null,[" "," -- "," "])),(n()(),t.nb(2,0,null,null,1,"button",[["class","btn btn-info mx-2"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.editarTask(e.event,n.context.$implicit)&&t),t},null,null)),(n()(),t.zb(-1,null,["Editar"])),(n()(),t.nb(4,0,null,null,1,"button",[["class","btn btn-danger mx-2"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.deleteTask(e.event,n.context.$implicit)&&t),t},null,null)),(n()(),t.zb(-1,null,["Eliminar"]))],null,function(n,l){n(l,1,0,l.context.$implicit.name,l.context.$implicit.category)})}function b(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t.nb(1,0,null,null,2,"ul",[["class","list-group"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,r)),t.mb(3,278528,null,0,i.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.tareas)},null)}function c(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.zb(-1,null,["No hay tareas"]))],null,null)}function g(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.zb(-1,null,["Las tareas de Leonardo"])),(n()(),t.eb(16777216,null,null,1,null,b)),t.mb(3,16384,null,0,i.i,[t.M,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.eb(0,[["notask",2]],null,0,null,c))],function(n,l){var u=l.component;n(l,3,0,null==u.tareas?null:u.tareas.length,t.vb(l,4))},null)}var d=u("gIcY"),p=u("3kzh"),m=function(){function n(){this.onSubmit=new t.m,this.status="Agregar"}return n.prototype.ngOnInit=function(){},n.prototype.addTask=function(){this.onSubmit.emit(this.task),this.task=new p.a},n}(),v=t.lb({encapsulation:0,styles:[[""]],data:{}});function f(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.zb(-1,null,[" Agregar nueva tarea "])),(n()(),t.nb(2,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0,o=n.component;return"submit"===l&&(e=!1!==t.vb(n,4).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.vb(n,4).onReset()&&e),"ngSubmit"===l&&(e=!1!==o.addTask()&&e),e},null,null)),t.mb(3,16384,null,0,d.l,[],null,null),t.mb(4,4210688,null,0,d.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.xb(2048,null,d.b,null,[d.i]),t.mb(6,16384,null,0,d.h,[[4,d.b]],null,null),(n()(),t.nb(7,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.nb(8,0,null,null,6,"div",[["class","form-input"]],null,null,null,null,null)),(n()(),t.nb(9,0,null,null,5,"input",[["name","id"],["type","hidden"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.vb(n,10)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.vb(n,10).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.vb(n,10)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.vb(n,10)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.task.id=u)&&e),e},null,null)),t.mb(10,16384,null,0,d.c,[t.B,t.k,[2,d.a]],null,null),t.xb(1024,null,d.e,function(n){return[n]},[d.c]),t.mb(12,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.xb(2048,null,d.f,null,[d.j]),t.mb(14,16384,null,0,d.g,[[4,d.f]],null,null),(n()(),t.nb(15,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.nb(16,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(n()(),t.zb(-1,null,["Name"])),(n()(),t.nb(18,0,null,null,6,"div",[["class","form-input"]],null,null,null,null,null)),(n()(),t.nb(19,0,null,null,5,"input",[["name","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.vb(n,20)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.vb(n,20).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.vb(n,20)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.vb(n,20)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.task.name=u)&&e),e},null,null)),t.mb(20,16384,null,0,d.c,[t.B,t.k,[2,d.a]],null,null),t.xb(1024,null,d.e,function(n){return[n]},[d.c]),t.mb(22,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.xb(2048,null,d.f,null,[d.j]),t.mb(24,16384,null,0,d.g,[[4,d.f]],null,null),(n()(),t.nb(25,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.nb(26,0,null,null,1,"label",[["for","category"]],null,null,null,null,null)),(n()(),t.zb(-1,null,["Category"])),(n()(),t.nb(28,0,null,null,6,"div",[["class","form-input"]],null,null,null,null,null)),(n()(),t.nb(29,0,null,null,5,"input",[["name","category"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var e=!0,o=n.component;return"input"===l&&(e=!1!==t.vb(n,30)._handleInput(u.target.value)&&e),"blur"===l&&(e=!1!==t.vb(n,30).onTouched()&&e),"compositionstart"===l&&(e=!1!==t.vb(n,30)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t.vb(n,30)._compositionEnd(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.task.category=u)&&e),e},null,null)),t.mb(30,16384,null,0,d.c,[t.B,t.k,[2,d.a]],null,null),t.xb(1024,null,d.e,function(n){return[n]},[d.c]),t.mb(32,671744,null,0,d.j,[[2,d.b],[8,null],[8,null],[6,d.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.xb(2048,null,d.f,null,[d.j]),t.mb(34,16384,null,0,d.g,[[4,d.f]],null,null),(n()(),t.nb(35,0,null,null,1,"button",[["class","btn btn-info"]],null,null,null,null,null)),(n()(),t.zb(36,null,["",""]))],function(n,l){var u=l.component;n(l,12,0,"id",u.task.id),n(l,22,0,"name",u.task.name),n(l,32,0,"category",u.task.category)},function(n,l){var u=l.component;n(l,2,0,t.vb(l,6).ngClassUntouched,t.vb(l,6).ngClassTouched,t.vb(l,6).ngClassPristine,t.vb(l,6).ngClassDirty,t.vb(l,6).ngClassValid,t.vb(l,6).ngClassInvalid,t.vb(l,6).ngClassPending),n(l,9,0,t.vb(l,14).ngClassUntouched,t.vb(l,14).ngClassTouched,t.vb(l,14).ngClassPristine,t.vb(l,14).ngClassDirty,t.vb(l,14).ngClassValid,t.vb(l,14).ngClassInvalid,t.vb(l,14).ngClassPending),n(l,19,0,t.vb(l,24).ngClassUntouched,t.vb(l,24).ngClassTouched,t.vb(l,24).ngClassPristine,t.vb(l,24).ngClassDirty,t.vb(l,24).ngClassValid,t.vb(l,24).ngClassInvalid,t.vb(l,24).ngClassPending),n(l,29,0,t.vb(l,34).ngClassUntouched,t.vb(l,34).ngClassTouched,t.vb(l,34).ngClassPristine,t.vb(l,34).ngClassDirty,t.vb(l,34).ngClassValid,t.vb(l,34).ngClassInvalid,t.vb(l,34).ngClassPending),n(l,36,0,u.status)})}var h=u("i6c7"),k=function(){function n(n){this.tareaService=n,this._subscriptions=[],this.tareas=[],this.tarea=new p.a}return n.prototype.ngOnInit=function(){var n=this;this._subscriptions.push(this.tareaService.getTasks().subscribe(function(l){n.tareas=l}))},n.prototype.ngOnDestroy=function(){this._subscriptions.forEach(function(n){return n.unsubscribe()})},n.prototype.deleteTask=function(n){this.tareaService.deleteTask(n)},n.prototype.editTask=function(n){this.tarea=n},n.prototype.procesarForm=function(n){this.tareaService.addTask(n)},n}(),C=t.lb({encapsulation:0,styles:[[""]],data:{}});function y(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t.nb(1,0,null,null,1,"app-task-list",[],null,[[null,"onDelete"],[null,"onEdit"]],function(n,l,u){var t=!0,e=n.component;return"onDelete"===l&&(t=!1!==e.deleteTask(u)&&t),"onEdit"===l&&(t=!1!==e.editTask(u)&&t),t},g,s)),t.mb(2,114688,null,0,a,[],{tareas:[0,"tareas"]},{onDelete:"onDelete",onEdit:"onEdit"}),(n()(),t.nb(3,0,null,null,1,"app-task-form",[],null,[[null,"onSubmit"]],function(n,l,u){var t=!0;return"onSubmit"===l&&(t=!1!==n.component.procesarForm(u)&&t),t},f,v)),t.mb(4,114688,null,0,m,[],{task:[0,"task"]},{onSubmit:"onSubmit"})],function(n,l){var u=l.component;n(l,2,0,u.tareas),n(l,4,0,u.tarea)},null)}var T=t.jb("app-task",k,function(n){return t.Ab(0,[(n()(),t.nb(0,0,null,null,1,"app-task",[],null,null,null,y,C)),t.mb(1,245760,null,0,k,[h.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),S=u("tct4"),I=u("ZYCi"),x=function(){};u.d(l,"TaskModuleNgFactory",function(){return E});var E=t.kb(e,[],function(n){return t.tb([t.ub(512,t.j,t.Z,[[8,[o.a,T]],[3,t.j],t.v]),t.ub(4608,i.k,i.j,[t.s,[2,i.r]]),t.ub(4608,d.m,d.m,[]),t.ub(4608,h.a,h.a,[S.AngularFirestore]),t.ub(1073742336,i.b,i.b,[]),t.ub(1073742336,I.m,I.m,[[2,I.s],[2,I.k]]),t.ub(1073742336,x,x,[]),t.ub(1073742336,d.k,d.k,[]),t.ub(1073742336,d.d,d.d,[]),t.ub(1073742336,e,e,[]),t.ub(1024,I.i,function(){return[[{path:"",redirectTo:"tarea",pathMatch:"full"},{path:"tarea",component:k}]]},[])])})}}]);