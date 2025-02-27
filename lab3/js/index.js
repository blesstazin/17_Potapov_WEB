function startGame() {
    alert("Добро пожаловать в игру 'Побег из лабиринта'!");

    if (!confirm("Вы готовы начать?")) {
        alert("Печально(. Тогда попробуйте позже.");
        return;
    } else {
        alert("Ура-ура, давайте начинать играть!");
    }

    let choice1;
    while (true) {
        choice1 = prompt("Вы входите в лабиринт. Перед вами две дороги: налево (введите '1') и направо (введите '2'). Какую выберете?");
        if (choice1 === '1' || choice1 === '2') {
            break;
        }
        alert("Некорректный ввод! Введите '1' или '2'.");
    }

    if (choice1 === '1') {
        let choice2;
        while (true) {
            choice2 = prompt("Вы пошли налево и увидели две двери: синюю ('1') и красную ('2'). Какую откроете?");
            if (choice2 === '1' || choice2 === '2') {
                break;
            }
            alert("Некорректный ввод! Попробуйте снова.");
        }

        if (choice2 === '1') {
            alert("Вы нашли выход! Поздравляем!");
        } else {
            alert("Это тупик. Вы проиграли(");
        }
    } else {
        let choice2;
        while (true) {
            choice2 = prompt("Вы пошли направо и встретили стражника. Он спрашивает: 'Какой цвет у солнца?' (введите ответ)");
            if (choice2 && choice2.trim() !== "") {
                break;
            }
            alert("Введите хотя бы что-то!");
        }

        if (choice2.toLowerCase() === 'желтый' || choice2.toLowerCase() === 'жёлтый') {
            alert("Стражник вас пропустил! Вы выбрались из лабиринта! Поздравляем!");
        } else {
            alert("Стражник не пропустил вас. Вы проиграли(");
        }
    }
}