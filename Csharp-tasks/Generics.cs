using System;
namespace Csharp_tasks
{
    public class Generics
    {
        public void PrintArray<T>(T[] arr)
        {
            foreach (var item in arr)
            {
                Console.WriteLine(item);
            }
        }
    }
}

