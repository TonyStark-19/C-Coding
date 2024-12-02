#include <stdio.h>
// This code is to convert temperature in celcius to Fahrenheit
float temp(float celcius);

int main()
{

    float celcius;

    printf("Enter value of temperature in celcius : ");
    scanf("%f", &celcius);

    printf("Temperature is : %f°F", temp(celcius));
}

float temp(float celcius)
{
    float temp = (celcius * 1.8) + 32;
    return temp;
}