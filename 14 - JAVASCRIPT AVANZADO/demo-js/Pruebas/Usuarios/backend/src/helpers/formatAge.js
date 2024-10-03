const formatAge = (age) => {

    const splitAge = age.split("");

    if(splitAge.length === 4) {

        if(splitAge[3] === "a") {

            return `${splitAge[0]}${splitAge[1]}${splitAge[2]} años`;
    
        } else if(splitAge[3] === "m") {
    
            return `${splitAge[0]}${splitAge[1]}${splitAge[2]} meses`;
    
        };

    };

    if(splitAge.length === 3) {

        if(splitAge[2] === "a") {

            return `${splitAge[0]}${splitAge[1]} años`;
    
        } else if(splitAge[2] === "m") {
    
            return `${splitAge[0]}${splitAge[1]} meses`;
    
        };

    };

    if(splitAge[1] === "a") {

        return `${splitAge[0]} años`;

    } else if(splitAge[1] === "m") {

        return `${splitAge[0]} meses`;

    };

};

module.exports = formatAge;