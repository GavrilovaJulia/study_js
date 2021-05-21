let history = [];

function insert(value){
    document.form.textview.value += value;
}

function clearSymbol(){
    var text = document.form.textview.value;
    document.form.textview.value = text.substring(0, text.length-1);
}

function clearText(){
    document.form.textview.value = "";
}

function eq(){
    let text = document.form.textview.value;
    if (text){
        let result = eval(document.form.textview.value);
        document.form.textview.value = document.form.textview.value + "=" + result; 
        history.push(document.form.textview.value);
        document.form2.textHistory.value = "";

        if(history.length > 13){
             history.splice(0,1);
        }

         for(let i = 0; i < history.length; ++i){
           document.form2.textHistory.value = document.form2.textHistory.value + history[i] + "\n";
        }
    }
}
