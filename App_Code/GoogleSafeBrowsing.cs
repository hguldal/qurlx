using System;
using System.Collections.Generic;
using System.Web;
using System.Net;
using System.IO;

public class GoogleSafeBrowsing
{
    public static bool AdresKontrol(string adres)
    {

        
         var googleSafeLookupAdres="https://sb-ssl.google.com/safebrowsing/api/lookup?client=ourlex&key=AIzaSyDYF2551G79-XieSHaIXmzfclylL1bD-jk&appver=1.5.2&pver=3.1&url=" + HttpUtility.UrlEncode(adres);
          String strResult;
          WebResponse objResponse;
          WebRequest objRequest = HttpWebRequest.Create(googleSafeLookupAdres);
         
          objResponse = objRequest.GetResponse();
         
          using (StreamReader sr = new StreamReader(objResponse.GetResponseStream()))
          {
            strResult = sr.ReadToEnd();
            sr.Close();
          }
          if (strResult.Contains("malware") || strResult.Contains("unwanted") || strResult.Contains("phishing"))

          return true;
          else
          return false;
            }
}
