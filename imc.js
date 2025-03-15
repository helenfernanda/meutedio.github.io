function FrontPage_Form1_Validator(theForm)
{

  if (theForm.TPeso.value == "")
  {
    alert("Please enter a value for the \"Peso em Kg\" field.");
    theForm.TPeso.focus();
    return (false);
  }

  var checkOK = "0123456789-,.";
  var checkStr = theForm.TPeso.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ",")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ".")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Peso em Kg\" field.");
    theForm.TPeso.focus();
    return (false);
  }

  if (decPoints > 1)
  {
    alert("Please enter a valid number in the \"TPeso\" field.");
    theForm.TPeso.focus();
    return (false);
  }

  var chkVal = allNum;
  var prsVal = parseFloat(allNum);
  if (chkVal != "" && !(prsVal > "0"))
  {
    alert("Please enter a value greater than \"0\" in the \"Peso em Kg\" field.");
    theForm.TPeso.focus();
    return (false);
  }

  if (theForm.TAltura.value == "")
  {
    alert("Please enter a value for the \"TAltura\" field.");
    theForm.TAltura.focus();
    return (false);
  }

  var checkOK = "0123456789-,.";
  var checkStr = theForm.TAltura.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ",")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ".")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"TAltura\" field.");
    theForm.TAltura.focus();
    return (false);
  }

  if (decPoints > 1)
  {
    alert("Please enter a valid number in the \"TAltura\" field.");
    theForm.TAltura.focus();
    return (false);
  }

  var chkVal = allNum;
  var prsVal = parseFloat(allNum);
  if (chkVal != "" && !(prsVal > "0"))
  {
    alert("Please enter a value greater than \"0\" in the \"TAltura\" field.");
    theForm.TAltura.focus();
    return (false);
  }

  var checkOK = "0123456789-.,";
  var checkStr = theForm.TIMC.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"TIMC\" field.");
    theForm.TIMC.focus();
    return (false);
  }

  if (decPoints > 1)
  {
    alert("Please enter a valid number in the \"TIMC\" field.");
    theForm.TIMC.focus();
    return (false);
  }
  return (true);
}