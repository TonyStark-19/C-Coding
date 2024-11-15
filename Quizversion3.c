#include<stdio.h>
//This is a program for MCQ based quiz
int main()
{
    int A,B,C,D,E,F,G,H,I,J;
    int count=0;

    printf("\t   Welcome to the quiz \n");

    printf("\n\tHere are the instructions :\n");
    printf("\n1.It is a MCQ based quiz");
    printf("\n2.There will be 10 questions with four \n  options");
    printf("\n3.One marks for each correct answer");
    printf("\n4.Zero marks for every wrong answer\n");

    printf("\n\tLet's begin the quiz......\n");

    printf("\nQ1: Biggest and smallest state of India?\n");
    printf("\n1 : Chennai and Goa");
    printf("\n2 : Rajashthan and Sikkim");
    printf("\n3 : Rajasthan and Goa");
    printf("\n4 : Uttar Pradesh and Goa\n");

    printf("\nAns: Option ");
    scanf("%d",&A);
    if(A==3) {
        count++;
        printf("\nCorrect answer :)\n");
        printf("\nNote : Rajasthan has an area of 342,239\nkm^2 and Goa has an area of 3,702 km^2\nMaking them the largest and the smallest state in India\n");
    }
    else {
        count;
        printf("\nWrong answer :( Correct answer is option 3!\n");
        printf("\nNote : Rajasthan has an area of 342,239\nkm^2 and Goa has an area of 3,702 km^2\nMaking them the largest and the smallest state in India\n");
    }

    printf("\nQ2: Biggest river in the world?\n");
    printf("\n1 : Ganga");
    printf("\n2 : Nile");
    printf("\n3 : Yangzte");
    printf("\n4 : Bhramaputra\n");

    printf("\nAns: Option ");
    scanf("%d",&B);
    if(B==2) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : Nile river has a total stretch of\n6650 km!!\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : Nile river has a total stretch of\n6650 km!!\n");
        count;
    }
    printf("\nQ3: Mount Everest is in which country?\n");
    printf("\n1 : India");
    printf("\n2 : Bhutan");
    printf("\n3 : Nepal");
    printf("\n4 : China\n");

    printf("\nAns: Option ");
    scanf("%d",&C);
    if(C==3) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : Mount Everest is situated at the\nHimalayan range which is in the country\nNepal\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 3!\n");
        printf("\nNote : Mount Everest is situated at the\nHimalayan range which is in the country\nNepal\n");
        count;
    }
    printf("\nQ4: Biggest and smallest country in the\n    world?(By Area!)\n");
    printf("\n1 : America and Brazil");
    printf("\n2 : Russia and Vatican city");
    printf("\n3 : China and Sri Lanka");
    printf("\n4 : Greenland and Nepal\n");

    printf("\nAns: Option ");
    scanf("%d",&D);
    if(D==2) {
        count++;
        printf("\nCorrect answer :)\n");
        printf("\nNote : Russian has an area of about 17.1\nmillion km^2!! and Vatican City has an areaof about 44 hactare only!\n");
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : Russian has an area of about 17.1\nmillion km^2!! and Vatican City has an areaof about 44 hactare only!\n");
        count;
    }
    printf("\nQ5: Highest building in the world?\n");
    printf("\n1 : Empire State ");
    printf("\n2 : Burj khalifa ");
    printf("\n3 : Jeedah tower");
    printf("\n4 : None of the above\n");

    printf("\nAns: Option ");
    scanf("%d",&E);
    if(E==2) {
        printf("\nCorrect answer :(\n");
        printf("\nNote : Burj khalifa has a total Height of\n828 metres (2,716.5 feet) and more than\n160 stories is present!!\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : Burj khalifa has a total Height of\n828 metres (2,716.5 feet) and more than\n160 stories is present!!\n");
        count;
    }
    printf("\nQ6: Which city in India is known as the\n    pink city?\n");
    printf("\n1 : Jaipur");
    printf("\n2 : Lucknow");
    printf("\n3 : Mumbai");
    printf("\n4 : Banglore\n");

    printf("\nAns: Option ");
    scanf("%d",&F);
    if(F==1) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : Jaipur is known as “The Pink City”\nwhen, in 1876, Maharaja Ram Singh had most\nof the buildings painted pink—the color of hospitality—in preparation for a visit by\nBritain's Queen Victoria\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 1!\n");
        printf("\nNote : Jaipur is known as “The Pink City”\nwhen, in 1876, Maharaja Ram Singh had most\nof the buildings painted pink—the color of hospitality—in preparation for a visit by\nBritain's Queen Victoria\n");
        count;
    }
    printf("\nQ7: Closest star to the planet eartt?\n");
    printf("\n1 : Sirus");
    printf("\n2 : Sun");
    printf("\n3 : Betulguese");
    printf("\n4 : Pole\n");

    printf("\nAns: Option ");
    scanf("%d",&G);
    if(G==2) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : Our sun is also a star!! and is\n147.7 million km far from earth!\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : Our sun is also a star!! and is\n147.7 million km far from earth!\n");
        count;
    }
    printf("\nQ8: How many continents are on our planet?\n");
    printf("\n1 : Six");
    printf("\n2 : Seven");
    printf("\n3 : Eight");
    printf("\n4 : Five\n");

    printf("\nAns: Option ");
    scanf("%d",&H);
    if(H==2) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : There are seven continents on our\nplanet Namely : Asia,Africa,South America,\nNorth America,Europe,Antartica,Australia\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : There are seven continents on our\nplanet Namely : Asia,Africa,South America,\nNorth America,Europe,Antartica,Australia\n");
        count;
    }
    printf("\nQ9: Which planet in the solar system is not    named after a Roman God?\n");
    printf("\n1 : Mars");
    printf("\n2 : Mercury");
    printf("\n3 : Earth");
    printf("\n4 : Uranus\n");

    printf("\nAns: Option ");
    scanf("%d",&I);
    if(I==3) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : Earth is the only planet which is\nnot named after a Roman god\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 3\n");
        printf("\nNote : Earth is the only planet which is\nnot named after a Roman god\n");
        count;
    }
    printf("\nQ10: What is the name of our galaxy?\n");
    printf("\n1 : Andromeda");
    printf("\n2 : Milkyway");
    printf("\n3 : Whirlpool");
    printf("\n4 : None of the above\n");

    printf("\nAns: Option ");
    scanf("%d",&J);
    if(J==2) {
        printf("\nCorrect answer :)\n");
        printf("\nNote : That's so basic knowledge question! The galaxy in which we live is Milkyway\n");
        count++;
    }
    else {
        printf("\nWrong answer :( Correct answer is option 2!\n");
        printf("\nNote : That's so basic knowledge question! The galaxy in which we live is Milkyway\n");
        count;
    }
    printf("\nYour score is %d/10\n",count);
    if(count<=3) {
        printf("\nVery poor performance :(\n");
    }
    else if(count>3 && count<=7) {
        printf("\nGood performance\n");
    }
    else if(count>7 && count<=9) {
        printf("\nOutstanding performance\n");
    }
    else if (count==10) {
        printf("\nExtraordinary performance!!\nYou're a champion :)\n");
    }

    printf("\nThanks for taking the quiz :)");
}