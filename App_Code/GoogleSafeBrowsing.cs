using System;
using System.Collections.Generic;
using System.Web;
using System.Net;
using System.IO;

public class GoogleSafeBrowsing
{
    public static int AdresKontrol(string adres)
    {

        
         var googleSafeLookupAdres="https://sb-ssl.google.com/safebrowsing/api/lookup?client=ourlex&key=AIzaSyDYF2551G79-XieSHaIXmzfclylL1bD-jk&appver=1.5.2&pver=3.1&url=" + HttpUtility.UrlEncode(adres);
          
       
          WebRequest objRequest = HttpWebRequest.Create(googleSafeLookupAdres);
          HttpWebResponse objResponse= (HttpWebResponse) objRequest.GetResponse();
          
         return Convert.ToInt32(objResponse.StatusCode);
                
        } 
}
