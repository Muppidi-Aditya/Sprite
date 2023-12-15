gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({scrollTrigger :{
    trigger : "#page1Sub",
    start : "0% 95%",
    end : "50% 50%",
    scrub : true,
    markers : false,
}})

tl1.to("#sprite2",{
    top : "120%",
    left : "50%",
    transform : "rotate(-30deg)",
},'sprite')

tl1.from("#sprite1",{
    top : "0%",
    right : "-40%",
    transform : "rotate(-10deg)",
},'sprite')

tl1.to("#lemons",{
    top : "162.5%",
    left : "1.5%",
},'sprite')

tl1.to("#lemonSlice1",{
    top : "90%",
    left : "90%",
},'sprite')

const tl2 = gsap.timeline({scrollTrigger :{
    trigger : "#page2Sub",
    start : "0% 95%",
    end : "50% 50%",
    scrub : true,
    markers : false,
}})

tl2.to("#sprite2",{
    top : "210%",
    transform : "rotate(0deg)",
    left : "32.5%",
},'sprite2')

tl2.from("#fanta",{
    marginTop : "350px",
    left : "-20%",
    transform : "rotate(20deg)",
},'sprite2')

tl2.from("#sevenup",{
    marginTop : "350px",
    right : "-20%",
    transform : "rotate(-20deg)",
},'sprite2')

tl2.to("#lemonSlice1",{
    top : "205%",
    transform : "rotate(0deg)",
    left : "40.5%",
    height : "36%",
},'sprite2')

tl2.from("#fantaOrangeSlice",{
    top : "-20%",
    left : "-20%",
},'sprite2')

tl2.from("#sevenupLemonSlice",{
    top : "-20%",
    right : "-20%",
},'sprite2')