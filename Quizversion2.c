#include<stdio.h>
//This program is to take Quiz between two people
int main()
{
    char name1[40];
    char name2[40];
    int a1,a2,b1,b2,c1,c2,d1,d2,e1,e2;
    int count=0;
    int point=0;

    printf("      Welcome to the quiz competition\n");
    printf("\nEnter the name of first participant\n: ");
    scanf("%s",&name1);
    printf("\nEnter the name of second participant\n: ");
    scanf("%s",&name2);

    printf("\nAlright so we have %s and %s for\nthis quiz competition\n",name1,name2);
    printf("\n\tHere are the instructions :\n");
    printf("\n1.There will be 5 questions each for the\ntwo participants");
    printf("\n2.First question will be for %s and the second question for %s",name1,name2);
    printf("\n3.This will continue till Q10 for %s",name2);
    printf("\n4.And at last the results will be compared");
    printf("\n5.Write 1 for true and 0 for false\n");
    printf("\n\tSo let's begin the quiz...\n");

    printf("\nfor %s",name1);
    printf("\nQ1: Smallest prime number?\nAns: ");
    scanf("%d",&a1);
    if(a1==2) {
        count++;
    }
    else {
        count;
    }
    printf("\nfor %s",name2);
    printf("\nQ1: Smallest whole number?\nAns: ");
    scanf("%d",&a2);
    if(a2==0) {
        point++;
    }
    else {
        point;
    }
    printf("\nfor %s",name1);
    printf("\nQ2: Is 37 a prime number?\nAns: ");
    scanf("%d",&b1);
    if(b1==1) {
        count++;
    }
    else {
        count;
    }
    printf("\nfor %s",name2);
    printf("\nQ2: Is 77 a prime number?\nAns: ");
    scanf("%d",&b2);
    if(b2==0) {
        point++;
    }
    else {
        count;
    }
    printf("\nfor %s",name1);
    printf("\nQ3: 10 to the power zero is?\nAns: ");
    scanf("%d",&c1);
    if(c1==1) {
        count++;
    }
    else {
        count;
    }
    printf("\nfor %s",name2);
    printf("\nQ3: Value of √256 is?\nAns: ");
    scanf("%d",&c2);
    if(c2==16) {
        point++;
    }
    else {
        count;
    }
    printf("\nfor %s",name1);
    printf("\nQ4: Is 774 divisible by 3?\nAns: ");
    scanf("%d",&d1);
    if(d1==1) {
        count++;
    }
    else {
        count;
    }
    printf("\nfor %s",name2);
    printf("\nQ4: 4×6+8 is?\nAns: ");
    scanf("%d",&d2);
    if(d2==32) {
        point++;
    }
    else {
        count;
    }
    printf("\nfor %s",name1);
    printf("\nQ5: 7-8÷2?\nAns: ");
    scanf("%d",&e1);
    if(e1==3) {
        count++;
    }
    else {
        count;
    }
    printf("\nfor %s",name2);
    printf("\nQ5: Is 0 an integer?\nAns: ");
    scanf("%d",&e2);
    if(e2==1) {
        point++;
    }
    else {
        count;
    }

    printf("\n%s has scored %d/5\n",name1,count);
    printf("\n%s has scored %d/5\n",name2,point);
    if(count>point) {
        printf("\n%s is the winner\n",name1);
        printf("\nCongratulations %s\n",name1);
        printf("\nHard luck %s better luck next time",name2);
    }
    else if(count==point) {
        printf("\nIt's a tie between you guys\n\nCongratulations both of you\n");
    }
    else {
        printf("\n%s is the winner\n",name2);
        printf("\nCongratulations %s\n",name2);
        printf("\nHard luck %s better luck next time\n",name1);
    }
    printf("\nThanks for taking the quiz :)");

}