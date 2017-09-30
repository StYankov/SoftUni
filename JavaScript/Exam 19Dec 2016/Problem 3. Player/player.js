class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(num) {
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            this.scores.push(Number(num));
        }
        return (this);
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        if (this.scores.length == 0) return undefined;
        return Math.max.apply(null, this.scores);
    }

    get topFiveScore() {
        return this.scores.sort((a, b) => b - a).slice(0, 5);
    }

    toString() {
        let sorted = this.scores.sort((a, b) => b - a);
        return `${this.nickName}: [${sorted}]`;
    }
}

let p = new Player('asd');
p.addScore(Infinity);
console.log(p.scores);