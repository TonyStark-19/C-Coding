#include<stdio.h>
#include<string.h>
//This program allows you to enter different information
struct student {
    char name[100];
    int roll;
    float cgpa;
};

int main()
{
    int n;

    printf("Enter number of students : ");
    scanf("%d",&n);
    printf("\n");

    struct student clg[n];

    for(int i = 1; i<=n; i++) {
        printf("Name of student %d : ",i);
        scanf("%s",&clg[i].name);
        printf("Roll number of student %d : ",i);
        scanf("%d",&clg[i].roll);
        printf("Cgpa of student %d : ",i);
        scanf("%f",&clg[i].cgpa);
        printf("\n");
    }
    for(int i = 1; i<=n; i++) {
        printf("Name of student %d : %s",i,clg[i].name);
        printf("\nRoll number of student %d : %d",i,clg[i].roll);
        printf("\nCgpa of student %d : %f",i,clg[i].cgpa);
        printf("\n");
    }
}