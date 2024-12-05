'use strict';
/*
function setCookie(name, value, seconds) {
    const date = new Date();
    date.setSeconds(date.getSeconds() + seconds);
    document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()}`;
}
*/
function setCookie(name, value, expiration) {
    const date = new Date();
    date.setTime(date.getTime() + (expiration * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(c => c.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}

function getBrowser() {
    const userAgent = navigator.userAgent;
    let browser = "Unknown Browser";

    if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (userAgent.indexOf("Safari") !== -1) browser = "Safari";
    else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) browser = "Internet Explorer";
    else if (userAgent.indexOf("Edge") !== -1) browser = "Edge";
    
    return browser;
}

function getOS() {
    const userAgent = navigator.userAgent;
    let os;

    if (userAgent.indexOf("Win") !== -1) os = "Windows";
    else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";
    else if (userAgent.indexOf("Android") !== -1) os = "Android";
    else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";
    else os = "Unknown OS";

    return os;
}

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const acceptAll = document.querySelector('.accept');
const settings = document.querySelector('.settings');
const savePreferences = document.querySelector('.save');

acceptAll.addEventListener("click", () => {
    setCookie("browser", getBrowser(), 15);
    setCookie("os", getOS(), 15);
    setCookie("screen width", screen.width, 15);
    setCookie("screen height", screen.height, 15);
    console.log(document.cookie);
    setCookie("fake cookie", "true", 15);
    modalOne.style.display = 'none';
});

settings.addEventListener("click", () => {
    modalOne.style.display = 'none';
    modalTwo.style.display = 'flex';
});

savePreferences.addEventListener("click", () => {
    if (document.querySelector(".browser-name").checked) {
        setCookie("browser", getBrowser(), 15);
    } else {
        document.cookie = "browser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    if (document.querySelector(".os-name").checked) {
        setCookie("os", getOS(), 15);
    } else {
        document.cookie = "os=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    if (document.querySelector(".screen-width").checked) {
        setCookie("screen width", screen.width, 15);
    } else {
        document.cookie = "screen width=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    if (document.querySelector(".screen-height").checked) {
        setCookie("screen height", screen.height, 15);
    } else {
        document.cookie = "screen height=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    console.log(document.cookie);
    setCookie("fake cookie", "true", 15);

    modalTwo.style.display = 'none';
});

if (!getCookie("fake cookie")) {
    setTimeout(() => {
        modalOne.style.display = 'flex';
    }, 1000);
}
