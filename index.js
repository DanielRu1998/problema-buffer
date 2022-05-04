var fs = require('fs');
var readline = require('readline');
var events = require('events');
var streamOut = fs.createWriteStream("output.txt");

const calcula = async(opc) => {
    try {
        const regex = /^[0-9]+$/;
        const rl = readline.createInterface({
            input: fs.createReadStream('input.txt'),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            let number = line.split(',');
            for (let i = 0; i < number.length; i += 1 ) {
                if (regex.test(number[i])) {
                    if (opc === 0) {
                        if (Number(number[i]) % 2 === 0) {
                            streamOut.write(`${number[i]},`);
                        }
                    } else {
                        if (Number(number[i]) % 2 !== 0) {
                            streamOut.write(`${number[i]},`);
                        }
                    }
                }
            }
            streamOut.write("\n");
        });

        await events.once(rl, 'close');
    } catch (err) {
        console.log(err);
    }
}

const llenaData = async () => {
    streamOut.once('open', async function(fd) {
        await calcula(0);
        await calcula(1);
        streamOut.end();
    });
}

llenaData();

/* const ordenParesImpares = (array) => {
    const arrayPares = [];
    const arrayImpares = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        } else {
            arrayImpares.push(array[i]);
        }
    }
    return  arrayPares.concat(arrayImpares);
}; */