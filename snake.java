import java.util.*;
public class snake
{
    public static void main(String [] args)
    {
        Scanner sc = new Scanner(System.in);
        int r = sc.nextInt();
        int c = sc.nextInt();
        for(int i =1;i<=r;i++)
        {
            for(int j = 1; j<=c; j++)
            {
                if(i%2 == 1)
                {
                    System.out.print("# ");
                }
                else if(i%4 != 0 && j == r)
                {
                    System.out.print("# ");
                }
                else if(i%4 == 0 && j==1)
                System.out.print("# ");
                else 
                System.out.print(". ");
            }
            System.out.println();
        }
        sc.close();
    }
}