const apiUrl = "https://7103.api.greenapi.com";

async function getSettings() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;

    const response = await fetch(
        `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`
    );
    const data = await response.json();
    document.getElementById("response").value = JSON.stringify(data,
        null,
        2);
}

async function getStateInstance() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    const response = await fetch(
        `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    const data = await response.json();
    document.getElementById("response").value = JSON.stringify(
        data,
        null,
        2
    );
}

async function sendMessage() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("chatId").value;
    const message =
        document.getElementById("message").value;
    const payload = {
        chatId: chatId,
        message: message,
    };
    const response = await fetch(
        `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    );
    const data = await response.json();
    document.getElementById("response").value = JSON.stringify(
        data,
        null,
        2
    );
}

async function sendFileByUrl() {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance =
        document.getElementById("apiTokenInstance").value;
    const chatId = document.getElementById("chatId").value;
    const urlFile =
        document.getElementById("urlFile").value;
    const fileName = urlFile.split('/').at(-1);
    const payload = {
        chatId: chatId,
        urlFile: urlFile,
        fileName: fileName,
    };
    const response = await fetch(
        `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    );
    const data = await response.json();
    document.getElementById("response").value = JSON.stringify(
        data,
        null,
        2
    );
}