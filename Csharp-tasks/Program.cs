using System;

namespace Csharp_tasks
{
    class Program
    {
        static void Main(string[] args)
        {
            var myPrinter = new Generics();
            myPrinter.PrintArray(new[] { "Karolis", "Jolita", "Seselis" });
        }
    }
}
