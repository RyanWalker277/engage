var params = new URLSearchParams(window.location.search),
    first = params.get("first");

document.getElementById("result").innerHTML = "Rs. " + first;

fetch("static\js\csvjson").then(function(resp){
    return resp.json();
})
.then(function(data){
    
    array = [];

    for (i = 0; i < data.length; i++) {
        
        let moddata = data[i].Ex_Showroom_Price.replace("Rs. ", "");

        let moddataaftercomma =moddata.replace(",", "");
        
        let moddataaftersecondcomma = moddataaftercomma.replace(/,/g, '');
        

        let intmoddata = parseInt(moddataaftersecondcomma);

        if(intmoddata < first){
            console.log(moddataaftersecondcomma)
            console.log(intmoddata)
            array.push(i);
        }
    }

    console.log(array)

    let uivariable = "" ;


    for( i = 0 ; i<array.length ; i++){

        uivariable += '<div class="mt-5 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"><div class="w-full md:bg-white flex flex-col space-y-2 p-3"><div class="flex justify-between item-center"><p class="text-gray-500 font-medium hidden md:block">' + data[array[i]].Displacement + '</p><div class="flex items-center"><p class="text-gray-600 font-bold text-sm ml-1">' + data[array[i]].City_Mileage + '<span class="text-gray-500 font-normal">(Km /Litre)</span></p></div><div class=""></div><div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">' + data[array[i]].Kerb_Weight + '</div></div><h3 class="font-black text-gray-800 md:text-3xl text-xl"> ' + data[array[i]].Make + " " + data[array[i]].Model + " " + data[array[i]].Variant + '</h3><p class="text-xl font-black text-gray-800">' + data[array[i]].Ex_Showroom_Price + '</p></div></div>';


    }

    document.getElementById('resultcard').innerHTML = uivariable;
    

});






