/*
## 1.
Реализовать программу, которая запрашивает у пользователя год (int, например 1997) и определяет високосный это год или нет.

**високосный год**:

* год, номер которого кратен 400, — високосный;
* остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
* остальные годы, номер которых кратен 4, — високосные;
* все остальные годы — невисокосные.

[Viki](https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4)

*Для тех кому сложно все ксловия, реализуйте упрощенный вариант, "виcокосный, любой год, номер которого делится на 4 без остатка". В комментарии укажите, какой вариант решаете


## 2. *По желанию
Пользователь вводит 3 числа int: день (day) месяц (month) и год (year).  Задача вашей пронраммы определить, могут ли эти цифры быть корректной датой.


 */

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Input day: ");
        int day = scanner.nextInt();

        System.out.println("Input month: ");
        int month = scanner.nextInt();

        System.out.println("Input year: ");
        int year = scanner.nextInt();

        // -----------------------------------------------------------------------
        boolean isYearOk = year>0;
        boolean isMonthOk = month>=1 && month<=12;
        boolean isDayOk = day>=1 && day <= getDaysInMonth(month,year);
        boolean dateIsCorrect = isDayOk && isMonthOk && isYearOk;
        String monthStr = getTitleOfMonth(month);




        // ------------------------------------------------------------

        if(dateIsCorrect) {
            System.out.println("The date is:");
        } else {
            System.out.println("The input date is not correct");
        }
        System.out.println(day + " " + monthStr + " " + year);

    }


    public static int getDaysInMonth(int month, int year){

        int daysInMonth=31;
        if (month==4 || month==6 || month==9 || month==11){
            daysInMonth = 30;
        }
        if (month==2){
            boolean isYearLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400==0);
            if (isYearLeap){
                daysInMonth=29;
            } else {
                daysInMonth=28;
            }
        }
        return daysInMonth;

    }



    public static String getTitleOfMonth(int month){
        String monthStr="";
        switch (month){
            case 1: monthStr="январь"; break;
            case 2:monthStr="февраль"; break;
            case 3:monthStr="март"; break;
            case 4:monthStr="апрель"; break;
            case 5:monthStr="май"; break;
            case 6:monthStr="июнь"; break;
            case 7:monthStr="июль";break;
            case 8:monthStr="август"; break;
            case 9:monthStr="сентябрь"; break;
            case 10:monthStr="октябрь"; break;
            case 11:monthStr="ноябрь"; break;
            case 12:monthStr="декабрь"; break;
        }
        return monthStr;
    }


}