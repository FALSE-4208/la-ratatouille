const formId = "1FAIpQLSctyMUyCpAtBTW4NZb7y5ixx37yQNu5xc4Yz9CJ1dOgSsRhaA";
const entry1 = "entry.278004598";
const entry2 = "entry.1969596231";
const entry3 = "entry.1568265700";
const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDB = function (data) {
    const path = getPath(formId);
    const url = getURL(path, data)
    sendRequest('POST', url)
        .then(responseEvent);
}

const getURL = function (path, params) {
    const url = new URL(path);
    for (let key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url;
}

const initRequest = function (verb, url) {
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const sendRequest = async function (verb, url) {
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const responseEvent = response => alert('Success!'); 