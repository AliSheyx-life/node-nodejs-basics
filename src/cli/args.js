const parseArgs = () => {
    const args = process.argv.slice(2);
    const parseArgs = {};

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].slice(2);
        const value = args[i + 1];
        parseArgs[key] = value;
    }

    const result = Object.entries(parseArgs)
        .map(([key, value]) => `${key} is ${value}`)
        .join(", ");

    console.log(result);
};

parseArgs();