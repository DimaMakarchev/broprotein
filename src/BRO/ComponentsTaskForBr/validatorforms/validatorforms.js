export const validatorValue = (value) => {
    return value ? undefined : 'value no bro'
};

export const validatorLenght = (lenghtMax) => (value) => {
debugger
    return value.length > lenghtMax ? `lenghtMax bro ${lenghtMax}` : undefined;
};


export const validationRepit = (data) => {
    debugger
    return data ? undefined : "BROOOOOOO"
};
