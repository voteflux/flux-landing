!function($,e,o){$(function(){"use strict";var e=new TimelineLite;$("#btn-cta").click(function(o){o.preventDefault(),e.to($(".homepage-block-content-wrp"),1,{autoAlpha:0},0),e.to($(".site-bg"),4,{backgroundPosition:"center top",ease:Power4.easeInOut},.5),e.to($(".site-lgo-sub"),1,{opacity:1},.5),e.to($(".homepage-block-signup-wrp"),4,{top:0,ease:Power4.easeInOut},.5)});var o;$("#formContact").submit(function(e){o&&o.abort();var t=$(this),n=t.find("input, select, button, textarea"),a=t.serialize();n.prop("disabled",!0),o=$.ajax({url:"https://script.google.com/macros/s/AKfycbxHPKbw14oxLREpkxVjR2D_HNntB_UEBsvicO8TZcARb2-QwuU/exec",type:"post",data:a}),o.done(function(e,o,t){console.log("Hooray, it worked!"),console.log(e),console.log(o),console.log(t),TweenMax.to($(".homepage-signup-form-wrp"),1,{autoAlpha:0}),TweenMax.to($(".homepage-signup-form-wrp"),1,{height:0,delay:1})}),o.fail(function(e,o,t){console.error("The following error occurred: "+o,t)}),o.always(function(){n.prop("disabled",!1),TweenMax.to($(".homepage-signup-rsp-success"),1,{autoAlpha:1}),TweenMax.to($(".homepage-signup-rsp-success"),1,{height:"100%",delay:1})}),e.preventDefault()})})}(jQuery,this);