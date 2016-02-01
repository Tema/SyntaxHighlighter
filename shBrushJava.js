




/*
     FILE ARCHIVED ON 15:11:48 Jan 5, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 0:27:51 Feb 1, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
 * JsMin
 * Javascript Compressor
 * /web/20150105151148/http://www.crockford.com/
 * /web/20150105151148/http://www.smallsharptools.com/
*/

dp.sh.Brushes.Java=function()
{var keywords='abstract assert boolean break byte case catch char class const '+'continue default do double else enum extends '+'false final finally float for goto if implements import '+'instanceof int interface long native new null '+'package private protected public return '+'short static strictfp super switch synchronized this throw throws true '+'transient try void volatile while';this.regexList=[{regex:dp.sh.RegexLib.SingleLineCComments,css:'comment'},{regex:dp.sh.RegexLib.MultiLineCComments,css:'comment'},{regex:dp.sh.RegexLib.DoubleQuotedString,css:'string'},{regex:dp.sh.RegexLib.SingleQuotedString,css:'string'},{regex:new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b','gi'),css:'number'},{regex:new RegExp('(?!\\@interface\\b)\\@[\\$\\w]+\\b','g'),css:'annotation'},{regex:new RegExp('\\@interface\\b','g'),css:'keyword'},{regex:new RegExp(this.GetKeywords(keywords),'gm'),css:'keyword'}];this.CssClass='dp-j';this.Style='.dp-j .annotation { color: #646464; }'+'.dp-j .number { color: #C00000; }';}
dp.sh.Brushes.Java.prototype=new dp.sh.Highlighter();dp.sh.Brushes.Java.Aliases=['java'];
