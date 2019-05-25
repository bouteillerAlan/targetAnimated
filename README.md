# targetAnimated
js class for auto add animation css class if the element is see by user

# desc
work whit animated.css or custom class

animated.css : https://daneden.github.io/animate.css/


ex : animatedTarget('.classname', 'fadeIn') || animatedTarget('#idname', 'fadeIn') || animatedTarget('DOMelemname', 'fadeIn')


$target : a DOM element || classname with . || id name with #

$animation : the classname for the animation

$repop : true || false if you need a repop

```
+----------------------------------------------+
|                                              |
|            remove animation class (repop)    |
|                                              |
|   +-------------------------------------+ <------ user navigator screen - 0
|   |                                     |    |
|   |        add animation class          |    |
|   |                                     |    |
|   |                                     |    |
|   +-------------------------------------+ <------- windowHeight
|                                              |
|            remove animation class (repop)    |
|                                              |
+----------------------------------------------+
```
