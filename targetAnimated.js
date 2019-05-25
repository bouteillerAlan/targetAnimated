//// Alan Bouteiller - v1 - 25/05/19 ////
// work whit animated.css or custom class
// animated css : https://daneden.github.io/animate.css/
// ex : animatedTarget('.classname', 'fadeIn') || animatedTarget('#idname', 'fadeIn') || animatedTarget('DOMelemname', 'fadeIn')

// $target : a DOM element || classname with . || id name with #
// $animation : the classname for the animation
// $repop : true || false if you need a repop

// +----------------------------------------------+
// |                                              |
// |            remove animation class (repop)    |
// |                                              |
// |   +-------------------------------------+ <------ user navigator screen - 0
// |   |                                     |    |
// |   |        add animation class          |    |
// |   |                                     |    |
// |   |                                     |    |
// |   +-------------------------------------+ <------- windowHeight
// |                                              |
// |            remove animation class (repop)    |
// |                                              |
// +----------------------------------------------+

function heart (target, animation, repop) {
    let windowHeight = window.innerHeight
    let targets = document.querySelectorAll(target)
    for (let i=0; i<targets.length; i++) {

        let targetTop = targets[i].getBoundingClientRect().top
        let targetBot = targets[i].getBoundingClientRect().bottom

        if (!repop) {
            // if we are on the window add anim
            // else nothing
            if (targetTop < windowHeight) {
                targets[i].classList.add(animation)
            }
        } else {
            // delete anim if target top is out of bottom screen or target bottom is out of top screen
            // else add
            if (targetBot < 0 || targetTop > windowHeight) {
                targets[i].classList.remove(animation)
            } else {
                targets[i].classList.add(animation)
            }
        }

    }
}

export default function animatedTarget (target, animation, repop = false) {

    // add class if Dom is loaded and content see by user
    window.addEventListener('DOMContentLoaded', ()=>{
        heart(target, animation, repop)
    })

    // add or remove class if user scroll
    window.addEventListener('scroll', ()=>{
        heart(target, animation, repop)
    })

}