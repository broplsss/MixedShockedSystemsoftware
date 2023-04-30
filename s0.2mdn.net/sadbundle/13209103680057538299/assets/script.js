function startAd() {
        
 // Variables
    
    var adContainer = document.getElementById("container");
    var tlMain = gsap.timeline();
    
// Set Listeners


// Set starting positions
	(function init() {
        
        gsap.set([F1CircleTopContainer, F1ImageMiddleContainer, F1CircleBottomContainer],{x:'-=55', y:'-=400'})
        
        gsap.set([F2CircleTopContainer, F2ImageMiddleContainer, F2CircleBottomContainer],{x:'-=55',y:'-=550'})
        
        gsap.set([F3CircleTopContainer, F3ImageMiddleContainer, F3CircleBottomContainer],{x:'-=55', y:'-=550'})
        
        gsap.set([F4CircleTopContainer, F4ImageMiddleContainer, F4CircleBottomContainer],{x:'-=55', y:'-=550'})
        
        gsap.set(FFCircleTopContainer,{y:'-=80'})
        
        gsap.set(F1HeadlineHolder,{ y:'-=300'})
        
        gsap.set(F2HeadlineHolder,{ y:'-=300'})
        
        gsap.set(F2LegalDisclaimerHolder,{autoAlpha:0, y:'-=2'})
        
        gsap.set(F3HeadlineHolder,{ y:'-=300'})
        
        gsap.set(F4HeadlineHolder,{ y:'-=300'})
        
        gsap.set(FFBackgroundContainer,{y:'+=90'})
        
        gsap.set(FFHeadlineHolder,{ y:'+=180'})
        
        animation();
	})();

// Animation

// Animation Frame01
function Frame01() {

        var tl = gsap.timeline();

        tl 
        .to([F1CircleTopContainer, F1ImageMiddleContainer, F1CircleBottomContainer], {duration:.6, y:'+=252', ease: "expo.out"})
        
        .to(F1HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.3")
    
        return tl;
    };

// Animation Frame02
function Frame02() {

        var tl = gsap.timeline();

        tl
        .to([F1CircleTopContainer, F1ImageMiddleContainer, F1CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"})
        
        .to(F1HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.6")
    
        .to([F2CircleTopContainer, F2ImageMiddleContainer, F2CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"},"-=.6")
        
        .to(F2HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.3")
        .to(F2LegalDisclaimerHolder,{duration:.6, autoAlpha:1, y:'+=2', ease: "expo.out"}, "-=.6")


        return tl;
    };
    
// Animation Frame03
function Frame03() {

        var tl = gsap.timeline();

        tl
        .to([F2CircleTopContainer, F2ImageMiddleContainer, F2CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"})
        
        .to([F2HeadlineHolder, F2LegalDisclaimerHolder], {duration:.6, y:'+=300', ease: "expo.out"},"-=.6")

        .to([F3CircleTopContainer, F3ImageMiddleContainer, F3CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"},"-=.6")
        
        .to(F3HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.3")
    
        return tl;
    };
    
// Animation Frame04
function Frame04() {

        var tl = gsap.timeline();

        tl
        .to([F3CircleTopContainer, F3ImageMiddleContainer, F3CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"})
        
        .to(F3HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.6")
    
        .to([F4CircleTopContainer, F4ImageMiddleContainer, F4CircleBottomContainer], {duration:.6, y:'+=402', ease: "expo.out"},"-=.6")
        
        .to(F4HeadlineHolder, {duration:.6, y:'+=300', ease: "expo.out"},"-=.3")
    
        return tl;
    };

// Animation EndFrame
function EndFrame() {

        var tl = gsap.timeline();

        tl
        .to(FFBackgroundContainer,{duration:.4, y:'-=278', ease: "sine.out"})
    
        .to(FFCircleTopContainer, {duration:.8, y:'+=40', ease: "expo.out"})
    
        .to(FFCircleBottomContainer, {duration:.8, y:'-=40', ease: "expo.out"}, "-=.8")
    
        .to(FFHeadlineHolder, {duration:.8, y:'-=180', ease: "expo.out"}, "-=.6")
    
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