

const mixedMessages = () =>{
    let messages = [];

    

    let message1 = "Welcome to my bookshop!";
    let message2 = "Such a lovely day!";
    let message3 = "Have you read the last Obama's book?";
    let message4 = "We got some old books for young people like you!" ;
    let message5= "This is a bookshop, not a library!";

    messages.push(message1, message2, message3, message4, message5);
    let random = Math.floor(Math.random() * messages.length)

    console.log(messages[random]);

}


mixedMessages();
