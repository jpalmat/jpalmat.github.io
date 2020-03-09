window.onload = function(){

    var biggerBtn = document.getElementById('biggerBtn');

    var blingCheckBox = document.getElementById('bling');
    var timer;
    biggerBtn.onclick = function(){
        timer = window.setInterval(function(){
            var myText = document.getElementById('myText');
            increaseFontSize(myText,2,"pt");
        },500);
    }

    // checkbox functionality
    blingCheckBox.onchange = function(){
        var myText = document.getElementById('myText');
        var defaultTextStyle = myText.style;
        if(blingCheckBox.checked){
            myText.style.textDecoration = "underline";
            myText.style.fontStyle="bold";
            myText.style.color = "green";

            //set background
            document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/Rsyk5wnK44w/maxresdefault.jpg')";
        }
        else{
            myText.style =  defaultTextStyle;
        }
    }

// Igpay Atinlay function
    var igpayAtinlayBtn = document.getElementById("igpayAtinlay");
    igpayAtinlayBtn.onclick = function(){
        var myText = document.getElementById('myText');
        var words = myText.value.split(' ').map(function(s){
            if(isConsonantWord(s)){ return formatConsonat(s) ;}
            else{
                if(isVowelWord(s)){ return formatVowel(s); }
                else{
                    return s ;
                }
            } }).reduce(function(t ,s ){ return t + ' ' + s},'');
        myText.value = words;

    }

    // malkovitch function
    var malkovitchBtn = document.getElementById('malkovitch');
    malkovitchBtn.onclick = function(){
        var myText = document.getElementById('myText');
        var words = myText.value.split(' ').map(function(s){
            if(s.length >=5){ return 'Malkovich';
            }
            else{
                return s;
            }
        }).reduce(function(t,s){
            return t + ' ' + s;
        },'');
        myText.value = words;
    }


    function increaseFontSize(element,size,units){
        var myTextStyle = window.getComputedStyle(myText);
        var fontSize = myTextStyle.getPropertyValue('font-size');
        var currentSize =pixelsToPoints(fontSize);
        var newSize = (currentSize*1+size) + units;
        element.style.fontSize = newSize;

    }
    function pixelsToPoints(pixels){
        return parseInt(pixels)*72/96;
    }
    function isVowel(s){
        var arr = ['a','e','i','o','u','A','E','I','O','U'];
        return arr.includes(s);
    }
    function isConsonantWord(word){
        return word.charCodeAt(0) >=65 && word.charCodeAt(0) <=122 && !isVowel(word.charAt(0));
    }
    function isVowelWord(word){
        return isVowel(word.charAt(0));
    }
    function formatConsonat(s){
        return s.substr(1,s.length) + s.charAt(0) + '-ay';
    }
    function formatVowel(s){
        return s + '-ay';
    }

};