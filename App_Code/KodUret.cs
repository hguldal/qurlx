using System;
using System.Collections.Generic;
using System.Web;

/// <summary>
/// Summary description for KodUret
/// </summary>
public static class KodUret
{
    private const byte kodKarakterSayisi=4;
    public static string YeniKod()
    {
        string uretilenKod="";
        char[] karakterler=new char[36] {'q','w','e','r','w','r','t','y','u','p','a','s','d','f','g','h','j','k','i','z','x','c','v','b','n','m','0','1','2','3','4','5','6','7','8','9'};
        Random r=new Random();

        for (int i=0;i<kodKarakterSayisi;i++)
        {
            uretilenKod+=karakterler[r.Next(0,karakterler.Length-1)];
        }

        return uretilenKod;
        
    }

     public static string YeniKod(int karakterSayisi)
    {
        string uretilenKod="";
        char[] karakterler=new char[36] {'q','w','e','r','w','r','t','y','u','p','a','s','d','f','g','h','j','k','i','z','x','c','v','b','n','m','0','1','2','3','4','5','6','7','8','9'};
        Random r=new Random();

        for (int i=0;i<karakterSayisi;i++)
        {
            uretilenKod+=karakterler[r.Next(0,karakterler.Length-1)];
        }

        return uretilenKod;
        
    }
}
