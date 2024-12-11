(The SQL file is at the root of the project: [here](https://github.com/magicfinger96/online-chat-poc/blob/main/data.sql))

# Instant messaging PoC
![image](https://github.com/user-attachments/assets/b4d7a8bc-8fdb-4e1d-8589-019cf603ed5b)
This PoC is an instant messaging between the support and a customer.

Once the application is running, open two instances of the application. Pick the support for one, and customer for the other. You can start chatting.

# Initialize the project
* Create an account on https://talkjs.com/
* On [TalkJS](https://talkjs.com/), go on the settings and fetch the `Test App ID`
* Inside the codebase, open `talkjs-chat.component.ts` (in `chat-poc\src\app\talkjs-chat` folder)
* Replace `{YOUR_APP_ID}` by the Test App ID you fetched earlier

# Run the project
* Open the `chat-poc` folder
* Run `npm install` to install the dependencies
* Run `ng serve` to run the project
