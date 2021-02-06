# Instructions

## Download

[cardio-main.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02a27955-3049-4b57-b774-3f607124dca5/cardio-main.zip)

## Setup

Please download the React project above and read the instructions below. No special setup is required - you should be able to run and develop your code locally. Once you download the codebase, you should be able to use `npm install` and `npm start` from the root of the project to get up and running.

## Introduction

Welcome to Card.io, a new finance product that helps consumers keep track of all their different payment cards. Our lead developer strained her fingers in an unexpected guitar accident, and we need your help!

If you choose to help, you will build a new interface for browsing payment cards and viewing the transactions on those cards. Please follow the instructions below to get started! **We recommend you read all the instructions below before you get started.**

## Current state of the app

(**Already completed**) Load and view a list of all available cards

- A list of all payment cards is loaded from the `/api/cards` endpoint.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc7974843-037d-444a-9112-97cc6919dac4%2FMacBook_-_1.jpg?table=block&id=93d74c03-720f-4c91-a5a8-659e77ef0dc9&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=2110&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc7974843-037d-444a-9112-97cc6919dac4%2FMacBook_-_1.jpg?table=block&id=93d74c03-720f-4c91-a5a8-659e77ef0dc9&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=2110&userId=&cache=v2)

## Requirements

Please complete the following steps. Details for each step are included below:

- Load and display card details & card transactions
- Add a search input to filter transactions
- Add a way to disable a card

1. Load and display card details & card transactions

   - When a card from the list is selected, show the card details and card transactions in a panel on the right side of the screen. Please reference the designs below.
   - Use the `/api/cards/:id/card_details` endpoint to load the card details. **We have included api methods you can use in** `src/api/index.js`.
   - Use the `/api/cards/:id/transactions` endpoint to load the card transactions. **We have included api methods you can use in** `src/api/index.js`.
   - To the right of the card list, add a section that shows the card details. Please reference the design below for layout and styling.
   - The `TransactionList` component has already been built. Please use this to show the list of transactions at the bottom of the right section.
   - Add a way to close this section. The designs call for a close button on the top-right.
   - Add a loading state. The project's existing components make use of the `react-loading-skeleton` library to do this.

     ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff504ba47-a234-47ce-b4b0-d1430167f84f%2FMacBook_-_4_(2).png?table=block&id=aeacaa53-6224-4528-9805-627af6fd79e2&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff504ba47-a234-47ce-b4b0-d1430167f84f%2FMacBook_-_4_(2).png?table=block&id=aeacaa53-6224-4528-9805-627af6fd79e2&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2>)

     ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F995b6c08-9a20-4c83-ae19-93b4147b904e%2FMacBook_-_6_(1).png?table=block&id=b63232d3-30fb-4fa3-9de2-118cdcdd3544&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F995b6c08-9a20-4c83-ae19-93b4147b904e%2FMacBook_-_6_(1).png?table=block&id=b63232d3-30fb-4fa3-9de2-118cdcdd3544&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2>)

     ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6a767890-8961-419d-adae-7936d1515efe%2FMacBook_-_7_(1).png?table=block&id=5054b8d8-d905-420a-8deb-8e7ad295d6ad&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6a767890-8961-419d-adae-7936d1515efe%2FMacBook_-_7_(1).png?table=block&id=5054b8d8-d905-420a-8deb-8e7ad295d6ad&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1440&userId=&cache=v2>)

2. Add a search input to filter transactions

   - Transactions should be displayed if the `transaction.label` fully or partially matches the text input
   - Sample: [![Watch the video](https://res.cloudinary.com/dml0ec1xe/video/upload/v1612625058/n5moxkhfeqojybqx5x4a.png)](https://res.cloudinary.com/dml0ec1xe/video/upload/v1612625058/n5moxkhfeqojybqx5x4a.mp4)

3. Add a way to disable a card. We don't have a design for this step yet, so you can decide what the UI will look like.

   - POST to the `/api/cards/:id/disable` endpoint to disable a card. **We have included api methods you can use in** `src/api/index.js`.
   - Refresh the UI to show that the card is disabled once the api call is complete. Please keep it simple here, no need to user redux or any fancy state management.

## API

- Api methods are included for you in `src/api/index.js`
- The backend / api is faked using local data. This shouldn't change how you develop the app. The main difference is that you can monitor api calls in the browser dev tools console, but will not see them in the dev tools "Network" tab.

### **GET /cards/**

Sample response:

```
[
	{
	  "id": 1,
	  "name": "Amazon",
	  "network": "Visa",
	  "last4": "9988",
	  "active": true
	}, {
	  "id": 2,
	  "name": "BBVA",
	  "network": "Mastercard",
	  "last4": "1122",
	  "active": false
	}, {
	  "id": 3,
	  "name": "Starbucks Rewards",
	  "network": "Mastercard",
	  "last4": "8402",
	  "active": true
	}
]
```

### GET /cards/:id/card_details

Sample response:

```
[
	{
    "card_id": 1,
    "number": "201776820879988",
    "cvv": "385",
    "expiration_month": "6",
    "expiration_year": "2025",
    "address_city": "Springfield",
    "address_state": "MA",
    "address_line1": "2 Westerfield Court",
    "address_postal_code": "01129"
  }, {
    "card_id": 2,
    "number": "3589336713391122",
    "cvv": "898",
    "expiration_month": "3",
    "expiration_year": "2026",
    "address_city": "Pomona",
    "address_state": "CA",
    "address_line1": "3 Union Parkway",
    "address_postal_code": "91797"
  }, {
    "card_id": 3,
    "number": "201460253708402",
    "cvv": "849",
    "expiration_month": "12",
    "expiration_year": "2023",
    "address_city": "Charlotte",
    "address_state": "NC",
    "address_line1": "170 Hintze Court",
    "address_postal_code": "28278"
  }
]
```

### GET /cards/:id/transactions

Sample response:

```
[
	{
	  "label": "Yozio",
	  "amount": "$582.48",
	  "id": 1,
	  "card_id": 1,
	  "purchase_date": "2021-02-24T08:25:24Z",
	  "city": "Atlanta",
	  "state": "GA",
	  "status": "PAID"
	}, {
	  "label": "Browsebug",
	  "amount": "$2983.67",
	  "id": 2,
	  "card_id": 1,
	  "purchase_date": "2021-11-28T02:53:21Z",
	  "city": "Aurora",
	  "state": "CO",
	  "status": "PAID"
	}, {
	  "label": "Twitterwire",
	  "amount": "$1471.40",
	  "id": 3,
	  "card_id": 1,
	  "purchase_date": "2021-05-12T12:46:41Z",
	  "city": "Camden",
	  "state": "NJ",
	  "status": "PENDING"
	}
]
```

### POST /cards/:id/disable

Sample response:

```
{
  "id": 1,
  "name": "Amazon",
  "network": "Visa",
  "last4": "9988",
  "active": false
}
```

## Styling

- Refer to `styles.css` for colors and typography. Use any font you wish.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F47b5be4d-c67a-4dfb-8181-965040ffbc7f%2FFrame_3_(1).png?table=block&id=41bf937d-1453-416c-a741-e35e1ad1e227&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1340&userId=&cache=v2](<https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F47b5be4d-c67a-4dfb-8181-965040ffbc7f%2FFrame_3_(1).png?table=block&id=41bf937d-1453-416c-a741-e35e1ad1e227&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1340&userId=&cache=v2>)

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6bbac51-fd17-4540-a009-b858cb35c9db%2FFrame_2.png?table=block&id=c9be5868-7799-4e53-b77f-f84e5d611743&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1240&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6bbac51-fd17-4540-a009-b858cb35c9db%2FFrame_2.png?table=block&id=c9be5868-7799-4e53-b77f-f84e5d611743&spaceId=f4679b94-8351-40af-afdf-206acbf7ab3e&width=1240&userId=&cache=v2)

- Please don't worry about small screens or responsive designs. The design is intended for screens over 1000px wide.

## Guidelines

- You may use internet resources and refer to other code as needed.
- This is a React exercise - please stick with React and use the project scaffold provided. **Please do not add external libraries or any other packages beyond what the project already contains**.
- **Please do not spend longer than 2-3 hours on this exercise**. We do not expect you to have a perfect or fully completed project at the end of the time limit. This exercise is a starting point for a conversation, not a test with specific passing criteria.
- Given the limited time, please do not go down rabbit holes. We want to have enough code written so that we can have a productive conversation about it. Please consider what the key parts of the project are and go "broad" rather than "deep". You can take shortcuts, stub functions, etc. if it helps you cover more ground.
- You do not need to be pixel-perfect with the designs. Adhere to them as much as possible, but not at the expense of moving quickly through the exercise. Please don't worry about getting margins, sizes, and positioning 100% exact. It's OK to eyeball it!
