(()=>{"use strict";class e{constructor(e){this.$el=document.getElementById(e),this.init()}init(){}hide(){this.$el.classList.add("hide"),console.log("hide")}show(){this.$el.classList.remove("hide")}}function s(){this.hide()}const t=new class extends e{constructor(e){super(e)}init(){const e=this.$el.querySelector(".js-header-start");console.log(e),e.addEventListener("click",s.bind(this))}}("header");console.log(t)})();