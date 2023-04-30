function startAd() {
        
 // Variables
    
    var adContainer = document.getElementById("container");
    var tlMain = gsap.timeline();
    
// Set Listeners


// Set starting positions
	(function init() {
        
    
        
        gsap.set(F1HeadlineHolder,{ y:'+=30',autoAlpha:0})
        gsap.set(CTABg,{ y:'+=30',autoAlpha:0})
        gsap.set(PhoneHolder,{ y:'+=30',autoAlpha:0})
        gsap.set(CBLogoContainer,{ y:'-=200',autoAlpha:1})
        gsap.set(CardHolder,{ y:'+=210',autoAlpha:1})
       
        
        gsap.set(F1CircleWhiteContainer,{ scale:.7,autoAlpha:1})
        gsap.set(F1CircleGreenContainer,{ scale:.6,autoAlpha:1})
        gsap.set(F1CircleBlueContainer,{ scale:.6,autoAlpha:1})
        
        gsap.set(F2HeadlineHolder,{ x:'-=320'})
        
        gsap.set(F2LegalDisclaimerHolder,{autoAlpha:0, y:'-=2'})
        
        gsap.set(F3HeadlineHolder,{ x:'-=320'})
        
        gsap.set(F4HeadlineHolder,{ x:'-=300'})
        
//        gsap.set(FFBackgroundContainer,{y:'+=300'})
        
        gsap.set(FFHeadlineHolder,{ x:'-=300'})
        
        animation();
	})();

// Animation

// Animation Frame01
function Frame01() {

        var tl = gsap.timeline();

        tl 
        
        .add("f1", "0")
        .to([F1CircleWhiteContainer ], {duration:.4, scale:1,ease: "quad.out"},"f1+=.3")
        .to([F1CircleGreenContainer ], {duration:.8, scale:3,ease: "quad.out"},"f1+=.2")
        .to([F1CircleBlueContainer ], {duration:1, scale:3, ease: "quad.out"},"f1+=.3")
    
        .to([CBLogoContainer], {duration:.6, y:'+=200', ease: "expo.out"},"f1+=.5")
        .to([CardHolder], {duration:.6, y:'-=210', ease: "expo.out"},"f1+=.8")
        .to([F1HeadlineHolder,CTABg,PhoneHolder], {duration:.6, y:'-=30',autoAlpha:1, ease: "expo.out"},"f1+=.5")
    
        return tl;
    };

// Animation Frame02
function Frame02() {

        var tl = gsap.timeline();

        tl
        .add("f2", "0")
        .to(F1HeadlineHolder, {duration:.6, x:'-=300',autoAlpha:0, ease: "expo.out"},"f2")
        
        .to(F2HeadlineHolder, {duration:.6, x:'+=320',autoAlpha:1,ease: "expo.out"},"f2+=.3")
        .to(F2LegalDisclaimerHolder,{duration:.6, autoAlpha:1, y:'+=2', ease: "expo.out"}, "f2+=.6")


        return tl;
    };
    
// Animation Frame03
function Frame03() {

        var tl = gsap.timeline();

        tl
        
        .add("f3", "0")
        .to(F2HeadlineHolder, {duration:.6, x:'-=300',autoAlpha:0, ease: "expo.out"},"f2")
        .to(F2LegalDisclaimerHolder, {duration:.6, autoAlpha:0, ease: "expo.out"}, "f2")
        
        .to(F3HeadlineHolder, {duration:.6, x:'+=320', ease: "expo.out"},"f3+=.3")
    
        return tl;
    };
    
// Animation Frame04
function Frame04() {

        var tl = gsap.timeline();

        tl
        .add("f4", "0")
        .to(F3HeadlineHolder, {duration:.6, x:'-=300',autoAlpha:0, ease: "expo.out"},"f4")
        
        .to(F4HeadlineHolder, {duration:.6, x:'+=300', ease: "expo.out"},"f4+=.3")
    
        return tl;
    };

// Animation EndFrame
function EndFrame() {

        var tl = gsap.timeline();

        tl
        .add("f5", "0")
        .to(F4HeadlineHolder, {duration:.6, x:'-=300',autoAlpha:0, ease: "expo.out"},"f5")
    
        .to(FFHeadlineHolder, {duration:.8, x:'+=300', ease: "expo.out"}, "f5+=.3")
    
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