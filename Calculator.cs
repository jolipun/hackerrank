public interface AdvancedArithmetic{
    int divisorSum(int n);
}

public class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        var divisors = new int[6];
        var sum = 0;

        for (int i = 1; i <= n; i++)
        {
            if (n%i == 0)
            {
                divisors[i-1] = i;
            }
        }        

        foreach (var item in divisors)
        {
            sum += item;
        }

        return sum;
    }
}
