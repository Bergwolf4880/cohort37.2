//#### 1.
//        Реализовать метод, который в качестве параметров принимает строку и символ. Метод должен вернуть, сколько раз заданный символ встречается в заданной строке. Например:
//        * Строка "Hello Java" символ 'l' результат 2
//        * Строка "Hello Java" символ 'p' результат 0
//
//
//        #### 2.
//
//          Реализовать метод, который возвращает первое слово в заданной строке (в рамках данной задачи считаем, что слова отделены пробелом и в строке нет знаков препинания).
//        Например: "Олег Иванов", результат: "Олег"
//

public class Repeat {

    public static void repeat(String[] args) {

        String str1 = "Hello Java, I miss you";
        int res = countChars(str1, 'l');
        System.out.println(res);

    }

    public static int countChars(String str, char ch) {
        int sum = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == ch) {
                sum += 1;
            }
        }
        return sum;
    }
}

