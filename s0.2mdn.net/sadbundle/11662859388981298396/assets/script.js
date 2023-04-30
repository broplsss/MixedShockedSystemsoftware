function startAd() {
        
 // Variables
    
    var adContainer = document.getElementById("container");
    var tlMain = gsap.timeline();
    
// Set Listeners


// Set starting positions
	(function init() {
        
        gsap.set([F1CircleLeftContainer, F1ImageMiddleContainer, F1CircleRightContainer],{x:'-=420'})
        
        gsap.set([F2CircleLeftContainer, F2ImageMiddleContainer, F2CircleRightContainer],{x:'-=420'})
        
        gsap.set([F3CircleLeftContainer, F3ImageMiddleContainer, F3CircleRightContainer],{x:'-=420'})
        
        gsap.set([F4CircleLeftContainer, F4ImageMiddleContainer, F4CircleRightContainer],{x:'-=420'})
        
        gsap.set(FFCircleTopContainer,{y:'-=158'})
        
        gsap.set(FFCircleMiddleContainer,{x:'-=80'})
        
        gsap.set(F1HeadlineHolder,{ x:'-=300'})
        
        gsap.set(F2HeadlineHolder,{ x:'-=300'})
        
        gsap.set(F2LegalDisclaimerHolder,{autoAlpha:0, y:'-=2'})
        
        gsap.set(F3HeadlineHolder,{ x:'-=300'})
        
        gsap.set(F4HeadlineHolder,{ x:'-=300'})
        
        gsap.set(FFBackgroundContainer,{y:'+=600'})
        
        gsap.set(FFHeadlineHolder,{ y:'+=170'})
        
        animation();
	})();

// Animation

// Animation Frame01
function Frame01() {

        var tl = gsap.timeline();

        tl
        .to(F1CircleRightContainer, {duration:.6, x:'+=350', ease: "expo.out"})
        .to(F1ImageMiddleContainer, {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        .to(F1CircleLeftContainer, {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        
        .to(F1HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"},"-=.4")
    
        return tl;
    };

// Animation Frame02
function Frame02() {

        var tl = gsap.timeline();

        tl
        .to(F1HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"})
    
        .to([F1CircleRightContainer, F2CircleRightContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.6")
        .to([F1ImageMiddleContainer, F2ImageMiddleContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        .to([F1CircleLeftContainer, F2CircleLeftContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
            
        .to(F2HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"},"-=.4")
        .to(F2LegalDisclaimerHolder,{duration:.6, autoAlpha:1, y:'+=2', ease: "expo.out"}, "-=.6")


        return tl;
    };
    
// Animation Frame03
function Frame03() {

        var tl = gsap.timeline();

        tl
        .to(F2HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"})
        .to(F2LegalDisclaimerHolder,{duration:.6, autoAlpha:0, ease: "expo.out"}, "-=.6")
        
        .to([F2CircleRightContainer, F3CircleRightContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.6")
        .to([F2ImageMiddleContainer, F3ImageMiddleContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        .to([F2CircleLeftContainer, F3CircleLeftContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        
        .to(F3HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"},"-=.4")
    
        return tl;
    };
    
// Animation Frame04
function Frame04() {

        var tl = gsap.timeline();

        tl
        .to(F3HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"})
        
        .to([F3CircleRightContainer, F4CircleRightContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.6")
        .to([F3ImageMiddleContainer, F4ImageMiddleContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        .to([F3CircleLeftContainer, F4CircleLeftContainer], {duration:.6, x:'+=350', ease: "expo.out"},"-=.4")
        
        .to(F4HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"},"-=.4")
    
        return tl;
    };

// Animation EndFrame
function EndFrame() {

        var tl = gsap.timeline();

        tl
        .to(FFBackgroundContainer,{duration:.7, y:'-=1212', ease: "sine.out"})
    
        .to(FFCircleTopContainer, {duration:.8, y:'+=75', ease: "expo.out"})               
            
        .to(FFCircleBottomContainer, {duration:.8, y:'-=45', ease: "expo.out"}, "-=.8")

        .to(FFCircleMiddleContainer, {duration:.8, x:'+=32', ease: "expo.out"}, "-=.8")
        
        .to(FFHeadlineHolder, {duration:.8, y:'-=170', ease: "expo.out"}, "-=.6")
    
        return tl;
    };    
    
    
function animation(){
        var tlMain = gsap.timeline();
        
        tlMain

        .set(container, {visibility: 'visible'})
        .add(Frame01(), '+=.2')
        .add(Frame02(), '+=2')
        .add(Frame03(), '+=2')
        .add(Frame04(), '+=2')
        .add(EndFrame(), '+=2')

        console.log(tlMain.duration());
    };
    
/* ---------------------------------- Secondary Animations ---------------------------------- */

/* ---------------------------------- Helper Methods ---------------------------------- */

    function addClass(id, addClass) {
        id.classList.add(addClass);
    };    
};