function obterFrase (){
    var r_text = new Array ();
    r_text[0] = "'We cannot solve problems with the kind of thinking we employed when we came up with them.' — Albert Einstein";
    r_text[1] = "'Learn as if you will live forever, live like you will die tomorrow.' — Mahatma Gandhi";
    r_text[2] = "'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.' — Mark Twain";
    r_text[3] = "'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.' — Eleanor Roosevelt";
    r_text[4] = "'When you change your thoughts, remember to also change your world.' —Norman Vincent Peale";
    r_text[5] = "'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.' —Walter Anderson";
    r_text[6] = "'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.' —Diane McLaren";
    var i = Math.floor(7*Math.random());
    return alert(r_text[i]);
}