#include<stdio.h>
#include<stdlib.h>
int main(){
    FILE *fptr;
    fptr=fopen("filename.txt","w");
    char oldName[100];
    char newName[100];
    printf("Old file name : ");
    // scanf("%s",&oldName);
    fgets(oldName,sizeof(oldName),stdin);
    printf("%s",oldName);
    printf("New file name : ");
    // scanf("%s",&newName);
    fgets(newName,sizeof(newName),stdin);
    printf("%s",newName);

    // file write operation
    
    fprintf(fptr,"%s",oldName);
    fprintf(fptr,"%s",newName);
    fclose(fptr);
    
    return 0;
}
/*
terminal run command
gcc file.c -o file.exe
./file or file.exe
*/

// run .bat file using double click from file exproler