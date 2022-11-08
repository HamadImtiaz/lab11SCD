function StringReverse(str)
 {
    var newString = "";

    for (var i= str.length - 1; i >= 0; i--)
     {
        newString =newString+ str[i];
    }
    return newString;
}
module.exports.StringReverse=StringReverse;
