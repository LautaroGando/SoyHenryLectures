export const customEvent = new CustomEvent('customEvent', {
    detail: {
        identifier: "CustomIdentitifier",
        data: {
            message: "Información opcional",
            value: 27,
        },
    },
});

const user = {
    name: "Lautaro Gando",
    age: 26,
    gender: "Male",
    proffesion: "Frontend Developer",
};

window.localStorage.setItem('userInfo', JSON.stringify(user));

function updateQueryStringParameter(key, value) {

    let url = new URL(window.location.href);

    url.searchParams.set(key, value);

    window.history.replaceState({}, '', url);

};

updateQueryStringParameter('param1', 'newValue1');
updateQueryStringParameter('param2', 'newValue2');

export function getParameterByName(name) {

    return (

        new URLSearchParams(window.location.search).get(name)

    )

};

let param1Value = getParameterByName("param1");
let param2Value = getParameterByName("param2");

export const storage = {
    getItem: (item) => {

        JSON.parse(localStorage.getItem(item));

    },
    setItem: (item, value) => {

        JSON.stringify(item, value);

    },
};