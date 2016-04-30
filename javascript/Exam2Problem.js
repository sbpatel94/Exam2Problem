function CreateCategory()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    
    var catename = document.getElementById("catname").value;
    var catedescription = document.getElementById("description").value;
    
    
    var newcustomer = '{"CName":"' + catename + '","CDescription":"' + catedescription +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    
    objRequest.open("POST",url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);

}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful"
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}


function UpdateCategory()
{
    var objRequests = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    var categoryid = document.getElementById("catid").value;
    var catdescription = document.getElementById("catdescription").value;
  
    
    var updateaddress = '{"CID":"' + catid + '","CDescription":"' + catdescription +'"}'
    
    objRequests.onreadystatechange = function()
    {
        if (objRequests.readyState == 4 && objRequests.status == 200)
        {
            var results = JSON.parse(objRequests.responseText);
            OperationResults(results);
        }
    }
    objRequests.open("POST", url, true);
     objRequests.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequests.send(updateaddress);
}
function OperationResults(output)
{
    if (output == 1)
    {
        document.getElementById("results").innerHTML = "The operation was completed successfully"
    }
   else if (output == 0)
   {
        document.getElementById("results").innerHTML = "Operation failed with an unspecified error"
   }
   else if (output == -2)
   {
        document.getElementById("results").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object"
   }
   else
   {
        document.getElementById("results").innerHTML = "Operation failed because a record with the supplied Order ID could not be found"
   }
}


function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    
    {
       document.getElementById("section1").style.visibility = "visible";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
       document.getElementById("section4").style.visibility = "hidden";
       document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 2")
    {
       document.getElementById("section2").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
       document.getElementById("section4").style.visibility = "hidden";
       document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 3") 
    {
       document.getElementById("section3").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section4").style.visibility = "hidden";
       document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 4") 
    {
       document.getElementById("section4").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
       document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 5") 
    {
       document.getElementById("section5").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
       document.getElementById("section4").style.visibility = "hidden";
    }
    
    else
    {
         document.getElementById("section1").style.visibility = "hidden";
         document.getElementById("section2").style.visibility = "hidden";
         document.getElementById("section3").style.visibility = "hidden";
         document.getElementById("section4").style.visibility = "hidden";
         document.getElementById("section5").style.visibility = "hidden";
    }
}
    