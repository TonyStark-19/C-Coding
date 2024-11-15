#include<stdio.h>
//This program is to print array in sorted form
void selectionsort(int arr[],int n);

int main()
{
    int arr[] = {29,72,98,13,87,66,52,51,36};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Orignal array :\n");
    printf("\n");
    for(int i = 0; i<n; i++) {
        printf("%d ",arr[i]);
    }
    printf("\n");

    selectionsort(arr,n);

    printf("\nSorted array in ascending order :\n");
    printf("\n");
    for(int i = 0; i<n; i++) {
        printf("%d ",arr[i]);
    }
    printf("\n");
}
void selectionsort(int arr[],int n) {
    int smallest,c;
    for(int i = 0; i<n-1; i++) {
        smallest = i;
        for(int j = i + 1; j<n; j++) {
            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        c = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = c;
    }
}