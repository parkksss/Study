function hashStringToInt(s, tableSize) {
    let hash = 17;      // 임의의 primary 값
    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;      // 임의의 hash 값을 주기위해 charCodeAt() 이용
    }
    return hash;
}


class HashTable {
    table = new Array(3);    // 해시테이블 생성
    numItems = 0;   // 현재 몇개가 table에 있는지 count

    resize = () => {
        // array 크기 2배로
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];            // hash 값이 table의 index가 되고, 그 값으로 value 넣기    
                    }
                });
            }
        });
        this.table = newTable
    };

    setItem = (key, value) => {
        this.numItems++;    // setItem 할때마다 개수 +
        // loadFactor 이 80% 가 되면 resizing 하게
        const loadFactor = this.numItems / this.table.length;
        if (loadFactor > .8) {
            // resize
            this.resize()
        }
        const idx = hashStringToInt(key, this.table.length);   // key를 hash function에 넣어 hash 값 가져오기
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        } else {
            this.table[idx] = [[key, value]];            // hash 값이 table의 index가 되고, 그 값으로 value 넣기    
        }
    };

    getItem = key => {
        const idx = hashStringToInt(key, this.table.length);
        if (!this.table[idx]) {
            return null;
        }
        return this.table[idx].find(x => x[0] === key)[1]; // 해당 index에서 입력한 key 값과 같은 key를 가진 리스트의 value 값 
    };
}

const myTable = new HashTable();

myTable.setItem('firstName', 'yeseul');
myTable.setItem('lastName', 'park');
myTable.setItem('age', 31);
myTable.setItem('dob', '92/01/01');
console.log(myTable.table);
console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('dob'));