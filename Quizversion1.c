#include <stdio.h>
// This program is for taking Quiz
int main()
{
    int a, b, c, d, e, count = 0;

    printf("\t   Welcome to this quiz\n");
    printf("\nHere are the instructions :");
    printf("\n1.There will be five questions ");
    printf("\n2.Correct answer +1 marks");
    printf("\n3.Wrong answer 0 marks\n");
    printf("\n         So let's start the quiz.....\n");

    printf("\nQ1: How many continents are there on Earth?\nAns: ");
    scanf("%d", &a);
    if (a == 7)
    {
        count++;
    }
    else
    {
        count;
    }

    printf("\nQ2: How many planets are in the solar system?\nAns: ");
    scanf("%d", &b);
    if (b == 8)
    {
        count++;
    }
    else
    {
        count;
    }

    printf("\nQ3: Value of 0! is?\nAns: ");
    scanf("%d", &c);
    if (c == 1)
    {
        count++;
    }
    else
    {
        count;
    }

    printf("\nQ4: How many states are there in America?\nAns: ");
    scanf("%d", &d);
    if (d == 50)
    {
        count++;
    }
    else
    {
        count;
    }

    printf("\nQ5: In which year Apollo 11 landed on moon?\nAns: ");
    scanf("%d", &e);
    if (e == 1969)
    {
        count++;
    }
    else
    {
        count;
    }

    printf("\nYour marks is : %d/5\n", count);
    if (count == 5)
    {
        printf("\nOutstanding performance");
    }
    else if (count == 4)
    {
        printf("\nExcellent performance");
    }
    else if (count == 3)
    {
        printf("\nGreat performance");
    }
    else if (count == 2)
    {
        printf("\nNot so good performance");
    }
    else if (count == 1)
    {
        printf("\nVery poor performance");
    }
    else
    {
        printf("\nHow dumb you are....");
    }
    printf("\nThankyou for taking the quiz :)");
}