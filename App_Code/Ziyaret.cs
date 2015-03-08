using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Serialization;
using System.Net;

public static class Ziyaret
{
   
    public static Ziyaretci ZiyaretciBilgisiGetir(string IP)
    
    {
      
        using (var wc = new WebClient())
            {
                JavaScriptSerializer serializer = new  JavaScriptSerializer();
                Ziyaretci z =  serializer.Deserialize<Ziyaretci>(wc.DownloadString("http://freegeoip.net/json/" + IP));
                return z;
            }
    }
}

public class Ziyaretci
{
    public string ip;
    public string country_code;
    public string country_name;
    public string region_code;
    public string city;
    public string zip_code;
    public string time_zone;
    public string latitude;
    public string longitude;
}
