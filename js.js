/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


 /Give everything with the class 'hello' a color (something other than white) for the background when you click on one of them*/

$(".hello").click(function()
    {
        // alert('click made');
        $(.hello).css('background-color','hotpink')
    }
);


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$('h1').mouseenter(function ()
{
    $(this).css('height','20px');
    $(this).css('width','20px');
});
$().mouseleave(function(){
    $(this).css('height','');
    $(this).css('width','');
});

// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
('p.hello').click(function ()
{
    alert("going crazy");
    $('p.hello').append('.')
});